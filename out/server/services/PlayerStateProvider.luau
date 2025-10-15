-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Reflect = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Reflect
local _core = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out")
local Service = _core.Service
local Modding = _core.Modding
local _charm = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "charm")
local atom = _charm.atom
local subscribe = _charm.subscribe
local Maid = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "maid", "Maid")
local _services = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services")
local DataStoreService = _services.DataStoreService
local Players = _services.Players
local t = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "t", "lib", "ts").t
local Events = TS.import(script, game:GetService("ServerScriptService"), "TS", "networking").Events
local DATA_STORE_NAME = "PlayerData"
local DATA_STORE = DataStoreService:GetDataStore(DATA_STORE_NAME)
local function getKey(player)
	return `Player_{player.UserId}`
end
-- Allows client side to access SyncKeys
local SYNC_KEYS = Modding.inspect({ "money", "rebirth" })
local DEFAULT_PLAYER_STATE = {
	money = 100,
	rebirth = 0,
	shelves = {},
}
local tPlayerState = t.interface({
	money = t.number,
	rebirth = t.number,
	shelves = t.array(t.string),
})
local PlayerStateProvider
do
	PlayerStateProvider = setmetatable({}, {
		__tostring = function()
			return "PlayerStateProvider"
		end,
	})
	PlayerStateProvider.__index = PlayerStateProvider
	function PlayerStateProvider.new(...)
		local self = setmetatable({}, PlayerStateProvider)
		return self:constructor(...) or self
	end
	function PlayerStateProvider:constructor()
		self.playerState = {}
		self.atomMaids = {}
	end
	function PlayerStateProvider:get(player, key)
		local _playerState = self.playerState
		local _player = player
		local playerState = _playerState[_player]
		if key ~= nil then
			return playerState[key]
		else
			return playerState
		end
	end
	function PlayerStateProvider:subscribe(arg1, arg2, arg3)
		local atom
		local listener
		if arg3 ~= 0 and arg3 == arg3 and arg3 ~= "" and arg3 then
			-- called as subscribe(player, key, listener)
			local player = arg1
			local key = arg2
			listener = arg3
			atom = self:get(player)[key]
		else
			-- called as subscribe(atom, listener)
			atom = arg1
			listener = arg2
		end
		local _atomMaids = self.atomMaids
		local _atom = atom
		local maid = _atomMaids[_atom]
		if not maid then
			maid = Maid.new()
			local _atomMaids_1 = self.atomMaids
			local _atom_1 = atom
			local _maid = maid
			_atomMaids_1[_atom_1] = _maid
		end
		maid:GiveTask(subscribe(atom, listener))
	end
	function PlayerStateProvider:loadData(player)
		TS.Promise.new(function(resolve, reject)
			local data
			local _exitType, _returns = TS.try(function()
				data = DATA_STORE:GetAsync(getKey(player))
			end, function(e)
				reject(e)
				return TS.TRY_RETURN, {}
			end)
			if _exitType then
				return unpack(_returns)
			end
			-- Accepts missing keys
			if tPlayerState(data) then
				print("[src/server/services/PlayerStateProvider.ts:107]", `Loaded Data for: {player.Name}`, data)
				resolve(data)
			else
				resolve({})
			end
		end):andThen(function(data)
			local atomData = {}
			for key, defaultValue in pairs(DEFAULT_PLAYER_STATE) do
				local _condition = data[key]
				if _condition == nil then
					_condition = defaultValue
				end
				local value = _condition
				atomData[key] = atom(value)
				-- Update client
				if SYNC_KEYS[key] ~= nil then
					self:subscribe(atomData[key], function(newValue, oldValue)
						Events.playerStateChanged:fire(player, key, newValue, oldValue)
					end)
				end
			end
			local _playerState = self.playerState
			local _player = player
			_playerState[_player] = atomData
		end):catch(function(err)
			player:Kick(`Data failed to load: {err}`)
			warn(err)
		end)
	end
	function PlayerStateProvider:saveData(player)
		local finalData = {}
		local _playerState = self.playerState
		local _player = player
		for k, v in pairs(_playerState[_player]) do
			local _arg1 = v()
			finalData[k] = _arg1
			local _result = self.atomMaids[v]
			if _result ~= nil then
				_result:DoCleaning()
			end
			self.atomMaids[v] = nil
		end
		TS.Promise.new(function(resolve, reject)
			resolve(DATA_STORE:SetAsync(getKey(player), finalData))
			print("[src/server/services/PlayerStateProvider.ts:147]", `Saved Data for: {player.Name}`, finalData)
		end):catch(error):finally(function()
			local _playerState_1 = self.playerState
			local _player_1 = player
			_playerState_1[_player_1] = nil
		end)
	end
	function PlayerStateProvider:onInit()
		local _exp = Players:GetPlayers()
		-- ▼ ReadonlyArray.forEach ▼
		local _callback = function(p)
			return self:loadData(p)
		end
		for _k, _v in _exp do
			_callback(_v, _k - 1, _exp)
		end
		-- ▲ ReadonlyArray.forEach ▲
		Players.PlayerAdded:Connect(function(p)
			return self:loadData(p)
		end)
		game:BindToClose(function()
			local _exp_1 = Players:GetPlayers()
			-- ▼ ReadonlyArray.forEach ▼
			local _callback_1 = function(p)
				return self:saveData(p)
			end
			for _k, _v in _exp_1 do
				_callback_1(_v, _k - 1, _exp_1)
			end
			-- ▲ ReadonlyArray.forEach ▲
			return nil
		end)
		Players.PlayerRemoving:Connect(function(p)
			return self:saveData(p)
		end)
	end
	do
		-- (Flamework) PlayerStateProvider metadata
		Reflect.defineMetadata(PlayerStateProvider, "identifier", "server/services/PlayerStateProvider@PlayerStateProvider")
		Reflect.defineMetadata(PlayerStateProvider, "flamework:implements", { "$:flamework@OnInit" })
	end
end
-- (Flamework) PlayerStateProvider decorators
Reflect.decorate(PlayerStateProvider, "$:flamework@Service", Service, { {
	loadOrder = 0,
} })
return {
	PlayerStateProvider = PlayerStateProvider,
}
