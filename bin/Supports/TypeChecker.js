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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TypeChecker = /*#__PURE__*/function () {
  function TypeChecker() {
    _classCallCheck(this, TypeChecker);
  }
  _createClass(TypeChecker, null, [{
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
      return value === undefined;
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
      return value === null;
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
  return TypeChecker;
}();
exports["default"] = TypeChecker;