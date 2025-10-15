-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Reflect = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Reflect
local _core = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out")
local Controller = _core.Controller
local Modding = _core.Modding
local atom = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "charm").atom
local Events = TS.import(script, script.Parent.Parent, "networking").Events
local t = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "t", "lib", "ts").t
local SYNC_KEYS = Modding.inspect({ "money", "rebirth" })
local tSyncKey = t.literal("money", "rebirth")
local ClientStateProvider
do
	ClientStateProvider = setmetatable({}, {
		__tostring = function()
			return "ClientStateProvider"
		end,
	})
	ClientStateProvider.__index = ClientStateProvider
	function ClientStateProvider.new(...)
		local self = setmetatable({}, ClientStateProvider)
		return self:constructor(...) or self
	end
	function ClientStateProvider:constructor()
		self.state = {}
		for _, key in SYNC_KEYS do
			self.state[key] = atom()
		end
	end
	function ClientStateProvider:onStart()
		Events.playerStateChanged:connect(function(key, state, prev)
			if not tSyncKey(key) then
				return nil
			end
			self.state[key](state)
		end)
	end
	do
		-- (Flamework) ClientStateProvider metadata
		Reflect.defineMetadata(ClientStateProvider, "identifier", "client/controllers/ClientStateProvider@ClientStateProvider")
		Reflect.defineMetadata(ClientStateProvider, "flamework:implements", { "$:flamework@OnStart" })
	end
end
-- (Flamework) ClientStateProvider decorators
Reflect.decorate(ClientStateProvider, "$:flamework@Controller", Controller, { {} })
return {
	ClientStateProvider = ClientStateProvider,
}
