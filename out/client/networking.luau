-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local t = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out", "prelude").t
local _networking = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "networking")
local GlobalEvents = _networking.GlobalEvents
local GlobalFunctions = _networking.GlobalFunctions
local Events = GlobalEvents:createClient({}, {
	incomingIds = { "playerStateChanged" },
	incoming = {
		playerStateChanged = { { t.string, t.union(t.any, t.none), t.union(t.any, t.none) }, nil },
	},
	incomingUnreliable = {},
	outgoingIds = {},
	outgoingUnreliable = {},
	namespaceIds = {},
	namespaces = {},
})
local Functions = GlobalFunctions:createClient({}, {
	incomingIds = {},
	incoming = {},
	outgoingIds = {},
	outgoing = {},
	namespaceIds = {},
	namespaces = {},
})
return {
	Events = Events,
	Functions = Functions,
}
