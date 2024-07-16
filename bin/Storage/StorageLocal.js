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
 * @description StorageLocal class is responsible for managing local storage
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var StorageLocal = /*#__PURE__*/function () {
  function StorageLocal() {
    _classCallCheck(this, StorageLocal);
    /**
     * Storage interface
     *
     * @type {Storage}
     *
     * @private
     *
     * @since 1.0.0
     */
    _defineProperty(this, "storage", void 0);
    this.storage = window.localStorage;
  }

  /**
   * Add item to storage
   *
   * @param {String} key Storage key
   * @param {*} value Stroage value
   *
   * @since 1.0.0
   *
   * @return {void}
   */
  return _createClass(StorageLocal, [{
    key: "setItem",
    value: function setItem(key, value) {
      this.storage.setItem(key, value);
    }

    /**
     * Add object to storage
     *
     * @param {String} key Storage key
     * @param {Object} value Stroage value
     *
     * @since 1.0.0
     *
     * @return {void}
     */
  }, {
    key: "setObject",
    value: function setObject(key, value) {
      this.storage.setItem(key, JSON.stringify(value));
    }

    /**
     * Get item from storage
     *
     * @param {String} key
     * @param {*} default_value
     *
     * @since 1.0.0
     *
     * @returns {void}
     */
  }, {
    key: "getItem",
    value: function getItem(key) {
      var default_value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.storage[key] || default_value;
    }

    /**
     * Get object from storage
     *
     * @param {String} key
     * @param {*} default_value
     *
     * @since 1.0.0
     *
     * @returns {void}
     */
  }, {
    key: "getObject",
    value: function getObject(key) {
      var default_value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.storage[key] ? JSON.parse(this.storage[key]) : default_value;
    }
  }]);
}();
var StorageLocalSingleton = exports["default"] = new StorageLocal();