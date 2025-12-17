module.exports = [
"[project]/Desktop/medical/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/Desktop/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isStaticGeneration) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
__turbopack_context__.s([
    "AppRenderSpan",
    ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan",
    ()=>AppRouteRouteHandlersSpan,
    "BaseServerSpan",
    ()=>BaseServerSpan,
    "LoadComponentsSpan",
    ()=>LoadComponentsSpan,
    "LogSpanAllowList",
    ()=>LogSpanAllowList,
    "MiddlewareSpan",
    ()=>MiddlewareSpan,
    "NextNodeServerSpan",
    ()=>NextNodeServerSpan,
    "NextServerSpan",
    ()=>NextServerSpan,
    "NextVanillaSpanAllowlist",
    ()=>NextVanillaSpanAllowlist,
    "NodeSpan",
    ()=>NodeSpan,
    "RenderSpan",
    ()=>RenderSpan,
    "ResolveMetadataSpan",
    ()=>ResolveMetadataSpan,
    "RouterSpan",
    ()=>RouterSpan,
    "StartServerSpan",
    ()=>StartServerSpan
]);
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getRequestHandlerWithMetadata"] = "NextServer.getRequestHandlerWithMetadata";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = new Set([
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
]);
const LogSpanAllowList = new Set([
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]);
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_context__.s([
    "isThenable",
    ()=>isThenable
]);
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/medical/node_modules/next/dist/compiled/@opentelemetry/api") + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}),
"[project]/Desktop/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BubbledError",
    ()=>BubbledError,
    "SpanKind",
    ()=>SpanKind,
    "SpanStatusCode",
    ()=>SpanStatusCode,
    "getTracer",
    ()=>getTracer,
    "isBubbledError",
    ()=>isBubbledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-rsc] (ecmascript)");
