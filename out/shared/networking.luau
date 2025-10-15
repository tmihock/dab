-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Networking = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "networking", "out").Networking
-- Client -> Server events
-- Server -> Client events
-- Client -> Server -> Client functions
-- Server -> Client -> Server functions
-- Unsafe
local GlobalEvents = Networking.createEvent("shared/networking@GlobalEvents")
local GlobalFunctions = Networking.createFunction("shared/networking@GlobalFunctions")
return {
	GlobalEvents = GlobalEvents,
	GlobalFunctions = GlobalFunctions,
}
