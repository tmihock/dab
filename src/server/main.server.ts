import { Flamework } from "@flamework/core"
import { $print } from "rbxts-transform-debug"

Flamework.addPaths("src/server/classes")
Flamework.addPaths("src/server/services")
Flamework.addPaths("src/server/components")

Flamework.ignite()
$print("Flamework server ignited!")
