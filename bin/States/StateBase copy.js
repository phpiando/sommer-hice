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
 * @description State base class
 * @class
 * @since 1.0.0
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var StateBase = /*#__PURE__*/function () {
  function StateBase() {
    _classCallCheck(this, StateBase);
    /**
     * Defines all states
     * @type {Object}
     */
    _defineProperty(this, "states", {});
  }
  _createClass(StateBase, [{
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
     * @param {String} id Index id of the state
     * @param {String} state State to be set (loading, success, error, etc.)
     *
     * @returns {void}
     */
  }, {
    key: "dispatch",
    value: function dispatch(id, state) {
      this.states[id] = state;
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
    }
  }]);
  return StateBase;
}();
exports["default"] = StateBase;