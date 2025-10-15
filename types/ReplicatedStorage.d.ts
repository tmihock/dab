interface ReplicatedStorage extends Instance {
	TS: Folder & {
		config: Folder & {
			EnemyConfig: ModuleScript
			TowerConfig: ModuleScript
			Waves: ModuleScript
		}
		networking: ModuleScript
		["enum"]: ModuleScript
		util: Folder & {
			scaleModelToFit: ModuleScript
			findFirstAncestorWithTag: ModuleScript
			hidePart: ModuleScript
			loadCharacterAsync: ModuleScript
		}
		constants: ModuleScript
	}
	Assets: Folder & {
		Maps: Folder
		Towers: Folder & {
			Archer: Model & {
				Model: Model & {
					["Left Leg"]: Part
					Head: Part & {
						Mesh: SpecialMesh
						face: Decal
					}
					["Right Leg"]: Part
					["Left Arm"]: Part
					["Right Arm"]: Part
					Torso: Part & {
						Snap: Snap
					}
					Bow: Model & {
						E: Part & {
							Decal: Decal
							Mesh: SpecialMesh
						}
						String: Model
						Handle: Part & {
							Mesh: SpecialMesh
							Decal: Decal
						}
					}
					Model: Model
				}
				hitbox: Part
			}
			Cannon: Model & {
				Model: Model
				hitbox: Part
			}
			Sharpshooter: Model & {
				Model: Model & {
					SniperRifle: MeshPart
					["Right Leg"]: MeshPart
					Head: Part & {
						Mesh: SpecialMesh
						face: Decal
					}
					Torso: MeshPart & {
						["Left Shoulder"]: Motor6D
						["Right Shoulder"]: Motor6D
						Neck: Motor6D
						["Right Hip"]: Motor6D
						["Left Hip"]: Motor6D
					}
					HumanoidRootPart: Part & {
						RootJoint: Motor6D
					}
					["Right Arm"]: MeshPart & {
						SniperRifle: Motor6D
					}
					["Left Arm"]: MeshPart
					Sleeve2: MeshPart & {
						WeldConstraint: WeldConstraint
					}
					Sleeve1: MeshPart & {
						WeldConstraint: WeldConstraint
					}
					["Left Leg"]: MeshPart
				}
				hitbox: Part
			}
			None: Model & {
				hitbox: Part
			}
			Barbarian: Model & {
				Part: Part & {
					["Epic Face"]: Decal
				}
				hitbox: Part
			}
		}
		Enemies: Folder & {
			Armored_Skeleton: Model & {
				Part: Part & {
					["Korblox Body"]: Decal
				}
				hitbox: Part
			}
			Skeleton: Model & {
				Part: Part & {
					["Skeleton Meme"]: Decal
				}
				hitbox: Part
			}
			Goblin: Model & {
				Part: Part & {
					broly: Decal
				}
				hitbox: Part
			}
		}
	}
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript
		Promise: ModuleScript
		node_modules: Folder & {
			["@flamework"]: Folder & {
				core: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript
								}
							}
						}
					}
					out: ModuleScript & {
						utility: ModuleScript
						flamework: ModuleScript
						prelude: ModuleScript
						reflect: ModuleScript
						modding: ModuleScript
						metadata: ModuleScript
					}
				}
				components: Folder & {
					out: ModuleScript & {
						components: ModuleScript
						baseComponent: ModuleScript
						componentTracker: ModuleScript
						utility: ModuleScript
					}
				}
				networking: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript
								}
							}
						}
					}
					out: ModuleScript & {
						["function"]: Folder & {
							createFunctionSender: ModuleScript
							createFunctionReceiver: ModuleScript
							errors: ModuleScript
						}
						events: Folder & {
							createServerMethod: ModuleScript
							createNetworkingEvent: ModuleScript
							createGenericHandler: ModuleScript
							createClientMethod: ModuleScript
						}
						functions: Folder & {
							createServerMethod: ModuleScript
							createNetworkingFunction: ModuleScript
							createGenericHandler: ModuleScript
							createClientMethod: ModuleScript
						}
						util: Folder & {
							createSignalContainer: ModuleScript
							getNamespaceConfig: ModuleScript
							timeoutPromise: ModuleScript
						}
						event: Folder & {
							createEvent: ModuleScript
							createRemoteInstance: ModuleScript
						}
						middleware: Folder & {
							createMiddlewareProcessor: ModuleScript
							createGuardMiddleware: ModuleScript
							skip: ModuleScript
						}
					}
				}
			}
			["@rbxts"]: Folder & {
				remo: Folder & {
					src: ModuleScript & {
						getSender: ModuleScript
						Promise: ModuleScript
						builder: ModuleScript
						constants: ModuleScript
						utils: Folder & {
							compose: ModuleScript
							testRemote: ModuleScript
							mockRemotes: ModuleScript
							unwrap: ModuleScript
							instances: ModuleScript
						}
						types: ModuleScript
						server: ModuleScript & {
							createRemote: ModuleScript
							createAsyncRemote: ModuleScript
						}
						container: Configuration
						client: ModuleScript & {
							createRemote: ModuleScript
							createAsyncRemote: ModuleScript
						}
						middleware: Folder & {
							loggerMiddleware: ModuleScript
							throttleMiddleware: ModuleScript
						}
						createRemotes: ModuleScript
					}
				}
				spring: ModuleScript
				["react-roblox"]: ModuleScript
				["shared-components-flamework"]: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript
								}
							}
						}
					}
					LICENSE: StringValue
					out: ModuleScript & {
						utilities: ModuleScript
						remotes: ModuleScript
						source: Folder & {
							patch: ModuleScript
							["shared-component-handler"]: ModuleScript
							decorators: Folder & {
								action: ModuleScript
								["mark-shared-component"]: ModuleScript
								subscribe: ModuleScript
							}
							pointer: ModuleScript
							["shared-component"]: ModuleScript
							network: ModuleScript & {
								action: ModuleScript
								event: ModuleScript
							}
						}
						types: ModuleScript
					}
				}
				["object-utils"]: ModuleScript
				ripple: Folder & {
					src: ModuleScript & {
						config: ModuleScript
						solvers: Folder & {
							tween: ModuleScript
							spring: ModuleScript
							linear: ModuleScript
							immediate: ModuleScript
						}
						utils: Folder & {
							assign: ModuleScript
							spy: ModuleScript
							snapshot: ModuleScript
							intermediate: ModuleScript
							merge: ModuleScript
						}
						createMotion: ModuleScript
						types: ModuleScript
					}
				}
				["lemon-signal"]: Folder & {
					src: ModuleScript
				}
				types: Folder & {
					include: Folder & {
						generated: Folder
					}
				}
				["pretty-react-hooks"]: Folder & {
					out: ModuleScript & {
						["use-latest"]: ModuleScript & {
							["use-latest"]: ModuleScript
							["use-latest.spec"]: ModuleScript
						}
						utils: Folder & {
							binding: ModuleScript
							hoarcekat: ModuleScript
							["shallow-equal"]: ModuleScript
							math: ModuleScript
							testez: ModuleScript
						}
						["use-binding-state"]: ModuleScript & {
							["use-binding-state.spec"]: ModuleScript
							["use-binding-state"]: ModuleScript
						}
						["use-unmount-effect"]: ModuleScript & {
							["use-unmount-effect.spec"]: ModuleScript
							["use-unmount-effect"]: ModuleScript
						}
						["use-update-effect"]: ModuleScript & {
							["use-update-effect.spec"]: ModuleScript
							["use-update-effect"]: ModuleScript
						}
						["use-previous"]: ModuleScript & {
							["use-previous"]: ModuleScript
							["use-previous.spec"]: ModuleScript
						}
						["use-interval"]: ModuleScript & {
							["use-interval.spec"]: ModuleScript
							["use-interval"]: ModuleScript
						}
						["use-debounce-callback"]: ModuleScript & {
							["use-debounce-callback"]: ModuleScript
							["use-debounce-callback.spec"]: ModuleScript
						}
						["use-spring"]: ModuleScript & {
							["use-spring"]: ModuleScript
							["use-spring.spec"]: ModuleScript
						}
						["use-motion"]: ModuleScript & {
							["use-motion"]: ModuleScript
							["use-motion.spec"]: ModuleScript
						}
						["use-defer-state"]: ModuleScript & {
							["use-defer-state"]: ModuleScript
							["use-defer-state.spec"]: ModuleScript
						}
						["use-tagged"]: ModuleScript & {
							["use-tagged.spec"]: ModuleScript
							["use-tagged"]: ModuleScript
						}
						["use-key-press"]: ModuleScript & {
							["use-key-press"]: ModuleScript
							["use-key-press.spec"]: ModuleScript
						}
						["use-timeout"]: ModuleScript & {
							["use-timeout"]: ModuleScript
							["use-timeout.spec"]: ModuleScript
						}
						["use-composed-ref"]: ModuleScript & {
							["use-composed-ref.spec"]: ModuleScript
							["use-composed-ref"]: ModuleScript
						}
						["use-async-callback"]: ModuleScript & {
							["use-async-callback"]: ModuleScript
							["use-async-callback.spec"]: ModuleScript
						}
						["use-throttle-state"]: ModuleScript & {
							["use-throttle-state.spec"]: ModuleScript
							["use-throttle-state"]: ModuleScript
						}
						["use-defer-callback"]: ModuleScript & {
							["use-defer-callback.spec"]: ModuleScript
							["use-defer-callback"]: ModuleScript
						}
						["use-latest-callback"]: ModuleScript & {
							["use-latest-callback.spec"]: ModuleScript
							["use-latest-callback"]: ModuleScript
						}
						["use-event-listener"]: ModuleScript & {
							["use-event-listener"]: ModuleScript
							["use-event-listener.spec"]: ModuleScript
						}
						["use-throttle-callback"]: ModuleScript & {
							["use-throttle-callback.spec"]: ModuleScript
							["use-throttle-callback"]: ModuleScript
						}
						["use-update"]: ModuleScript & {
							["use-update.spec"]: ModuleScript
							["use-update"]: ModuleScript
						}
						["use-async-effect"]: ModuleScript & {
							["use-async-effect"]: ModuleScript
							["use-async-effect.spec"]: ModuleScript
						}
						["use-viewport"]: ModuleScript & {
							["use-viewport"]: ModuleScript
							["use-viewport.spec"]: ModuleScript
						}
						["use-binding-listener"]: ModuleScript & {
							["use-binding-listener"]: ModuleScript
							["use-binding-listener.spec"]: ModuleScript
						}
						["use-async"]: ModuleScript & {
							["use-async.spec"]: ModuleScript
							["use-async"]: ModuleScript
						}
						["init.spec"]: ModuleScript
						["use-debounce-effect"]: ModuleScript & {
							["use-debounce-effect"]: ModuleScript
							["use-debounce-effect.spec"]: ModuleScript
						}
						["use-timer"]: ModuleScript & {
							["use-timer"]: ModuleScript
							["use-timer.spec"]: ModuleScript
						}
						["use-defer-effect"]: ModuleScript & {
							["use-defer-effect.spec"]: ModuleScript
							["use-defer-effect"]: ModuleScript
						}
						["use-debounce-state"]: ModuleScript & {
							["use-debounce-state"]: ModuleScript
							["use-debounce-state.spec"]: ModuleScript
						}
						["use-throttle-effect"]: ModuleScript & {
							["use-throttle-effect.spec"]: ModuleScript
							["use-throttle-effect"]: ModuleScript
						}
						["use-lifetime"]: ModuleScript & {
							["use-lifetime"]: ModuleScript
							["use-lifetime.spec"]: ModuleScript
						}
						["use-camera"]: ModuleScript & {
							["use-camera.spec"]: ModuleScript
							["use-camera"]: ModuleScript
						}
						["use-mount-effect"]: ModuleScript & {
							["use-mount-effect"]: ModuleScript
							["use-mount-effect.spec"]: ModuleScript
						}
						["use-mouse"]: ModuleScript & {
							["use-mouse.spec"]: ModuleScript
							["use-mouse"]: ModuleScript
						}
					}
				}
				charm: ModuleScript & {
					wally: ModuleScript
					src: ModuleScript & {
						mapped: ModuleScript
						computed: ModuleScript
						atom: ModuleScript
						effect: ModuleScript
						observe: ModuleScript
						subscribe: ModuleScript
						store: ModuleScript
						types: ModuleScript
					}
				}
				["topbar-plus"]: Folder & {
					out: ModuleScript & {
						icon: ModuleScript & {
							VERSION: ModuleScript
							Utility: ModuleScript
							Elements: Folder & {
								Notice: ModuleScript
								Dropdown: ModuleScript
								Menu: ModuleScript
								Selection: ModuleScript
								Caption: ModuleScript
								Indicator: ModuleScript
								Widget: ModuleScript
								Container: ModuleScript
							}
							Features: Folder & {
								Gamepad: ModuleScript
								Themes: ModuleScript & {
									Classic: ModuleScript
									Default: ModuleScript
								}
								Overflow: ModuleScript
							}
							Packages: Folder & {
								Janitor: ModuleScript
								GoodSignal: ModuleScript
							}
							Reference: ModuleScript
							Attribute: ModuleScript
							Types: ModuleScript
						}
					}
				}
				beacon: Folder & {
					out: ModuleScript
				}
				["set-timeout"]: Folder & {
					out: ModuleScript & {
						["set-countdown"]: ModuleScript
						["set-interval"]: ModuleScript
						["debounce.spec"]: ModuleScript
						["set-timeout"]: ModuleScript
						throttle: ModuleScript
						["set-timeout.spec"]: ModuleScript
						["throttle.spec"]: ModuleScript
						["set-interval.spec"]: ModuleScript
						["set-countdown.spec"]: ModuleScript
						debounce: ModuleScript
					}
				}
				maid: Folder & {
					Maid: ModuleScript
				}
				t: Folder & {
					lib: Folder & {
						ts: ModuleScript
					}
				}
				signal: ModuleScript
				["react-spring"]: Folder & {
					[".vscode"]: Folder & {
						extensions: ModuleScript
						settings: ModuleScript
					}
					src: ModuleScript & {
						Promise: ModuleScript
						Animation: ModuleScript
						Controller: ModuleScript
						SpringValue: ModuleScript
						Packages: ModuleScript
						constants: ModuleScript & {
							createBezier: ModuleScript
							EasingFunctions: ModuleScript
						}
						AnimationConfig: ModuleScript
						utility: Folder & {
							getTypeFromValues: ModuleScript
							Oklab: ModuleScript
							getValuesFromType: ModuleScript
						}
						helpers: ModuleScript
						types: Folder
						React: ModuleScript
						hooks: Folder & {
							useSpring: ModuleScript
							useTrail: ModuleScript
							useSprings: ModuleScript
						}
						util: ModuleScript & {
							map: ModuleScript
							merge: ModuleScript
						}
						Signal: ModuleScript
					}
					out: ModuleScript & {
						Promise: ModuleScript
						Animation: ModuleScript
						Controller: ModuleScript
						SpringValue: ModuleScript
						Packages: ModuleScript
						constants: ModuleScript & {
							createBezier: ModuleScript
							EasingFunctions: ModuleScript
						}
						AnimationConfig: ModuleScript
						utility: Folder & {
							getTypeFromValues: ModuleScript
							Oklab: ModuleScript
							getValuesFromType: ModuleScript
						}
						helpers: ModuleScript
						types: Folder
						React: ModuleScript
						hooks: Folder & {
							useSpring: ModuleScript
							useTrail: ModuleScript
							useSprings: ModuleScript
						}
						util: ModuleScript & {
							map: ModuleScript
							merge: ModuleScript
						}
						Signal: ModuleScript
					}
				}
				services: ModuleScript
				["react-charm"]: ModuleScript & {
					wally: ModuleScript
					src: ModuleScript
				}
				react: ModuleScript & {
					tags: ModuleScript
				}
				["charm-sync"]: ModuleScript & {
					wally: ModuleScript
					src: ModuleScript & {
						flatten: ModuleScript
						patch: ModuleScript
						types: ModuleScript
						interval: ModuleScript
						client: ModuleScript
						validate: ModuleScript
						server: ModuleScript
					}
				}
				["compiler-types"]: Folder & {
					types: Folder
				}
				ReactLua: Folder & {
					node_modules: Folder & {
						["@jsdotlua"]: Folder & {
							number: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									MAX_SAFE_INTEGER: ModuleScript
									isSafeInteger: ModuleScript
									toExponential: ModuleScript
									isNaN: ModuleScript
									isInteger: ModuleScript
									isFinite: ModuleScript
									MIN_SAFE_INTEGER: ModuleScript
								}
							}
							console: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									makeConsoleImpl: ModuleScript
								}
							}
							["react-roblox"]: ModuleScript & {
								client: Folder & {
									roblox: Folder & {
										RobloxComponentProps: ModuleScript
										SingleEventManager: ModuleScript
										getDefaultInstanceProperty: ModuleScript
									}
									ReactRobloxHostConfig: ModuleScript
									ReactRobloxRoot: ModuleScript
									ReactRoblox: ModuleScript
									ReactRobloxComponentTree: ModuleScript
									["ReactRobloxHostTypes.roblox"]: ModuleScript
									ReactRobloxComponent: ModuleScript
								}
								["ReactReconciler.roblox"]: ModuleScript
							}
							["react-devtools-shared"]: ModuleScript & {
								["jest.config"]: ModuleScript
								hook: ModuleScript
								bridge: ModuleScript
								constants: ModuleScript
								utils: ModuleScript
								devtools: ModuleScript & {
									views: Folder & {
										Components: Folder & {
											types: ModuleScript
										}
										Profiler: Folder & {
											InteractionsChartBuilder: ModuleScript
											utils: ModuleScript
											CommitTreeBuilder: ModuleScript
											RankedChartBuilder: ModuleScript
											FlamegraphChartBuilder: ModuleScript
											types: ModuleScript
										}
									}
									utils: ModuleScript
									cache: ModuleScript
									types: ModuleScript
									ProfilingCache: ModuleScript
									store: ModuleScript
									ProfilerStore: ModuleScript
								}
								events: ModuleScript
								hydration: ModuleScript
								["clipboardjs.mock"]: ModuleScript
								storage: ModuleScript
								backend: ModuleScript & {
									console: ModuleScript
									utils: ModuleScript
									ReactSymbols: ModuleScript
									renderer: ModuleScript
									agent: ModuleScript
									NativeStyleEditor: Folder & {
										types: ModuleScript
									}
									types: ModuleScript
								}
								types: ModuleScript
							}
							["instance-of"]: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									["instanceof"]: ModuleScript
								}
							}
							["react-cache"]: ModuleScript & {
								ReactCacheOld: ModuleScript
								LRU: ModuleScript
							}
							["luau-polyfill"]: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									Promise: ModuleScript
									["extends"]: ModuleScript
									AssertionError: ModuleScript & {
										["AssertionError.global"]: ModuleScript
									}
									Error: ModuleScript & {
										["Error.global"]: ModuleScript
									}
									encodeURIComponent: ModuleScript
								}
							}
							math: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									clz32: ModuleScript
								}
							}
							timers: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									makeIntervalImpl: ModuleScript
									makeTimerImpl: ModuleScript
								}
							}
							["react-test-renderer"]: ModuleScript & {
								ReactTestRenderer: ModuleScript
								roblox: Folder & {
									RobloxComponentProps: ModuleScript
								}
								ReactTestHostConfig: ModuleScript
							}
							promise: Folder & {
								lib: ModuleScript
								["package"]: ModuleScript
							}
							string: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									endsWith: ModuleScript
									indexOf: ModuleScript
									lastIndexOf: ModuleScript
									trimStart: ModuleScript
									trim: ModuleScript
									findOr: ModuleScript
									substr: ModuleScript
									slice: ModuleScript
									startsWith: ModuleScript
									charCodeAt: ModuleScript
									trimEnd: ModuleScript
									includes: ModuleScript
									split: ModuleScript
								}
							}
							shared: ModuleScript & {
								["UninitializedState.roblox"]: ModuleScript
								console: ModuleScript
								ReactComponentStackFrame: ModuleScript
								invariant: ModuleScript
								ReactTypes: ModuleScript
								objectIs: ModuleScript
								ReactInstanceMap: ModuleScript
								["Type.roblox"]: ModuleScript
								["ConsolePatchingDev.roblox"]: ModuleScript
								["ErrorHandling.roblox"]: ModuleScript
								shallowEqual: ModuleScript
								ReactElementType: ModuleScript
								isValidElementType: ModuleScript
								invokeGuardedCallbackImpl: ModuleScript
								getComponentName: ModuleScript
								formatProdErrorMessage: ModuleScript
								ReactFeatureFlags: ModuleScript
								PropMarkers: Folder & {
									Change: ModuleScript
									Event: ModuleScript
									Tag: ModuleScript
								}
								consoleWithStackDev: ModuleScript
								ReactErrorUtils: ModuleScript
								["enqueueTask.roblox"]: ModuleScript
								checkPropTypes: ModuleScript
								ReactSharedInternals: ModuleScript & {
									ReactDebugCurrentFrame: ModuleScript
									ReactCurrentOwner: ModuleScript
									ReactCurrentDispatcher: ModuleScript
									IsSomeRendererActing: ModuleScript
									ReactCurrentBatchConfig: ModuleScript
								}
								ReactVersion: ModuleScript
								ReactSymbols: ModuleScript
								["flowtypes.roblox"]: ModuleScript
								["Symbol.roblox"]: ModuleScript
								ExecutionEnvironment: ModuleScript
								ReactFiberHostConfig: ModuleScript & {
									WithNoTestSelectors: ModuleScript
									WithNoHydration: ModuleScript
									WithNoPersistence: ModuleScript
								}
							}
							scheduler: ModuleScript & {
								SchedulerPriorities: ModuleScript
								TracingSubscriptions: ModuleScript
								SchedulerMinHeap: ModuleScript
								Scheduler: ModuleScript
								Tracing: ModuleScript
								forks: Folder & {
									["SchedulerHostConfig.mock"]: ModuleScript
									["SchedulerHostConfig.default"]: ModuleScript
								}
								unstable_mock: ModuleScript
								SchedulerProfiling: ModuleScript
								SchedulerHostConfig: ModuleScript
								SchedulerFeatureFlags: ModuleScript
							}
							["roact-compat"]: ModuleScript & {
								warnOnce: ModuleScript
								Portal: ModuleScript
								setGlobalConfig: ModuleScript
								oneChild: ModuleScript
								createFragment: ModuleScript
								RoactTree: ModuleScript
							}
							["react-shallow-renderer"]: ModuleScript
							collections: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									Map: ModuleScript & {
										Map: ModuleScript
										coerceToTable: ModuleScript
										coerceToMap: ModuleScript
									}
									Object: ModuleScript & {
										values: ModuleScript
										assign: ModuleScript
										is: ModuleScript
										seal: ModuleScript
										entries: ModuleScript
										preventExtensions: ModuleScript
										isFrozen: ModuleScript
										keys: ModuleScript
										freeze: ModuleScript
										None: ModuleScript
									}
									Set: ModuleScript
									Array: ModuleScript & {
										flat: ModuleScript
										indexOf: ModuleScript
										every: ModuleScript
										slice: ModuleScript
										sort: ModuleScript
										shift: ModuleScript
										map: ModuleScript
										isArray: ModuleScript
										findIndex: ModuleScript
										unshift: ModuleScript
										splice: ModuleScript
										filter: ModuleScript
										find: ModuleScript
										forEach: ModuleScript
										reverse: ModuleScript
										includes: ModuleScript
										concat: ModuleScript
										from: ModuleScript & {
											fromString: ModuleScript
											fromArray: ModuleScript
											fromSet: ModuleScript
											fromMap: ModuleScript
										}
										join: ModuleScript
										flatMap: ModuleScript
										reduce: ModuleScript
										some: ModuleScript
									}
									inspect: ModuleScript
									WeakMap: ModuleScript
								}
							}
							["react-devtools-extensions"]: ModuleScript & {
								backend: ModuleScript
							}
							["react-reconciler"]: ModuleScript & {
								ReactRootTags: ModuleScript
								["ReactFiberDevToolsHook.new"]: ModuleScript
								["ReactFiberWorkLoop.new"]: ModuleScript
								ReactTestSelectors: ModuleScript
								["ReactFiberHotReloading.new"]: ModuleScript
								ReactCapturedValue: ModuleScript
								["ReactFiberUnwindWork.new"]: ModuleScript
								["ReactFiberNewContext.new"]: ModuleScript
								["ReactProfilerTimer.new"]: ModuleScript
								ReactInternalTypes: ModuleScript
								["ReactFiber.new"]: ModuleScript
								["ReactFiberCommitWork.new"]: ModuleScript
								ReactFiberTransition: ModuleScript
								forks: Folder & {
									["ReactFiberHostConfig.test"]: ModuleScript
								}
								SchedulingProfiler: ModuleScript
								["ReactStrictModeWarnings.new"]: ModuleScript
								ReactPortal: ModuleScript
								["SchedulerWithReactIntegration.new"]: ModuleScript
								RobloxReactProfiling: ModuleScript
								ReactWorkTags: ModuleScript
								ReactFiberHostConfig: ModuleScript
								ReactTypeOfMode: ModuleScript
								ReactFiberOffscreenComponent: ModuleScript
								["ReactUpdateQueue.new"]: ModuleScript
								ReactFiberLane: ModuleScript
								["ReactFiberClassComponent.new"]: ModuleScript
								ReactHookEffectTags: ModuleScript
								ReactFiberWorkInProgress: ModuleScript
								ReactFiberTreeReflection: ModuleScript
								["ReactChildFiber.new"]: ModuleScript
								MaxInts: ModuleScript
								["ReactFiberLazyComponent.new"]: ModuleScript
								ReactFiberErrorDialog: ModuleScript
								["ReactFiberBeginWork.new"]: ModuleScript
								ReactFiberFlags: ModuleScript
								DebugTracing: ModuleScript
								ReactFiberErrorLogger: ModuleScript
								["ReactFiberHooks.new"]: ModuleScript
								["ReactFiberSchedulerPriorities.roblox"]: ModuleScript
								["ReactFiberHydrationContext.new"]: ModuleScript
								ReactFiberReconciler: ModuleScript
								["ReactFiberContext.new"]: ModuleScript
								["ReactFiberSuspenseContext.new"]: ModuleScript
								["ReactFiberStack.new"]: ModuleScript
								["ReactFiberHostContext.new"]: ModuleScript
								["ReactMutableSource.new"]: ModuleScript
								ReactCurrentFiber: ModuleScript
								ReactFiberComponentStack: ModuleScript
								["ReactFiberSuspenseComponent.new"]: ModuleScript
								["ReactFiberCompleteWork.new"]: ModuleScript
								["ReactFiberReconciler.new"]: ModuleScript
								["ReactFiberRoot.new"]: ModuleScript
								["ReactFiberThrow.new"]: ModuleScript
							}
							["react-is"]: ModuleScript
							react: ModuleScript & {
								["None.roblox"]: ModuleScript
								ReactLazy: ModuleScript
								ReactElementValidator: ModuleScript
								["createSignal.roblox"]: ModuleScript
								ReactElement: ModuleScript
								ReactMutableSource: ModuleScript
								ReactContext: ModuleScript
								ReactBaseClasses: ModuleScript
								ReactNoopUpdateQueue: ModuleScript
								ReactMemo: ModuleScript
								ReactCreateRef: ModuleScript
								ReactForwardRef: ModuleScript
								React: ModuleScript
								["ReactBinding.roblox"]: ModuleScript
								ReactHooks: ModuleScript
								ReactChildren: ModuleScript
							}
							["es7-types"]: Folder & {
								["package"]: ModuleScript
								src: ModuleScript
							}
							boolean: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									toJSBoolean: ModuleScript
								}
							}
							ReactDebugTools: ModuleScript & {
								ReactDebugTools: ModuleScript
								ReactDebugHooks: ModuleScript
							}
						}
						commander: Folder & {
							["package-support"]: ModuleScript
							["package"]: ModuleScript
							lib: Folder
							typings: Folder
						}
						[".luau-aliases"]: Folder & {
							["@jsdotlua"]: Folder & {
								number: ModuleScript
								console: ModuleScript
								["react-roblox"]: ModuleScript
								["react-is"]: ModuleScript
								["instance-of"]: ModuleScript
								["react-cache"]: ModuleScript
								["es7-types"]: ModuleScript
								math: ModuleScript
								["react-debug-tools"]: ModuleScript
								["react-test-renderer"]: ModuleScript
								promise: ModuleScript
								timers: ModuleScript
								string: ModuleScript
								shared: ModuleScript
								scheduler: ModuleScript
								["roact-compat"]: ModuleScript
								["react-reconciler"]: ModuleScript
								["react-devtools-extensions"]: ModuleScript
								["react-shallow-renderer"]: ModuleScript
								collections: ModuleScript
								react: ModuleScript
								["react-devtools-shared"]: ModuleScript
								boolean: ModuleScript
								["luau-polyfill"]: ModuleScript
							}
							["symbol-luau"]: ModuleScript
						}
						["symbol-luau"]: Folder & {
							["package"]: ModuleScript
							src: ModuleScript & {
								["Registry.global"]: ModuleScript
								Symbol: ModuleScript
							}
							LICENSE: StringValue
						}
						npmluau: Folder & {
							["package"]: ModuleScript
							src: Folder
							["luau-types-re-export"]: Folder & {
								pkg: Folder & {
									["package"]: ModuleScript
								}
							}
							LICENSE: StringValue
						}
						walkdir: Folder & {
							["package"]: ModuleScript
							test: Folder & {
								dir: Folder & {
									["nested-symlink"]: Folder
									symlinks: Folder & {
										dir1: Folder
										dir2: Folder
									}
									foo: Folder & {
										a: Folder & {
											b: Folder & {
												c: Folder
											}
										}
									}
								}
								comparison: Folder & {
									["package"]: ModuleScript
								}
							}
						}
						[".bin"]: Folder
					}
					ReactShallowRenderer: ModuleScript
					ReactRoblox: ModuleScript
					ReactDevtoolsShared: ModuleScript
					ReactIs: ModuleScript
					Shared: ModuleScript
					ReactReconciler: ModuleScript
					RoactCompat: ModuleScript
					Scheduler: ModuleScript
					ReactTestRenderer: ModuleScript
					React: ModuleScript
					ReactDevtoolsExtensions: ModuleScript
					ReactDebugTools: ModuleScript
					ReactCache: ModuleScript
				}
			}
		}
	}
}
