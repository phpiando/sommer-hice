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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BroadcastEvent = /*#__PURE__*/function () {
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
  _createClass(BroadcastEvent, [{
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
  return BroadcastEvent;
}();
exports["default"] = BroadcastEvent;