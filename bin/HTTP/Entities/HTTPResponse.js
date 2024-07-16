"use strict";

/**
 * @description Entity responsible for mapping
 * response fields
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTTPResponse = exports["default"] = /*#__PURE__*/function () {
  function HTTPResponse() {
    _classCallCheck(this, HTTPResponse);
    /**
     * Header that returned from the response
     * of the request
     * @since 1.0.0
     * @type {Headers}
     * @default Headers
     */
    _defineProperty(this, "headers", new Headers());
    /**
     * Status request
     * @since 1.0.0
     * @type {Number}
     */
    _defineProperty(this, "status", 200);
    /**
     * Success in request
     * @since 1.0.0
     * @type {Boolean}
     * @default true
     */
    _defineProperty(this, "success", true);
    /**
     * Return that may vary depending on the
     * use of the class, if it identifies the property
     * message or messages in the request will add
     *
     * @since 1.0.0
     * @type {Array|Object}
     */
    _defineProperty(this, "messages", void 0);
    /**
     * Value body converted in json
     * @since 1.0.0
     * @type {Object}
     */
    _defineProperty(this, "data_json", void 0);
  }
  return _createClass(HTTPResponse, [{
    key: "getFirstMessage",
    value:
    /**
     * Get the first message of the request
     * @since 1.0.0
     * @public
     * @returns {String|Array|Object|null}
     */
    function getFirstMessage() {
      return this.messages[0] || null;
    }
  }, {
    key: "message",
    get: function get() {
      return this.getFirstMessage();
    }
  }]);
}();