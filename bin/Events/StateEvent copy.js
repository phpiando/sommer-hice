"use strict";

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
/**
 * @description Manage states and function states
 * during the application
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var StateEvent = /*#__PURE__*/function () {
  function StateEvent() {
    _classCallCheck(this, StateEvent);
    /**
     * Defines loading state
     * @type {Object}
     */
    _defineProperty(this, "states", {});
    /**
     * Stores all callback functions
     * @type {Object}
     */
    _defineProperty(this, "callbacks", {});
  }
  _createClass(StateEvent, [{
    key: "get",
    value:
    /**
     * Gets the state of an event
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     *
     * @returns {String|null}
     */
    function get(id) {
      return this.states[id] || null;
    }

    /**
     * Sets a custom event state
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String|Array} id
     * @param {String} state
     *
     * @returns {void}
     */
  }, {
    key: "dispatch",
    value: function dispatch(id, state) {
      this.states[id] = state;
      this._callBack(id, state);
    }

    /**
    * Sets State to Loading
    * @public
    *
    * @since 1.0.0
    *
    * @param {String} id
    *
    * @returns {void}
    */
  }, {
    key: "setLoading",
    value: function setLoading(id) {
      this.dispatch(id, 'loading');
    }

    /**
     * Sets State to success if load value is true, or error if false
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     * @param {Boolean|String} value
     *
     * @returns {void}
     */
  }, {
    key: "setStateSuccess",
    value: function setStateSuccess(id, value) {
      this.dispatch(id, value === true ? 'success' : 'error');
    }

    /**
     * Sets State to success if load value is true, or error if false
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     * @param {Boolean|String} value
     *
     * @returns {void}
     */
  }, {
    key: "setState",
    value: function setState(id, value) {
      this.dispatch(id, value);
    }

    /**
     * Deletes an event
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     *
     * @returns {void}
     */
  }, {
    key: "unset",
    value: function unset(id) {
      delete this.states[id];
      delete this.callbacks[id];
    }

    /**
     * Registers an on Loaded function to be called on state change
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     * @param {String} state
     * @param {Function} callable
     *
     * @returns {void}
     */
  }, {
    key: "on",
    value: function on(id, state, callable) {
      this._setCallback(id, state, callable);
      this._callBack(id, state);
    }

    /**
    * Destroys a registered callback
    *
    * @public
    *
    * @since 1.0.0
    *
    * @param {String} id
    * @param {String} state
    * @param {Function} callable
    *
    * @returns {void}
    */
  }, {
    key: "off",
    value: function off(id, state, callable) {
      if (!this.callbacks[id] || !this.callbacks[id][state]) return;
      this.callbacks[id][state] = this.callbacks[id][state].filter(function (cb) {
        return cb !== callable;
      });
    }

    /**
     * Sets a loadded callback function
     *
     * @private
     *
     * @since 1.0.0
     *
     * @param {String} id
     * @param {String} state
     * @param {Function} callable
     *
     * @returns {void}
     */
  }, {
    key: "_setCallback",
    value: function _setCallback(id, state, callback) {
      if (!this.callbacks[id]) this.callbacks[id] = {};
      if (!this.callbacks[id][state]) this.callbacks[id][state] = [];
      this.callbacks[id][state].push(callback);
    }

    /**
     * Calls all registered loaded calbacks
     *
     * @private
     *
     * @since 1.0.0
     *
     * @param {*} id
     * @param {*} state
     *
     * @returns {void}
     */
  }, {
    key: "_callBack",
    value: function _callBack(id, state) {
      if (this.states[id] !== state || !this.callbacks[id] || !this.callbacks[id][state]) return;
      this.callbacks[id][state].forEach(function (callback) {
        return callback();
      });
      this.callbacks[id][state] = [];
    }
  }]);
  return StateEvent;
}();
exports["default"] = StateEvent;