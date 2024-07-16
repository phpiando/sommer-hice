"use strict";

/**
 * @description Class responsible for managing custom events
 * and their respective callback functions
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
var BroadcastEvent = exports["default"] = /*#__PURE__*/function () {
  function BroadcastEvent() {
    _classCallCheck(this, BroadcastEvent);
    /**
     * Stores all callback functions
     *
     * @public
     * @type {Object}
     */
    _defineProperty(this, "callbacks", {});
  }
  return _createClass(BroadcastEvent, [{
    key: "dispatch",
    value:
    /**
     * Dispatch a custom event event state
     *
     * @public
     * @since 1.0.0
     * @param {String} message
     * @param {mixed}  data
     * @returns {void}
     */
    function dispatch(message, data) {
      this._callbacks(message, data);
    }

    /**
     * Registers an on Loaded function to be called on state change
     *
     * @public
     * @since 1.0.0
     * @param {String}   message
     * @param {Function} callable callback function
     * @returns {void}
     */
  }, {
    key: "on",
    value: function on(message, callable) {
      this._setCallback(message, callable);
    }

    /**
     * Destroys a registered callback
     *
     * @public
     * @since 1.0.0
     * @param {String}   message
     * @param {Function} callable callback function
     * @returns {void}
     */
  }, {
    key: "off",
    value: function off(message, callable) {
      if (!this.callbacks[message]) {
        return;
      }
      var index = this.callbacks[message].indexOf(callable);
      if (index > -1) {
        this.callbacks[message].splice(index, 1);
      }
    }

    /**
     * Sets a loadded callback function
     *
     * @private
     * @since 1.0.0
     * @param {String}   message
     * @param {Function} callable callback function
     * @returns {void}
     */
  }, {
    key: "_setCallback",
    value: function _setCallback(message, callback) {
      if (!this.callbacks[message]) {
        this.callbacks[message] = [];
      }
      this.callbacks[message].push(callback);
    }

    /**
     * Calls all registered loaded calbacks
     *
     * @private
     * @since 1.0.0
     * @param {String} id   operation id
     * @param {*}  data
     * @returns {void}
     */
  }, {
    key: "_callbacks",
    value: function _callbacks(message, data) {
      if (!this.callbacks[message]) {
        return;
      }
      this.callbacks[message].forEach(function (callback) {
        callback(data);
      });
    }
  }]);
}();