-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _networking = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "networking")
local GlobalEvents = _networking.GlobalEvents
local GlobalFunctions = _networking.GlobalFunctions
local Events = GlobalEvents:createServer({}, {
	incomingIds = {},
	incoming = {},
	incomingUnreliable = {},
	outgoingIds = { "playerStateChanged" },
	outgoingUnreliable = {},
	namespaceIds = {},
	namespaces = {},
})
local Functions = GlobalFunctions:createServer({}, {
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
