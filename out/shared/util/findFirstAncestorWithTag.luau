-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local CollectionService = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").CollectionService
local function findFirstAncestorWithTag(instance, tag)
	local current = instance
	while current ~= nil and current ~= game do
		if CollectionService:HasTag(current, tag) then
			return current
		end
		current = current.Parent
	end
	return nil
end
return {
	findFirstAncestorWithTag = findFirstAncestorWithTag,
}
