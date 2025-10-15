import { Service, OnInit, Modding } from "@flamework/core"
import { atom, Atom, subscribe } from "@rbxts/charm"
import Maid from "@rbxts/maid"
import { DataStoreService, Players } from "@rbxts/services"
import { $print } from "rbxts-transform-debug"
import { $terrify } from "rbxts-transformer-t-new"
import { Events } from "server/networking"

const DATA_STORE_NAME = "PlayerData"
const DATA_STORE = DataStoreService.GetDataStore(DATA_STORE_NAME)

function getKey(player: Player) {
	return `Player_${player.UserId}`
}

export type AtomsFrom<T> = {
	[K in keyof T]: Atom<T[K]>
}

export interface PlayerState {
	money: number
	rebirth: number
	shelves: string[]
}

// Allows client side to access SyncKeys
export type SyncKeys = "money" | "rebirth"
const SYNC_KEYS = Modding.inspect<SyncKeys[]>()

const DEFAULT_PLAYER_STATE = {
	money: 100,
	rebirth: 0,
	shelves: []
} satisfies PlayerState

const tPlayerState = $terrify<PlayerState>()

@Service({
	loadOrder: 0
})
export class PlayerStateProvider implements OnInit {
	public readonly playerState = new Map<Player, AtomsFrom<PlayerState>>()

	private atomMaids = new Map<Atom<any>, Maid>()

	public get(player: Player): AtomsFrom<PlayerState>
	public get<K extends keyof PlayerState>(player: Player, key: K): AtomsFrom<PlayerState>
	public get<K extends keyof PlayerState>(
		player: Player,
		key?: K
	): AtomsFrom<PlayerState> | AtomsFrom<PlayerState>[K] {
		const playerState = this.playerState.get(player)!
		if (key !== undefined) {
			return playerState[key]
		} else {
			return playerState
		}
	}

	// Fix bullshit unknown spam later
	/**
	 * Used to automatically clean up subscriptions when playerState is destroyed
	 */
	public subscribe<K extends keyof PlayerState>(
		player: Player,
		key: K,
		listener: (state: PlayerState[K], prev: PlayerState[K]) => void
	): void
	public subscribe<T>(atom: Atom<T>, listener: (state: T, prev: T) => void): void
	public subscribe(arg1: unknown, arg2: unknown, arg3?: unknown): void {
		let atom: Atom<unknown>
		let listener: (state: unknown, prev: unknown) => void

		if (arg3) {
			// called as subscribe(player, key, listener)
			const player = arg1 as Player
			const key = arg2 as keyof PlayerState
			listener = arg3 as (state: unknown, prev: unknown) => void
			atom = this.get(player)[key] as Atom<unknown>
		} else {
			// called as subscribe(atom, listener)
			atom = arg1 as Atom<unknown>
			listener = arg2 as (state: unknown, prev: unknown) => void
		}

		let maid = this.atomMaids.get(atom)
		if (!maid) {
			maid = new Maid()
			this.atomMaids.set(atom, maid)
		}

		maid.GiveTask(subscribe(atom, listener))
	}

	private loadData(player: Player): void {
		new Promise<Partial<PlayerState>>((resolve, reject) => {
			let data: unknown
			try {
				;[data] = DATA_STORE.GetAsync(getKey(player))
			} catch (e) {
				reject(e)
				return
			}

			// Accepts missing keys
			if (tPlayerState(data)) {
				$print(`Loaded Data for: ${player.Name}`, data)
				resolve(data)
			} else {
				resolve({})
			}
		})
			.then(data => {
				const atomData = {} as Record<string, Atom<defined>>

				for (const [key, defaultValue] of pairs(DEFAULT_PLAYER_STATE)) {
					const value = (data as Record<string, defined>)[key] ?? defaultValue
					atomData[key] = atom(value)

					// Update client
					if (key in SYNC_KEYS) {
						this.subscribe(atomData[key], (newValue, oldValue) => {
							Events.playerStateChanged.fire(player, key, newValue, oldValue)
						})
					}
				}

				this.playerState.set(player, atomData as unknown as AtomsFrom<PlayerState>)
			})
			.catch(err => {
				player.Kick(`Data failed to load: ${err}`)
				warn(err)
			})
	}

	private saveData(player: Player) {
		const finalData = new Map<string, unknown>()

		for (const [k, v] of pairs(this.playerState.get(player)!)) {
			finalData.set(k, v())
			this.atomMaids.get(v)?.DoCleaning()
			this.atomMaids.delete(v)
		}

		new Promise((resolve, reject) => {
			resolve(DATA_STORE.SetAsync(getKey(player), finalData))
			$print(`Saved Data for: ${player.Name}`, finalData)
		})
			.catch(error)
			.finally(() => {
				this.playerState.delete(player)
			})
	}

	onInit() {
		Players.GetPlayers().forEach(p => this.loadData(p))
		Players.PlayerAdded.Connect(p => this.loadData(p))

		game.BindToClose(() => Players.GetPlayers().forEach(p => this.saveData(p)))
		Players.PlayerRemoving.Connect(p => this.saveData(p))
	}
}
