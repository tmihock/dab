-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Reflect = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Reflect
local Service = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@flamework", "core", "out").Service
local useAtom = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react-charm").useAtom
local React = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react")
local createRoot = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react-roblox").createRoot
local Leaderstats
local LeaderstatsService
do
	LeaderstatsService = setmetatable({}, {
		__tostring = function()
			return "LeaderstatsService"
		end,
	})
	LeaderstatsService.__index = LeaderstatsService
	function LeaderstatsService.new(...)
		local self = setmetatable({}, LeaderstatsService)
		return self:constructor(...) or self
	end
	function LeaderstatsService:constructor(playerStateProvider)
		self.playerStateProvider = playerStateProvider
	end
	function LeaderstatsService:onPlayerAdded(player)
		local _binding = self.playerStateProvider:get(player)
		local rebirth = _binding.rebirth
		local money = _binding.money
		local root = createRoot(player)
		root:render(React.createElement(Leaderstats, {
			rebirth = rebirth,
			money = money,
		}))
	end
	do
		-- (Flamework) LeaderstatsService metadata
		Reflect.defineMetadata(LeaderstatsService, "identifier", "server/services/LeaderstatsService@LeaderstatsService")
		Reflect.defineMetadata(LeaderstatsService, "flamework:parameters", { "server/services/PlayerStateProvider@PlayerStateProvider" })
		Reflect.defineMetadata(LeaderstatsService, "flamework:implements", { "server/services/PlayerService@OnPlayerAdded" })
	end
end
-- (Flamework) LeaderstatsService decorators
Reflect.decorate(LeaderstatsService, "$:flamework@Service", Service, { {} })
function Leaderstats(props)
	local rebirth = useAtom(props.rebirth)
	local money = useAtom(props.money)
	return React.createElement("folder", {
		key = "leaderstats",
	}, React.createElement("numbervalue", {
		key = "money",
		Value = money,
	}), React.createElement("numbervalue", {
		key = "rebirth",
		Value = rebirth,
	}))
end
return {
	LeaderstatsService = LeaderstatsService,
}
