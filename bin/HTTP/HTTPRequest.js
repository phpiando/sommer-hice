"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FormDataSerializer = _interopRequireDefault(require("../Supports/FormDataSerializer.js"));
var _HTTPConstants = _interopRequireDefault(require("./HTTPConstants.js"));
var _HTTPMappingResponse = _interopRequireDefault(require("./HTTPMappingResponse.js"));
var _HTTPRequestCollection = _interopRequireDefault(require("./Collections/HTTPRequestCollection.js"));
var _HTTPRequestException = _interopRequireDefault(require("./Exceptions/HTTPRequestException.js"));
var _HTTPResponse = _interopRequireDefault(require("./Entities/HTTPResponse.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @description Class responsible for making requests
 * with API
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var HTTPRequest = exports["default"] = /*#__PURE__*/function () {
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
  return _createClass(HTTPRequest, [{
    key: "post",
    value: (function () {
      var _post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(endpoint) {
        var data,
          options,
          params,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              params = {
                method: _HTTPConstants["default"].METHODS.POST
              };
              params = Object.assign(params, options);
              _context.n = 1;
              return this.request(endpoint, data, params);
            case 1:
              return _context.a(2, _context.v);
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
    )
  }, {
    key: "get",
    value: (function () {
      var _get = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(endpoint) {
        var data,
          options,
          params,
          _args2 = arguments;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
              params = {
                method: _HTTPConstants["default"].METHODS.GET
              };
              params = Object.assign(params, options);
              _context2.n = 1;
              return this.request(endpoint, data, params);
            case 1:
              return _context2.a(2, _context2.v);
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
    )
  }, {
    key: "delete",
    value: (function () {
      var _delete2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(endpoint) {
        var data,
          options,
          params,
          _args3 = arguments;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
              params = {
                method: _HTTPConstants["default"].METHODS.DELETE
              };
              params = Object.assign(params, options);
              _context3.n = 1;
              return this.request(endpoint, data, params);
            case 1:
              return _context3.a(2, _context3.v);
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
    )
  }, {
    key: "request",
    value: (function () {
      var _request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(endpoint) {
        var data,
          options,
          response_request,
          url_request,
          response_item,
          request_fetch,
          _args4 = arguments,
          _t;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
              _context4.p = 1;
              this._handleOptionsRequest(options);
              _context4.n = 2;
              return this._existsRequest(options);
            case 2:
              response_request = _context4.v;
              if (!response_request) {
                _context4.n = 3;
                break;
              }
              return _context4.a(2, response_request);
            case 3:
              url_request = this._createURLRequest(endpoint);
              this._handleBodyRequest(url_request, data, options);
              response_item = this.requests.setCurrentRequest(options.request_id); // const request_fetch = await fetch(url_request, options);
              _context4.n = 4;
              return this._fetch(url_request, options);
            case 4:
              request_fetch = _context4.v;
              if (!(typeof request_fetch.status === 'undefined')) {
                _context4.n = 5;
                break;
              }
              throw Error('Error undefined request fetch()');
            case 5:
              _context4.n = 6;
              return this._mapping_response.parseResponse(response_item, request_fetch);
            case 6:
              return _context4.a(2, response_item);
            case 7:
              _context4.p = 7;
              _t = _context4.v;
              throw new _HTTPRequestException["default"](_t.message);
            case 8:
              _context4.p = 8;
              this.requests.unsetCurrentRequest(options.request_id);
              return _context4.f(8);
            case 9:
              return _context4.a(2);
          }
        }, _callee4, this, [[1, 7, 8, 9]]);
      }));
      function request(_x4) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
    /**
     * Check if request exists a request with the same id
     * and return the response
     *
     * @private
     * @since 1.1.2
     * @param {Object} options
     * @returns {HTTPResponse|null}
     */
    )
  }, {
    key: "_existsRequest",
    value: (function () {
      var _existsRequest2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(options) {
        var response;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (this.requests.has(options.request_id)) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2, null);
            case 1:
              _context5.n = 2;
              return this.requests.awaitRequest(options.request_id, options.timeout);
            case 2:
              response = _context5.v;
              if (response) {
                _context5.n = 3;
                break;
              }
              return _context5.a(2, null);
            case 3:
              return _context5.a(2, response);
          }
        }, _callee5, this);
      }));
      function _existsRequest(_x5) {
        return _existsRequest2.apply(this, arguments);
      }
      return _existsRequest;
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
    )
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
}();