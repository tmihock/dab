-- Compiled with roblox-ts v3.0.0
local function scaleModelToFit(model, targetPart)
	local modelCFrame, modelSize = model:GetBoundingBox()
	local targetSize = targetPart.Size
	local scale = Vector3.new(targetSize.X / modelSize.X, targetSize.Y / modelSize.Y, targetSize.Z / modelSize.Z)
	local baseCFrame = targetPart.CFrame
	-- Loop through all BaseParts in the model
	local _exp = model:GetDescendants()
	-- ▼ ReadonlyArray.forEach ▼
	local _callback = function(descendant)
		if descendant:IsA("BasePart") then
			local relativeCFrame = modelCFrame:ToObjectSpace(descendant.CFrame)
			local newRelativePosition = relativeCFrame.Position * scale
			descendant.Size = descendant.Size * scale
			local _arg0 = CFrame.fromMatrix(newRelativePosition, relativeCFrame.RightVector, relativeCFrame.UpVector, relativeCFrame.LookVector)
			descendant.CFrame = baseCFrame * _arg0
		end
	end
	for _k, _v in _exp do
		_callback(_v, _k - 1, _exp)
	end
	-- ▲ ReadonlyArray.forEach ▲
end
return {
	scaleModelToFit = scaleModelToFit,
}
