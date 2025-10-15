-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Reflect = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Reflect
local Service = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Service
local atom = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "charm").atom
local ServerStateProvider
do
	ServerStateProvider = setmetatable({}, {
		__tostring = function()
			return "ServerStateProvider"
		end,
	})
	ServerStateProvider.__index = ServerStateProvider
	function ServerStateProvider.new(...)
		local self = setmetatable({}, ServerStateProvider)
		return self:constructor(...) or self
	end
	function ServerStateProvider:constructor()
		self.e = atom(2)
	end
	do
		-- (Flamework) ServerStateProvider metadata
		Reflect.defineMetadata(ServerStateProvider, "identifier", "server/services/ServerStateProvider@ServerStateProvider")
	end
end
-- (Flamework) ServerStateProvider decorators
Reflect.decorate(ServerStateProvider, "$:flamework@Service", Service, { {} })
return {
	ServerStateProvider = ServerStateProvider,
}
