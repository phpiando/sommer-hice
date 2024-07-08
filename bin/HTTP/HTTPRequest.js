"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _HTTPRequestException = _interopRequireDefault(require("./Exceptions/HTTPRequestException.js"));
var _HTTPRequestCollection = _interopRequireDefault(require("./Collections/HTTPRequestCollection.js"));
var _HTTPResponse = _interopRequireDefault(require("./Entities/HTTPResponse.js"));
var _HTTPMappingResponse = _interopRequireDefault(require("./HTTPMappingResponse.js"));
var _FormDataSerializer = _interopRequireDefault(require("../Supports/FormDataSerializer.js"));
var _HTTPConstants = _interopRequireDefault(require("./HTTPConstants.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description Class responsible for making requests
 * with API
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var HTTPRequest = /*#__PURE__*/function () {
  /**
   * @constructor
   * @since 1.0.0
   * @param {Object<String, *>} options Options for HTTPRequest
   * @property {String} base_uri Base URI for requests
   * @property {Object.<String, String>} headers Headers for requests
   * @property {String} withCredentials Allow send cookies with request (default is false)
   * @property {Boolean} replaceStatusCode replace status code when body api response
   */
  function HTTPRequest() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, HTTPRequest);
    /**
     * Headers used in requests
     *
     * @private
     * @since 1.0.0
     * @type {Object.<String, String>}
     */
    _defineProperty(this, "headers", {
      // 'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    });
    /**
     * Origin domain of requests.
     *
     * @private
     * @since 1.0.0
     * @type {String}
     */
    _defineProperty(this, "base_uri", typeof document !== 'undefined' ? document.location.origin : '');
    /**
     * Collection request make.
     *
     * @public
     * @since 1.0.0
     * @type {Object<string, HTTPResponse>}
     */
    _defineProperty(this, "requests", new _HTTPRequestCollection["default"]());
    /**
     * Mapping response
     *
     * @private
     * @since 1.0.0
     * @type {HTTPMappingResponse}
     */
    _defineProperty(this, "_mapping_response", new _HTTPMappingResponse["default"]());
    /**
     * Serializer objects to formData
     *
     * @private
     * @since 1.0.0
     * @type {FormDataSerializer}
     */
    _defineProperty(this, "_formdata_serializer", new _FormDataSerializer["default"]());
    /**
     * Options for HTTPRequest
     * @private
     * @since 1.0.0
     * @type {Object<String, *>}
     * @property {String} base_uri Base URI for requests
     * @property {Object.<String, String>} headers Headers for requests
     * @property {String} withCredentials Allow send cookies with request (default is false)
     */
    _defineProperty(this, "_options", {});
    this.base_uri = options.base_uri || this.base_uri;
    this.headers = options.headers || this.headers;
    this._options = options;
  }

  /**
   * Makes a post request using form url encoded data
   * All requests with the same id will wait for the first request
   * to finish and return the same response.
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} endpoint   server endpoint
   * @param {Object|FormData} data payload
   * @param {Object} options
   *
   * @returns {Promise<HTTPResponse>}
   */
  _createClass(HTTPRequest, [{
    key: "post",
    value: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
        var data,
          options,
          params,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              params = {
                method: _HTTPConstants["default"].METHODS.POST
              };
              params = Object.assign(params, options);
              _context.next = 6;
              return this.request(endpoint, data, params);
            case 6:
              return _context.abrupt("return", _context.sent);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function post(_x) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
    /**
     * Makes a GET request using form url encoded data or FormData
     * All requests with the same id will wait for the first request
     * to finish and return the same response.
     *
     * @public
     * @since 1.0.0
     * @param {String} endpoint   server endpoint
     * @param {Object|FormData} data payload
     * @param {Object} options
     *
     * @returns {Promise<HTTPResponse>}
     */
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint) {
        var data,
          options,
          params,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
              params = {
                method: _HTTPConstants["default"].METHODS.GET
              };
              params = Object.assign(params, options);
              _context2.next = 6;
              return this.request(endpoint, data, params);
            case 6:
              return _context2.abrupt("return", _context2.sent);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function get(_x2) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
    /**
     * Make a DELETE request using form url encoded data or FormData
     *
     * @public
     * @since 1.0.0
     * @param {String} endpoint   server endpoint
     * @param {Object|FormData} data payload
     * @param {Object} options
     *
     * @returns {Promise<HTTPResponse>}
     */
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(endpoint) {
        var data,
          options,
          params,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
              params = {
                method: _HTTPConstants["default"].METHODS.DELETE
              };
              params = Object.assign(params, options);
              _context3.next = 6;
              return this.request(endpoint, data, params);
            case 6:
              return _context3.abrupt("return", _context3.sent);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _delete(_x3) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
    /**
     * Responsible method for calling requests
     * being GET, POST, PUT or any other.
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} endpoint
     * @param {*} data
     * @param {Object} options
     * @property {String} method default is GET
     * @property {String} request_id Avoid duplicate requirements
     * @property {Number} timeout timeout to await request_id
     * @property {*} ... others properties used in XMLHttpRequest()
     *
     * @throws {Error} If undefined request XMLHttpRequest()
     * @throws {HTTPRequestException} If error in request
     *
     * @returns {Promise.<HTTPResponse>}
     */
  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(endpoint) {
        var data,
          options,
          url_request,
          response_item,
          request_fetch,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
              this._handleOptionsRequest(options);
              if (!this.requests.has(options.request_id)) {
                _context4.next = 7;
                break;
              }
              _context4.next = 6;
              return this.requests.awaitRequest(options.request_id, options.timeout);
            case 6:
              return _context4.abrupt("return", _context4.sent);
            case 7:
              url_request = this._createURLRequest(endpoint);
              this._handleBodyRequest(url_request, data, options);
              _context4.prev = 9;
              response_item = this.requests.setCurrentRequest(options.request_id); // const request_fetch = await fetch(url_request, options);
              _context4.next = 13;
              return this._fetch(url_request, options);
            case 13:
              request_fetch = _context4.sent;
              if (!(typeof request_fetch.status === 'undefined')) {
                _context4.next = 16;
                break;
              }
              throw Error('Error undefined request fetch()');
            case 16:
              _context4.next = 18;
              return this._mapping_response.parseResponse(response_item, request_fetch);
            case 18:
              return _context4.abrupt("return", response_item);
            case 21:
              _context4.prev = 21;
              _context4.t0 = _context4["catch"](9);
              throw new _HTTPRequestException["default"](_context4.t0.message);
            case 24:
              _context4.prev = 24;
              this.requests.unsetCurrentRequest(options.request_id);
              return _context4.finish(24);
            case 27:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[9, 21, 24, 27]]);
      }));
      function request(_x4) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
    /**
     * Create the class responsible for the request
     * from the endpoint in the api
     *
     * @private
     *
     * @since 1.0.0
     *
     * @param {String} endpoint
     *
     * @returns {URL}
     */
  }, {
    key: "_createURLRequest",
    value: function _createURLRequest(endpoint) {
      var url = new URL(endpoint, this.base_uri);
      return url;
    }

    /**
     * Performs treatments on the Options object that the user
     * provides, identifying or adding properties
     * mandatory
     *
     * @private
     * @since 1.0.0
     * @param {Object} options
     * @returns {void}
     */
  }, {
    key: "_handleOptionsRequest",
    value: function _handleOptionsRequest(options) {
      options.method = options.method || _HTTPConstants["default"].METHODS.GET;
      options.timeout = options.timeout || _HTTPConstants["default"].TIMEOUT_DEFAULT;
      options.headers = options.headers || this.headers;
      options.request_id = options.request_id || this._generateRequestId();
    }

    /**
     * Generate ID for request
     * @private
     * @since 1.0.0
     * @returns {String}
     */
  }, {
    key: "_generateRequestId",
    value: function _generateRequestId() {
      return Math.random().toString(36).substring(7);
    }

    /**
     * Treats the request body to identify the type of request
     *
     * @private
     *
     * @since 1.0.0
     *
     * @param {URL} url_request
     * @param {*} data
     * @param {Object} options
     *
     * @returns {void}
     */
  }, {
    key: "_handleBodyRequest",
    value: function _handleBodyRequest(url_request, data, options) {
      if (options.method == _HTTPConstants["default"].METHODS.GET) {
        url_request.search = new URLSearchParams(data).toString();
        return;
      }
      if (!(data instanceof FormData)) {
        options.body = this._formdata_serializer.serialize(data);
        return;
      }
      options.body = data;
    }

    /**
     * Fetch Request using XMLHttpRequest
     *
     * @since 1.0.0
     * @private
     * @param {String} url_request
     * @param {Object} options
     * @returns {Promise}
     */
  }, {
    key: "_fetch",
    value: function _fetch(url_request, options) {
      var _this = this;
      var http = this._openXHRConnect(url_request, options);
      return new Promise(function (resolve, reject) {
        http.onload = function () {
          var body_parse = _this._mapping_response.parseXHRResponse(http.responseText);
          var response_xhr = {
            headers: _this._xhrAllHeaders(http),
            status: http.status,
            body: body_parse
          };
          if (_this._options.replaceStatusCode === true && body_parse.hasOwnProperty('status')) {
            response_xhr.status = body_parse.status;
          }
          response_xhr.ok = http.status === 200;
          resolve(response_xhr);
        };
        http.onerror = function (e) {
          reject(e.target.status);
        };
        http.send(options.body);
      });
    }

    /**
     * Get All Headers from response using XHR
     *
     * @private
     * @since 1.0.0
     * @param {XMLHttpRequest} http_xhr
     * @returns {Headers}
     */
  }, {
    key: "_xhrAllHeaders",
    value: function _xhrAllHeaders(http_xhr) {
      if (http_xhr.readyState !== http_xhr.HEADERS_RECEIVED) {
        return new Headers();
      }
      var headers = http_xhr.getAllResponseHeaders();
      var arr = headers.trim().split(/[\r\n]+/);
      var header_map = new Headers();
      arr.forEach(function (line) {
        var parts = line.split(": ");
        var header = parts.shift();
        var value = parts.join(": ");
        header_map.append(header, value);
      });
      return header_map;
    }

    /**
     * Open connection with XMLHttpRequest
     * and set headers
     * @private
     * @since 1.0.0
     * @param {String} url_request
     * @param {Object} options
     * @returns {XMLHttpRequest}
     */
  }, {
    key: "_openXHRConnect",
    value: function _openXHRConnect(url_request, options) {
      var http = new XMLHttpRequest();
      http.open(options.method, url_request);
      if (this._options.withCredentials) {
        http.withCredentials = this._options.withCredentials;
      }
      if (!this.headers || !Object.entries(this.headers).length) {
        return;
      }
      for (var header in this.headers) {
        http.setRequestHeader(header, this.headers[header]);
      }
      return http;
    }

    /**
     * Set values ​​for the request header
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {Object.<String, String>} values
     *
     * @returns {HTTPRequest}
     */
  }, {
    key: "setHeaders",
    value: function setHeaders(values) {
      this.headers = values;
      return this;
    }

    /**
     * Get object headers
     *
     * @public
     *
     * @since 1.0.0
     *
     * @returns {Object}
     */
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      return this.headers;
    }
  }]);
  return HTTPRequest;
}();
exports["default"] = HTTPRequest;