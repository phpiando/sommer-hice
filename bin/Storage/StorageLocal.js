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
  _createClass(StorageLocal, [{
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
  return StorageLocal;
}();
var StorageLocalSingleton = new StorageLocal();
exports["default"] = StorageLocalSingleton;