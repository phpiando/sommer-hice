"use strict";

/**
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
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TypeChecker = exports["default"] = /*#__PURE__*/function () {
  function TypeChecker() {
    _classCallCheck(this, TypeChecker);
  }
  return _createClass(TypeChecker, null, [{
    key: "isUndefined",
    value:
    /**
     * Checks if the given value is undefined.
     * @static
     * @since 1.0.0
     * @param {*} value
     * @returns {boolean}
     */
    function isUndefined(value) {
      return value === undefined || value === 'undefined';
    }

    /**
     * Check if is string
     * @static
     * @since 1.0.0
     * @param {*} value
     * @returns {boolean}
     */
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }

    /**
     * Checks if the given value is null.
     * @static
     * @since 1.0.0
     * @param {*} value
     * @returns {boolean}
     */
  }, {
    key: "isNull",
    value: function isNull(value) {
      return value === null || value === 'null';
    }

    /**
     * Checks if the given value is of boolean type.
     * @static
     * @since 1.0.0
     * @param {*} value
     * @returns {boolean}
     */
  }, {
    key: "isBoolean",
    value: function isBoolean(value) {
      return typeof value === 'boolean';
    }

    /**
    * Checks if the given value is an object.
    * @static
    * @since 1.0.0
    * @param {*} value
    * @returns {boolean}
    */
  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === Object(value);
    }

    /**
    * Checks if the given value is an array.
    * @static
    * @since 1.0.0
    * @param {*} value
    * @returns {boolean}
    */
  }, {
    key: "isArray",
    value: function isArray(value) {
      return Array.isArray(value);
    }

    /**
    * Checks if the given value is a date instance.
    * @static
    * @since 1.0.0
    * @param {*} value
    * @returns {boolean}
    */
  }, {
    key: "isDate",
    value: function isDate(value) {
      return value instanceof Date;
    }

    /**
    * Check if the given value is a number.
    * @static
    * @since 1.0.0
    * @param {*} value
    * @returns {boolean}
    */
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number';
    }

    /**
     * Checks if the given value is a blob.
     * @static
     * @since 1.0.0
     * @param {*} value
     * @param {boolean} isReactNative
     * @returns {boolean}
     */
  }, {
    key: "isBlob",
    value: function isBlob(value, isReactNative) {
      return isReactNative ? this.isObject(value) && !this.isUndefined(value.uri) : this.isObject(value) && typeof value.size === 'number' && typeof value.type === 'string' && typeof value.slice === 'function';
    }

    /**
     * check if value is empty
     * @static
     * @since 1.0.0
     * @param {*} value
     * @returns {boolean}
     */
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return this.isUndefined(value) || this.isNull(value) || this.isString(value) && value.trim() === '' || this.isArray(value) && value.length === 0 || this.isObject(value) && Object.keys(value).length === 0;
    }

    /**
     * Checks if the given value is a file.
     * @static
     * @since 1.0.0
     * @param {*} value
     * @param {boolean} isReactNative
     * @returns {boolean}
     */
  }, {
    key: "isFile",
    value: function isFile(value, isReactNative) {
      return this.isBlob(value, isReactNative) && typeof value.name === 'string' && (this.isObject(value.lastModifiedDate) || typeof value.lastModified === 'number');
    }
  }]);
}();