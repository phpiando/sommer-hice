"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TypeChecker = _interopRequireDefault(require("./TypeChecker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description Refactored class based on code:
 * https://github.com/therealparmesh/object-to-formdata
 *
 * refactoring:
 * -Refactored to follow SOLID principles.
 * -Removed excessive use of else-if for a handler-based approach.
 * -Renamed variables for better clarity.
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var FormDataSerializer = /*#__PURE__*/function () {
  function FormDataSerializer() {
    _classCallCheck(this, FormDataSerializer);
    /**
     * Configuration object for the FormDataSerializer.
     * @type {Object}
     * @property {boolean} indices - If true, append indices to array keys.
     * @property {boolean} nullsAsUndefineds - If true, treat null values as undefined and don't append them.
     * @property {boolean} booleansAsIntegers - If true, convert boolean values to integers (true -> 1, false -> 0).
     * @property {boolean} allowEmptyArrays - If true, empty arrays will be appended.
     * @property {boolean} noAttributesWithArrayNotation - If true, don't use array notation for attributes.
     * @property {boolean} noFilesWithArrayNotation - If true, don't use array notation for file attributes.
     * @property {boolean} dotsForObjectNotation - If true, use dot notation for nested objects.
     */
    _defineProperty(this, "config", {
      indices: false,
      nullsAsUndefineds: false,
      booleansAsIntegers: false,
      allowEmptyArrays: false,
      noAttributesWithArrayNotation: false,
      noFilesWithArrayNotation: false,
      dotsForObjectNotation: false
    });
    this.handlers = [this.handleUndefined.bind(this), this.handleNull.bind(this), this.handleBoolean.bind(this), this.handleArray.bind(this), this.handleDate.bind(this), this.handleObject.bind(this), this.handleDefault.bind(this)];
  }

  /**
  * Initializes the configuration with default values.
  * @private
  * @since 1.0.0
  * @param {*} value
  * @returns {boolean|*}
  */
  _createClass(FormDataSerializer, [{
    key: "initConfig",
    value: function initConfig(value) {
      return _TypeChecker["default"].isUndefined(value) ? false : value;
    }

    /**
    * Handles undefined data types.
    * @private
    * @since 1.0.0
    * @param {*} data
    * @param {FormData} formData
    * @returns {FormData|undefined}
    */
  }, {
    key: "handleUndefined",
    value: function handleUndefined(data, formData) {
      if (!_TypeChecker["default"].isUndefined(data)) {
        return;
      }
      return formData;
    }

    /**
    * Appends null values to formData if allowed.
    * @private
    * @since 1.0.0
    * @param {*} data
    * @param {FormData} formData
    * @param {string} prefix
    * @returns {void}
    */
  }, {
    key: "handleNull",
    value: function handleNull(data, formData, prefix) {
      if (!_TypeChecker["default"].isNull(data) || this.config.nullsAsUndefineds) {
        return;
      }
      formData.append(prefix, '');
    }

    /**
    * Handles and appends boolean values to formData.
    * @private
    * @since 1.0.0
    * @param {*} data
    * @param {FormData} formData
    * @param {string} prefix
    * @returns {void}
    */
  }, {
    key: "handleBoolean",
    value: function handleBoolean(data, formData, prefix) {
      if (!_TypeChecker["default"].isBoolean(data)) {
        return;
      }
      var value = this.config.booleansAsIntegers ? data ? 1 : 0 : data;
      formData.append(prefix, value);
    }

    /**
     * Handles and appends array values to formData.
     * @private
     * @since 1.0.0
     * @param {Array} data
     * @param {FormData} formData
     * @param {string} prefix
     * @returns {void}
     */
  }, {
    key: "handleArray",
    value: function handleArray(data, formData, prefix) {
      var _this = this;
      if (!_TypeChecker["default"].isArray(data)) {
        return;
      }
      if (data.length === 0 && this.config.allowEmptyArrays) {
        formData.append(this.config.noAttributesWithArrayNotation ? prefix : prefix + '[]', '');
        return;
      }
      data.forEach(function (value, index) {
        var key = prefix + '[' + (_this.config.indices ? index : '') + ']';
        if (_this.config.noAttributesWithArrayNotation) {
          _this.serialize(value, _this.config, prefix);
        } else {
          _this.serialize(value, _this.config, key);
        }
      });
    }

    /**
     * Appends date values to formData in ISO string format.
     * @private
     * @since 1.0.0
     * @param {Date} data
     * @param {FormData} formData
     * @param {string} prefix
     * @returns {void}
     */
  }, {
    key: "handleDate",
    value: function handleDate(data, formData, prefix) {
      if (!_TypeChecker["default"].isDate(data)) {
        return;
      }
      formData.append(prefix, data.toISOString());
    }

    /**
     * Serializes object properties and appends them to formData.
     * @private
     * @since 1.0.0
     * @param {Object} data
     * @param {FormData} formData
     * @param {string} prefix
     * @param {boolean} isReactNative
     * @returns {void}
     */
  }, {
    key: "handleObject",
    value: function handleObject(data, formData, prefix, isReactNative) {
      var _this2 = this;
      if (!_TypeChecker["default"].isObject(data) || _TypeChecker["default"].isBlob(data, isReactNative)) {
        return;
      }
      Object.keys(data).forEach(function (prop) {
        var value = data[prop];

        // If it's an array, remove the end brackets so we can
        // add the correct notation in the handleArray method.
        if (_TypeChecker["default"].isArray(value)) {
          while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
            prop = prop.substring(0, prop.length - 2);
          }
        }
        var key = prefix ? _this2.config.dotsForObjectNotation ? prefix + '.' + prop : prefix + '[' + prop + ']' : prop;
        _this2.serialize(value, _this2.config, formData, key);
      });
    }

    /**
     * Appends default data values to formData.
     * @private
     * @since 1.0.0
     * @param {*} data
     * @param {FormData} formData
     * @param {string} prefix
     * @returns {void}
     */
  }, {
    key: "handleDefault",
    value: function handleDefault(data, formData, prefix) {
      if (!prefix || formData.has(prefix)) {
        return;
      }
      formData.append(prefix, data);
    }

    /**
     * Main method to serialize any data type and append it to formData.
     * @public
     * @since 1.0.0
     * @param {*} data
     * @param {Object} config
     * @param {string} prefix
     * @returns {FormData}
     */
  }, {
    key: "serialize",
    value: function serialize(data) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new FormData();
      var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      this.config = config;
      var isReactNative = typeof formData.getParts === 'function';
      var _iterator = _createForOfIteratorHelper(this.handlers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var handler = _step.value;
          handler(data, formData, prefix, isReactNative);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return formData;
    }
  }]);
  return FormDataSerializer;
}();
exports["default"] = FormDataSerializer;