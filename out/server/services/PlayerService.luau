-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Reflect = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Reflect
local Service = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Service
local Modding = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Modding
local atom = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "charm").atom
local _services = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services")
local Players = _services.Players
local Workspace = _services.Workspace
local characterFolder = Workspace.Live
-- Fires when new player joins
-- Might delay when server isn't ignited
-- Fires when player leaves or game closes
local PlayerService
do
	PlayerService = setmetatable({}, {
		__tostring = function()
			return "PlayerService"
		end,
	})
	PlayerService.__index = PlayerService
	function PlayerService.new(...)
		local self = setmetatable({}, PlayerService)
		return self:constructor(...) or self
	end
	function PlayerService:constructor()
		self.playerCount = atom(0)
	end
	function PlayerService:onInit()
		self:setupOnAdded()
		self:setupOnRemoving()
		self:setupCharacterFolder()
	end
	function PlayerService:onStart()
		Players.PlayerAdded:Connect(function()
			return self:updatePlayerCount()
		end)
		Players.PlayerRemoving:Connect(function()
			return self:updatePlayerCount()
		end)
	end
	function PlayerService:updatePlayerCount()
		self.playerCount(#Players:GetPlayers())
	end
	function PlayerService:setupCharacterFolder()
		Players.PlayerAdded:Connect(function(player)
			player.CharacterAdded:Connect(function(char)
				task.wait()
				char.Parent = characterFolder
			end)
		end)
	end
	function PlayerService:setupOnAdded()
		local listeners = {}
		Modding.onListenerAdded(function(o)
			local _o = o
			listeners[_o] = true
			return listeners
		end, "server/services/PlayerService@OnPlayerAdded")
		Modding.onListenerRemoved(function(o)
			local _o = o
			-- ▼ Set.delete ▼
			local _valueExisted = listeners[_o] ~= nil
			listeners[_o] = nil
			-- ▲ Set.delete ▲
			return _valueExisted
		end, "server/services/PlayerService@OnPlayerAdded")
		Players.PlayerAdded:Connect(function(player)
			-- ▼ ReadonlySet.forEach ▼
			local _callback = function(l)
				return task.spawn(function()
					return l:onPlayerAdded(player)
				end)
			end
			for _v in listeners do
				_callback(_v, _v, listeners)
			end
			-- ▲ ReadonlySet.forEach ▲
		end)
		for _, player in Players:GetPlayers() do
			-- ▼ ReadonlySet.forEach ▼
			local _callback = function(l)
				return task.spawn(function()
					return l:onPlayerAdded(player)
				end)
			end
			for _v in listeners do
				_callback(_v, _v, listeners)
			end
			-- ▲ ReadonlySet.forEach ▲
		end
	end
	function PlayerService:setupOnRemoving()
		local listeners = {}
		Modding.onListenerAdded(function(o)
			local _o = o
			listeners[_o] = true
			return listeners
		end, "server/services/PlayerService@OnPlayerRemoving")
		Modding.onListenerRemoved(function(o)
			local _o = o
			-- ▼ Set.delete ▼
			local _valueExisted = listeners[_o] ~= nil
			listeners[_o] = nil
			-- ▲ Set.delete ▲
			return _valueExisted
		end, "server/services/PlayerService@OnPlayerRemoving")
		Players.PlayerRemoving:Connect(function(player)
			-- ▼ ReadonlySet.forEach ▼
			local _callback = function(l)
				return task.spawn(function()
					return l:onPlayerRemoving(player)
				end)
			end
			for _v in listeners do
				_callback(_v, _v, listeners)
			end
			-- ▲ ReadonlySet.forEach ▲
			-- Promise.all this
			--.andThen(() => {
			-- promise.all(			// })
			-- same for bindtoclose
		end)
		game:BindToClose(function()
			for _, player in Players:GetPlayers() do
				-- ▼ ReadonlySet.forEach ▼
				local _callback = function(l)
					return task.spawn(function()
						return l:onPlayerRemoving(player)
					end)
				end
				for _v in listeners do
					_callback(_v, _v, listeners)
				end
				-- ▲ ReadonlySet.forEach ▲
			end
		end)
	end
	do
		-- (Flamework) PlayerService metadata
		Reflect.defineMetadata(PlayerService, "identifier", "server/services/PlayerService@PlayerService")
		Reflect.defineMetadata(PlayerService, "flamework:implements", { "$:flamework@OnInit", "$:flamework@OnStart" })
	end
end
-- (Flamework) PlayerService decorators
Reflect.decorate(PlayerService, "$:flamework@Service", Service, { {} })
return {
	PlayerService = PlayerService,
}
