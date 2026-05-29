var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _QueryObserver_instances, executeFetch_fn, updateStaleTimeout_fn, computeRefetchInterval_fn, updateRefetchInterval_fn, updateTimers_fn, clearStaleTimeout_fn, clearRefetchInterval_fn, updateQuery_fn, notify_fn, _a, _client2, _currentResult2, _currentMutation, _mutateOptions, _MutationObserver_instances, updateResult_fn, notify_fn2, _b;
import { P as ProtocolError, T as TimeoutWaitingForResponseErrorCode, c as utf8ToBytes, E as ExternalError, M as MissingRootKeyErrorCode, C as Certificate, l as lookupResultToBuffer, R as RequestStatusResponseStatus, U as UnknownError, d as RequestStatusDoneNoReplyErrorCode, e as RejectError, f as CertifiedRejectErrorCode, g as UNREACHABLE_ERROR, I as InputError, h as InvalidReadStateRequestErrorCode, i as ReadRequestType, k as Principal, m as IDL, n as MissingCanisterIdErrorCode, H as HttpAgent, o as encode, Q as QueryResponseStatus, p as UncertifiedRejectErrorCode, q as isV3ResponseBody, s as isV2ResponseBody, t as UncertifiedRejectUpdateErrorCode, v as UnexpectedErrorCode, w as decode, S as Subscribable, x as pendingThenable, y as resolveEnabled, z as shallowEqualObjects, A as resolveStaleTime, B as noop, D as environmentManager, F as isValidTimeout, G as timeUntilStale, J as timeoutManager, K as focusManager, L as fetchState, N as replaceData, O as notifyManager, V as hashKey, W as getDefaultState, r as reactExports, X as shouldThrowError, Y as useQueryClient, Z as useInternetIdentity, _ as createActorWithConfig, $ as Record, a0 as Opt, a1 as Variant, a2 as Vec, a3 as Service, a4 as Func, a5 as Nat, a6 as Text, a7 as Int, a8 as Principal$1, a9 as Nat8, aa as Null, ab as Bool } from "./index-ByYMEgVg.js";
const FIVE_MINUTES_IN_MSEC = 5 * 60 * 1e3;
function defaultStrategy() {
  return chain(conditionalDelay(once(), 1e3), backoff(1e3, 1.2), timeout(FIVE_MINUTES_IN_MSEC));
}
function once() {
  let first = true;
  return async () => {
    if (first) {
      first = false;
      return true;
    }
    return false;
  };
}
function conditionalDelay(condition, timeInMsec) {
  return async (canisterId, requestId, status) => {
    if (await condition(canisterId, requestId, status)) {
      return new Promise((resolve) => setTimeout(resolve, timeInMsec));
    }
  };
}
function timeout(timeInMsec) {
  const end = Date.now() + timeInMsec;
  return async (_canisterId, requestId, status) => {
    if (Date.now() > end) {
      throw ProtocolError.fromCode(new TimeoutWaitingForResponseErrorCode(`Request timed out after ${timeInMsec} msec`, requestId, status));
    }
  };
}
function backoff(startingThrottleInMsec, backoffFactor) {
  let currentThrottling = startingThrottleInMsec;
  return () => new Promise((resolve) => setTimeout(() => {
    currentThrottling *= backoffFactor;
    resolve();
  }, currentThrottling));
}
function chain(...strategies) {
  return async (canisterId, requestId, status) => {
    for (const a of strategies) {
      await a(canisterId, requestId, status);
    }
  };
}
const DEFAULT_POLLING_OPTIONS = {
  preSignReadStateRequest: false
};
function hasProperty(value, property) {
  return Object.prototype.hasOwnProperty.call(value, property);
}
function isObjectWithProperty(value, property) {
  return value !== null && typeof value === "object" && hasProperty(value, property);
}
function hasFunction(value, property) {
  return hasProperty(value, property) && typeof value[property] === "function";
}
function isSignedReadStateRequestWithExpiry(value) {
  return isObjectWithProperty(value, "body") && isObjectWithProperty(value.body, "content") && value.body.content.request_type === ReadRequestType.ReadState && isObjectWithProperty(value.body.content, "ingress_expiry") && typeof value.body.content.ingress_expiry === "object" && value.body.content.ingress_expiry !== null && hasFunction(value.body.content.ingress_expiry, "toHash");
}
async function pollForResponse(agent, canisterId, requestId, options = {}) {
  const path = [utf8ToBytes("request_status"), requestId];
  let state;
  let currentRequest;
  const preSignReadStateRequest = options.preSignReadStateRequest ?? false;
  if (preSignReadStateRequest) {
    currentRequest = await constructRequest({
      paths: [path],
      agent,
      pollingOptions: options
    });
    state = await agent.readState(canisterId, { paths: [path] }, void 0, currentRequest);
  } else {
    state = await agent.readState(canisterId, { paths: [path] });
  }
  if (agent.rootKey == null) {
    throw ExternalError.fromCode(new MissingRootKeyErrorCode());
  }
  const cert = await Certificate.create({
    certificate: state.certificate,
    rootKey: agent.rootKey,
    canisterId,
    blsVerify: options.blsVerify,
    agent
  });
  const maybeBuf = lookupResultToBuffer(cert.lookup_path([...path, utf8ToBytes("status")]));
  let status;
  if (typeof maybeBuf === "undefined") {
    status = RequestStatusResponseStatus.Unknown;
  } else {
    status = new TextDecoder().decode(maybeBuf);
  }
  switch (status) {
    case RequestStatusResponseStatus.Replied: {
      return {
        reply: lookupResultToBuffer(cert.lookup_path([...path, "reply"])),
        certificate: cert
      };
    }
    case RequestStatusResponseStatus.Received:
    case RequestStatusResponseStatus.Unknown:
    case RequestStatusResponseStatus.Processing: {
      const strategy = options.strategy ?? defaultStrategy();
      await strategy(canisterId, requestId, status);
      return pollForResponse(agent, canisterId, requestId, {
        ...options,
        // Pass over either the strategy already provided or the new one created above
        strategy,
        request: currentRequest
      });
    }
    case RequestStatusResponseStatus.Rejected: {
      const rejectCode = new Uint8Array(lookupResultToBuffer(cert.lookup_path([...path, "reject_code"])))[0];
      const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(cert.lookup_path([...path, "reject_message"])));
      const errorCodeBuf = lookupResultToBuffer(cert.lookup_path([...path, "error_code"]));
      const errorCode = errorCodeBuf ? new TextDecoder().decode(errorCodeBuf) : void 0;
      throw RejectError.fromCode(new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, errorCode));
    }
    case RequestStatusResponseStatus.Done:
      throw UnknownError.fromCode(new RequestStatusDoneNoReplyErrorCode(requestId));
  }
  throw UNREACHABLE_ERROR;
}
async function constructRequest(options) {
  var _a2;
  const { paths, agent, pollingOptions } = options;
  if (pollingOptions.request && isSignedReadStateRequestWithExpiry(pollingOptions.request)) {
    return pollingOptions.request;
  }
  const request = await ((_a2 = agent.createReadStateRequest) == null ? void 0 : _a2.call(agent, {
    paths
  }, void 0));
  if (!isSignedReadStateRequestWithExpiry(request)) {
    throw InputError.fromCode(new InvalidReadStateRequestErrorCode(request));
  }
  return request;
}
const metadataSymbol = Symbol.for("ic-agent-metadata");
class Actor {
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (global.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(actor) {
    return actor[metadataSymbol].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(actor) {
    return actor[metadataSymbol].service;
  }
  static canisterIdOf(actor) {
    return Principal.from(actor[metadataSymbol].config.canisterId);
  }
  static createActorClass(interfaceFactory, options) {
    const service = interfaceFactory({ IDL });
    class CanisterActor extends Actor {
      constructor(config) {
        if (!config.canisterId) {
          throw InputError.fromCode(new MissingCanisterIdErrorCode(config.canisterId));
        }
        const canisterId = typeof config.canisterId === "string" ? Principal.fromText(config.canisterId) : config.canisterId;
        super({
          config: {
            ...DEFAULT_ACTOR_CONFIG,
            ...config,
            canisterId
          },
          service
        });
        for (const [methodName, func] of service._fields) {
          if (options == null ? void 0 : options.httpDetails) {
            func.annotations.push(ACTOR_METHOD_WITH_HTTP_DETAILS);
          }
          if (options == null ? void 0 : options.certificate) {
            func.annotations.push(ACTOR_METHOD_WITH_CERTIFICATE);
          }
          this[methodName] = _createActorMethod(this, methodName, func, config.blsVerify);
        }
      }
    }
    return CanisterActor;
  }
  /**
   * Creates an actor with the given interface factory and configuration.
   *
   * The [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package can be used to generate the interface factory for your canister.
   * @param interfaceFactory - the interface factory for the actor, typically generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package
   * @param configuration - the configuration for the actor
   * @returns an actor with the given interface factory and configuration
   * @example
   * Using the interface factory generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { Actor, HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { idlFactory } from './api/declarations/hello-world.did';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = Actor.createActor(idlFactory, {
   *   agent,
   *   canisterId,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   * @example
   * Using the `createActor` wrapper function generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { createActor } from './api/hello-world';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = createActor(canisterId, {
   *   agent,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   */
  static createActor(interfaceFactory, configuration) {
    if (!configuration.canisterId) {
      throw InputError.fromCode(new MissingCanisterIdErrorCode(configuration.canisterId));
    }
    return new (this.createActorClass(interfaceFactory))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @deprecated - use createActor with actorClassOptions instead
   */
  static createActorWithHttpDetails(interfaceFactory, configuration) {
    return new (this.createActorClass(interfaceFactory, { httpDetails: true }))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @param actorClassOptions - options for the actor class extended details to return with the result
   */
  static createActorWithExtendedDetails(interfaceFactory, configuration, actorClassOptions = {
    httpDetails: true,
    certificate: true
  }) {
    return new (this.createActorClass(interfaceFactory, actorClassOptions))(configuration);
  }
  constructor(metadata) {
    this[metadataSymbol] = Object.freeze(metadata);
  }
}
function decodeReturnValue(types, msg) {
  const returnValues = decode(types, msg);
  switch (returnValues.length) {
    case 0:
      return void 0;
    case 1:
      return returnValues[0];
    default:
      return returnValues;
  }
}
const DEFAULT_ACTOR_CONFIG = {
  pollingOptions: DEFAULT_POLLING_OPTIONS
};
const ACTOR_METHOD_WITH_HTTP_DETAILS = "http-details";
const ACTOR_METHOD_WITH_CERTIFICATE = "certificate";
function _createActorMethod(actor, methodName, func, blsVerify) {
  let caller;
  if (func.annotations.includes("query") || func.annotations.includes("composite_query")) {
    caller = async (options, ...args) => {
      var _a2, _b2;
      options = {
        ...options,
        ...(_b2 = (_a2 = actor[metadataSymbol].config).queryTransform) == null ? void 0 : _b2.call(_a2, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || new HttpAgent();
      const cid = Principal.from(options.canisterId || actor[metadataSymbol].config.canisterId);
      const arg = encode(func.argTypes, args);
      const result = await agent.query(cid, {
        methodName,
        arg,
        effectiveCanisterId: options.effectiveCanisterId
      });
      const httpDetails = {
        ...result.httpDetails,
        requestDetails: result.requestDetails
      };
      switch (result.status) {
        case QueryResponseStatus.Rejected: {
          const uncertifiedRejectErrorCode = new UncertifiedRejectErrorCode(result.requestId, result.reject_code, result.reject_message, result.error_code, result.signatures);
          uncertifiedRejectErrorCode.callContext = {
            canisterId: cid,
            methodName,
            httpDetails
          };
          throw RejectError.fromCode(uncertifiedRejectErrorCode);
        }
        case QueryResponseStatus.Replied:
          return func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS) ? {
            httpDetails,
            result: decodeReturnValue(func.retTypes, result.reply.arg)
          } : decodeReturnValue(func.retTypes, result.reply.arg);
      }
    };
  } else {
    caller = async (options, ...args) => {
      var _a2, _b2;
      options = {
        ...options,
        ...(_b2 = (_a2 = actor[metadataSymbol].config).callTransform) == null ? void 0 : _b2.call(_a2, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || HttpAgent.createSync();
      const { canisterId, effectiveCanisterId, pollingOptions } = {
        ...DEFAULT_ACTOR_CONFIG,
        ...actor[metadataSymbol].config,
        ...options
      };
      const cid = Principal.from(canisterId);
      const ecid = effectiveCanisterId !== void 0 ? Principal.from(effectiveCanisterId) : cid;
      const arg = encode(func.argTypes, args);
      const { requestId, response, requestDetails } = await agent.call(cid, {
        methodName,
        arg,
        effectiveCanisterId: ecid,
        nonce: options.nonce
      });
      let reply;
      let certificate;
      if (isV3ResponseBody(response.body)) {
        if (agent.rootKey == null) {
          throw ExternalError.fromCode(new MissingRootKeyErrorCode());
        }
        const cert = response.body.certificate;
        certificate = await Certificate.create({
          certificate: cert,
          rootKey: agent.rootKey,
          canisterId: ecid,
          blsVerify,
          agent
        });
        const path = [utf8ToBytes("request_status"), requestId];
        const status = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "status"])));
        switch (status) {
          case "replied":
            reply = lookupResultToBuffer(certificate.lookup_path([...path, "reply"]));
            break;
          case "rejected": {
            const rejectCode = new Uint8Array(lookupResultToBuffer(certificate.lookup_path([...path, "reject_code"])))[0];
            const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "reject_message"])));
            const error_code_buf = lookupResultToBuffer(certificate.lookup_path([...path, "error_code"]));
            const error_code = error_code_buf ? new TextDecoder().decode(error_code_buf) : void 0;
            const certifiedRejectErrorCode = new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, error_code);
            certifiedRejectErrorCode.callContext = {
              canisterId: cid,
              methodName,
              httpDetails: response
            };
            throw RejectError.fromCode(certifiedRejectErrorCode);
          }
        }
      } else if (isV2ResponseBody(response.body)) {
        const { reject_code, reject_message, error_code } = response.body;
        const errorCode = new UncertifiedRejectUpdateErrorCode(requestId, reject_code, reject_message, error_code);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails: response
        };
        throw RejectError.fromCode(errorCode);
      }
      if (response.status === 202) {
        const pollOptions = {
          ...pollingOptions,
          blsVerify
        };
        const response2 = await pollForResponse(agent, ecid, requestId, pollOptions);
        certificate = response2.certificate;
        reply = response2.reply;
      }
      const shouldIncludeHttpDetails = func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS);
      const shouldIncludeCertificate = func.annotations.includes(ACTOR_METHOD_WITH_CERTIFICATE);
      const httpDetails = { ...response, requestDetails };
      if (reply !== void 0) {
        if (shouldIncludeHttpDetails && shouldIncludeCertificate) {
          return {
            httpDetails,
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeCertificate) {
          return {
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeHttpDetails) {
          return {
            httpDetails,
            result: decodeReturnValue(func.retTypes, reply)
          };
        }
        return decodeReturnValue(func.retTypes, reply);
      } else {
        const errorCode = new UnexpectedErrorCode(`Call was returned undefined. We cannot determine if the call was successful or not. Return types: [${func.retTypes.map((t) => t.display()).join(",")}].`);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails
        };
        throw UnknownError.fromCode(errorCode);
      }
    };
  }
  const handler = (...args) => caller({}, ...args);
  handler.withOptions = (options) => (...args) => caller(options, ...args);
  return handler;
}
var QueryObserver = (_a = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _QueryObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentQuery);
    __privateAdd(this, _currentQueryInitialState);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentResultState);
    __privateAdd(this, _currentResultOptions);
    __privateAdd(this, _currentThenable);
    __privateAdd(this, _selectError);
    __privateAdd(this, _selectFn);
    __privateAdd(this, _selectResult);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData);
    __privateAdd(this, _staleTimeoutId);
    __privateAdd(this, _refetchIntervalId);
    __privateAdd(this, _currentRefetchInterval);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client, client);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
    __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
    this.updateResult();
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked == null ? void 0 : onPropTracked(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && __privateGet(this, _currentThenable).status === "pending") {
            __privateGet(this, _currentThenable).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    __privateGet(this, _trackedProps).add(key);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client).defaultQueryOptions(options);
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this, {
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a2;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a2 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a2.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: query.isFetched(),
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable),
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = __privateGet(this, _currentThenable);
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key) => {
        const typedKey = key;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    __privateMethod(this, _QueryObserver_instances, notify_fn).call(this, { listeners: shouldNotifyListeners() });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
}, _client = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), _QueryObserver_instances = new WeakSet(), executeFetch_fn = function(fetchOptions) {
  __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop);
  }
  return promise;
}, updateStaleTimeout_fn = function() {
  __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (environmentManager.isServer() || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout2 = time + 1;
  __privateSet(this, _staleTimeoutId, timeoutManager.setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout2));
}, computeRefetchInterval_fn = function() {
  return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) ?? false;
}, updateRefetchInterval_fn = function(nextInterval) {
  __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (environmentManager.isServer() || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, timeoutManager.setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, updateTimers_fn = function() {
  __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
  __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this));
}, clearStaleTimeout_fn = function() {
  if (__privateGet(this, _staleTimeoutId)) {
    timeoutManager.clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, clearRefetchInterval_fn = function() {
  if (__privateGet(this, _refetchIntervalId)) {
    timeoutManager.clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, updateQuery_fn = function() {
  const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, notify_fn = function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, _a);
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
var MutationObserver = (_b = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _MutationObserver_instances);
    __privateAdd(this, _client2);
    __privateAdd(this, _currentResult2);
    __privateAdd(this, _currentMutation);
    __privateAdd(this, _mutateOptions);
    __privateSet(this, _client2, client);
    this.setOptions(options);
    this.bindMethods();
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a2;
    const prevOptions = this.options;
    this.options = __privateGet(this, _client2).defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client2).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _currentMutation),
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state.status) === "pending") {
      __privateGet(this, _currentMutation).setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn2).call(this, action);
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult2);
  }
  reset() {
    var _a2;
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, void 0);
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn2).call(this);
  }
  mutate(variables, options) {
    var _a2;
    __privateSet(this, _mutateOptions, options);
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, __privateGet(this, _client2).getMutationCache().build(__privateGet(this, _client2), this.options));
    __privateGet(this, _currentMutation).addObserver(this);
    return __privateGet(this, _currentMutation).execute(variables);
  }
}, _client2 = new WeakMap(), _currentResult2 = new WeakMap(), _currentMutation = new WeakMap(), _mutateOptions = new WeakMap(), _MutationObserver_instances = new WeakSet(), updateResult_fn = function() {
  var _a2;
  const state = ((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state) ?? getDefaultState();
  __privateSet(this, _currentResult2, {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    isIdle: state.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, notify_fn2 = function(action) {
  notifyManager.batch(() => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    if (__privateGet(this, _mutateOptions) && this.hasListeners()) {
      const variables = __privateGet(this, _currentResult2).variables;
      const onMutateResult = __privateGet(this, _currentResult2).context;
      const context = {
        client: __privateGet(this, _client2),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((action == null ? void 0 : action.type) === "success") {
        try {
          (_b2 = (_a2 = __privateGet(this, _mutateOptions)).onSuccess) == null ? void 0 : _b2.call(
            _a2,
            action.data,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_d = (_c = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _d.call(
            _c,
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      } else if ((action == null ? void 0 : action.type) === "error") {
        try {
          (_f = (_e = __privateGet(this, _mutateOptions)).onError) == null ? void 0 : _f.call(
            _e,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_h = (_g = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      }
    }
    this.listeners.forEach((listener) => {
      listener(__privateGet(this, _currentResult2));
    });
  });
}, _b);
var IsRestoringContext = reactExports.createContext(false);
var useIsRestoring = () => reactExports.useContext(IsRestoringContext);
IsRestoringContext.Provider;
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = reactExports.createContext(createValue());
var useQueryErrorResetBoundary = () => reactExports.useContext(QueryErrorResetBoundaryContext);
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  reactExports.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
function useBaseQuery(options, Observer, queryClient) {
  var _a2, _b2, _c, _d;
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = useQueryClient();
  const defaultedOptions = client.defaultQueryOptions(options);
  (_b2 = (_a2 = client.getDefaultOptions().queries) == null ? void 0 : _a2._experimental_beforeQuery) == null ? void 0 : _b2.call(
    _a2,
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = reactExports.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  reactExports.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  (_d = (_c = client.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null ? void 0 : _d.call(
    _c,
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query == null ? void 0 : query.promise
    );
    promise == null ? void 0 : promise.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function hasAccessControl(actor) {
  return typeof actor === "object" && actor !== null && "_initializeAccessControl" in actor;
}
const ACTOR_QUERY_KEY = "actor";
function useActor(createActor2) {
  const { identity, isAuthenticated } = useInternetIdentity();
  const queryClient = useQueryClient();
  const actorQuery = useQuery({
    queryKey: [ACTOR_QUERY_KEY, identity == null ? void 0 : identity.getPrincipal().toString()],
    queryFn: async () => {
      if (!isAuthenticated) {
        return await createActorWithConfig(createActor2);
      }
      const actorOptions = {
        agentOptions: {
          identity
        }
      };
      const actor = await createActorWithConfig(createActor2, actorOptions);
      if (hasAccessControl(actor)) {
        await actor._initializeAccessControl();
      }
      return actor;
    },
    // Only refetch when identity changes
    staleTime: Number.POSITIVE_INFINITY,
    // This will cause the actor to be recreated when the identity changes
    enabled: true
  });
  reactExports.useEffect(() => {
    if (actorQuery.data) {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
      queryClient.refetchQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
    }
  }, [actorQuery.data, queryClient]);
  return {
    actor: actorQuery.data || null,
    isFetching: actorQuery.isFetching
  };
}
const _ImmutableObjectStorageCreateCertificateResult = Record({
  "method": Text,
  "blob_hash": Text
});
const _ImmutableObjectStorageRefillInformation = Record({
  "proposed_top_up_amount": Opt(Nat)
});
const _ImmutableObjectStorageRefillResult = Record({
  "success": Opt(Bool),
  "topped_up_amount": Opt(Nat)
});
const JobId = Nat;
const ApplicationId = Nat;
const UserId = Principal$1;
const UserRole__1 = Variant({
  "admin": Null,
  "user": Null,
  "guest": Null
});
const ExternalBlob = Vec(Nat8);
const ExperienceEntry = Record({
  "title": Text,
  "endDate": Opt(Text),
  "description": Text,
  "company": Text,
  "startDate": Text
});
const EmployeeProfile = Record({
  "userId": UserId,
  "resumeFileId": Opt(ExternalBlob),
  "experience": Vec(ExperienceEntry),
  "phone": Text,
  "skills": Vec(Text),
  "location": Text,
  "professionalSummary": Text
});
const EmployerStatus = Variant({
  "pending": Null,
  "approved": Null,
  "suspended": Null
});
const EmployerProfile = Record({
  "status": EmployerStatus,
  "userId": UserId,
  "description": Text,
  "companyEmail": Text,
  "companyName": Text,
  "companySize": Text,
  "industry": Text
});
const ApplicationStatus = Variant({
  "offer": Null,
  "interview": Null,
  "applied": Null,
  "rejected": Null,
  "shortlisted": Null
});
const Timestamp = Int;
const JobApplication = Record({
  "status": ApplicationStatus,
  "appliedAt": Timestamp,
  "applicationId": ApplicationId,
  "jobId": JobId,
  "updatedAt": Timestamp,
  "employeeId": UserId,
  "notes": Opt(Text)
});
const JobStatus = Variant({
  "closed": Null,
  "active": Null,
  "draft": Null
});
const JobType = Variant({
  "contract": Null,
  "partTime": Null,
  "fullTime": Null
});
const JobListing = Record({
  "applicationDeadline": Timestamp,
  "status": JobStatus,
  "title": Text,
  "jobType": JobType,
  "createdAt": Timestamp,
  "experienceRequired": Nat,
  "jobId": JobId,
  "skillsRequired": Vec(Text),
  "description": Text,
  "updatedAt": Timestamp,
  "employerId": UserId,
  "salaryMax": Nat,
  "salaryMin": Nat,
  "location": Text
});
const UserStatus = Variant({
  "active": Null,
  "inactive": Null
});
const UserRole = Variant({
  "admin": Null,
  "employee": Null,
  "employer": Null
});
const User = Record({
  "status": UserStatus,
  "principal": UserId,
  "name": Text,
  "createdAt": Timestamp,
  "role": UserRole,
  "email": Text
});
const PlatformStats = Record({
  "totalEmployees": Nat,
  "totalEmployers": Nat,
  "totalJobs": Nat,
  "totalUsers": Nat,
  "activeJobs": Nat,
  "totalApplications": Nat
});
const JobSearchFilter = Record({
  "jobType": Opt(JobType),
  "salaryMax": Opt(Nat),
  "salaryMin": Opt(Nat),
  "keyword": Opt(Text),
  "location": Opt(Text)
});
Service({
  "_immutableObjectStorageBlobsAreLive": Func(
    [Vec(Vec(Nat8))],
    [Vec(Bool)],
    ["query"]
  ),
  "_immutableObjectStorageBlobsToDelete": Func(
    [],
    [Vec(Vec(Nat8))],
    ["query"]
  ),
  "_immutableObjectStorageConfirmBlobDeletion": Func(
    [Vec(Vec(Nat8))],
    [],
    []
  ),
  "_immutableObjectStorageCreateCertificate": Func(
    [Text],
    [_ImmutableObjectStorageCreateCertificateResult],
    []
  ),
  "_immutableObjectStorageRefillCashier": Func(
    [Opt(_ImmutableObjectStorageRefillInformation)],
    [_ImmutableObjectStorageRefillResult],
    []
  ),
  "_immutableObjectStorageUpdateGatewayPrincipals": Func([], [], []),
  "_initializeAccessControl": Func([], [], []),
  "applyToJob": Func([JobId], [ApplicationId], []),
  "approveEmployer": Func([UserId], [], []),
  "approveJob": Func([JobId], [], []),
  "assignCallerUserRole": Func([Principal$1, UserRole__1], [], []),
  "deactivateUser": Func([UserId], [], []),
  "getCallerUserRole": Func([], [UserRole__1], ["query"]),
  "getEmployeeProfile": Func(
    [UserId],
    [Opt(EmployeeProfile)],
    ["query"]
  ),
  "getEmployerProfile": Func(
    [UserId],
    [Opt(EmployerProfile)],
    ["query"]
  ),
  "getJobApplications": Func(
    [JobId],
    [Vec(JobApplication)],
    ["query"]
  ),
  "getJobDetails": Func([JobId], [Opt(JobListing)], ["query"]),
  "getMyApplications": Func([], [Vec(JobApplication)], ["query"]),
  "getMyEmployerJobs": Func([], [Vec(JobListing)], ["query"]),
  "getMyProfile": Func([], [Opt(User)], ["query"]),
  "getPlatformStats": Func([], [PlatformStats], ["query"]),
  "getSavedJobs": Func([], [Vec(JobListing)], ["query"]),
  "getUserList": Func([], [Vec(User)], ["query"]),
  "isCallerAdmin": Func([], [Bool], ["query"]),
  "postJob": Func(
    [
      Text,
      Text,
      Text,
      Nat,
      Nat,
      Nat,
      JobType,
      Vec(Text),
      Timestamp
    ],
    [JobId],
    []
  ),
  "reactivateUser": Func([UserId], [], []),
  "registerUser": Func([UserRole, Text, Text], [], []),
  "rejectJob": Func([JobId], [], []),
  "saveJob": Func([JobId], [], []),
  "searchJobs": Func([JobSearchFilter], [Vec(JobListing)], ["query"]),
  "suspendEmployer": Func([UserId], [], []),
  "unsaveJob": Func([JobId], [], []),
  "updateApplicationStatus": Func(
    [ApplicationId, ApplicationStatus, Opt(Text)],
    [],
    []
  ),
  "updateEmployeeProfile": Func(
    [
      Text,
      Text,
      Vec(Text),
      Text,
      Vec(ExperienceEntry),
      Opt(ExternalBlob)
    ],
    [],
    []
  ),
  "updateEmployerProfile": Func(
    [Text, Text, Text, Text, Text],
    [],
    []
  ),
  "updateJob": Func(
    [
      JobId,
      Text,
      Text,
      Text,
      Nat,
      Nat,
      Nat,
      JobType,
      Vec(Text),
      JobStatus,
      Timestamp
    ],
    [],
    []
  )
});
const idlFactory = ({ IDL: IDL2 }) => {
  const _ImmutableObjectStorageCreateCertificateResult2 = IDL2.Record({
    "method": IDL2.Text,
    "blob_hash": IDL2.Text
  });
  const _ImmutableObjectStorageRefillInformation2 = IDL2.Record({
    "proposed_top_up_amount": IDL2.Opt(IDL2.Nat)
  });
  const _ImmutableObjectStorageRefillResult2 = IDL2.Record({
    "success": IDL2.Opt(IDL2.Bool),
    "topped_up_amount": IDL2.Opt(IDL2.Nat)
  });
  const JobId2 = IDL2.Nat;
  const ApplicationId2 = IDL2.Nat;
  const UserId2 = IDL2.Principal;
  const UserRole__12 = IDL2.Variant({
    "admin": IDL2.Null,
    "user": IDL2.Null,
    "guest": IDL2.Null
  });
  const ExternalBlob2 = IDL2.Vec(IDL2.Nat8);
  const ExperienceEntry2 = IDL2.Record({
    "title": IDL2.Text,
    "endDate": IDL2.Opt(IDL2.Text),
    "description": IDL2.Text,
    "company": IDL2.Text,
    "startDate": IDL2.Text
  });
  const EmployeeProfile2 = IDL2.Record({
    "userId": UserId2,
    "resumeFileId": IDL2.Opt(ExternalBlob2),
    "experience": IDL2.Vec(ExperienceEntry2),
    "phone": IDL2.Text,
    "skills": IDL2.Vec(IDL2.Text),
    "location": IDL2.Text,
    "professionalSummary": IDL2.Text
  });
  const EmployerStatus2 = IDL2.Variant({
    "pending": IDL2.Null,
    "approved": IDL2.Null,
    "suspended": IDL2.Null
  });
  const EmployerProfile2 = IDL2.Record({
    "status": EmployerStatus2,
    "userId": UserId2,
    "description": IDL2.Text,
    "companyEmail": IDL2.Text,
    "companyName": IDL2.Text,
    "companySize": IDL2.Text,
    "industry": IDL2.Text
  });
  const ApplicationStatus2 = IDL2.Variant({
    "offer": IDL2.Null,
    "interview": IDL2.Null,
    "applied": IDL2.Null,
    "rejected": IDL2.Null,
    "shortlisted": IDL2.Null
  });
  const Timestamp2 = IDL2.Int;
  const JobApplication2 = IDL2.Record({
    "status": ApplicationStatus2,
    "appliedAt": Timestamp2,
    "applicationId": ApplicationId2,
    "jobId": JobId2,
    "updatedAt": Timestamp2,
    "employeeId": UserId2,
    "notes": IDL2.Opt(IDL2.Text)
  });
  const JobStatus2 = IDL2.Variant({
    "closed": IDL2.Null,
    "active": IDL2.Null,
    "draft": IDL2.Null
  });
  const JobType2 = IDL2.Variant({
    "contract": IDL2.Null,
    "partTime": IDL2.Null,
    "fullTime": IDL2.Null
  });
  const JobListing2 = IDL2.Record({
    "applicationDeadline": Timestamp2,
    "status": JobStatus2,
    "title": IDL2.Text,
    "jobType": JobType2,
    "createdAt": Timestamp2,
    "experienceRequired": IDL2.Nat,
    "jobId": JobId2,
    "skillsRequired": IDL2.Vec(IDL2.Text),
    "description": IDL2.Text,
    "updatedAt": Timestamp2,
    "employerId": UserId2,
    "salaryMax": IDL2.Nat,
    "salaryMin": IDL2.Nat,
    "location": IDL2.Text
  });
  const UserStatus2 = IDL2.Variant({
    "active": IDL2.Null,
    "inactive": IDL2.Null
  });
  const UserRole2 = IDL2.Variant({
    "admin": IDL2.Null,
    "employee": IDL2.Null,
    "employer": IDL2.Null
  });
  const User2 = IDL2.Record({
    "status": UserStatus2,
    "principal": UserId2,
    "name": IDL2.Text,
    "createdAt": Timestamp2,
    "role": UserRole2,
    "email": IDL2.Text
  });
  const PlatformStats2 = IDL2.Record({
    "totalEmployees": IDL2.Nat,
    "totalEmployers": IDL2.Nat,
    "totalJobs": IDL2.Nat,
    "totalUsers": IDL2.Nat,
    "activeJobs": IDL2.Nat,
    "totalApplications": IDL2.Nat
  });
  const JobSearchFilter2 = IDL2.Record({
    "jobType": IDL2.Opt(JobType2),
    "salaryMax": IDL2.Opt(IDL2.Nat),
    "salaryMin": IDL2.Opt(IDL2.Nat),
    "keyword": IDL2.Opt(IDL2.Text),
    "location": IDL2.Opt(IDL2.Text)
  });
  return IDL2.Service({
    "_immutableObjectStorageBlobsAreLive": IDL2.Func(
      [IDL2.Vec(IDL2.Vec(IDL2.Nat8))],
      [IDL2.Vec(IDL2.Bool)],
      ["query"]
    ),
    "_immutableObjectStorageBlobsToDelete": IDL2.Func(
      [],
      [IDL2.Vec(IDL2.Vec(IDL2.Nat8))],
      ["query"]
    ),
    "_immutableObjectStorageConfirmBlobDeletion": IDL2.Func(
      [IDL2.Vec(IDL2.Vec(IDL2.Nat8))],
      [],
      []
    ),
    "_immutableObjectStorageCreateCertificate": IDL2.Func(
      [IDL2.Text],
      [_ImmutableObjectStorageCreateCertificateResult2],
      []
    ),
    "_immutableObjectStorageRefillCashier": IDL2.Func(
      [IDL2.Opt(_ImmutableObjectStorageRefillInformation2)],
      [_ImmutableObjectStorageRefillResult2],
      []
    ),
    "_immutableObjectStorageUpdateGatewayPrincipals": IDL2.Func([], [], []),
    "_initializeAccessControl": IDL2.Func([], [], []),
    "applyToJob": IDL2.Func([JobId2], [ApplicationId2], []),
    "approveEmployer": IDL2.Func([UserId2], [], []),
    "approveJob": IDL2.Func([JobId2], [], []),
    "assignCallerUserRole": IDL2.Func([IDL2.Principal, UserRole__12], [], []),
    "deactivateUser": IDL2.Func([UserId2], [], []),
    "getCallerUserRole": IDL2.Func([], [UserRole__12], ["query"]),
    "getEmployeeProfile": IDL2.Func(
      [UserId2],
      [IDL2.Opt(EmployeeProfile2)],
      ["query"]
    ),
    "getEmployerProfile": IDL2.Func(
      [UserId2],
      [IDL2.Opt(EmployerProfile2)],
      ["query"]
    ),
    "getJobApplications": IDL2.Func(
      [JobId2],
      [IDL2.Vec(JobApplication2)],
      ["query"]
    ),
    "getJobDetails": IDL2.Func([JobId2], [IDL2.Opt(JobListing2)], ["query"]),
    "getMyApplications": IDL2.Func([], [IDL2.Vec(JobApplication2)], ["query"]),
    "getMyEmployerJobs": IDL2.Func([], [IDL2.Vec(JobListing2)], ["query"]),
    "getMyProfile": IDL2.Func([], [IDL2.Opt(User2)], ["query"]),
    "getPlatformStats": IDL2.Func([], [PlatformStats2], ["query"]),
    "getSavedJobs": IDL2.Func([], [IDL2.Vec(JobListing2)], ["query"]),
    "getUserList": IDL2.Func([], [IDL2.Vec(User2)], ["query"]),
    "isCallerAdmin": IDL2.Func([], [IDL2.Bool], ["query"]),
    "postJob": IDL2.Func(
      [
        IDL2.Text,
        IDL2.Text,
        IDL2.Text,
        IDL2.Nat,
        IDL2.Nat,
        IDL2.Nat,
        JobType2,
        IDL2.Vec(IDL2.Text),
        Timestamp2
      ],
      [JobId2],
      []
    ),
    "reactivateUser": IDL2.Func([UserId2], [], []),
    "registerUser": IDL2.Func([UserRole2, IDL2.Text, IDL2.Text], [], []),
    "rejectJob": IDL2.Func([JobId2], [], []),
    "saveJob": IDL2.Func([JobId2], [], []),
    "searchJobs": IDL2.Func(
      [JobSearchFilter2],
      [IDL2.Vec(JobListing2)],
      ["query"]
    ),
    "suspendEmployer": IDL2.Func([UserId2], [], []),
    "unsaveJob": IDL2.Func([JobId2], [], []),
    "updateApplicationStatus": IDL2.Func(
      [ApplicationId2, ApplicationStatus2, IDL2.Opt(IDL2.Text)],
      [],
      []
    ),
    "updateEmployeeProfile": IDL2.Func(
      [
        IDL2.Text,
        IDL2.Text,
        IDL2.Vec(IDL2.Text),
        IDL2.Text,
        IDL2.Vec(ExperienceEntry2),
        IDL2.Opt(ExternalBlob2)
      ],
      [],
      []
    ),
    "updateEmployerProfile": IDL2.Func(
      [IDL2.Text, IDL2.Text, IDL2.Text, IDL2.Text, IDL2.Text],
      [],
      []
    ),
    "updateJob": IDL2.Func(
      [
        JobId2,
        IDL2.Text,
        IDL2.Text,
        IDL2.Text,
        IDL2.Nat,
        IDL2.Nat,
        IDL2.Nat,
        JobType2,
        IDL2.Vec(IDL2.Text),
        JobStatus2,
        Timestamp2
      ],
      [],
      []
    )
  });
};
function candid_some(value) {
  return [
    value
  ];
}
function candid_none() {
  return [];
}
function record_opt_to_undefined(arg) {
  return arg == null ? void 0 : arg;
}
class Backend {
  constructor(actor, _uploadFile, _downloadFile, processError) {
    this.actor = actor;
    this._uploadFile = _uploadFile;
    this._downloadFile = _downloadFile;
    this.processError = processError;
  }
  async _immutableObjectStorageBlobsAreLive(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor._immutableObjectStorageBlobsAreLive(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor._immutableObjectStorageBlobsAreLive(arg0);
      return result;
    }
  }
  async _immutableObjectStorageBlobsToDelete() {
    if (this.processError) {
      try {
        const result = await this.actor._immutableObjectStorageBlobsToDelete();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor._immutableObjectStorageBlobsToDelete();
      return result;
    }
  }
  async _immutableObjectStorageConfirmBlobDeletion(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor._immutableObjectStorageConfirmBlobDeletion(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor._immutableObjectStorageConfirmBlobDeletion(arg0);
      return result;
    }
  }
  async _immutableObjectStorageCreateCertificate(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor._immutableObjectStorageCreateCertificate(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor._immutableObjectStorageCreateCertificate(arg0);
      return result;
    }
  }
  async _immutableObjectStorageRefillCashier(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor._immutableObjectStorageRefillCashier(to_candid_opt_n1(this._uploadFile, this._downloadFile, arg0));
        return from_candid__ImmutableObjectStorageRefillResult_n4(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor._immutableObjectStorageRefillCashier(to_candid_opt_n1(this._uploadFile, this._downloadFile, arg0));
      return from_candid__ImmutableObjectStorageRefillResult_n4(this._uploadFile, this._downloadFile, result);
    }
  }
  async _immutableObjectStorageUpdateGatewayPrincipals() {
    if (this.processError) {
      try {
        const result = await this.actor._immutableObjectStorageUpdateGatewayPrincipals();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor._immutableObjectStorageUpdateGatewayPrincipals();
      return result;
    }
  }
  async _initializeAccessControl() {
    if (this.processError) {
      try {
        const result = await this.actor._initializeAccessControl();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor._initializeAccessControl();
      return result;
    }
  }
  async applyToJob(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.applyToJob(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.applyToJob(arg0);
      return result;
    }
  }
  async approveEmployer(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.approveEmployer(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.approveEmployer(arg0);
      return result;
    }
  }
  async approveJob(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.approveJob(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.approveJob(arg0);
      return result;
    }
  }
  async assignCallerUserRole(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.assignCallerUserRole(arg0, to_candid_UserRole__1_n8(this._uploadFile, this._downloadFile, arg1));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.assignCallerUserRole(arg0, to_candid_UserRole__1_n8(this._uploadFile, this._downloadFile, arg1));
      return result;
    }
  }
  async deactivateUser(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.deactivateUser(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.deactivateUser(arg0);
      return result;
    }
  }
  async getCallerUserRole() {
    if (this.processError) {
      try {
        const result = await this.actor.getCallerUserRole();
        return from_candid_UserRole__1_n10(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getCallerUserRole();
      return from_candid_UserRole__1_n10(this._uploadFile, this._downloadFile, result);
    }
  }
  async getEmployeeProfile(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getEmployeeProfile(arg0);
        return from_candid_opt_n12(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getEmployeeProfile(arg0);
      return from_candid_opt_n12(this._uploadFile, this._downloadFile, result);
    }
  }
  async getEmployerProfile(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getEmployerProfile(arg0);
        return from_candid_opt_n21(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getEmployerProfile(arg0);
      return from_candid_opt_n21(this._uploadFile, this._downloadFile, result);
    }
  }
  async getJobApplications(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getJobApplications(arg0);
        return from_candid_vec_n26(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getJobApplications(arg0);
      return from_candid_vec_n26(this._uploadFile, this._downloadFile, result);
    }
  }
  async getJobDetails(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getJobDetails(arg0);
        return from_candid_opt_n31(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getJobDetails(arg0);
      return from_candid_opt_n31(this._uploadFile, this._downloadFile, result);
    }
  }
  async getMyApplications() {
    if (this.processError) {
      try {
        const result = await this.actor.getMyApplications();
        return from_candid_vec_n26(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getMyApplications();
      return from_candid_vec_n26(this._uploadFile, this._downloadFile, result);
    }
  }
  async getMyEmployerJobs() {
    if (this.processError) {
      try {
        const result = await this.actor.getMyEmployerJobs();
        return from_candid_vec_n38(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getMyEmployerJobs();
      return from_candid_vec_n38(this._uploadFile, this._downloadFile, result);
    }
  }
  async getMyProfile() {
    if (this.processError) {
      try {
        const result = await this.actor.getMyProfile();
        return from_candid_opt_n39(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getMyProfile();
      return from_candid_opt_n39(this._uploadFile, this._downloadFile, result);
    }
  }
  async getPlatformStats() {
    if (this.processError) {
      try {
        const result = await this.actor.getPlatformStats();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getPlatformStats();
      return result;
    }
  }
  async getSavedJobs() {
    if (this.processError) {
      try {
        const result = await this.actor.getSavedJobs();
        return from_candid_vec_n38(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getSavedJobs();
      return from_candid_vec_n38(this._uploadFile, this._downloadFile, result);
    }
  }
  async getUserList() {
    if (this.processError) {
      try {
        const result = await this.actor.getUserList();
        return from_candid_vec_n46(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getUserList();
      return from_candid_vec_n46(this._uploadFile, this._downloadFile, result);
    }
  }
  async isCallerAdmin() {
    if (this.processError) {
      try {
        const result = await this.actor.isCallerAdmin();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.isCallerAdmin();
      return result;
    }
  }
  async postJob(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    if (this.processError) {
      try {
        const result = await this.actor.postJob(arg0, arg1, arg2, arg3, arg4, arg5, to_candid_JobType_n47(this._uploadFile, this._downloadFile, arg6), arg7, arg8);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.postJob(arg0, arg1, arg2, arg3, arg4, arg5, to_candid_JobType_n47(this._uploadFile, this._downloadFile, arg6), arg7, arg8);
      return result;
    }
  }
  async reactivateUser(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.reactivateUser(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.reactivateUser(arg0);
      return result;
    }
  }
  async registerUser(arg0, arg1, arg2) {
    if (this.processError) {
      try {
        const result = await this.actor.registerUser(to_candid_UserRole_n49(this._uploadFile, this._downloadFile, arg0), arg1, arg2);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.registerUser(to_candid_UserRole_n49(this._uploadFile, this._downloadFile, arg0), arg1, arg2);
      return result;
    }
  }
  async rejectJob(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.rejectJob(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.rejectJob(arg0);
      return result;
    }
  }
  async saveJob(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.saveJob(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.saveJob(arg0);
      return result;
    }
  }
  async searchJobs(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.searchJobs(to_candid_JobSearchFilter_n51(this._uploadFile, this._downloadFile, arg0));
        return from_candid_vec_n38(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.searchJobs(to_candid_JobSearchFilter_n51(this._uploadFile, this._downloadFile, arg0));
      return from_candid_vec_n38(this._uploadFile, this._downloadFile, result);
    }
  }
  async suspendEmployer(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.suspendEmployer(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.suspendEmployer(arg0);
      return result;
    }
  }
  async unsaveJob(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.unsaveJob(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.unsaveJob(arg0);
      return result;
    }
  }
  async updateApplicationStatus(arg0, arg1, arg2) {
    if (this.processError) {
      try {
        const result = await this.actor.updateApplicationStatus(arg0, to_candid_ApplicationStatus_n53(this._uploadFile, this._downloadFile, arg1), to_candid_opt_n55(this._uploadFile, this._downloadFile, arg2));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.updateApplicationStatus(arg0, to_candid_ApplicationStatus_n53(this._uploadFile, this._downloadFile, arg1), to_candid_opt_n55(this._uploadFile, this._downloadFile, arg2));
      return result;
    }
  }
  async updateEmployeeProfile(arg0, arg1, arg2, arg3, arg4, arg5) {
    if (this.processError) {
      try {
        const result = await this.actor.updateEmployeeProfile(arg0, arg1, arg2, arg3, to_candid_vec_n56(this._uploadFile, this._downloadFile, arg4), await to_candid_opt_n59(this._uploadFile, this._downloadFile, arg5));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.updateEmployeeProfile(arg0, arg1, arg2, arg3, to_candid_vec_n56(this._uploadFile, this._downloadFile, arg4), await to_candid_opt_n59(this._uploadFile, this._downloadFile, arg5));
      return result;
    }
  }
  async updateEmployerProfile(arg0, arg1, arg2, arg3, arg4) {
    if (this.processError) {
      try {
        const result = await this.actor.updateEmployerProfile(arg0, arg1, arg2, arg3, arg4);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.updateEmployerProfile(arg0, arg1, arg2, arg3, arg4);
      return result;
    }
  }
  async updateJob(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    if (this.processError) {
      try {
        const result = await this.actor.updateJob(arg0, arg1, arg2, arg3, arg4, arg5, arg6, to_candid_JobType_n47(this._uploadFile, this._downloadFile, arg7), arg8, to_candid_JobStatus_n61(this._uploadFile, this._downloadFile, arg9), arg10);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.updateJob(arg0, arg1, arg2, arg3, arg4, arg5, arg6, to_candid_JobType_n47(this._uploadFile, this._downloadFile, arg7), arg8, to_candid_JobStatus_n61(this._uploadFile, this._downloadFile, arg9), arg10);
      return result;
    }
  }
}
function from_candid_ApplicationStatus_n29(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n30(_uploadFile, _downloadFile, value);
}
async function from_candid_EmployeeProfile_n13(_uploadFile, _downloadFile, value) {
  return await from_candid_record_n14(_uploadFile, _downloadFile, value);
}
function from_candid_EmployerProfile_n22(_uploadFile, _downloadFile, value) {
  return from_candid_record_n23(_uploadFile, _downloadFile, value);
}
function from_candid_EmployerStatus_n24(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n25(_uploadFile, _downloadFile, value);
}
function from_candid_ExperienceEntry_n18(_uploadFile, _downloadFile, value) {
  return from_candid_record_n19(_uploadFile, _downloadFile, value);
}
async function from_candid_ExternalBlob_n16(_uploadFile, _downloadFile, value) {
  return await _downloadFile(value);
}
function from_candid_JobApplication_n27(_uploadFile, _downloadFile, value) {
  return from_candid_record_n28(_uploadFile, _downloadFile, value);
}
function from_candid_JobListing_n32(_uploadFile, _downloadFile, value) {
  return from_candid_record_n33(_uploadFile, _downloadFile, value);
}
function from_candid_JobStatus_n34(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n35(_uploadFile, _downloadFile, value);
}
function from_candid_JobType_n36(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n37(_uploadFile, _downloadFile, value);
}
function from_candid_UserRole__1_n10(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n11(_uploadFile, _downloadFile, value);
}
function from_candid_UserRole_n44(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n45(_uploadFile, _downloadFile, value);
}
function from_candid_UserStatus_n42(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n43(_uploadFile, _downloadFile, value);
}
function from_candid_User_n40(_uploadFile, _downloadFile, value) {
  return from_candid_record_n41(_uploadFile, _downloadFile, value);
}
function from_candid__ImmutableObjectStorageRefillResult_n4(_uploadFile, _downloadFile, value) {
  return from_candid_record_n5(_uploadFile, _downloadFile, value);
}
async function from_candid_opt_n12(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : await from_candid_EmployeeProfile_n13(_uploadFile, _downloadFile, value[0]);
}
async function from_candid_opt_n15(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : await from_candid_ExternalBlob_n16(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n20(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_opt_n21(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_EmployerProfile_n22(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n31(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_JobListing_n32(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n39(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_User_n40(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n6(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_opt_n7(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
async function from_candid_record_n14(_uploadFile, _downloadFile, value) {
  return {
    userId: value.userId,
    resumeFileId: record_opt_to_undefined(await from_candid_opt_n15(_uploadFile, _downloadFile, value.resumeFileId)),
    experience: from_candid_vec_n17(_uploadFile, _downloadFile, value.experience),
    phone: value.phone,
    skills: value.skills,
    location: value.location,
    professionalSummary: value.professionalSummary
  };
}
function from_candid_record_n19(_uploadFile, _downloadFile, value) {
  return {
    title: value.title,
    endDate: record_opt_to_undefined(from_candid_opt_n20(_uploadFile, _downloadFile, value.endDate)),
    description: value.description,
    company: value.company,
    startDate: value.startDate
  };
}
function from_candid_record_n23(_uploadFile, _downloadFile, value) {
  return {
    status: from_candid_EmployerStatus_n24(_uploadFile, _downloadFile, value.status),
    userId: value.userId,
    description: value.description,
    companyEmail: value.companyEmail,
    companyName: value.companyName,
    companySize: value.companySize,
    industry: value.industry
  };
}
function from_candid_record_n28(_uploadFile, _downloadFile, value) {
  return {
    status: from_candid_ApplicationStatus_n29(_uploadFile, _downloadFile, value.status),
    appliedAt: value.appliedAt,
    applicationId: value.applicationId,
    jobId: value.jobId,
    updatedAt: value.updatedAt,
    employeeId: value.employeeId,
    notes: record_opt_to_undefined(from_candid_opt_n20(_uploadFile, _downloadFile, value.notes))
  };
}
function from_candid_record_n33(_uploadFile, _downloadFile, value) {
  return {
    applicationDeadline: value.applicationDeadline,
    status: from_candid_JobStatus_n34(_uploadFile, _downloadFile, value.status),
    title: value.title,
    jobType: from_candid_JobType_n36(_uploadFile, _downloadFile, value.jobType),
    createdAt: value.createdAt,
    experienceRequired: value.experienceRequired,
    jobId: value.jobId,
    skillsRequired: value.skillsRequired,
    description: value.description,
    updatedAt: value.updatedAt,
    employerId: value.employerId,
    salaryMax: value.salaryMax,
    salaryMin: value.salaryMin,
    location: value.location
  };
}
function from_candid_record_n41(_uploadFile, _downloadFile, value) {
  return {
    status: from_candid_UserStatus_n42(_uploadFile, _downloadFile, value.status),
    principal: value.principal,
    name: value.name,
    createdAt: value.createdAt,
    role: from_candid_UserRole_n44(_uploadFile, _downloadFile, value.role),
    email: value.email
  };
}
function from_candid_record_n5(_uploadFile, _downloadFile, value) {
  return {
    success: record_opt_to_undefined(from_candid_opt_n6(_uploadFile, _downloadFile, value.success)),
    topped_up_amount: record_opt_to_undefined(from_candid_opt_n7(_uploadFile, _downloadFile, value.topped_up_amount))
  };
}
function from_candid_variant_n11(_uploadFile, _downloadFile, value) {
  return "admin" in value ? "admin" : "user" in value ? "user" : "guest" in value ? "guest" : value;
}
function from_candid_variant_n25(_uploadFile, _downloadFile, value) {
  return "pending" in value ? "pending" : "approved" in value ? "approved" : "suspended" in value ? "suspended" : value;
}
function from_candid_variant_n30(_uploadFile, _downloadFile, value) {
  return "offer" in value ? "offer" : "interview" in value ? "interview" : "applied" in value ? "applied" : "rejected" in value ? "rejected" : "shortlisted" in value ? "shortlisted" : value;
}
function from_candid_variant_n35(_uploadFile, _downloadFile, value) {
  return "closed" in value ? "closed" : "active" in value ? "active" : "draft" in value ? "draft" : value;
}
function from_candid_variant_n37(_uploadFile, _downloadFile, value) {
  return "contract" in value ? "contract" : "partTime" in value ? "partTime" : "fullTime" in value ? "fullTime" : value;
}
function from_candid_variant_n43(_uploadFile, _downloadFile, value) {
  return "active" in value ? "active" : "inactive" in value ? "inactive" : value;
}
function from_candid_variant_n45(_uploadFile, _downloadFile, value) {
  return "admin" in value ? "admin" : "employee" in value ? "employee" : "employer" in value ? "employer" : value;
}
function from_candid_vec_n17(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_ExperienceEntry_n18(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n26(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_JobApplication_n27(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n38(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_JobListing_n32(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n46(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_User_n40(_uploadFile, _downloadFile, x));
}
function to_candid_ApplicationStatus_n53(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n54(_uploadFile, _downloadFile, value);
}
function to_candid_ExperienceEntry_n57(_uploadFile, _downloadFile, value) {
  return to_candid_record_n58(_uploadFile, _downloadFile, value);
}
async function to_candid_ExternalBlob_n60(_uploadFile, _downloadFile, value) {
  return await _uploadFile(value);
}
function to_candid_JobSearchFilter_n51(_uploadFile, _downloadFile, value) {
  return to_candid_record_n52(_uploadFile, _downloadFile, value);
}
function to_candid_JobStatus_n61(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n62(_uploadFile, _downloadFile, value);
}
function to_candid_JobType_n47(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n48(_uploadFile, _downloadFile, value);
}
function to_candid_UserRole__1_n8(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n9(_uploadFile, _downloadFile, value);
}
function to_candid_UserRole_n49(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n50(_uploadFile, _downloadFile, value);
}
function to_candid__ImmutableObjectStorageRefillInformation_n2(_uploadFile, _downloadFile, value) {
  return to_candid_record_n3(_uploadFile, _downloadFile, value);
}
function to_candid_opt_n1(_uploadFile, _downloadFile, value) {
  return value === null ? candid_none() : candid_some(to_candid__ImmutableObjectStorageRefillInformation_n2(_uploadFile, _downloadFile, value));
}
function to_candid_opt_n55(_uploadFile, _downloadFile, value) {
  return value === null ? candid_none() : candid_some(value);
}
async function to_candid_opt_n59(_uploadFile, _downloadFile, value) {
  return value === null ? candid_none() : candid_some(await to_candid_ExternalBlob_n60(_uploadFile, _downloadFile, value));
}
function to_candid_record_n3(_uploadFile, _downloadFile, value) {
  return {
    proposed_top_up_amount: value.proposed_top_up_amount ? candid_some(value.proposed_top_up_amount) : candid_none()
  };
}
function to_candid_record_n52(_uploadFile, _downloadFile, value) {
  return {
    jobType: value.jobType ? candid_some(to_candid_JobType_n47(_uploadFile, _downloadFile, value.jobType)) : candid_none(),
    salaryMax: value.salaryMax ? candid_some(value.salaryMax) : candid_none(),
    salaryMin: value.salaryMin ? candid_some(value.salaryMin) : candid_none(),
    keyword: value.keyword ? candid_some(value.keyword) : candid_none(),
    location: value.location ? candid_some(value.location) : candid_none()
  };
}
function to_candid_record_n58(_uploadFile, _downloadFile, value) {
  return {
    title: value.title,
    endDate: value.endDate ? candid_some(value.endDate) : candid_none(),
    description: value.description,
    company: value.company,
    startDate: value.startDate
  };
}
function to_candid_variant_n48(_uploadFile, _downloadFile, value) {
  return value == "contract" ? {
    contract: null
  } : value == "partTime" ? {
    partTime: null
  } : value == "fullTime" ? {
    fullTime: null
  } : value;
}
function to_candid_variant_n50(_uploadFile, _downloadFile, value) {
  return value == "admin" ? {
    admin: null
  } : value == "employee" ? {
    employee: null
  } : value == "employer" ? {
    employer: null
  } : value;
}
function to_candid_variant_n54(_uploadFile, _downloadFile, value) {
  return value == "offer" ? {
    offer: null
  } : value == "interview" ? {
    interview: null
  } : value == "applied" ? {
    applied: null
  } : value == "rejected" ? {
    rejected: null
  } : value == "shortlisted" ? {
    shortlisted: null
  } : value;
}
function to_candid_variant_n62(_uploadFile, _downloadFile, value) {
  return value == "closed" ? {
    closed: null
  } : value == "active" ? {
    active: null
  } : value == "draft" ? {
    draft: null
  } : value;
}
function to_candid_variant_n9(_uploadFile, _downloadFile, value) {
  return value == "admin" ? {
    admin: null
  } : value == "user" ? {
    user: null
  } : value == "guest" ? {
    guest: null
  } : value;
}
function to_candid_vec_n56(_uploadFile, _downloadFile, value) {
  return value.map((x) => to_candid_ExperienceEntry_n57(_uploadFile, _downloadFile, x));
}
function createActor(canisterId, _uploadFile, _downloadFile, options = {}) {
  const agent = options.agent || HttpAgent.createSync({
    ...options.agentOptions
  });
  if (options.agent && options.agentOptions) {
    console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
  }
  const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions
  });
  return new Backend(actor, _uploadFile, _downloadFile, options.processError);
}
function useEmployerJobs() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["employer-jobs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyEmployerJobs();
    },
    enabled: !!actor && !isFetching
  });
}
function useJobDetails(jobId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["job", String(jobId)],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getJobDetails(jobId);
    },
    enabled: !!actor && !isFetching && jobId > 0n
  });
}
function useJobApplications(jobId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["job-applications", String(jobId)],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getJobApplications(jobId);
    },
    enabled: !!actor && !isFetching && jobId > 0n
  });
}
function usePostJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.postJob(
        params.title,
        params.description,
        params.location,
        params.salaryMin,
        params.salaryMax,
        params.experienceRequired,
        params.jobType,
        params.skillsRequired,
        params.applicationDeadline
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
    }
  });
}
function useUpdateJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateJob(
        params.jobId,
        params.title,
        params.description,
        params.location,
        params.salaryMin,
        params.salaryMax,
        params.experienceRequired,
        params.jobType,
        params.skillsRequired,
        params.status,
        params.applicationDeadline
      );
    },
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
      qc.invalidateQueries({ queryKey: ["job", String(vars.jobId)] });
    }
  });
}
function useCloseJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (jobId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.rejectJob(jobId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
    }
  });
}
function useReopenJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (jobId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.approveJob(jobId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["employer-jobs"] });
    }
  });
}
function useUpdateApplicationStatus() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateApplicationStatus(
        params.applicationId,
        params.status,
        params.notes
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["job-applications"] });
    }
  });
}
export {
  usePostJob as a,
  useCloseJob as b,
  useReopenJob as c,
  useJobDetails as d,
  useUpdateJob as e,
  useJobApplications as f,
  useUpdateApplicationStatus as g,
  useEmployerJobs as u
};
