-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local loadingPlayers = {}
local function waitForChildAsync(instance, childName)
	return TS.Promise.new(function(resolve)
		local child = instance:WaitForChild(childName)
		resolve(child)
	end)
end
local function loadCharacterAsync(player, waitFor)
	return TS.Promise.new(function(resolve)
		-- Prevent double loads
		local _player = player
		if loadingPlayers[_player] ~= nil then
			player.CharacterAdded:Wait()
			resolve(player.Character)
			return nil
		end
		local _player_1 = player
		loadingPlayers[_player_1] = true
		-- Load character manually
		player:LoadCharacter()
		local onCharacter = function(char)
			local _exp = (waitFor or {})
			-- ▼ ReadonlyArray.map ▼
			local _newValue = table.create(#_exp)
			local _callback = function(child)
				return waitForChildAsync(char, child)
			end
			for _k, _v in _exp do
				_newValue[_k] = _callback(_v, _k - 1, _exp)
			end
			-- ▲ ReadonlyArray.map ▲
			local waitPromises = _newValue
			TS.Promise.all(waitPromises):andThen(function()
				local _player_2 = player
				loadingPlayers[_player_2] = nil
				resolve(char)
			end)
		end
		if player.Character then
			onCharacter(player.Character)
		else
			player.CharacterAdded:Once(onCharacter)
		end
	end)
end
return {
	loadCharacterAsync = loadCharacterAsync,
}
