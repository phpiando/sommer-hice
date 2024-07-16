"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TypeChecker = _interopRequireDefault(require("./TypeChecker.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @description FormDataSerializer class to serialize data
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var FormDataSerializer = exports["default"] = /*#__PURE__*/function () {
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
  return _createClass(FormDataSerializer, [{
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
          _this.serialize(value, _this.config, formData, prefix);
        } else {
          _this.serialize(value, _this.config, formData, key);
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
      console.log(Object.keys(data)[0]);
      if (!_TypeChecker["default"].isObject(data) || _TypeChecker["default"].isBlob(data, isReactNative) || _TypeChecker["default"].isNumber(Object.keys(data)[0])) {
        return;
      }
      console.log("-------------------");
      console.log("Handle Object", data, prefix);
      Object.keys(data).forEach(function (prop) {
        var value = data[prop];
        console.log("---> PROP", prop, "VALUE", value, " IS ARRAY ", _TypeChecker["default"].isArray(value));
        // If it's an array, remove the end brackets so we can
        // add the correct notation in the handleArray method.
        if (_TypeChecker["default"].isArray(value)) {
          while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
            prop = prop.substring(0, prop.length - 2);
          }
        }
        var key = prefix ? _this2.config.dotsForObjectNotation ? prefix + '.' + prop : prefix + '[' + prop + ']' : prop;
        console.log("---> KEY", key);
        _this2.serialize(value, _this2.config, formData, key);
      });
      console.log("-------------------");
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
      // if (!prefix || formData.has(prefix)) {
      if (!prefix) {
        return;
      }
      formData.append(prefix, data);
    }
  }, {
    key: "serializeObject",
    value: function serializeObject(data) {
      var _this3 = this;
      if (!_TypeChecker["default"].isObject(data)) {
        return;
      }
      var formData = new FormData();
      Object.keys(data).forEach(function (prop) {
        var value = data[prop];
        _this3.serialize(value, _this3.config, formData, prop);
      });
      return formData;
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
      for (var property in data) {
        console.log("PROPERTY", property, "VALUE", data[property]);
        if (_TypeChecker["default"].isArray(data[property])) {
          this.handleArray(data[property], formData, prefix);
          continue;
        }
        if (_TypeChecker["default"].isObject(data[property])) {
          this.handleObject(data[property], formData, prefix, isReactNative);
          continue;
        }
        this.handleDefault(data[property], formData, prefix);
      }
      // for (const handler of this.handlers) {
      //   handler(data, formData, prefix, isReactNative);
      // }

      return formData;
    }
  }]);
}();