;
;
const NEXT_OTEL_PERFORMANCE_PREFIX = process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    try {
        api = __turbopack_context__.r("[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_context__.r("[project]/Desktop/medical/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
            span.setAttribute('error.type', error.name);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
        }
        // Check if there's already a root span in the store for this trace
        // We are intentionally not checking whether there is an active context
        // from outside of nextjs to ensure that we can provide the same level
        // of telemetry when using a custom server
        const existingRootSpanId = spanContext.getValue(rootSpanIdKey);
        const isRootSpan = typeof existingRootSpanId !== 'number' || !rootSpanAttributesStore.has(existingRootSpanId);
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                let startTime;
                if (NEXT_OTEL_PERFORMANCE_PREFIX && type && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogSpanAllowList"].has(type)) {
                    startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                }
                let cleanedUp = false;
                const onCleanup = ()=>{
                    if (cleanedUp) return;
                    cleanedUp = true;
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime) {
                        performance.measure(`${NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                if (fn.length > 1) {
                    try {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    } catch (err) {
                        closeSpanWithError(span, err);
                        throw err;
                    } finally{
                        onCleanup();
                    }
                }
                try {
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes && !attributes.has(key)) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_HEADER",
    ()=>ACTION_HEADER,
    "FLIGHT_HEADERS",
    ()=>FLIGHT_HEADERS,
    "NEXT_ACTION_NOT_FOUND_HEADER",
    ()=>NEXT_ACTION_NOT_FOUND_HEADER,
    "NEXT_DID_POSTPONE_HEADER",
    ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_HMR_REFRESH_HASH_COOKIE",
    ()=>NEXT_HMR_REFRESH_HASH_COOKIE,
    "NEXT_HMR_REFRESH_HEADER",
    ()=>NEXT_HMR_REFRESH_HEADER,
    "NEXT_HTML_REQUEST_ID_HEADER",
    ()=>NEXT_HTML_REQUEST_ID_HEADER,
    "NEXT_IS_PRERENDER_HEADER",
    ()=>NEXT_IS_PRERENDER_HEADER,
    "NEXT_REQUEST_ID_HEADER",
    ()=>NEXT_REQUEST_ID_HEADER,
    "NEXT_REWRITTEN_PATH_HEADER",
    ()=>NEXT_REWRITTEN_PATH_HEADER,
    "NEXT_REWRITTEN_QUERY_HEADER",
    ()=>NEXT_REWRITTEN_QUERY_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER,
    "NEXT_ROUTER_STALE_TIME_HEADER",
    ()=>NEXT_ROUTER_STALE_TIME_HEADER,
    "NEXT_ROUTER_STATE_TREE_HEADER",
    ()=>NEXT_ROUTER_STATE_TREE_HEADER,
    "NEXT_RSC_UNION_QUERY",
    ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL",
    ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER",
    ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER",
    ()=>RSC_HEADER
]);
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id'; //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/medical/node_modules/next/dist/compiled/cookie") + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/trace/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        getTracer().setRootSpanAttribute('next.route', page);
        // Call API route method
        return getTracer().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/Desktop/medical/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/Desktop/medical/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect) {
            this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let prop;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    static #_ = prop = _NEXT_REQUEST_META = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"];
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req), this._req = _req, this.headers = this._req.headers, this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics, this[_NEXT_REQUEST_META] = this._req[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] || {}, this.streaming = false;
    }
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    /**
   * Returns the request body as a Web Readable Stream. The body here can only
   * be read once as the body will start flowing as soon as the data handler
   * is attached.
   *
   * @internal
   */ stream() {
        if (this.streaming) {
            throw Object.defineProperty(new Error('Invariant: NodeNextRequest.stream() can only be called once'), "__NEXT_ERROR_CODE", {
                value: "E467",
                enumerable: false,
                configurable: true
            });
        }
        this.streaming = true;
        return new ReadableStream({
            start: (controller)=>{
                this._req.on('data', (chunk)=>{
                    controller.enqueue(new Uint8Array(chunk));
                });
                this._req.on('end', ()=>{
                    controller.close();
                });
                this._req.on('error', (err)=>{
                    controller.error(err);
                });
            }
        });
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res), this._res = _res, this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
    onClose(callback) {
        this.originalResponse.on('close', callback);
    }
}
var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/Desktop/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        629: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                var a = Object.getOwnPropertyDescriptor(t, s);
                if (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) {
                    a = {
                        enumerable: true,
                        get: function() {
                            return t[s];
                        }
                    };
                }
                Object.defineProperty(e, r, a);
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: true,
                    value: t
                });
            } : function(e, t) {
                e["default"] = t;
            });
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null) {
                    for(var s in e)if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) r(t, e, s);
                }
                a(t, e);
                return t;
            };
            var i = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.z = void 0;
            const o = n(s(923));
            t.z = o;
            i(s(923), t);
            t["default"] = o;
        },
        348: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ZodError = t.quotelessJson = t.ZodIssueCode = void 0;
            const r = s(709);
            t.ZodIssueCode = r.util.arrayToEnum([
                "invalid_type",
                "invalid_literal",
                "custom",
                "invalid_union",
                "invalid_union_discriminator",
                "invalid_enum_value",
                "unrecognized_keys",
                "invalid_arguments",
                "invalid_return_type",
                "invalid_date",
                "invalid_string",
                "too_small",
                "too_big",
                "invalid_intersection_types",
                "not_multiple_of",
                "not_finite"
            ]);
            const quotelessJson = (e)=>{
                const t = JSON.stringify(e, null, 2);
                return t.replace(/"([^"]+)":/g, "$1:");
            };
            t.quotelessJson = quotelessJson;
            class ZodError extends Error {
                get errors() {
                    return this.issues;
                }
                constructor(e){
                    super();
                    this.issues = [];
                    this.addIssue = (e)=>{
                        this.issues = [
                            ...this.issues,
                            e
                        ];
                    };
                    this.addIssues = (e = [])=>{
                        this.issues = [
                            ...this.issues,
                            ...e
                        ];
                    };
                    const t = new.target.prototype;
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(this, t);
                    } else {
                        this.__proto__ = t;
                    }
                    this.name = "ZodError";
                    this.issues = e;
                }
                format(e) {
                    const t = e || function(e) {
                        return e.message;
                    };
                    const s = {
                        _errors: []
                    };
                    const processError = (e)=>{
                        for (const r of e.issues){
                            if (r.code === "invalid_union") {
                                r.unionErrors.map(processError);
                            } else if (r.code === "invalid_return_type") {
                                processError(r.returnTypeError);
                            } else if (r.code === "invalid_arguments") {
                                processError(r.argumentsError);
                            } else if (r.path.length === 0) {
                                s._errors.push(t(r));
                            } else {
                                let e = s;
                                let a = 0;
                                while(a < r.path.length){
                                    const s = r.path[a];
                                    const n = a === r.path.length - 1;
                                    if (!n) {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                    } else {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                        e[s]._errors.push(t(r));
                                    }
                                    e = e[s];
                                    a++;
                                }
                            }
                        }
                    };
                    processError(this);
                    return s;
                }
                static assert(e) {
                    if (!(e instanceof ZodError)) {
                        throw new Error(`Not a ZodError: ${e}`);
                    }
                }
                toString() {
                    return this.message;
                }
                get message() {
                    return JSON.stringify(this.issues, r.util.jsonStringifyReplacer, 2);
                }
                get isEmpty() {
                    return this.issues.length === 0;
                }
                flatten(e = (e)=>e.message) {
                    const t = {};
                    const s = [];
                    for (const r of this.issues){
                        if (r.path.length > 0) {
                            const s = r.path[0];
                            t[s] = t[s] || [];
                            t[s].push(e(r));
                        } else {
                            s.push(e(r));
                        }
                    }
                    return {
                        formErrors: s,
                        fieldErrors: t
                    };
                }
                get formErrors() {
                    return this.flatten();
                }
            }
            t.ZodError = ZodError;
            ZodError.create = (e)=>{
                const t = new ZodError(e);
                return t;
            };
        },
        61: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultErrorMap = void 0;
            t.setErrorMap = setErrorMap;
            t.getErrorMap = getErrorMap;
            const a = r(s(871));
            t.defaultErrorMap = a.default;
            let n = a.default;
            function setErrorMap(e) {
                n = e;
            }
            function getErrorMap() {
                return n;
            }
        },
        923: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                var a = Object.getOwnPropertyDescriptor(t, s);
                if (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) {
                    a = {
                        enumerable: true,
                        get: function() {
                            return t[s];
                        }
                    };
                }
                Object.defineProperty(e, r, a);
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(s(61), t);
            a(s(818), t);
            a(s(515), t);
            a(s(709), t);
            a(s(155), t);
            a(s(348), t);
        },
        538: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.errorUtil = void 0;
            var s;
            (function(e) {
                e.errToObj = (e)=>typeof e === "string" ? {
                        message: e
                    } : e || {};
                e.toString = (e)=>typeof e === "string" ? e : e?.message;
            })(s || (t.errorUtil = s = {}));
        },
        818: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isAsync = t.isValid = t.isDirty = t.isAborted = t.OK = t.DIRTY = t.INVALID = t.ParseStatus = t.EMPTY_PATH = t.makeIssue = void 0;
            t.addIssueToContext = addIssueToContext;
            const a = s(61);
            const n = r(s(871));
            const makeIssue = (e)=>{
                const { data: t, path: s, errorMaps: r, issueData: a } = e;
                const n = [
                    ...s,
                    ...a.path || []
                ];
                const i = {
                    ...a,
                    path: n
                };
                if (a.message !== undefined) {
                    return {
                        ...a,
                        path: n,
                        message: a.message
                    };
                }
                let o = "";
                const d = r.filter((e)=>!!e).slice().reverse();
                for (const e of d){
                    o = e(i, {
                        data: t,
                        defaultError: o
                    }).message;
                }
                return {
                    ...a,
                    path: n,
                    message: o
                };
            };
            t.makeIssue = makeIssue;
            t.EMPTY_PATH = [];
            function addIssueToContext(e, s) {
                const r = (0, a.getErrorMap)();
                const i = (0, t.makeIssue)({
                    issueData: s,
                    data: e.data,
                    path: e.path,
                    errorMaps: [
                        e.common.contextualErrorMap,
                        e.schemaErrorMap,
                        r,
                        r === n.default ? undefined : n.default
                    ].filter((e)=>!!e)
                });
                e.common.issues.push(i);
            }
            class ParseStatus {
                constructor(){
                    this.value = "valid";
                }
                dirty() {
                    if (this.value === "valid") this.value = "dirty";
                }
                abort() {
                    if (this.value !== "aborted") this.value = "aborted";
                }
                static mergeArray(e, s) {
                    const r = [];
                    for (const a of s){
                        if (a.status === "aborted") return t.INVALID;
                        if (a.status === "dirty") e.dirty();
                        r.push(a.value);
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
                static async mergeObjectAsync(e, t) {
                    const s = [];
                    for (const e of t){
                        const t = await e.key;
                        const r = await e.value;
                        s.push({
                            key: t,
                            value: r
                        });
                    }
                    return ParseStatus.mergeObjectSync(e, s);
                }
                static mergeObjectSync(e, s) {
                    const r = {};
                    for (const a of s){
                        const { key: s, value: n } = a;
                        if (s.status === "aborted") return t.INVALID;
                        if (n.status === "aborted") return t.INVALID;
                        if (s.status === "dirty") e.dirty();
                        if (n.status === "dirty") e.dirty();
                        if (s.value !== "__proto__" && (typeof n.value !== "undefined" || a.alwaysSet)) {
                            r[s.value] = n.value;
                        }
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
            }
            t.ParseStatus = ParseStatus;
            t.INVALID = Object.freeze({
                status: "aborted"
            });
            const DIRTY = (e)=>({
                    status: "dirty",
                    value: e
                });
            t.DIRTY = DIRTY;
            const OK = (e)=>({
                    status: "valid",
                    value: e
                });
            t.OK = OK;
            const isAborted = (e)=>e.status === "aborted";
            t.isAborted = isAborted;
            const isDirty = (e)=>e.status === "dirty";
            t.isDirty = isDirty;
            const isValid = (e)=>e.status === "valid";
            t.isValid = isValid;
            const isAsync = (e)=>typeof Promise !== "undefined" && e instanceof Promise;
            t.isAsync = isAsync;
        },
        515: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
        },
        709: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getParsedType = t.ZodParsedType = t.objectUtil = t.util = void 0;
            var s;
            (function(e) {
                e.assertEqual = (e)=>{};
                function assertIs(e) {}
                e.assertIs = assertIs;
                function assertNever(e) {
                    throw new Error;
                }
                e.assertNever = assertNever;
                e.arrayToEnum = (e)=>{
                    const t = {};
                    for (const s of e){
                        t[s] = s;
                    }
                    return t;
                };
                e.getValidEnumValues = (t)=>{
                    const s = e.objectKeys(t).filter((e)=>typeof t[t[e]] !== "number");
                    const r = {};
                    for (const e of s){
                        r[e] = t[e];
                    }
                    return e.objectValues(r);
                };
                e.objectValues = (t)=>e.objectKeys(t).map(function(e) {
                        return t[e];
                    });
                e.objectKeys = typeof Object.keys === "function" ? (e)=>Object.keys(e) : (e)=>{
                    const t = [];
                    for(const s in e){
                        if (Object.prototype.hasOwnProperty.call(e, s)) {
                            t.push(s);
                        }
                    }
                    return t;
                };
                e.find = (e, t)=>{
                    for (const s of e){
                        if (t(s)) return s;
                    }
                    return undefined;
                };
                e.isInteger = typeof Number.isInteger === "function" ? (e)=>Number.isInteger(e) : (e)=>typeof e === "number" && Number.isFinite(e) && Math.floor(e) === e;
                function joinValues(e, t = " | ") {
                    return e.map((e)=>typeof e === "string" ? `'${e}'` : e).join(t);
                }
                e.joinValues = joinValues;
                e.jsonStringifyReplacer = (e, t)=>{
                    if (typeof t === "bigint") {
                        return t.toString();
                    }
                    return t;
                };
            })(s || (t.util = s = {}));
            var r;
            (function(e) {
                e.mergeShapes = (e, t)=>({
                        ...e,
                        ...t
                    });
            })(r || (t.objectUtil = r = {}));
            t.ZodParsedType = s.arrayToEnum([
                "string",
                "nan",
                "number",
                "integer",
                "float",
                "boolean",
                "date",
                "bigint",
                "symbol",
                "function",
                "undefined",
                "null",
                "array",
                "object",
                "unknown",
                "promise",
                "void",
                "never",
                "map",
                "set"
            ]);
            const getParsedType = (e)=>{
                const s = typeof e;
                switch(s){
                    case "undefined":
                        return t.ZodParsedType.undefined;
                    case "string":
                        return t.ZodParsedType.string;
                    case "number":
                        return Number.isNaN(e) ? t.ZodParsedType.nan : t.ZodParsedType.number;
                    case "boolean":
                        return t.ZodParsedType.boolean;
                    case "function":
                        return t.ZodParsedType.function;
                    case "bigint":
                        return t.ZodParsedType.bigint;
                    case "symbol":
                        return t.ZodParsedType.symbol;
                    case "object":
                        if (Array.isArray(e)) {
                            return t.ZodParsedType.array;
                        }
                        if (e === null) {
                            return t.ZodParsedType.null;
                        }
                        if (e.then && typeof e.then === "function" && e.catch && typeof e.catch === "function") {
                            return t.ZodParsedType.promise;
                        }
                        if (typeof Map !== "undefined" && e instanceof Map) {
                            return t.ZodParsedType.map;
                        }
                        if (typeof Set !== "undefined" && e instanceof Set) {
                            return t.ZodParsedType.set;
                        }
                        if (typeof Date !== "undefined" && e instanceof Date) {
                            return t.ZodParsedType.date;
                        }
                        return t.ZodParsedType.object;
                    default:
                        return t.ZodParsedType.unknown;
                }
            };
            t.getParsedType = getParsedType;
        },
        871: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            const r = s(348);
            const a = s(709);
            const errorMap = (e, t)=>{
                let s;
                switch(e.code){
                    case r.ZodIssueCode.invalid_type:
                        if (e.received === a.ZodParsedType.undefined) {
                            s = "Required";
                        } else {
                            s = `Expected ${e.expected}, received ${e.received}`;
                        }
                        break;
                    case r.ZodIssueCode.invalid_literal:
                        s = `Invalid literal value, expected ${JSON.stringify(e.expected, a.util.jsonStringifyReplacer)}`;
                        break;
                    case r.ZodIssueCode.unrecognized_keys:
                        s = `Unrecognized key(s) in object: ${a.util.joinValues(e.keys, ", ")}`;
                        break;
                    case r.ZodIssueCode.invalid_union:
                        s = `Invalid input`;
                        break;
                    case r.ZodIssueCode.invalid_union_discriminator:
                        s = `Invalid discriminator value. Expected ${a.util.joinValues(e.options)}`;
                        break;
                    case r.ZodIssueCode.invalid_enum_value:
                        s = `Invalid enum value. Expected ${a.util.joinValues(e.options)}, received '${e.received}'`;
                        break;
                    case r.ZodIssueCode.invalid_arguments:
                        s = `Invalid function arguments`;
                        break;
                    case r.ZodIssueCode.invalid_return_type:
                        s = `Invalid function return type`;
                        break;
                    case r.ZodIssueCode.invalid_date:
                        s = `Invalid date`;
                        break;
                    case r.ZodIssueCode.invalid_string:
                        if (typeof e.validation === "object") {
                            if ("includes" in e.validation) {
                                s = `Invalid input: must include "${e.validation.includes}"`;
                                if (typeof e.validation.position === "number") {
                                    s = `${s} at one or more positions greater than or equal to ${e.validation.position}`;
                                }
                            } else if ("startsWith" in e.validation) {
                                s = `Invalid input: must start with "${e.validation.startsWith}"`;
                            } else if ("endsWith" in e.validation) {
                                s = `Invalid input: must end with "${e.validation.endsWith}"`;
                            } else {
                                a.util.assertNever(e.validation);
                            }
                        } else if (e.validation !== "regex") {
                            s = `Invalid ${e.validation}`;
                        } else {
                            s = "Invalid";
                        }
                        break;
                    case r.ZodIssueCode.too_small:
                        if (e.type === "array") s = `Array must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`;
                        else if (e.type === "bigint") s = `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`;
                        else s = "Invalid input";
                        break;
                    case r.ZodIssueCode.too_big:
                        if (e.type === "array") s = `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "bigint") s = `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`;
                        else s = "Invalid input";
                        break;
                    case r.ZodIssueCode.custom:
                        s = `Invalid input`;
                        break;
                    case r.ZodIssueCode.invalid_intersection_types:
                        s = `Intersection results could not be merged`;
                        break;
                    case r.ZodIssueCode.not_multiple_of:
                        s = `Number must be a multiple of ${e.multipleOf}`;
                        break;
                    case r.ZodIssueCode.not_finite:
                        s = "Number must be finite";
                        break;
                    default:
                        s = t.defaultError;
                        a.util.assertNever(e);
                }
                return {
                    message: s
                };
            };
            t["default"] = errorMap;
        },
        155: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.discriminatedUnion = t.date = t.boolean = t.bigint = t.array = t.any = t.coerce = t.ZodFirstPartyTypeKind = t.late = t.ZodSchema = t.Schema = t.ZodReadonly = t.ZodPipeline = t.ZodBranded = t.BRAND = t.ZodNaN = t.ZodCatch = t.ZodDefault = t.ZodNullable = t.ZodOptional = t.ZodTransformer = t.ZodEffects = t.ZodPromise = t.ZodNativeEnum = t.ZodEnum = t.ZodLiteral = t.ZodLazy = t.ZodFunction = t.ZodSet = t.ZodMap = t.ZodRecord = t.ZodTuple = t.ZodIntersection = t.ZodDiscriminatedUnion = t.ZodUnion = t.ZodObject = t.ZodArray = t.ZodVoid = t.ZodNever = t.ZodUnknown = t.ZodAny = t.ZodNull = t.ZodUndefined = t.ZodSymbol = t.ZodDate = t.ZodBoolean = t.ZodBigInt = t.ZodNumber = t.ZodString = t.ZodType = void 0;
            t.NEVER = t["void"] = t.unknown = t.union = t.undefined = t.tuple = t.transformer = t.symbol = t.string = t.strictObject = t.set = t.record = t.promise = t.preprocess = t.pipeline = t.ostring = t.optional = t.onumber = t.oboolean = t.object = t.number = t.nullable = t["null"] = t.never = t.nativeEnum = t.nan = t.map = t.literal = t.lazy = t.intersection = t["instanceof"] = t["function"] = t["enum"] = t.effect = void 0;
            t.datetimeRegex = datetimeRegex;
            t.custom = custom;
            const r = s(348);
            const a = s(61);
            const n = s(538);
            const i = s(818);
            const o = s(709);
            class ParseInputLazyPath {
                constructor(e, t, s, r){
                    this._cachedPath = [];
                    this.parent = e;
                    this.data = t;
                    this._path = s;
                    this._key = r;
                }
                get path() {
                    if (!this._cachedPath.length) {
                        if (Array.isArray(this._key)) {
                            this._cachedPath.push(...this._path, ...this._key);
                        } else {
                            this._cachedPath.push(...this._path, this._key);
                        }
                    }
                    return this._cachedPath;
                }
            }
            const handleResult = (e, t)=>{
                if ((0, i.isValid)(t)) {
                    return {
                        success: true,
                        data: t.value
                    };
                } else {
                    if (!e.common.issues.length) {
                        throw new Error("Validation failed but no issues detected.");
                    }
                    return {
                        success: false,
                        get error () {
                            if (this._error) return this._error;
                            const t = new r.ZodError(e.common.issues);
                            this._error = t;
                            return this._error;
                        }
                    };
                }
            };
            function processCreateParams(e) {
                if (!e) return {};
                const { errorMap: t, invalid_type_error: s, required_error: r, description: a } = e;
                if (t && (s || r)) {
                    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
                }
                if (t) return {
                    errorMap: t,
                    description: a
                };
                const customMap = (t, a)=>{
                    const { message: n } = e;
                    if (t.code === "invalid_enum_value") {
                        return {
                            message: n ?? a.defaultError
                        };
                    }
                    if (typeof a.data === "undefined") {
                        return {
                            message: n ?? r ?? a.defaultError
                        };
                    }
                    if (t.code !== "invalid_type") return {
                        message: a.defaultError
                    };
                    return {
                        message: n ?? s ?? a.defaultError
                    };
                };
                return {
                    errorMap: customMap,
                    description: a
                };
            }
            class ZodType {
                get description() {
                    return this._def.description;
                }
                _getType(e) {
                    return (0, o.getParsedType)(e.data);
                }
                _getOrReturnCtx(e, t) {
                    return t || {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: (0, o.getParsedType)(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    };
                }
                _processInputParams(e) {
                    return {
                        status: new i.ParseStatus,
                        ctx: {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: (0, o.getParsedType)(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    };
                }
                _parseSync(e) {
                    const t = this._parse(e);
                    if ((0, i.isAsync)(t)) {
                        throw new Error("Synchronous parse encountered promise.");
                    }
                    return t;
                }
                _parseAsync(e) {
                    const t = this._parse(e);
                    return Promise.resolve(t);
                }
                parse(e, t) {
                    const s = this.safeParse(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                safeParse(e, t) {
                    const s = {
                        common: {
                            issues: [],
                            async: t?.async ?? false,
                            contextualErrorMap: t?.errorMap
                        },
                        path: t?.path || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const r = this._parseSync({
                        data: e,
                        path: s.path,
                        parent: s
                    });
                    return handleResult(s, r);
                }
                "~validate"(e) {
                    const t = {
                        common: {
                            issues: [],
                            async: !!this["~standard"].async
                        },
                        path: [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    if (!this["~standard"].async) {
                        try {
                            const s = this._parseSync({
                                data: e,
                                path: [],
                                parent: t
                            });
                            return (0, i.isValid)(s) ? {
                                value: s.value
                            } : {
                                issues: t.common.issues
                            };
                        } catch (e) {
                            if (e?.message?.toLowerCase()?.includes("encountered")) {
                                this["~standard"].async = true;
                            }
                            t.common = {
                                issues: [],
                                async: true
                            };
                        }
                    }
                    return this._parseAsync({
                        data: e,
                        path: [],
                        parent: t
                    }).then((e)=>(0, i.isValid)(e) ? {
                            value: e.value
                        } : {
                            issues: t.common.issues
                        });
                }
                async parseAsync(e, t) {
                    const s = await this.safeParseAsync(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                async safeParseAsync(e, t) {
                    const s = {
                        common: {
                            issues: [],
                            contextualErrorMap: t?.errorMap,
                            async: true
                        },
                        path: t?.path || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const r = this._parse({
                        data: e,
                        path: s.path,
                        parent: s
                    });
                    const a = await ((0, i.isAsync)(r) ? r : Promise.resolve(r));
                    return handleResult(s, a);
                }
                refine(e, t) {
                    const getIssueProperties = (e)=>{
                        if (typeof t === "string" || typeof t === "undefined") {
                            return {
                                message: t
                            };
                        } else if (typeof t === "function") {
                            return t(e);
                        } else {
                            return t;
                        }
                    };
                    return this._refinement((t, s)=>{
                        const a = e(t);
                        const setError = ()=>s.addIssue({
                                code: r.ZodIssueCode.custom,
                                ...getIssueProperties(t)
                            });
                        if (typeof Promise !== "undefined" && a instanceof Promise) {
                            return a.then((e)=>{
                                if (!e) {
                                    setError();
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                        }
                        if (!a) {
                            setError();
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                refinement(e, t) {
                    return this._refinement((s, r)=>{
                        if (!e(s)) {
                            r.addIssue(typeof t === "function" ? t(s, r) : t);
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                _refinement(e) {
                    return new ZodEffects({
                        schema: this,
                        typeName: k.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: e
                        }
                    });
                }
                superRefine(e) {
                    return this._refinement(e);
                }
                constructor(e){
                    this.spa = this.safeParseAsync;
                    this._def = e;
                    this.parse = this.parse.bind(this);
                    this.safeParse = this.safeParse.bind(this);
                    this.parseAsync = this.parseAsync.bind(this);
                    this.safeParseAsync = this.safeParseAsync.bind(this);
                    this.spa = this.spa.bind(this);
                    this.refine = this.refine.bind(this);
                    this.refinement = this.refinement.bind(this);
                    this.superRefine = this.superRefine.bind(this);
                    this.optional = this.optional.bind(this);
                    this.nullable = this.nullable.bind(this);
                    this.nullish = this.nullish.bind(this);
                    this.array = this.array.bind(this);
                    this.promise = this.promise.bind(this);
                    this.or = this.or.bind(this);
                    this.and = this.and.bind(this);
                    this.transform = this.transform.bind(this);
                    this.brand = this.brand.bind(this);
                    this.default = this.default.bind(this);
                    this.catch = this.catch.bind(this);
                    this.describe = this.describe.bind(this);
                    this.pipe = this.pipe.bind(this);
                    this.readonly = this.readonly.bind(this);
                    this.isNullable = this.isNullable.bind(this);
                    this.isOptional = this.isOptional.bind(this);
                    this["~standard"] = {
                        version: 1,
                        vendor: "zod",
                        validate: (e)=>this["~validate"](e)
                    };
                }
                optional() {
                    return ZodOptional.create(this, this._def);
                }
                nullable() {
                    return ZodNullable.create(this, this._def);
                }
                nullish() {
                    return this.nullable().optional();
                }
                array() {
                    return ZodArray.create(this);
                }
                promise() {
                    return ZodPromise.create(this, this._def);
                }
                or(e) {
                    return ZodUnion.create([
                        this,
                        e
                    ], this._def);
                }
                and(e) {
                    return ZodIntersection.create(this, e, this._def);
                }
                transform(e) {
                    return new ZodEffects({
                        ...processCreateParams(this._def),
                        schema: this,
                        typeName: k.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: e
                        }
                    });
                }
                default(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodDefault({
                        ...processCreateParams(this._def),
                        innerType: this,
                        defaultValue: t,
                        typeName: k.ZodDefault
                    });
                }
                brand() {
                    return new ZodBranded({
                        typeName: k.ZodBranded,
                        type: this,
                        ...processCreateParams(this._def)
                    });
                }
                catch(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodCatch({
                        ...processCreateParams(this._def),
                        innerType: this,
                        catchValue: t,
                        typeName: k.ZodCatch
                    });
                }
                describe(e) {
                    const t = this.constructor;
                    return new t({
                        ...this._def,
                        description: e
                    });
                }
                pipe(e) {
                    return ZodPipeline.create(this, e);
                }
                readonly() {
                    return ZodReadonly.create(this);
                }
                isOptional() {
                    return this.safeParse(undefined).success;
                }
                isNullable() {
                    return this.safeParse(null).success;
                }
            }
            t.ZodType = ZodType;
            t.Schema = ZodType;
            t.ZodSchema = ZodType;
            const d = /^c[^\s-]{8,}$/i;
            const u = /^[0-9a-z]+$/;
            const c = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
            const l = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
            const p = /^[a-z0-9_-]{21}$/i;
            const f = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
            const h = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
            const m = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
            const y = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
            let Z;
            const _ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
            const g = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
            const v = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
            const I = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
            const T = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
            const b = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
            const x = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
            const C = new RegExp(`^${x}$`);
            function timeRegexSource(e) {
                let t = `[0-5]\\d`;
                if (e.precision) {
                    t = `${t}\\.\\d{${e.precision}}`;
                } else if (e.precision == null) {
                    t = `${t}(\\.\\d+)?`;
                }
                const s = e.precision ? "+" : "?";
                return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${s}`;
            }
            function timeRegex(e) {
                return new RegExp(`^${timeRegexSource(e)}$`);
            }
            function datetimeRegex(e) {
                let t = `${x}T${timeRegexSource(e)}`;
                const s = [];
                s.push(e.local ? `Z?` : `Z`);
                if (e.offset) s.push(`([+-]\\d{2}:?\\d{2})`);
                t = `${t}(${s.join("|")})`;
                return new RegExp(`^${t}$`);
            }
            function isValidIP(e, t) {
                if ((t === "v4" || !t) && _.test(e)) {
                    return true;
                }
                if ((t === "v6" || !t) && v.test(e)) {
                    return true;
                }
                return false;
            }
            function isValidJWT(e, t) {
                if (!f.test(e)) return false;
                try {
                    const [s] = e.split(".");
                    if (!s) return false;
                    const r = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(s.length + (4 - s.length % 4) % 4, "=");
                    const a = JSON.parse(atob(r));
                    if (typeof a !== "object" || a === null) return false;
                    if ("typ" in a && a?.typ !== "JWT") return false;
                    if (!a.alg) return false;
                    if (t && a.alg !== t) return false;
                    return true;
                } catch  {
                    return false;
                }
            }
            function isValidCidr(e, t) {
                if ((t === "v4" || !t) && g.test(e)) {
                    return true;
                }
                if ((t === "v6" || !t) && I.test(e)) {
                    return true;
                }
                return false;
            }
            class ZodString extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = String(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.string) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.string,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = new i.ParseStatus;
                    let a = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.length < t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.length > t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "length") {
                            const n = e.data.length > t.value;
                            const o = e.data.length < t.value;
                            if (n || o) {
                                a = this._getOrReturnCtx(e, a);
                                if (n) {
                                    (0, i.addIssueToContext)(a, {
                                        code: r.ZodIssueCode.too_big,
                                        maximum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                } else if (o) {
                                    (0, i.addIssueToContext)(a, {
                                        code: r.ZodIssueCode.too_small,
                                        minimum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                }
                                s.dirty();
                            }
                        } else if (t.kind === "email") {
                            if (!m.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "email",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "emoji") {
                            if (!Z) {
                                Z = new RegExp(y, "u");
                            }
                            if (!Z.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "emoji",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "uuid") {
                            if (!l.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "uuid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "nanoid") {
                            if (!p.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "nanoid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid") {
                            if (!d.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cuid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid2") {
                            if (!u.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cuid2",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ulid") {
                            if (!c.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "ulid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "url") {
                            try {
                                new URL(e.data);
                            } catch  {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "url",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "regex") {
                            t.regex.lastIndex = 0;
                            const n = t.regex.test(e.data);
                            if (!n) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "regex",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "trim") {
                            e.data = e.data.trim();
                        } else if (t.kind === "includes") {
                            if (!e.data.includes(t.value, t.position)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        includes: t.value,
                                        position: t.position
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "toLowerCase") {
                            e.data = e.data.toLowerCase();
                        } else if (t.kind === "toUpperCase") {
                            e.data = e.data.toUpperCase();
                        } else if (t.kind === "startsWith") {
                            if (!e.data.startsWith(t.value)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        startsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "endsWith") {
                            if (!e.data.endsWith(t.value)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        endsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "datetime") {
                            const n = datetimeRegex(t);
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "datetime",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "date") {
                            const n = C;
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "date",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "time") {
                            const n = timeRegex(t);
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "time",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "duration") {
                            if (!h.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "duration",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ip") {
                            if (!isValidIP(e.data, t.version)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "ip",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "jwt") {
                            if (!isValidJWT(e.data, t.alg)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "jwt",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cidr") {
                            if (!isValidCidr(e.data, t.version)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cidr",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "base64") {
                            if (!T.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "base64",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "base64url") {
                            if (!b.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "base64url",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: e.data
                    };
                }
                _regex(e, t, s) {
                    return this.refinement((t)=>e.test(t), {
                        validation: t,
                        code: r.ZodIssueCode.invalid_string,
                        ...n.errorUtil.errToObj(s)
                    });
                }
                _addCheck(e) {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                nanoid(e) {
                    return this._addCheck({
                        kind: "nanoid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                base64(e) {
                    return this._addCheck({
                        kind: "base64",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                base64url(e) {
                    return this._addCheck({
                        kind: "base64url",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                jwt(e) {
                    return this._addCheck({
                        kind: "jwt",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cidr(e) {
                    return this._addCheck({
                        kind: "cidr",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                datetime(e) {
                    if (typeof e === "string") {
                        return this._addCheck({
                            kind: "datetime",
                            precision: null,
                            offset: false,
                            local: false,
                            message: e
                        });
                    }
                    return this._addCheck({
                        kind: "datetime",
                        precision: typeof e?.precision === "undefined" ? null : e?.precision,
                        offset: e?.offset ?? false,
                        local: e?.local ?? false,
                        ...n.errorUtil.errToObj(e?.message)
                    });
                }
                date(e) {
                    return this._addCheck({
                        kind: "date",
                        message: e
                    });
                }
                time(e) {
                    if (typeof e === "string") {
                        return this._addCheck({
                            kind: "time",
                            precision: null,
                            message: e
                        });
                    }
                    return this._addCheck({
                        kind: "time",
                        precision: typeof e?.precision === "undefined" ? null : e?.precision,
                        ...n.errorUtil.errToObj(e?.message)
                    });
                }
                duration(e) {
                    return this._addCheck({
                        kind: "duration",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: t?.position,
                        ...n.errorUtil.errToObj(t?.message)
                    });
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                nonempty(e) {
                    return this.min(1, n.errorUtil.errToObj(e));
                }
                trim() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "trim"
                            }
                        ]
                    });
                }
                toLowerCase() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "toLowerCase"
                            }
                        ]
                    });
                }
                toUpperCase() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "toUpperCase"
                            }
                        ]
                    });
                }
                get isDatetime() {
                    return !!this._def.checks.find((e)=>e.kind === "datetime");
                }
                get isDate() {
                    return !!this._def.checks.find((e)=>e.kind === "date");
                }
                get isTime() {
                    return !!this._def.checks.find((e)=>e.kind === "time");
                }
                get isDuration() {
                    return !!this._def.checks.find((e)=>e.kind === "duration");
                }
                get isEmail() {
                    return !!this._def.checks.find((e)=>e.kind === "email");
                }
                get isURL() {
                    return !!this._def.checks.find((e)=>e.kind === "url");
                }
                get isEmoji() {
                    return !!this._def.checks.find((e)=>e.kind === "emoji");
                }
                get isUUID() {
                    return !!this._def.checks.find((e)=>e.kind === "uuid");
                }
                get isNANOID() {
                    return !!this._def.checks.find((e)=>e.kind === "nanoid");
                }
                get isCUID() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid");
                }
                get isCUID2() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid2");
                }
                get isULID() {
                    return !!this._def.checks.find((e)=>e.kind === "ulid");
                }
                get isIP() {
                    return !!this._def.checks.find((e)=>e.kind === "ip");
                }
                get isCIDR() {
                    return !!this._def.checks.find((e)=>e.kind === "cidr");
                }
                get isBase64() {
                    return !!this._def.checks.find((e)=>e.kind === "base64");
                }
                get isBase64url() {
                    return !!this._def.checks.find((e)=>e.kind === "base64url");
                }
                get minLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodString = ZodString;
            ZodString.create = (e)=>new ZodString({
                    checks: [],
                    typeName: k.ZodString,
                    coerce: e?.coerce ?? false,
                    ...processCreateParams(e)
                });
            function floatSafeRemainder(e, t) {
                const s = (e.toString().split(".")[1] || "").length;
                const r = (t.toString().split(".")[1] || "").length;
                const a = s > r ? s : r;
                const n = Number.parseInt(e.toFixed(a).replace(".", ""));
                const i = Number.parseInt(t.toFixed(a).replace(".", ""));
                return n % i / 10 ** a;
            }
            class ZodNumber extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                    this.step = this.multipleOf;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Number(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.number) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.number,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    let s = undefined;
                    const a = new i.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "int") {
                            if (!o.util.isInteger(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.invalid_type,
                                    expected: "integer",
                                    received: "float",
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "min") {
                            const n = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "max") {
                            const n = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (floatSafeRemainder(e.data, t.value) !== 0) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "finite") {
                            if (!Number.isFinite(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_finite,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: a.value,
                        value: e.data
                    };
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, n.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, n.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, n.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, n.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: n.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: n.errorUtil.toString(e)
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: n.errorUtil.toString(t)
                    });
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: n.errorUtil.toString(e)
                    });
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: true,
                        value: Number.MIN_SAFE_INTEGER,
                        message: n.errorUtil.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: true,
                        value: Number.MAX_SAFE_INTEGER,
                        message: n.errorUtil.toString(e)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
                get isInt() {
                    return !!this._def.checks.find((e)=>e.kind === "int" || e.kind === "multipleOf" && o.util.isInteger(e.value));
                }
                get isFinite() {
                    let e = null;
                    let t = null;
                    for (const s of this._def.checks){
                        if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") {
                            return true;
                        } else if (s.kind === "min") {
                            if (t === null || s.value > t) t = s.value;
                        } else if (s.kind === "max") {
                            if (e === null || s.value < e) e = s.value;
                        }
                    }
                    return Number.isFinite(t) && Number.isFinite(e);
                }
            }
            t.ZodNumber = ZodNumber;
            ZodNumber.create = (e)=>new ZodNumber({
                    checks: [],
                    typeName: k.ZodNumber,
                    coerce: e?.coerce || false,
                    ...processCreateParams(e)
                });
            class ZodBigInt extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        try {
                            e.data = BigInt(e.data);
                        } catch  {
                            return this._getInvalidInput(e);
                        }
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.bigint) {
                        return this._getInvalidInput(e);
                    }
                    let s = undefined;
                    const a = new i.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            const n = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_small,
                                    type: "bigint",
                                    minimum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "max") {
                            const n = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_big,
                                    type: "bigint",
                                    maximum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (e.data % t.value !== BigInt(0)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: a.value,
                        value: e.data
                    };
                }
                _getInvalidInput(e) {
                    const t = this._getOrReturnCtx(e);
                    (0, i.addIssueToContext)(t, {
                        code: r.ZodIssueCode.invalid_type,
                        expected: o.ZodParsedType.bigint,
                        received: t.parsedType
                    });
                    return i.INVALID;
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, n.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, n.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, n.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, n.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: n.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: n.errorUtil.toString(t)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodBigInt = ZodBigInt;
            ZodBigInt.create = (e)=>new ZodBigInt({
                    checks: [],
                    typeName: k.ZodBigInt,
                    coerce: e?.coerce ?? false,
                    ...processCreateParams(e)
                });
            class ZodBoolean extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Boolean(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.boolean) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.boolean,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodBoolean = ZodBoolean;
            ZodBoolean.create = (e)=>new ZodBoolean({
                    typeName: k.ZodBoolean,
                    coerce: e?.coerce || false,
                    ...processCreateParams(e)
                });
            class ZodDate extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = new Date(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.date) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.date,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    if (Number.isNaN(e.data.getTime())) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_date
                        });
                        return i.INVALID;
                    }
                    const s = new i.ParseStatus;
                    let a = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.getTime() < t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_small,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    minimum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.getTime() > t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_big,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    maximum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: new Date(e.data.getTime())
                    };
                }
                _addCheck(e) {
                    return new ZodDate({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: n.errorUtil.toString(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: n.errorUtil.toString(t)
                    });
                }
                get minDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
                get maxDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
            }
            t.ZodDate = ZodDate;
            ZodDate.create = (e)=>new ZodDate({
                    checks: [],
                    coerce: e?.coerce || false,
                    typeName: k.ZodDate,
                    ...processCreateParams(e)
                });
            class ZodSymbol extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.symbol) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.symbol,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodSymbol = ZodSymbol;
            ZodSymbol.create = (e)=>new ZodSymbol({
                    typeName: k.ZodSymbol,
                    ...processCreateParams(e)
                });
            class ZodUndefined extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.undefined,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodUndefined = ZodUndefined;
            ZodUndefined.create = (e)=>new ZodUndefined({
                    typeName: k.ZodUndefined,
                    ...processCreateParams(e)
                });
            class ZodNull extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.null) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.null,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodNull = ZodNull;
            ZodNull.create = (e)=>new ZodNull({
                    typeName: k.ZodNull,
                    ...processCreateParams(e)
                });
            class ZodAny extends ZodType {
                constructor(){
                    super(...arguments);
                    this._any = true;
                }
                _parse(e) {
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodAny = ZodAny;
            ZodAny.create = (e)=>new ZodAny({
                    typeName: k.ZodAny,
                    ...processCreateParams(e)
                });
            class ZodUnknown extends ZodType {
                constructor(){
                    super(...arguments);
                    this._unknown = true;
                }
                _parse(e) {
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodUnknown = ZodUnknown;
            ZodUnknown.create = (e)=>new ZodUnknown({
                    typeName: k.ZodUnknown,
                    ...processCreateParams(e)
                });
            class ZodNever extends ZodType {
                _parse(e) {
                    const t = this._getOrReturnCtx(e);
                    (0, i.addIssueToContext)(t, {
                        code: r.ZodIssueCode.invalid_type,
                        expected: o.ZodParsedType.never,
                        received: t.parsedType
                    });
                    return i.INVALID;
                }
            }
            t.ZodNever = ZodNever;
            ZodNever.create = (e)=>new ZodNever({
                    typeName: k.ZodNever,
                    ...processCreateParams(e)
                });
            class ZodVoid extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.void,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodVoid = ZodVoid;
            ZodVoid.create = (e)=>new ZodVoid({
                    typeName: k.ZodVoid,
                    ...processCreateParams(e)
                });
            class ZodArray extends ZodType {
                _parse(e) {
                    const { ctx: t, status: s } = this._processInputParams(e);
                    const a = this._def;
                    if (t.parsedType !== o.ZodParsedType.array) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    if (a.exactLength !== null) {
                        const e = t.data.length > a.exactLength.value;
                        const n = t.data.length < a.exactLength.value;
                        if (e || n) {
                            (0, i.addIssueToContext)(t, {
                                code: e ? r.ZodIssueCode.too_big : r.ZodIssueCode.too_small,
                                minimum: n ? a.exactLength.value : undefined,
                                maximum: e ? a.exactLength.value : undefined,
                                type: "array",
                                inclusive: true,
                                exact: true,
                                message: a.exactLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (a.minLength !== null) {
                        if (t.data.length < a.minLength.value) {
                            (0, i.addIssueToContext)(t, {
                                code: r.ZodIssueCode.too_small,
                                minimum: a.minLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: a.minLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (a.maxLength !== null) {
                        if (t.data.length > a.maxLength.value) {
                            (0, i.addIssueToContext)(t, {
                                code: r.ZodIssueCode.too_big,
                                maximum: a.maxLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: a.maxLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (t.common.async) {
                        return Promise.all([
                            ...t.data
                        ].map((e, s)=>a.type._parseAsync(new ParseInputLazyPath(t, e, t.path, s)))).then((e)=>i.ParseStatus.mergeArray(s, e));
                    }
                    const n = [
                        ...t.data
                    ].map((e, s)=>a.type._parseSync(new ParseInputLazyPath(t, e, t.path, s)));
                    return i.ParseStatus.mergeArray(s, n);
                }
                get element() {
                    return this._def.type;
                }
                min(e, t) {
                    return new ZodArray({
                        ...this._def,
                        minLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodArray({
                        ...this._def,
                        maxLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                length(e, t) {
                    return new ZodArray({
                        ...this._def,
                        exactLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodArray = ZodArray;
            ZodArray.create = (e, t)=>new ZodArray({
                    type: e,
                    minLength: null,
                    maxLength: null,
                    exactLength: null,
                    typeName: k.ZodArray,
                    ...processCreateParams(t)
                });
            function deepPartialify(e) {
                if (e instanceof ZodObject) {
                    const t = {};
                    for(const s in e.shape){
                        const r = e.shape[s];
                        t[s] = ZodOptional.create(deepPartialify(r));
                    }
                    return new ZodObject({
                        ...e._def,
                        shape: ()=>t
                    });
                } else if (e instanceof ZodArray) {
                    return new ZodArray({
                        ...e._def,
                        type: deepPartialify(e.element)
                    });
                } else if (e instanceof ZodOptional) {
                    return ZodOptional.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodNullable) {
                    return ZodNullable.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodTuple) {
                    return ZodTuple.create(e.items.map((e)=>deepPartialify(e)));
                } else {
                    return e;
                }
            }
            class ZodObject extends ZodType {
                constructor(){
                    super(...arguments);
                    this._cached = null;
                    this.nonstrict = this.passthrough;
                    this.augment = this.extend;
                }
                _getCached() {
                    if (this._cached !== null) return this._cached;
                    const e = this._def.shape();
                    const t = o.util.objectKeys(e);
                    this._cached = {
                        shape: e,
                        keys: t
                    };
                    return this._cached;
                }
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.object) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const { status: s, ctx: a } = this._processInputParams(e);
                    const { shape: n, keys: d } = this._getCached();
                    const u = [];
                    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
                        for(const e in a.data){
                            if (!d.includes(e)) {
                                u.push(e);
                            }
                        }
                    }
                    const c = [];
                    for (const e of d){
                        const t = n[e];
                        const s = a.data[e];
                        c.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new ParseInputLazyPath(a, s, a.path, e)),
                            alwaysSet: e in a.data
                        });
                    }
                    if (this._def.catchall instanceof ZodNever) {
                        const e = this._def.unknownKeys;
                        if (e === "passthrough") {
                            for (const e of u){
                                c.push({
                                    key: {
                                        status: "valid",
                                        value: e
                                    },
                                    value: {
                                        status: "valid",
                                        value: a.data[e]
                                    }
                                });
                            }
                        } else if (e === "strict") {
                            if (u.length > 0) {
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.unrecognized_keys,
                                    keys: u
                                });
                                s.dirty();
                            }
                        } else if (e === "strip") {} else {
                            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
                        }
                    } else {
                        const e = this._def.catchall;
                        for (const t of u){
                            const s = a.data[t];
                            c.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new ParseInputLazyPath(a, s, a.path, t)),
                                alwaysSet: t in a.data
                            });
                        }
                    }
                    if (a.common.async) {
                        return Promise.resolve().then(async ()=>{
                            const e = [];
                            for (const t of c){
                                const s = await t.key;
                                const r = await t.value;
                                e.push({
                                    key: s,
                                    value: r,
                                    alwaysSet: t.alwaysSet
                                });
                            }
                            return e;
                        }).then((e)=>i.ParseStatus.mergeObjectSync(s, e));
                    } else {
                        return i.ParseStatus.mergeObjectSync(s, c);
                    }
                }
                get shape() {
                    return this._def.shape();
                }
                strict(e) {
                    n.errorUtil.errToObj;
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strict",
                        ...e !== undefined ? {
                            errorMap: (t, s)=>{
                                const r = this._def.errorMap?.(t, s).message ?? s.defaultError;
                                if (t.code === "unrecognized_keys") return {
                                    message: n.errorUtil.errToObj(e).message ?? r
                                };
                                return {
                                    message: r
                                };
                            }
                        } : {}
                    });
                }
                strip() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strip"
                    });
                }
                passthrough() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "passthrough"
                    });
                }
                extend(e) {
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e
                            })
                    });
                }
                merge(e) {
                    const t = new ZodObject({
                        unknownKeys: e._def.unknownKeys,
                        catchall: e._def.catchall,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e._def.shape()
                            }),
                        typeName: k.ZodObject
                    });
                    return t;
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    });
                }
                catchall(e) {
                    return new ZodObject({
                        ...this._def,
                        catchall: e
                    });
                }
                pick(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(e)){
                        if (e[s] && this.shape[s]) {
                            t[s] = this.shape[s];
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                omit(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        if (!e[s]) {
                            t[s] = this.shape[s];
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                deepPartial() {
                    return deepPartialify(this);
                }
                partial(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        const r = this.shape[s];
                        if (e && !e[s]) {
                            t[s] = r;
                        } else {
                            t[s] = r.optional();
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                required(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        if (e && !e[s]) {
                            t[s] = this.shape[s];
                        } else {
                            const e = this.shape[s];
                            let r = e;
                            while(r instanceof ZodOptional){
                                r = r._def.innerType;
                            }
                            t[s] = r;
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                keyof() {
                    return createZodEnum(o.util.objectKeys(this.shape));
                }
            }
            t.ZodObject = ZodObject;
            ZodObject.create = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.strictCreate = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strict",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.lazycreate = (e, t)=>new ZodObject({
                    shape: e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            class ZodUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.options;
                    function handleResults(e) {
                        for (const t of e){
                            if (t.result.status === "valid") {
                                return t.result;
                            }
                        }
                        for (const s of e){
                            if (s.result.status === "dirty") {
                                t.common.issues.push(...s.ctx.common.issues);
                                return s.result;
                            }
                        }
                        const s = e.map((e)=>new r.ZodError(e.ctx.common.issues));
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union,
                            unionErrors: s
                        });
                        return i.INVALID;
                    }
                    if (t.common.async) {
                        return Promise.all(s.map(async (e)=>{
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            return {
                                result: await e._parseAsync({
                                    data: t.data,
                                    path: t.path,
                                    parent: s
                                }),
                                ctx: s
                            };
                        })).then(handleResults);
                    } else {
                        let e = undefined;
                        const a = [];
                        for (const r of s){
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            const n = r._parseSync({
                                data: t.data,
                                path: t.path,
                                parent: s
                            });
                            if (n.status === "valid") {
                                return n;
                            } else if (n.status === "dirty" && !e) {
                                e = {
                                    result: n,
                                    ctx: s
                                };
                            }
                            if (s.common.issues.length) {
                                a.push(s.common.issues);
                            }
                        }
                        if (e) {
                            t.common.issues.push(...e.ctx.common.issues);
                            return e.result;
                        }
                        const n = a.map((e)=>new r.ZodError(e));
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union,
                            unionErrors: n
                        });
                        return i.INVALID;
                    }
                }
                get options() {
                    return this._def.options;
                }
            }
            t.ZodUnion = ZodUnion;
            ZodUnion.create = (e, t)=>new ZodUnion({
                    options: e,
                    typeName: k.ZodUnion,
                    ...processCreateParams(t)
                });
            const getDiscriminator = (e)=>{
                if (e instanceof ZodLazy) {
                    return getDiscriminator(e.schema);
                } else if (e instanceof ZodEffects) {
                    return getDiscriminator(e.innerType());
                } else if (e instanceof ZodLiteral) {
                    return [
                        e.value
                    ];
                } else if (e instanceof ZodEnum) {
                    return e.options;
                } else if (e instanceof ZodNativeEnum) {
                    return o.util.objectValues(e.enum);
                } else if (e instanceof ZodDefault) {
                    return getDiscriminator(e._def.innerType);
                } else if (e instanceof ZodUndefined) {
                    return [
                        undefined
                    ];
                } else if (e instanceof ZodNull) {
                    return [
                        null
                    ];
                } else if (e instanceof ZodOptional) {
                    return [
                        undefined,
                        ...getDiscriminator(e.unwrap())
                    ];
                } else if (e instanceof ZodNullable) {
                    return [
                        null,
                        ...getDiscriminator(e.unwrap())
                    ];
                } else if (e instanceof ZodBranded) {
                    return getDiscriminator(e.unwrap());
                } else if (e instanceof ZodReadonly) {
                    return getDiscriminator(e.unwrap());
                } else if (e instanceof ZodCatch) {
                    return getDiscriminator(e._def.innerType);
                } else {
                    return [];
                }
            };
            class ZodDiscriminatedUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.object) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = this.discriminator;
                    const a = t.data[s];
                    const n = this.optionsMap.get(a);
                    if (!n) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union_discriminator,
                            options: Array.from(this.optionsMap.keys()),
                            path: [
                                s
                            ]
                        });
                        return i.INVALID;
                    }
                    if (t.common.async) {
                        return n._parseAsync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    } else {
                        return n._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    }
                }
                get discriminator() {
                    return this._def.discriminator;
                }
                get options() {
                    return this._def.options;
                }
                get optionsMap() {
                    return this._def.optionsMap;
                }
                static create(e, t, s) {
                    const r = new Map;
                    for (const s of t){
                        const t = getDiscriminator(s.shape[e]);
                        if (!t.length) {
                            throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                        }
                        for (const a of t){
                            if (r.has(a)) {
                                throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                            }
                            r.set(a, s);
                        }
                    }
                    return new ZodDiscriminatedUnion({
                        typeName: k.ZodDiscriminatedUnion,
                        discriminator: e,
                        options: t,
                        optionsMap: r,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
            function mergeValues(e, t) {
                const s = (0, o.getParsedType)(e);
                const r = (0, o.getParsedType)(t);
                if (e === t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else if (s === o.ZodParsedType.object && r === o.ZodParsedType.object) {
                    const s = o.util.objectKeys(t);
                    const r = o.util.objectKeys(e).filter((e)=>s.indexOf(e) !== -1);
                    const a = {
                        ...e,
                        ...t
                    };
                    for (const s of r){
                        const r = mergeValues(e[s], t[s]);
                        if (!r.valid) {
                            return {
                                valid: false
                            };
                        }
                        a[s] = r.data;
                    }
                    return {
                        valid: true,
                        data: a
                    };
                } else if (s === o.ZodParsedType.array && r === o.ZodParsedType.array) {
                    if (e.length !== t.length) {
                        return {
                            valid: false
                        };
                    }
                    const s = [];
                    for(let r = 0; r < e.length; r++){
                        const a = e[r];
                        const n = t[r];
                        const i = mergeValues(a, n);
                        if (!i.valid) {
                            return {
                                valid: false
                            };
                        }
                        s.push(i.data);
                    }
                    return {
                        valid: true,
                        data: s
                    };
                } else if (s === o.ZodParsedType.date && r === o.ZodParsedType.date && +e === +t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else {
                    return {
                        valid: false
                    };
                }
            }
            class ZodIntersection extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const handleParsed = (e, a)=>{
                        if ((0, i.isAborted)(e) || (0, i.isAborted)(a)) {
                            return i.INVALID;
                        }
                        const n = mergeValues(e.value, a.value);
                        if (!n.valid) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.invalid_intersection_types
                            });
                            return i.INVALID;
                        }
                        if ((0, i.isDirty)(e) || (0, i.isDirty)(a)) {
                            t.dirty();
                        }
                        return {
                            status: t.value,
                            value: n.data
                        };
                    };
                    if (s.common.async) {
                        return Promise.all([
                            this._def.left._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }),
                            this._def.right._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            })
                        ]).then(([e, t])=>handleParsed(e, t));
                    } else {
                        return handleParsed(this._def.left._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }), this._def.right._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }));
                    }
                }
            }
            t.ZodIntersection = ZodIntersection;
            ZodIntersection.create = (e, t, s)=>new ZodIntersection({
                    left: e,
                    right: t,
                    typeName: k.ZodIntersection,
                    ...processCreateParams(s)
                });
            class ZodTuple extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.array) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    if (s.data.length < this._def.items.length) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.too_small,
                            minimum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        return i.INVALID;
                    }
                    const a = this._def.rest;
                    if (!a && s.data.length > this._def.items.length) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.too_big,
                            maximum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        t.dirty();
                    }
                    const n = [
                        ...s.data
                    ].map((e, t)=>{
                        const r = this._def.items[t] || this._def.rest;
                        if (!r) return null;
                        return r._parse(new ParseInputLazyPath(s, e, s.path, t));
                    }).filter((e)=>!!e);
                    if (s.common.async) {
                        return Promise.all(n).then((e)=>i.ParseStatus.mergeArray(t, e));
                    } else {
                        return i.ParseStatus.mergeArray(t, n);
                    }
                }
                get items() {
                    return this._def.items;
                }
                rest(e) {
                    return new ZodTuple({
                        ...this._def,
                        rest: e
                    });
                }
            }
            t.ZodTuple = ZodTuple;
            ZodTuple.create = (e, t)=>{
                if (!Array.isArray(e)) {
                    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
                }
                return new ZodTuple({
                    items: e,
                    typeName: k.ZodTuple,
                    rest: null,
                    ...processCreateParams(t)
                });
            };
            class ZodRecord extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.object) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = [];
                    const n = this._def.keyType;
                    const d = this._def.valueType;
                    for(const e in s.data){
                        a.push({
                            key: n._parse(new ParseInputLazyPath(s, e, s.path, e)),
                            value: d._parse(new ParseInputLazyPath(s, s.data[e], s.path, e)),
                            alwaysSet: e in s.data
                        });
                    }
                    if (s.common.async) {
                        return i.ParseStatus.mergeObjectAsync(t, a);
                    } else {
                        return i.ParseStatus.mergeObjectSync(t, a);
                    }
                }
                get element() {
                    return this._def.valueType;
                }
                static create(e, t, s) {
                    if (t instanceof ZodType) {
                        return new ZodRecord({
                            keyType: e,
                            valueType: t,
                            typeName: k.ZodRecord,
                            ...processCreateParams(s)
                        });
                    }
                    return new ZodRecord({
                        keyType: ZodString.create(),
                        valueType: e,
                        typeName: k.ZodRecord,
                        ...processCreateParams(t)
                    });
                }
            }
            t.ZodRecord = ZodRecord;
            class ZodMap extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.map) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.map,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = this._def.keyType;
                    const n = this._def.valueType;
                    const d = [
                        ...s.data.entries()
                    ].map(([e, t], r)=>({
                            key: a._parse(new ParseInputLazyPath(s, e, s.path, [
                                r,
                                "key"
                            ])),
                            value: n._parse(new ParseInputLazyPath(s, t, s.path, [
                                r,
                                "value"
                            ]))
                        }));
                    if (s.common.async) {
                        const e = new Map;
                        return Promise.resolve().then(async ()=>{
                            for (const s of d){
                                const r = await s.key;
                                const a = await s.value;
                                if (r.status === "aborted" || a.status === "aborted") {
                                    return i.INVALID;
                                }
                                if (r.status === "dirty" || a.status === "dirty") {
                                    t.dirty();
                                }
                                e.set(r.value, a.value);
                            }
                            return {
                                status: t.value,
                                value: e
                            };
                        });
                    } else {
                        const e = new Map;
                        for (const s of d){
                            const r = s.key;
                            const a = s.value;
                            if (r.status === "aborted" || a.status === "aborted") {
                                return i.INVALID;
                            }
                            if (r.status === "dirty" || a.status === "dirty") {
                                t.dirty();
                            }
                            e.set(r.value, a.value);
                        }
                        return {
                            status: t.value,
                            value: e
                        };
                    }
                }
            }
            t.ZodMap = ZodMap;
            ZodMap.create = (e, t, s)=>new ZodMap({
                    valueType: t,
                    keyType: e,
                    typeName: k.ZodMap,
                    ...processCreateParams(s)
                });
            class ZodSet extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.set) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.set,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = this._def;
                    if (a.minSize !== null) {
                        if (s.data.size < a.minSize.value) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.too_small,
                                minimum: a.minSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: a.minSize.message
                            });
                            t.dirty();
                        }
                    }
                    if (a.maxSize !== null) {
                        if (s.data.size > a.maxSize.value) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.too_big,
                                maximum: a.maxSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: a.maxSize.message
                            });
                            t.dirty();
                        }
                    }
                    const n = this._def.valueType;
                    function finalizeSet(e) {
                        const s = new Set;
                        for (const r of e){
                            if (r.status === "aborted") return i.INVALID;
                            if (r.status === "dirty") t.dirty();
                            s.add(r.value);
                        }
                        return {
                            status: t.value,
                            value: s
                        };
                    }
                    const d = [
                        ...s.data.values()
                    ].map((e, t)=>n._parse(new ParseInputLazyPath(s, e, s.path, t)));
                    if (s.common.async) {
                        return Promise.all(d).then((e)=>finalizeSet(e));
                    } else {
                        return finalizeSet(d);
                    }
                }
                min(e, t) {
                    return new ZodSet({
                        ...this._def,
                        minSize: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodSet({
                        ...this._def,
                        maxSize: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                size(e, t) {
                    return this.min(e, t).max(e, t);
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodSet = ZodSet;
            ZodSet.create = (e, t)=>new ZodSet({
                    valueType: e,
                    minSize: null,
                    maxSize: null,
                    typeName: k.ZodSet,
                    ...processCreateParams(t)
                });
            class ZodFunction extends ZodType {
                constructor(){
                    super(...arguments);
                    this.validate = this.implement;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.function) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.function,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    function makeArgsIssue(e, s) {
                        return (0, i.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, a.getErrorMap)(),
                                a.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: r.ZodIssueCode.invalid_arguments,
                                argumentsError: s
                            }
                        });
                    }
                    function makeReturnsIssue(e, s) {
                        return (0, i.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, a.getErrorMap)(),
                                a.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: r.ZodIssueCode.invalid_return_type,
                                returnTypeError: s
                            }
                        });
                    }
                    const s = {
                        errorMap: t.common.contextualErrorMap
                    };
                    const n = t.data;
                    if (this._def.returns instanceof ZodPromise) {
                        const e = this;
                        return (0, i.OK)(async function(...t) {
                            const a = new r.ZodError([]);
                            const i = await e._def.args.parseAsync(t, s).catch((e)=>{
                                a.addIssue(makeArgsIssue(t, e));
                                throw a;
                            });
                            const o = await Reflect.apply(n, this, i);
                            const d = await e._def.returns._def.type.parseAsync(o, s).catch((e)=>{
                                a.addIssue(makeReturnsIssue(o, e));
                                throw a;
                            });
                            return d;
                        });
                    } else {
                        const e = this;
                        return (0, i.OK)(function(...t) {
                            const a = e._def.args.safeParse(t, s);
                            if (!a.success) {
                                throw new r.ZodError([
                                    makeArgsIssue(t, a.error)
                                ]);
                            }
                            const i = Reflect.apply(n, this, a.data);
                            const o = e._def.returns.safeParse(i, s);
                            if (!o.success) {
                                throw new r.ZodError([
                                    makeReturnsIssue(i, o.error)
                                ]);
                            }
                            return o.data;
                        });
                    }
                }
                parameters() {
                    return this._def.args;
                }
                returnType() {
                    return this._def.returns;
                }
                args(...e) {
                    return new ZodFunction({
                        ...this._def,
                        args: ZodTuple.create(e).rest(ZodUnknown.create())
                    });
                }
                returns(e) {
                    return new ZodFunction({
                        ...this._def,
                        returns: e
                    });
                }
                implement(e) {
                    const t = this.parse(e);
                    return t;
                }
                strictImplement(e) {
                    const t = this.parse(e);
                    return t;
                }
                static create(e, t, s) {
                    return new ZodFunction({
                        args: e ? e : ZodTuple.create([]).rest(ZodUnknown.create()),
                        returns: t || ZodUnknown.create(),
                        typeName: k.ZodFunction,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodFunction = ZodFunction;
            class ZodLazy extends ZodType {
                get schema() {
                    return this._def.getter();
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.getter();
                    return s._parse({
                        data: t.data,
                        path: t.path,
                        parent: t
                    });
                }
            }
            t.ZodLazy = ZodLazy;
            ZodLazy.create = (e, t)=>new ZodLazy({
                    getter: e,
                    typeName: k.ZodLazy,
                    ...processCreateParams(t)
                });
            class ZodLiteral extends ZodType {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            received: t.data,
                            code: r.ZodIssueCode.invalid_literal,
                            expected: this._def.value
                        });
                        return i.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
                get value() {
                    return this._def.value;
                }
            }
            t.ZodLiteral = ZodLiteral;
            ZodLiteral.create = (e, t)=>new ZodLiteral({
                    value: e,
                    typeName: k.ZodLiteral,
                    ...processCreateParams(t)
                });
            function createZodEnum(e, t) {
                return new ZodEnum({
                    values: e,
                    typeName: k.ZodEnum,
                    ...processCreateParams(t)
                });
            }
            class ZodEnum extends ZodType {
                _parse(e) {
                    if (typeof e.data !== "string") {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, i.addIssueToContext)(t, {
                            expected: o.util.joinValues(s),
                            received: t.parsedType,
                            code: r.ZodIssueCode.invalid_type
                        });
                        return i.INVALID;
                    }
                    if (!this._cache) {
                        this._cache = new Set(this._def.values);
                    }
                    if (!this._cache.has(e.data)) {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, i.addIssueToContext)(t, {
                            received: t.data,
                            code: r.ZodIssueCode.invalid_enum_value,
                            options: s
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
                get options() {
                    return this._def.values;
                }
                get enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Values() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                extract(e, t = this._def) {
                    return ZodEnum.create(e, {
                        ...this._def,
                        ...t
                    });
                }
                exclude(e, t = this._def) {
                    return ZodEnum.create(this.options.filter((t)=>!e.includes(t)), {
                        ...this._def,
                        ...t
                    });
                }
            }
            t.ZodEnum = ZodEnum;
            ZodEnum.create = createZodEnum;
            class ZodNativeEnum extends ZodType {
                _parse(e) {
                    const t = o.util.getValidEnumValues(this._def.values);
                    const s = this._getOrReturnCtx(e);
                    if (s.parsedType !== o.ZodParsedType.string && s.parsedType !== o.ZodParsedType.number) {
                        const e = o.util.objectValues(t);
                        (0, i.addIssueToContext)(s, {
                            expected: o.util.joinValues(e),
                            received: s.parsedType,
                            code: r.ZodIssueCode.invalid_type
                        });
                        return i.INVALID;
                    }
                    if (!this._cache) {
                        this._cache = new Set(o.util.getValidEnumValues(this._def.values));
                    }
                    if (!this._cache.has(e.data)) {
                        const e = o.util.objectValues(t);
                        (0, i.addIssueToContext)(s, {
                            received: s.data,
                            code: r.ZodIssueCode.invalid_enum_value,
                            options: e
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
                get enum() {
                    return this._def.values;
                }
            }
            t.ZodNativeEnum = ZodNativeEnum;
            ZodNativeEnum.create = (e, t)=>new ZodNativeEnum({
                    values: e,
                    typeName: k.ZodNativeEnum,
                    ...processCreateParams(t)
                });
            class ZodPromise extends ZodType {
                unwrap() {
                    return this._def.type;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.promise && t.common.async === false) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.promise,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = t.parsedType === o.ZodParsedType.promise ? t.data : Promise.resolve(t.data);
                    return (0, i.OK)(s.then((e)=>this._def.type.parseAsync(e, {
                            path: t.path,
                            errorMap: t.common.contextualErrorMap
                        })));
                }
            }
            t.ZodPromise = ZodPromise;
            ZodPromise.create = (e, t)=>new ZodPromise({
                    type: e,
                    typeName: k.ZodPromise,
                    ...processCreateParams(t)
                });
            class ZodEffects extends ZodType {
                innerType() {
                    return this._def.schema;
                }
                sourceType() {
                    return this._def.schema._def.typeName === k.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const r = this._def.effect || null;
                    const a = {
                        addIssue: (e)=>{
                            (0, i.addIssueToContext)(s, e);
                            if (e.fatal) {
                                t.abort();
                            } else {
                                t.dirty();
                            }
                        },
                        get path () {
                            return s.path;
                        }
                    };
                    a.addIssue = a.addIssue.bind(a);
                    if (r.type === "preprocess") {
                        const e = r.transform(s.data, a);
                        if (s.common.async) {
                            return Promise.resolve(e).then(async (e)=>{
                                if (t.value === "aborted") return i.INVALID;
                                const r = await this._def.schema._parseAsync({
                                    data: e,
                                    path: s.path,
                                    parent: s
                                });
                                if (r.status === "aborted") return i.INVALID;
                                if (r.status === "dirty") return (0, i.DIRTY)(r.value);
                                if (t.value === "dirty") return (0, i.DIRTY)(r.value);
                                return r;
                            });
                        } else {
                            if (t.value === "aborted") return i.INVALID;
                            const r = this._def.schema._parseSync({
                                data: e,
                                path: s.path,
                                parent: s
                            });
                            if (r.status === "aborted") return i.INVALID;
                            if (r.status === "dirty") return (0, i.DIRTY)(r.value);
                            if (t.value === "dirty") return (0, i.DIRTY)(r.value);
                            return r;
                        }
                    }
                    if (r.type === "refinement") {
                        const executeRefinement = (e)=>{
                            const t = r.refinement(e, a);
                            if (s.common.async) {
                                return Promise.resolve(t);
                            }
                            if (t instanceof Promise) {
                                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            }
                            return e;
                        };
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return i.INVALID;
                            if (e.status === "dirty") t.dirty();
                            executeRefinement(e.value);
                            return {
                                status: t.value,
                                value: e.value
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (e.status === "aborted") return i.INVALID;
                                if (e.status === "dirty") t.dirty();
                                return executeRefinement(e.value).then(()=>({
                                        status: t.value,
                                        value: e.value
                                    }));
                            });
                        }
                    }
                    if (r.type === "transform") {
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (!(0, i.isValid)(e)) return i.INVALID;
                            const n = r.transform(e.value, a);
                            if (n instanceof Promise) {
                                throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                            }
                            return {
                                status: t.value,
                                value: n
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (!(0, i.isValid)(e)) return i.INVALID;
                                return Promise.resolve(r.transform(e.value, a)).then((e)=>({
                                        status: t.value,
                                        value: e
                                    }));
                            });
                        }
                    }
                    o.util.assertNever(r);
                }
            }
            t.ZodEffects = ZodEffects;
            t.ZodTransformer = ZodEffects;
            ZodEffects.create = (e, t, s)=>new ZodEffects({
                    schema: e,
                    typeName: k.ZodEffects,
                    effect: t,
                    ...processCreateParams(s)
                });
            ZodEffects.createWithPreprocess = (e, t, s)=>new ZodEffects({
                    schema: t,
                    effect: {
                        type: "preprocess",
                        transform: e
                    },
                    typeName: k.ZodEffects,
                    ...processCreateParams(s)
                });
            class ZodOptional extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.undefined) {
                        return (0, i.OK)(undefined);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodOptional = ZodOptional;
            ZodOptional.create = (e, t)=>new ZodOptional({
                    innerType: e,
                    typeName: k.ZodOptional,
                    ...processCreateParams(t)
                });
            class ZodNullable extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.null) {
                        return (0, i.OK)(null);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodNullable = ZodNullable;
            ZodNullable.create = (e, t)=>new ZodNullable({
                    innerType: e,
                    typeName: k.ZodNullable,
                    ...processCreateParams(t)
                });
            class ZodDefault extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    let s = t.data;
                    if (t.parsedType === o.ZodParsedType.undefined) {
                        s = this._def.defaultValue();
                    }
                    return this._def.innerType._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                removeDefault() {
                    return this._def.innerType;
                }
            }
            t.ZodDefault = ZodDefault;
            ZodDefault.create = (e, t)=>new ZodDefault({
                    innerType: e,
                    typeName: k.ZodDefault,
                    defaultValue: typeof t.default === "function" ? t.default : ()=>t.default,
                    ...processCreateParams(t)
                });
            class ZodCatch extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = {
                        ...t,
                        common: {
                            ...t.common,
                            issues: []
                        }
                    };
                    const a = this._def.innerType._parse({
                        data: s.data,
                        path: s.path,
                        parent: {
                            ...s
                        }
                    });
                    if ((0, i.isAsync)(a)) {
                        return a.then((e)=>({
                                status: "valid",
                                value: e.status === "valid" ? e.value : this._def.catchValue({
                                    get error () {
                                        return new r.ZodError(s.common.issues);
                                    },
                                    input: s.data
                                })
                            }));
                    } else {
                        return {
                            status: "valid",
                            value: a.status === "valid" ? a.value : this._def.catchValue({
                                get error () {
                                    return new r.ZodError(s.common.issues);
                                },
                                input: s.data
                            })
                        };
                    }
                }
                removeCatch() {
                    return this._def.innerType;
                }
            }
            t.ZodCatch = ZodCatch;
            ZodCatch.create = (e, t)=>new ZodCatch({
                    innerType: e,
                    typeName: k.ZodCatch,
                    catchValue: typeof t.catch === "function" ? t.catch : ()=>t.catch,
                    ...processCreateParams(t)
                });
            class ZodNaN extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.nan) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.nan,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
            }
            t.ZodNaN = ZodNaN;
            ZodNaN.create = (e)=>new ZodNaN({
                    typeName: k.ZodNaN,
                    ...processCreateParams(e)
                });
            t.BRAND = Symbol("zod_brand");
            class ZodBranded extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = t.data;
                    return this._def.type._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                unwrap() {
                    return this._def.type;
                }
            }
            t.ZodBranded = ZodBranded;
            class ZodPipeline extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.common.async) {
                        const handleAsync = async ()=>{
                            const e = await this._def.in._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return i.INVALID;
                            if (e.status === "dirty") {
                                t.dirty();
                                return (0, i.DIRTY)(e.value);
                            } else {
                                return this._def.out._parseAsync({
                                    data: e.value,
                                    path: s.path,
                                    parent: s
                                });
                            }
                        };
                        return handleAsync();
                    } else {
                        const e = this._def.in._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        });
                        if (e.status === "aborted") return i.INVALID;
                        if (e.status === "dirty") {
                            t.dirty();
                            return {
                                status: "dirty",
                                value: e.value
                            };
                        } else {
                            return this._def.out._parseSync({
                                data: e.value,
                                path: s.path,
                                parent: s
                            });
                        }
                    }
                }
                static create(e, t) {
                    return new ZodPipeline({
                        in: e,
                        out: t,
                        typeName: k.ZodPipeline
                    });
                }
            }
            t.ZodPipeline = ZodPipeline;
            class ZodReadonly extends ZodType {
                _parse(e) {
                    const t = this._def.innerType._parse(e);
                    const freeze = (e)=>{
                        if ((0, i.isValid)(e)) {
                            e.value = Object.freeze(e.value);
                        }
                        return e;
                    };
                    return (0, i.isAsync)(t) ? t.then((e)=>freeze(e)) : freeze(t);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodReadonly = ZodReadonly;
            ZodReadonly.create = (e, t)=>new ZodReadonly({
                    innerType: e,
                    typeName: k.ZodReadonly,
                    ...processCreateParams(t)
                });
            function cleanParams(e, t) {
                const s = typeof e === "function" ? e(t) : typeof e === "string" ? {
                    message: e
                } : e;
                const r = typeof s === "string" ? {
                    message: s
                } : s;
                return r;
            }
            function custom(e, t = {}, s) {
                if (e) return ZodAny.create().superRefine((r, a)=>{
                    const n = e(r);
                    if (n instanceof Promise) {
                        return n.then((e)=>{
                            if (!e) {
                                const e = cleanParams(t, r);
                                const n = e.fatal ?? s ?? true;
                                a.addIssue({
                                    code: "custom",
                                    ...e,
                                    fatal: n
                                });
                            }
                        });
                    }
                    if (!n) {
                        const e = cleanParams(t, r);
                        const n = e.fatal ?? s ?? true;
                        a.addIssue({
                            code: "custom",
                            ...e,
                            fatal: n
                        });
                    }
                    return;
                });
                return ZodAny.create();
            }
            t.late = {
                object: ZodObject.lazycreate
            };
            var k;
            (function(e) {
                e["ZodString"] = "ZodString";
                e["ZodNumber"] = "ZodNumber";
                e["ZodNaN"] = "ZodNaN";
                e["ZodBigInt"] = "ZodBigInt";
                e["ZodBoolean"] = "ZodBoolean";
                e["ZodDate"] = "ZodDate";
                e["ZodSymbol"] = "ZodSymbol";
                e["ZodUndefined"] = "ZodUndefined";
                e["ZodNull"] = "ZodNull";
                e["ZodAny"] = "ZodAny";
                e["ZodUnknown"] = "ZodUnknown";
                e["ZodNever"] = "ZodNever";
                e["ZodVoid"] = "ZodVoid";
                e["ZodArray"] = "ZodArray";
                e["ZodObject"] = "ZodObject";
                e["ZodUnion"] = "ZodUnion";
                e["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
                e["ZodIntersection"] = "ZodIntersection";
                e["ZodTuple"] = "ZodTuple";
                e["ZodRecord"] = "ZodRecord";
                e["ZodMap"] = "ZodMap";
                e["ZodSet"] = "ZodSet";
                e["ZodFunction"] = "ZodFunction";
                e["ZodLazy"] = "ZodLazy";
                e["ZodLiteral"] = "ZodLiteral";
                e["ZodEnum"] = "ZodEnum";
                e["ZodEffects"] = "ZodEffects";
                e["ZodNativeEnum"] = "ZodNativeEnum";
                e["ZodOptional"] = "ZodOptional";
                e["ZodNullable"] = "ZodNullable";
                e["ZodDefault"] = "ZodDefault";
                e["ZodCatch"] = "ZodCatch";
                e["ZodPromise"] = "ZodPromise";
                e["ZodBranded"] = "ZodBranded";
                e["ZodPipeline"] = "ZodPipeline";
                e["ZodReadonly"] = "ZodReadonly";
            })(k || (t.ZodFirstPartyTypeKind = k = {}));
            class Class {
                constructor(...e){}
            }
            const instanceOfType = (e, t = {
                message: `Input not instance of ${e.name}`
            })=>custom((t)=>t instanceof e, t);
            t["instanceof"] = instanceOfType;
            const P = ZodString.create;
            t.string = P;
            const w = ZodNumber.create;
            t.number = w;
            const N = ZodNaN.create;
            t.nan = N;
            const O = ZodBigInt.create;
            t.bigint = O;
            const A = ZodBoolean.create;
            t.boolean = A;
            const S = ZodDate.create;
            t.date = S;
            const j = ZodSymbol.create;
            t.symbol = j;
            const E = ZodUndefined.create;
            t.undefined = E;
            const D = ZodNull.create;
            t["null"] = D;
            const L = ZodAny.create;
            t.any = L;
            const U = ZodUnknown.create;
            t.unknown = U;
            const R = ZodNever.create;
            t.never = R;
            const V = ZodVoid.create;
            t["void"] = V;
            const M = ZodArray.create;
            t.array = M;
            const $ = ZodObject.create;
            t.object = $;
            const z = ZodObject.strictCreate;
            t.strictObject = z;
            const F = ZodUnion.create;
            t.union = F;
            const B = ZodDiscriminatedUnion.create;
            t.discriminatedUnion = B;
            const K = ZodIntersection.create;
            t.intersection = K;
            const q = ZodTuple.create;
            t.tuple = q;
            const W = ZodRecord.create;
            t.record = W;
            const Y = ZodMap.create;
            t.map = Y;
            const J = ZodSet.create;
            t.set = J;
            const H = ZodFunction.create;
            t["function"] = H;
            const G = ZodLazy.create;
            t.lazy = G;
            const X = ZodLiteral.create;
            t.literal = X;
            const Q = ZodEnum.create;
            t["enum"] = Q;
            const ee = ZodNativeEnum.create;
            t.nativeEnum = ee;
            const te = ZodPromise.create;
            t.promise = te;
            const se = ZodEffects.create;
            t.effect = se;
            t.transformer = se;
            const re = ZodOptional.create;
            t.optional = re;
            const ae = ZodNullable.create;
            t.nullable = ae;
            const ne = ZodEffects.createWithPreprocess;
            t.preprocess = ne;
            const ie = ZodPipeline.create;
            t.pipeline = ie;
            const ostring = ()=>P().optional();
            t.ostring = ostring;
            const onumber = ()=>w().optional();
            t.onumber = onumber;
            const oboolean = ()=>A().optional();
            t.oboolean = oboolean;
            t.coerce = {
                string: (e)=>ZodString.create({
                        ...e,
                        coerce: true
                    }),
                number: (e)=>ZodNumber.create({
                        ...e,
                        coerce: true
                    }),
                boolean: (e)=>ZodBoolean.create({
                        ...e,
                        coerce: true
                    }),
                bigint: (e)=>ZodBigInt.create({
                        ...e,
                        coerce: true
                    }),
                date: (e)=>ZodDate.create({
                        ...e,
                        coerce: true
                    })
            };
            t.NEVER = i.INVALID;
        }
    };
    var t = {};
    function __nccwpck_require__(s) {
        var r = t[s];
        if (r !== undefined) {
            return r.exports;
        }
        var a = t[s] = {
            exports: {}
        };
        var n = true;
        try {
            e[s].call(a.exports, a, a.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[s];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/node_modules/next/dist/compiled/zod") + "/";
    var s = __nccwpck_require__(629);
    module.exports = s;
})();
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSegmentConfigSchemaKeys",
    ()=>AppSegmentConfigSchemaKeys,
    "parseAppSegmentConfig",
    ()=>parseAppSegmentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../shared/lib/zod'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const CookieSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    httpOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
}).strict();
const RuntimeSampleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    cookies: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(CookieSchema).optional(),
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    ])).optional(),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ])).optional(),
    searchParams: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].undefined()
    ])).optional()
}).strict();
const StaticPrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('static'),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const RuntimePrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('runtime'),
    samples: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(RuntimeSampleSchema).min(1),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const PrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].discriminatedUnion('mode', [
    StaticPrefetchSchema,
    RuntimePrefetchSchema
]);
/**
 * The schema for configuration for a page.
 */ const AppSegmentConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    /**
   * The number of seconds to revalidate the page or false to disable revalidation.
   */ revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(false)
    ]).optional(),
    /**
   * Whether the page supports dynamic parameters.
   */ dynamicParams: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    /**
   * The dynamic behavior of the page.
   */ dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'error',
        'force-static',
        'force-dynamic'
    ]).optional(),
    /**
   * The caching behavior of the page.
   */ fetchCache: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'default-cache',
        'only-cache',
        'force-cache',
        'force-no-store',
        'default-no-store',
        'only-no-store'
    ]).optional(),
    /**
   * How this segment should be prefetched.
   */ unstable_prefetch: PrefetchSchema.optional(),
    /**
   * The preferred region for the page.
   */ preferredRegion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ]).optional(),
    /**
   * The runtime to use for the page.
   */ runtime: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'edge',
        'nodejs'
    ]).optional(),
    /**
   * The maximum duration for the page in seconds.
   */ maxDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative().optional()
});
function parseAppSegmentConfig(data, route) {
    const parsed = AppSegmentConfigSchema.safeParse(data, {
        errorMap: (issue, ctx)=>{
            if (issue.path.length === 1) {
                switch(issue.path[0]){
                    case 'revalidate':
                        {
                            return {
                                message: `Invalid revalidate value ${JSON.stringify(ctx.data)} on "${route}", must be a non-negative number or false`
                            };
                        }
                    case 'unstable_prefetch':
                        {
                            return {
                                // @TODO replace this link with a link to the docs when they are written
                                message: `Invalid unstable_prefetch value ${JSON.stringify(ctx.data)} on "${route}", must be an object with a mode of "static" or "runtime". Read more at https://nextjs.org/docs/messages/invalid-prefetch-configuration`
                            };
                        }
                    default:
                }
            }
            return {
                message: ctx.defaultError
            };
        }
    });
    if (!parsed.success) {
        throw formatZodError(`Invalid segment configuration options detected for "${route}". Read more at https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config`, parsed.error);
    }
    return parsed.data;
}
const AppSegmentConfigSchemaKeys = AppSegmentConfigSchema.keyof().options; //# sourceMappingURL=app-segment-config.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAppPageRouteModule",
    ()=>isAppPageRouteModule,
    "isAppRouteRouteModule",
    ()=>isAppRouteRouteModule,
    "isPagesAPIRouteModule",
    ()=>isPagesAPIRouteModule,
    "isPagesRouteModule",
    ()=>isPagesRouteModule
]);
(()=>{
    const e = new Error("Cannot find module '../route-kind'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function isAppRouteRouteModule(routeModule) {
    return routeModule.definition.kind === RouteKind.APP_ROUTE;
}
function isAppPageRouteModule(routeModule) {
    return routeModule.definition.kind === RouteKind.APP_PAGE;
}
function isPagesRouteModule(routeModule) {
    return routeModule.definition.kind === RouteKind.PAGES;
}
function isPagesAPIRouteModule(routeModule) {
    return routeModule.definition.kind === RouteKind.PAGES_API;
} //# sourceMappingURL=checks.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (isGroupSegment(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParamProperties",
    ()=>getParamProperties,
    "getSegmentParam",
    ()=>getSegmentParam,
    "isCatchAll",
    ()=>isCatchAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
function getSegmentParam(segment) {
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            type: 'optional-catchall',
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : 'catchall',
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : 'dynamic',
            param: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
} //# sourceMappingURL=get-segment-param.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectFallbackRouteParams",
    ()=>collectFallbackRouteParams,
    "collectSegments",
    ()=>collectSegments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/lib/client-and-server-references.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/lib/app-dir-module.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../static-paths/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
/**
 * Parses the app config and attaches it to the segment.
 */ function attach(segment, userland, route) {
    // If the userland is not an object, then we can't do anything with it.
    if (typeof userland !== 'object' || userland === null) {
        return;
    }
    // Try to parse the application configuration.
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppSegmentConfig"])(userland, route);
    // If there was any keys on the config, then attach it to the segment.
    if (Object.keys(config).length > 0) {
        segment.config = config;
    }
    if ('generateStaticParams' in userland && typeof userland.generateStaticParams === 'function') {
        var _segment_config;
        segment.generateStaticParams = userland.generateStaticParams;
        // Validate that `generateStaticParams` makes sense in this context.
        if (((_segment_config = segment.config) == null ? void 0 : _segment_config.runtime) === 'edge') {
            throw Object.defineProperty(new Error('Edge runtime is not supported with `generateStaticParams`.'), "__NEXT_ERROR_CODE", {
                value: "E502",
                enumerable: false,
                configurable: true
            });
        }
    }
}
/**
 * Walks the loader tree and collects the generate parameters for each segment.
 *
 * @param routeModule the app page route module
 * @returns the segments for the app page route module
 */ async function collectAppPageSegments(routeModule) {
    // We keep track of unique segments, since with parallel routes, it's possible
    // to see the same segment multiple times.
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            [],
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, currentSegments, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Process current node
        const { mod: userland, filePath } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLayoutOrPageModule"])(loaderTree);
        const isClientComponent = userland && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isClientReference"])(userland);
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        const segment = {
            name,
            paramName,
            paramType,
            filePath,
            config: undefined,
            isDynamicSegment: !!paramName,
            generateStaticParams: undefined,
            isParallelRouteSegment
        };
        // Only server components can have app segment configurations
        if (!isClientComponent) {
            attach(segment, userland, routeModule.definition.pathname);
        }
        // Create a unique key for the segment
        const segmentKey = getSegmentKey(segment);
        if (!uniqueSegments.has(segmentKey)) {
            uniqueSegments.set(segmentKey, segment);
        }
        const updatedSegments = [
            ...currentSegments,
            segment
        ];
        // If this is a page segment, we've reached a leaf node
        if (name === PAGE_SEGMENT_KEY) {
            // Add all segments in the current path, preferring non-parallel segments
            updatedSegments.forEach((seg)=>{
                const key = getSegmentKey(seg);
                if (!uniqueSegments.has(key)) {
                    uniqueSegments.set(key, seg);
                }
            });
        }
        // Add all parallel routes to the queue
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                updatedSegments,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
}
function getSegmentKey(segment) {
    return `${segment.name}-${segment.filePath ?? ''}-${segment.paramName ?? ''}-${segment.isParallelRouteSegment ? 'pr' : 'np'}`;
}
/**
 * Collects the segments for a given app route module.
 *
 * @param routeModule the app route module
 * @returns the segments for the app route module
 */ function collectAppRouteSegments(routeModule) {
    // Get the pathname parts, slice off the first element (which is empty).
    const parts = routeModule.definition.pathname.split('/').slice(1);
    if (parts.length === 0) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected at least one segment'), "__NEXT_ERROR_CODE", {
            value: "E580",
            enumerable: false,
            configurable: true
        });
    }
    // Generate all the segments.
    const segments = parts.map((name)=>{
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        return {
            name,
            paramName,
            paramType,
            filePath: undefined,
            isDynamicSegment: !!paramName,
            config: undefined,
            generateStaticParams: undefined,
            isParallelRouteSegment: undefined
        };
    });
    // We know we have at least one, we verified this above. We should get the
    // last segment which represents the root route module.
    const segment = segments[segments.length - 1];
    segment.filePath = routeModule.definition.filename;
    // Extract the segment config from the userland module.
    attach(segment, routeModule.userland, routeModule.definition.pathname);
    return segments;
}
function collectSegments(routeModule) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppRouteRouteModule"])(routeModule)) {
        return collectAppRouteSegments(routeModule);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppPageRouteModule"])(routeModule)) {
        return collectAppPageSegments(routeModule);
    }
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected a route module to be one of app route or page'), "__NEXT_ERROR_CODE", {
        value: "E568",
        enumerable: false,
        configurable: true
    });
}
function collectFallbackRouteParams(routeModule) {
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Handle this segment (if it's a dynamic segment param).
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name);
        if (segmentParam) {
            const key = `${name}-${segmentParam.param}-${isParallelRouteSegment ? 'pr' : 'np'}`;
            if (!uniqueSegments.has(key)) {
                uniqueSegments.set(key, createFallbackRouteParam(segmentParam.param, segmentParam.type, isParallelRouteSegment));
            }
        }
        // Add all of this segment's parallel routes to the queue.
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
} //# sourceMappingURL=app-segments.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dynamicParamTypes",
    ()=>dynamicParamTypes
]);
const dynamicParamTypes = {
    catchall: 'c',
    'catchall-intercepted-(..)(..)': 'ci(..)(..)',
    'catchall-intercepted-(.)': 'ci(.)',
    'catchall-intercepted-(..)': 'ci(..)',
    'catchall-intercepted-(...)': 'ci(...)',
    'optional-catchall': 'oc',
    dynamic: 'd',
    'dynamic-intercepted-(..)(..)': 'di(..)(..)',
    'dynamic-intercepted-(.)': 'di(.)',
    'dynamic-intercepted-(..)': 'di(..)',
    'dynamic-intercepted-(...)': 'di(...)'
}; //# sourceMappingURL=get-short-dynamic-param-type.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOpaqueFallbackRouteParams",
    ()=>createOpaqueFallbackRouteParams,
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/router/utils/route-matcher'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/router/utils/route-regex'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParamKeys(page) {
    const pattern = getRouteRegex(page);
    const matcher = getRouteMatcher(pattern);
    // Get the default list of allowed params.
    return Object.keys(matcher(page));
}
function createOpaqueFallbackRouteParams(fallbackRouteParams) {
    // If there are no fallback route params, we can return early.
    if (fallbackRouteParams.length === 0) return null;
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    const keys = new Map();
    // Generate a unique key for the fallback route param, if this key is found
    // in the static output, it represents a bug in cache components.
    for (const { paramName, paramType } of fallbackRouteParams){
        keys.set(paramName, [
            `%%drp:${paramName}:${uniqueID}%%`,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicParamTypes"][paramType]
        ]);
    }
    return keys;
}
function getFallbackRouteParams(page, routeModule) {
    // First, get the fallback route params based on the provided page.
    const unknownParamKeys = new Set(getParamKeys(page));
    // Needed when processing fallback route params for catchall routes in
    // parallel segments, derive from pathname. This is similar to
    // getDynamicParam's pagePath parsing logic.
    const pathSegments = page.split('/').filter(Boolean);
    const collected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectFallbackRouteParams"])(routeModule);
    // Then, we have to get the fallback route params from the segments that are
    // associated with parallel route segments.
    const fallbackRouteParams = [];
    for (const fallbackRouteParam of collected){
        if (fallbackRouteParam.isParallelRouteParam) {
            // Try to see if we can resolve this parameter from the page that was
            // passed in.
            if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
                continue;
            }
            if (fallbackRouteParam.paramType === 'optional-catchall' || fallbackRouteParam.paramType === 'catchall') {
                // If there are any fallback route segments then we can't use the
                // pathname to derive the value because it's not complete. We can
                // make this assumption because the routes are always resolved left
                // to right and the catchall is always the last segment, so any
                // route parameters that are unknown will always contribute to the
                // pathname and therefore the catchall param too.
                if (collected.some((param)=>!param.isParallelRouteParam && unknownParamKeys.has(param.paramName))) {
                    fallbackRouteParams.push(fallbackRouteParam);
                    continue;
                }
                if (pathSegments.length === 0 && fallbackRouteParam.paramType !== 'optional-catchall') {
                    // We shouldn't be able to match a catchall segment without any path
                    // segments if it's not an optional catchall.
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected empty path segments match for a pathname "${page}" with param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                        value: "E792",
                        enumerable: false,
                        configurable: true
                    });
                }
            // The path segments are not empty, and the segments didn't contain any
            // unknown params, so we know that this particular fallback route param
            // route param is not actually unknown, and is known. We can skip adding
            // it to the fallback route params.
            } else {
                // This is some other type of route param that shouldn't get resolved
                // statically.
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected match for a pathname "${page}" with a param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                    value: "E791",
                    enumerable: false,
                    configurable: true
                });
            }
        } else if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
            // As this is a non-parallel route segment, and it exists in the unknown
            // param keys, we know it's a fallback route param.
            fallbackRouteParams.push(fallbackRouteParam);
        }
    }
    return createOpaqueFallbackRouteParams(fallbackRouteParams);
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayBufferToString",
    ()=>arrayBufferToString,
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt,
    "getActionEncryptionKey",
    ()=>getActionEncryptionKey,
    "getClientReferenceManifestForRsc",
    ()=>getClientReferenceManifestForRsc,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "setReferenceManifestsSingleton",
    ()=>setReferenceManifestsSingleton,
    "stringToUint8Array",
    ()=>stringToUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = workAsyncStorage.getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing Client Reference Manifest for ${workStore.route}.`), "__NEXT_ERROR_CODE", {
            value: "E570",
            enumerable: false,
            configurable: true
        });
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing encryption key for Server Actions'), "__NEXT_ERROR_CODE", {
            value: "E571",
            enumerable: false,
            configurable: true
        });
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerModuleMap",
    ()=>createServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function createServerModuleMap({ serverActionsManifest }) {
    return new Proxy({}, {
        get: (_, id)=>{
            var _serverActionsManifest__id, _serverActionsManifest_;
            const workers = (_serverActionsManifest_ = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node']) == null ? void 0 : (_serverActionsManifest__id = _serverActionsManifest_[id]) == null ? void 0 : _serverActionsManifest__id.workers;
            if (!workers) {
                return undefined;
            }
            const workStore = workAsyncStorage.getStore();
            let workerEntry;
            if (workStore) {
                workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
                // If there's no work store defined, we can assume that a server
                // module map is needed during module evaluation, e.g. to create a
                // server action using a higher-order function. Therefore it should be
                // safe to return any entry from the manifest that matches the action
                // ID. They all refer to the same module ID, which must also exist in
                // the current page bundle. TODO: This is currently not guaranteed in
                // Turbopack, and needs to be fixed.
                workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
                return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
                id: moduleId,
                name: id,
                chunks: [],
                async
            };
        }
    });
}
function selectWorkerForForwarding(actionId, pageName, serverActionsManifest) {
    var _serverActionsManifest__actionId;
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node'][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    const workerName = normalizeWorkerPageName(pageName);
    // no workers, nothing to forward to
    if (!workers) return;
    // if there is a worker for this page, no need to forward it.
    if (workers[workerName]) {
        return;
    }
    // otherwise, grab the first worker that has a handler for this action id
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
/**
 * The flight entry loader keys actions by bundlePath.
 * bundlePath corresponds with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, 'app')) {
        return pageName;
    }
    return 'app' + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page name
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(bundlePath, 'app'));
} //# sourceMappingURL=action-utils.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    // We don't actually support URL encoded actions, and the action handler will bail out if it sees one.
    // But we still want it to flow through to the action handler, to prevent changes in behavior when a regular
    // page component tries to handle a POST.
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
;
;
;
class RenderResult {
    static #_ = /**
   * A render result that represents an empty response. This is used to
   * represent a response that was not found or was already sent.
   */ this.EMPTY = new RenderResult(null, {
        metadata: {},
        contentType: null
    });
    /**
   * Creates a new RenderResult instance from a static response.
   *
   * @param value the static response value
   * @param contentType the content type of the response
   * @returns a new RenderResult instance
   */ static fromStatic(value, contentType) {
        return new RenderResult(value, {
            metadata: {},
            contentType
        });
    }
    constructor(response, { contentType, waitUntil, metadata }){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
        this.waitUntil = waitUntil;
    }
    assignMetadata(metadata) {
        Object.assign(this.metadata, metadata);
    }
    /**
   * Returns true if the response is null. It can be null if the response was
   * not found or was already sent.
   */ get isNull() {
        return this.response === null;
    }
    /**
   * Returns false if the response is a string. It can be a string if the page
   * was prerendered. If it's not, then it was generated dynamically.
   */ get isDynamic() {
        return typeof this.response !== 'string';
    }
    toUnchunkedString(stream = false) {
        if (this.response === null) {
            // If the response is null, return an empty string. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return '';
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E732",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToString"])(this.readable);
        }
        return this.response;
    }
    /**
   * Returns a readable stream of the response.
   */ get readable() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return new ReadableStream({
                start (controller) {
                    controller.close();
                }
            });
        }
        if (typeof this.response === 'string') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromString"])(this.response);
        }
        if (Buffer.isBuffer(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response);
        }
        // If the response is an array of streams, then chain them together.
        if (Array.isArray(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainStreams"])(...this.response);
        }
        return this.response;
    }
    /**
   * Coerces the response to an array of streams. This will convert the response
   * to an array of streams if it is not already one.
   *
   * @returns An array of streams
   */ coerce() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return [];
        }
        if (typeof this.response === 'string') {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromString"])(this.response)
            ];
        } else if (Array.isArray(this.response)) {
            return this.response;
        } else if (Buffer.isBuffer(this.response)) {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response)
            ];
        } else {
            return [
                this.response
            ];
        }
    }
    /**
   * Unshifts a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the start of the array. When this response is piped, all of the streams
   * will be piped one after the other.
   *
   * @param readable The new stream to unshift
   */ unshift(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the start of the array.
        this.response.unshift(readable);
    }
    /**
   * Chains a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the end. When this response is piped, all of the streams will be piped
   * one after the other.
   *
   * @param readable The new stream to chain
   */ push(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the end of the array.
        this.response.push(readable);
    }
    /**
   * Pipes the response to a writable stream. This will close/cancel the
   * writable stream if an error is encountered. If this doesn't throw, then
   * the writable stream will be closed or aborted.
   *
   * @param writable Writable stream to pipe the response to
   */ async pipeTo(writable) {
        try {
            await this.readable.pipeTo(writable, {
                // We want to close the writable stream ourselves so that we can wait
                // for the waitUntil promise to resolve before closing it. If an error
                // is encountered, we'll abort the writable stream if we swallowed the
                // error.
                preventClose: true
            });
            // If there is a waitUntil promise, wait for it to resolve before
            // closing the writable stream.
            if (this.waitUntil) await this.waitUntil;
            // Close the writable stream.
            await writable.close();
        } catch (err) {
            // If this is an abort error, we should abort the writable stream (as we
            // took ownership of it when we started piping). We don't need to re-throw
            // because we handled the error.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(err)) {
                // Abort the writable stream if an error is encountered.
                await writable.abort(err);
                return;
            }
            // We're not aborting the writer here as when this method throws it's not
            // clear as to how so the caller should assume it's their responsibility
            // to clean up the writer.
            throw err;
        }
    }
    /**
   * Pipes the response to a node response. This will close/cancel the node
   * response if an error is encountered.
   *
   * @param res
   */ async pipeToNodeResponse(res) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pipeToNodeResponse"])(this.readable, res, this.waitUntil);
    }
} //# sourceMappingURL=render-result.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/Desktop/medical/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/medical/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/Desktop/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_SUFFIX",
    ()=>ACTION_SUFFIX,
    "APP_DIR_ALIAS",
    ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR",
    ()=>CACHE_ONE_YEAR,
    "DOT_NEXT_ALIAS",
    ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS",
    ()=>ESLINT_DEFAULT_DIRS,
    "GSP_NO_RETURNED_VALUE",
    ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR",
    ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE",
    ()=>GSSP_NO_RETURNED_VALUE,
    "HTML_CONTENT_TYPE_HEADER",
    ()=>HTML_CONTENT_TYPE_HEADER,
    "INFINITE_CACHE",
    ()=>INFINITE_CACHE,
    "INSTRUMENTATION_HOOK_FILENAME",
    ()=>INSTRUMENTATION_HOOK_FILENAME,
    "JSON_CONTENT_TYPE_HEADER",
    ()=>JSON_CONTENT_TYPE_HEADER,
    "MATCHED_PATH_HEADER",
    ()=>MATCHED_PATH_HEADER,
    "MIDDLEWARE_FILENAME",
    ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP",
    ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX",
    ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID",
    ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER",
    ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER",
    ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER",
    ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_ITEMS",
    ()=>NEXT_CACHE_TAG_MAX_ITEMS,
    "NEXT_CACHE_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX",
    ()=>NEXT_DATA_SUFFIX,
    "NEXT_INTERCEPTION_MARKER_PREFIX",
    ()=>NEXT_INTERCEPTION_MARKER_PREFIX,
    "NEXT_META_SUFFIX",
    ()=>NEXT_META_SUFFIX,
    "NEXT_QUERY_PARAM_PREFIX",
    ()=>NEXT_QUERY_PARAM_PREFIX,
    "NEXT_RESUME_HEADER",
    ()=>NEXT_RESUME_HEADER,
    "NON_STANDARD_NODE_ENV",
    ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS",
    ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER",
    ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER",
    ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PROXY_FILENAME",
    ()=>PROXY_FILENAME,
    "PROXY_LOCATION_REGEXP",
    ()=>PROXY_LOCATION_REGEXP,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT",
    ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS",
    ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS",
    ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS",
    ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS",
    ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS",
    ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_CACHE_WRAPPER_ALIAS",
    ()=>RSC_CACHE_WRAPPER_ALIAS,
    "RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS",
    ()=>RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS",
    ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_PREFETCH_SUFFIX",
    ()=>RSC_PREFETCH_SUFFIX,
    "RSC_SEGMENTS_DIR_SUFFIX",
    ()=>RSC_SEGMENTS_DIR_SUFFIX,
    "RSC_SEGMENT_SUFFIX",
    ()=>RSC_SEGMENT_SUFFIX,
    "RSC_SUFFIX",
    ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR",
    ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT",
    ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT",
    ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME",
    ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR",
    ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT",
    ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR",
    ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "TEXT_PLAIN_CONTENT_TYPE_HEADER",
    ()=>TEXT_PLAIN_CONTENT_TYPE_HEADER,
    "UNSTABLE_REVALIDATE_RENAME_ERROR",
    ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS",
    ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES",
    ()=>WEBPACK_RESOURCE_QUERIES,
    "WEB_SOCKET_MAX_RECONNECTIONS",
    ()=>WEB_SOCKET_MAX_RECONNECTIONS
]);
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const PROXY_FILENAME = 'proxy';
const PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
const WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/Desktop/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Schedules a function to be called on the next tick after the other promises
 * have been resolved.
 *
 * @param cb the function to schedule
 */ __turbopack_context__.s([
    "atLeastOneTask",
    ()=>atLeastOneTask,
    "scheduleImmediate",
    ()=>scheduleImmediate,
    "scheduleOnNextTick",
    ()=>scheduleOnNextTick,
    "waitAtLeastOneReactRenderTask",
    ()=>waitAtLeastOneReactRenderTask
]);
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/Desktop/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/Desktop/medical/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Desktop/medical/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const __TURBOPACK__layout__$23$0__ = ()=>__turbopack_context__.r("[project]/Desktop/medical/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__not$2d$found__$23$1__ = ()=>__turbopack_context__.r("[project]/Desktop/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__forbidden__$23$2__ = ()=>__turbopack_context__.r("[project]/Desktop/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__unauthorized__$23$3__ = ()=>__turbopack_context__.r("[project]/Desktop/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__global$2d$error__$23$4__ = ()=>__turbopack_context__.r("[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__page__$23$5__ = ()=>__turbopack_context__.r("[project]/Desktop/medical/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    __TURBOPACK__page__$23$5__,
                    "[project]/Desktop/medical/src/app/page.tsx"
                ]
            }
        ]
    },
    {
        "layout": [
            __TURBOPACK__layout__$23$0__,
            "[project]/Desktop/medical/src/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$1__,
            "[project]/Desktop/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$2__,
            "[project]/Desktop/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$3__,
            "[project]/Desktop/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$4__,
            "[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next\\dev") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    if (routeModule.isDev) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
    }
    let srcPage = "/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const isMinimalMode = Boolean(("TURBOPACK compile-time value", false) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode'));
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns } = prepareResult;
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    // We use the resolvedPathname instead of the parsedUrl.pathname because it
    // is not rewritten as resolvedPathname is. This will ensure that the correct
    // prerender info is used instead of using the original pathname as the
    // source. If however PPR is enabled and cacheComponents is disabled, we
    // treat the pathname as dynamic. Currently, there's a bug in the PPR
    // implementation that incorrectly leaves %%drp placeholders in the output of
    // parallel routes. This is addressed with cacheComponents.
    const prerenderInfo = nextConfig.experimental.ppr && !nextConfig.cacheComponents && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(resolvedPathname) ? null : routeModule.match(resolvedPathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // During a PPR revalidation, the RSC request is not dynamic if we do not have the postponed data.
    // We only attach the postponed data during a resume. If there's no postponed data, then it must be a revalidation.
    // This is to ensure that we don't bypass the cache during a revalidation.
    if (isMinimalMode) {
        isDynamicRSCRequest = isDynamicRSCRequest && !!minimalPostponed;
    }
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    const serveStreamingMetadata = isHtmlBot && isRoutePPREnabled ? false : !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && // If this is a html bot request and PPR is enabled, then we don't want
    // to serve a static response.
    !(isHtmlBot && isRoutePPREnabled));
    // When a page supports cacheComponents, we can support RDC for Navigations
    const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
    // In development, we always want to generate dynamic HTML.
    const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof minimalPostponed === 'string' || // If this handler supports onCacheEntryV2, then we can only support
    // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
    // doesn't support it we must fallback to the default behavior.
    (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
    // which will trigger the `supportsDynamicResponse` to be true.
    isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setReferenceManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerModuleMap"])({
                serverActionsManifest
            })
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    const render404 = async ()=>{
        // TODO: should route-module itself handle rendering the 404
        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
            await routerServerContext.render404(req, res, parsedUrl, false);
        } else {
            res.end('This page could not be found');
        }
        return null;
    };
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${srcPage}`);
                }
            });
        };
        const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache');
        const doRender = async ({ span, postponed, fallbackRouteParams, forceStaticRender })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    serverActionsManifest,
                    clientReferenceManifest,
                    setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    images: nextConfig.images,
                    previewProps: prerenderManifest.preview,
                    deploymentId: nextConfig.deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache,
                    cacheLifeProfiles: nextConfig.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    cacheComponents: Boolean(nextConfig.cacheComponents),
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                        clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                context.renderOpts.nextExport = true;
                context.renderOpts.supportsDynamicResponse = false;
                context.renderOpts.isDebugDynamicAccesses = isDebugDynamicAccesses;
            }
            // When we're revalidating in the background, we should not allow dynamic
            // responses.
            if (forceStaticRender) {
                context.renderOpts.supportsDynamicResponse = false;
            }
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousIncrementalCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    if (nextConfig.experimental.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                // When cacheComponents is enabled, we can use the fallback
                // response if the request is not a dynamic RSC request because the
                // RSC data when this feature flag is enabled does not contain any
                // param references. Without this feature flag enabled, the RSC data
                // contains param references, and therefore we can't use the fallback.
                if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                    const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                    const fallbackRouteParams = // can use the manifest fallback route params.
                    isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    const fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams,
                                forceStaticRender: false
                            }),
                        waitUntil: ctx.waitUntil,
                        isMinimalMode
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // If this is a dynamic RSC request, we should use the postponed data from
            // the static render (if available). This ensures that we can utilize the
            // resume data cache (RDC) from the static render to ensure that the data
            // is consistent between the static and dynamic renders.
            if (supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && isDynamicRSCRequest && // We don't typically trigger an on-demand revalidation for dynamic RSC
            // requests, as we're typically revalidating the page in the background
            // instead. However, if the cache entry is stale, we should trigger a
            // background revalidation on dynamic RSC requests. This prevents us
            // from entering an infinite loop of revalidations.
            !forceStaticRender) {
                const incrementalCacheEntry = await incrementalCache.get(resolvedPathname, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE,
                    isRoutePPREnabled: true,
                    isFallback: false
                });
                // If the cache entry is found, we should use the postponed data from
                // the cache.
                if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    // CRITICAL: we're assigning the postponed data from the cache entry
                    // here as we're using the RDC to resume the render.
                    postponed = incrementalCacheEntry.value.postponed;
                    // If the cache entry is stale, we should trigger a background
                    // revalidation so that subsequent requests will get a fresh response.
                    if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                    // the requested revalidation flow is either foreground or
                    // background.
                    (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                        // We want to schedule this on the next tick to ensure that the
                        // render is not blocked on it.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(async ()=>{
                            const responseCache = routeModule.getResponseCache(req);
                            try {
                                await responseCache.revalidate(resolvedPathname, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                        ...c,
                                        // CRITICAL: we need to set this to true as we're
                                        // revalidating in the background and typically this dynamic
                                        // RSC request is not treated as static.
                                        forceStaticRender: true
                                    }), // previous cache entry here (which is stale) will switch on
                                // isOnDemandRevalidate and break the prerendering.
                                null, hasResolved, ctx.waitUntil);
                            } catch (err) {
                                console.error('Error revalidating the page in the background', err);
                            }
                        });
                    }
                }
            }
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            const fallbackRouteParams = // can use the manifest fallback route params if we need to render the
            // fallback shell.
            isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams,
                forceStaticRender
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil,
                isMinimalMode
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!isMinimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (isDynamicRSCRequest) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options. If we support RDC for Navigations, we
            // prefer the `onCacheEntryV2` callback. Once RDC for Navigations is the
            // default, we can remove the fallback to `onCacheEntry` as
            // `onCacheEntryV2` is now fully supported.
            const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry(cacheEntry, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL') ?? req.url
                });
                if (finished) return null;
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!isMinimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone && !isDynamicRSCRequest) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    // If the response is not an RSC response, then we can't serve it.
                    if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                        if (nextConfig.cacheComponents) {
                            res.statusCode = 404;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                                req,
                                res,
                                generateEtags: nextConfig.generateEtags,
                                poweredByHeader: nextConfig.poweredByHeader,
                                result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                                cacheControl: cacheEntry.cacheControl
                            });
                        } else {
                            // Otherwise this case is not expected.
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`), "__NEXT_ERROR_CODE", {
                                value: "E789",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            const body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || isMinimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null,
                forceStaticRender: false
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${srcPage}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isStaticGeneration: isSSG,
                    isOnDemandRevalidate
                })
            }, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/Desktop/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/Desktop/medical/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Desktop/medical/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"],
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"],
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$medical$2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => "[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_0 => "[project]/Desktop/medical/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Desktop/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Desktop/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Desktop/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Desktop/medical/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=Desktop_b87ea28c._.js.map