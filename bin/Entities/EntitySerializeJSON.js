"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Carbon = _interopRequireDefault(require("../Supports/Carbon"));
var _Entity = _interopRequireDefault(require("./Entity"));
var _EntityHelper = _interopRequireDefault(require("./EntityHelper"));
var _HasManyCollection = _interopRequireDefault(require("./Collections/HasManyCollection"));
var _TypeChecker = _interopRequireDefault(require("../Supports/TypeChecker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @description EntitySerializeJSON class to serialize data
 * in JSON format
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 * @since 1.0.0 
 */
var EntitySerializeJSON = exports["default"] = /*#__PURE__*/function () {
  /**
   *
   * @param {Class} entity
   * @param {Object} options
   */
  function EntitySerializeJSON(entity) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, EntitySerializeJSON);
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
     * Debug mode
     * @private
     * @type {Boolean}
     */
    _defineProperty(this, "_debug", false);
    /**
     * Special cases that need to be formatted
     * @private
     * @type {Object}
     */
    _defineProperty(this, "_specialCases", {
      'Carbon': function Carbon(attribute, instance) {
        return instance[attribute].format();
      },
      'Entity': function Entity(attribute, instance) {
        return new EntitySerializeJSON(instance[attribute], _this._options).serialize();
      },
      'CollectionIndexed': function CollectionIndexed(attribute, instance) {
        return _this.serializeCollection(attribute, instance);
      },
      'Array': function Array(attribute, instance) {
        return _this.serializeArray(attribute, instance);
      },
      'Object': function Object(attribute, instance) {
        return _this.serializeObject(attribute, instance);
      }
    });
    if (!(entity instanceof _Entity["default"])) {
      console.error('EntitySerializeJSON: Entity must be an instance of Entity');
    }
    this._entity_instance = entity;
    this._options = options;
    this._debug = options.debug || false;
    this._log('------------------ EntitySerializeJSON ------------------');
    this._log('Entity:', this._entity_instance);
  }

  /**
   * Serialize data to JSON
   *
   * @public
   * @param {Entity} data
   * @returns {Object} JSON
   */
  return _createClass(EntitySerializeJSON, [{
    key: "serialize",
    value: function serialize() {
      var _this2 = this;
      return this._entity_instance.getAttributes().reduce(function (data_object, attribute) {
        if (_this2._options.ignore_relationships && _this2._isRelationship(attribute)) {
          return data_object;
        }
        if (_this2._isSpecialCase(attribute)) {
          return _this2._formatSpecialCase(attribute, data_object);
        }
        if (_this2._options.just_attributes_with_values && !_this2._hasValue(attribute)) {
          return data_object;
        }
        data_object[attribute] = _this2._entity_instance[attribute];
        return data_object;
      }, {});
    }

    /**
     * Serialize a collections
     *
     * @param {*} attribute
     * @param {*} instance
     * @returns
     */
  }, {
    key: "serializeCollection",
    value: function serializeCollection(attribute, instance) {
      var _this3 = this;
      if (instance[attribute].size === 0) {
        return [];
      }
      return instance[attribute].items.map(function (item) {
        _this3._log('*** Collections item:', item);
        if (!(item instanceof _Entity["default"])) {
          return item;
        }
        return new EntitySerializeJSON(item, _this3._options).serialize();
      });
    }

    /**
     *
     * @param {*} attribute
     * @param {*} instance
     * @returns
     */
  }, {
    key: "serializeArray",
    value: function serializeArray(attribute, instance) {
      var _this4 = this;
      this._log('*** Array:', {
        attribute: attribute,
        instance: instance,
        is_empty: _TypeChecker["default"].isEmpty(instance['attribute'])
      });
      if (!_TypeChecker["default"].isEmpty(instance['attribute'])) {
        return [];
      }
      return instance[attribute].map(function (item) {
        _this4._log('*** Array item:', item);
        if (!(item instanceof _Entity["default"])) {
          return item;
        }
        return new EntitySerializeJSON(item, _this4._options).serialize();
      });
    }

    /**
     * Serialize objects in JSON format
     *
     * @public
     * @since 1.2.0
     * @param {*} attribute
     * @param {*} instance
     * @returns
     */
  }, {
    key: "serializeObject",
    value: function serializeObject(attribute, instance) {
      this._log('*** Object:', {
        attribute: attribute,
        instance: instance,
        is_empty: _TypeChecker["default"].isEmpty(instance['attribute'])
      });

      // if(TypeChecker.isEmpty(instance['attribute']) === true){
      //   return '';
      // }

      return JSON.stringify(instance[attribute]);
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
      var _this$_entity_instanc, _this$_entity_instanc2;
      var constructor_instance = ((_this$_entity_instanc = this._entity_instance[attribute]) === null || _this$_entity_instanc === void 0 || (_this$_entity_instanc = _this$_entity_instanc.constructor) === null || _this$_entity_instanc === void 0 ? void 0 : _this$_entity_instanc.className) || null;
      var constructor_name = constructor_instance || ((_this$_entity_instanc2 = this._entity_instance[attribute]) === null || _this$_entity_instanc2 === void 0 || (_this$_entity_instanc2 = _this$_entity_instanc2.constructor) === null || _this$_entity_instanc2 === void 0 ? void 0 : _this$_entity_instanc2.name) || null;
      var special_case = constructor_name;
      special_case = this._isEntity(attribute) ? 'Entity' : special_case;
      this._log({
        constructor_name: constructor_name,
        attribute_value: this._entity_instance[attribute],
        special_case: special_case,
        attribute: attribute,
        "typeof": _typeof(this._entity_instance[attribute])
      });
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
      var _this$_entity_instanc3, _this$_entity_instanc4;
      if (!this._isSpecialCase(attribute)) {
        return data_object;
      }
      this._log('-> Before format special case:', attribute);
      var constructor_instance = ((_this$_entity_instanc3 = this._entity_instance[attribute]) === null || _this$_entity_instanc3 === void 0 || (_this$_entity_instanc3 = _this$_entity_instanc3.constructor) === null || _this$_entity_instanc3 === void 0 ? void 0 : _this$_entity_instanc3.className) || null;
      var constructor_name = constructor_instance || ((_this$_entity_instanc4 = this._entity_instance[attribute].constructor) === null || _this$_entity_instanc4 === void 0 ? void 0 : _this$_entity_instanc4.name) || null;
      constructor_name = this._isEntity(attribute) ? 'Entity' : constructor_name;
      var formatted = this._specialCases[constructor_name](attribute, this._entity_instance);
      this._log('-> Formatted Special Cases:', {
        attribute: attribute,
        constructor_name: constructor_name,
        formatted: formatted
      });
      if (!formatted) {
        return data_object;
      }
      data_object[attribute] = formatted;
      return data_object;
    }

    /**
     * Identify if attribute is an entity
     *
     * @private
     * @param {String} attribute
     * @returns {Boolean}
     */
  }, {
    key: "_isEntity",
    value: function _isEntity(attribute) {
      return this._entity_instance[attribute] instanceof _Entity["default"];
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
      return _EntityHelper["default"].isRelationship(attribute, this._entity_instance);
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
      return this._entity_instance[attribute] && !_TypeChecker["default"].isEmpty(this._entity_instance[attribute]);
    }

    /**
     * Debug log
     *
     * @param  {...any} args
     * @returns {void}
     */
  }, {
    key: "_log",
    value: function _log() {
      if (this._debug) {
        var _console;
        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);
}();