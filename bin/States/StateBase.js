"use strict";

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
/**
 * @description State base class
 * @class
 * @since 1.0.0
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var StateBase = exports["default"] = /*#__PURE__*/function () {
  function StateBase() {
    _classCallCheck(this, StateBase);
    /**
     * Defines all states
     * @type {Object}
     */
    _defineProperty(this, "states", {});
  }
  return _createClass(StateBase, [{
    key: "get",
    value:
    /**
     * Gets the state
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
     * Sets a state
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
    key: "setState",
    value: function setState(id, state) {
      this.states[id] = state;
    }

    /**
     * Deletes an state
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
}();