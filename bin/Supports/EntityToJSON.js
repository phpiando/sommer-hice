"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Entity = _interopRequireDefault(require("../Entities/Entity"));
var _Carbon = _interopRequireDefault(require("./Carbon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description EntityToJSON class to serialize data
 * in JSON format
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 * @since 1.0.0 
 */
var EntityToJSON = /*#__PURE__*/function () {
  function EntityToJSON(entity) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, EntityToJSON);
    /**
     * Entity instance
     * @private
     * @type {Entity}
     */
    _defineProperty(this, "_entity_instance", void 0);
    /**
     * Options
     * @private
     * @type {Object}
     */
    _defineProperty(this, "_options", {});
    /**
     * Special cases that need to be formatted
     * @private
     * @type {Object}
     */
    _defineProperty(this, "_specialCases", {
      'Carbon': function Carbon(attribute, instance) {
        return instance[attribute].format();
      },
      'CollectionIndexed': function CollectionIndexed(attribute, instance) {
        return instance[attribute].items;
      }
    });
    if (!(entity instanceof _Entity["default"])) {
      console.error('EntityToJSON: Entity must be an instance of Entity');
    }
    this._entity_instance = entity;
    this._options = options;
  }

  /**
   * Serialize data to JSON
   *
   * @public
   * @param {Entity} data
   * @returns {Object} JSON
   */
  _createClass(EntityToJSON, [{
    key: "serialize",
    value: function serialize() {
      var _this = this;
      return this._entity_instance.getAttributes().reduce(function (data_object, attribute) {
        if (_this._options.ignore_relationships && _this._isRelationship(attribute)) {
          return data_object;
        }
        if (_this._isSpecialCase(attribute)) {
          return _this._formatSpecialCase(attribute, data_object);
        }
        if (_this._options.just_attributes_with_values && !_this._hasValue(attribute)) {
          return data_object;
        }
        data_object[attribute] = _this._entity_instance[attribute];
        return data_object;
      }, {});
    }

    /**
     * Identify if attribute is a special case
     * that need to be formatted
     *
     * @private
     * @param {String} attribute
     * @returns {Boolean}
     */
  }, {
    key: "_isSpecialCase",
    value: function _isSpecialCase(attribute) {
      var _this$_entity_instanc;
      var special_case = ((_this$_entity_instanc = this._entity_instance[attribute]) === null || _this$_entity_instanc === void 0 || (_this$_entity_instanc = _this$_entity_instanc.constructor) === null || _this$_entity_instanc === void 0 ? void 0 : _this$_entity_instanc.name) || 'null';
      return this._specialCases[special_case] || false;
    }

    /**
     * Format special case
     *
     * @private
     * @param {String} attribute
     * @param {Object} data_object
     * @returns {void}
     */
  }, {
    key: "_formatSpecialCase",
    value: function _formatSpecialCase(attribute, data_object) {
      if (!this._isSpecialCase(attribute)) {
        return data_object;
      }
      var constructor_name = this._entity_instance[attribute].constructor.name;
      var formatted = this._specialCases[constructor_name](attribute, this._entity_instance);
      data_object[attribute] = formatted;
      return data_object;
    }

    /**
     * Identify if attribute is a relationship
     *
     * @private
     * @param {String} attribute
     * @returns {Boolean}
     */
  }, {
    key: "_isRelationship",
    value: function _isRelationship(attribute) {
      var is_has_one = this._entity_instance.hasOne[attribute] || false;
      var is_has_many = this._entity_instance.hasMany[attribute] || false;
      return is_has_one || is_has_many;
    }

    /**
     * Identify if attribute has value
     *
     * @private
     * @param {String} attribute
     * @returns {Boolean}
     */
  }, {
    key: "_hasValue",
    value: function _hasValue(attribute) {
      return this._entity_instance[attribute] && this._entity_instance[attribute].length > 0;
    }
  }]);
  return EntityToJSON;
}();
exports["default"] = EntityToJSON;