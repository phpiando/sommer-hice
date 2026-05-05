"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Carbon = _interopRequireDefault(require("../Supports/Carbon"));
var _EntityHelper = _interopRequireDefault(require("./EntityHelper"));
var _EntitySerializeJSON = _interopRequireDefault(require("./EntitySerializeJSON"));
var _PropertyRequiredException = _interopRequireDefault(require("./Exceptions/PropertyRequiredException"));
var _RelationManager = _interopRequireDefault(require("./RelationManager"));
var _TypeChecker = _interopRequireDefault(require("../Supports/TypeChecker"));
var _Validator = _interopRequireDefault(require("../Validation/Validator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @description Standard class that can be used
 *to create entities in the project so that
 *makes relationships and additions automated
 *something to make the frontend more templated
 *OOP
 *
 *  @example class EntityItem extends entity {
 *    static DATES = ['created_at', 'updated_at'];
 *    static RULES = {
 *      'name': 'required|string',
 *      'email': 'required|email',
 *      'password': 'required|string'
 *    }
 *    static FORMAT_DATES = {
 *     'created_at': 'YYYY-MM-DD',
 *    }
 *    static MESSAGES = {
 *     'name': 'The name field is required',
 *    }
 *    attribute = null;
 *
 *    hasOne = {
 *      'relation': EntityRelation
 *    }
 *    hasMany = {
 *      'relation': [EntityRelation, {collection_id: 'id'}]
 *    }
 * }
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var Entity = exports["default"] = /*#__PURE__*/function () {
  /**
   * Constructor
   * @constructor
   * @param {Object} data_object Object with data to be set in the Entity
   */
  function Entity() {
    var data_object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, Entity);
    /**
     * @private
     * @since 1.0.0
     * @type {RelationManager}
     */
    _defineProperty(this, "_relationshipManager", new _RelationManager["default"]());
    /**
     * @public
     * @since 1.0.0
     * @type {Validator}
     */
    _defineProperty(this, "_validator", void 0);
    if (data_object) {
      this.fill(data_object);
    }
    this.setRulesValidator();
    this._makeNonEnumerable('_relationshipManager');
    this._makeNonEnumerable('_validator');
  }

  /**
   * Set rules validator for entity class
   * @public
   * @since 1.0.0
   * @returns {void}
   */
  return _createClass(Entity, [{
    key: "setRulesValidator",
    value: function setRulesValidator() {
      var rules = this.constructor.RULES || {};
      this._validator = new _Validator["default"](rules);
      this._validator.setMessages(this.constructor.MESSAGES || {});
    }

    /**
     * Make a non-enumerated value
     *
     * @private
     *
     * @since 0.0.1
     *
     * @param {String} propertyName
     *
     * @returns {void}
     */
  }, {
    key: "_makeNonEnumerable",
    value: function _makeNonEnumerable(propertyName) {
      Object.defineProperty(this, propertyName, {
        enumerable: false,
        configurable: true,
        //makes the property reconfigurable if necessary
        writable: true //makes the property rewritable
      });
    }

    /**
    * Method that dynamically adds values ​​to the
    * Entity that extends, allowing to map the fields that the
    * EntityClass waits.
    *
    * @public
    *
    * @since 1.0.0
    *
    * @param {Object} data_object {param, param...}
    *
    * @returns {void}
    */
  }, {
    key: "fill",
    value: (function () {
      var _fill = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data_object) {
        var key;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (data_object) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              for (key in data_object) {
                if (this._isKeyNotRelationAndExists(key)) {
                  this.setAttributeValue(key, data_object[key]);
                }
              }
              this._relationshipManager.setHasOne(this, data_object);
              this._relationshipManager.setHasMany(this, data_object);
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function fill(_x) {
        return _fill.apply(this, arguments);
      }
      return fill;
    }()
    /**
    * Identifies whether the property is not a relationship
    * defined
    *
    * @private
    *
    * @since 1.0.0
    *
    * @param {String} key
    *
    * @returns {void}
    */
    )
  }, {
    key: "_isKeyNotRelationAndExists",
    value: function _isKeyNotRelationAndExists(key) {
      return _EntityHelper["default"].isAttributeAndNotRelationship(key, this);
    }

    /**
     * Adds a value to the Entity property
     *
     * @public
     * @since 1.0.0
     * @param {String} key
     * @param {*} value
     * @throws {PropertyRequiredException} If the property does not exist
     * in the Entity
     * @returns {void}
     */
  }, {
    key: "setAttributeValue",
    value: function setAttributeValue(key, value) {
      if (!key) {
        return;
      }
      if (!this.hasOwnProperty(key) && !_EntityHelper["default"].isRelationship(key, this)) {
        throw new _PropertyRequiredException["default"]("".concat(key, " not exists in Entity"));
      }

      //TODO: think more about this
      // if(EntityHelper.isRelationship(key, this)){
      //   this._setValueRelationship(key, value);
      //   return;
      // }

      if (this.constructor.DATES && _TypeChecker["default"].isArray(this.constructor.DATES) && this.constructor.DATES.includes(key)) {
        this._setValueDate(key, value);
        return;
      }
      this[key] = value;
    }

    /**
     * Set a value in a relationship
     *
     * @private
     * @since 1.0.0
     * @param {String} key
     * @param {*} value
     * @returns
     */
  }, {
    key: "_setValueRelationship",
    value: (function () {
      var _setValueRelationship2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key, value) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (value) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.n = 2;
              return this._relationshipManager.setRelationValue(key, value, this);
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function _setValueRelationship(_x2, _x3) {
        return _setValueRelationship2.apply(this, arguments);
      }
      return _setValueRelationship;
    }()
    /**
     * Set value date
     * @public
     * @since 1.0.0
     * @param {String} key
     * @param {*} value
     * @returns {void}
     */
    )
  }, {
    key: "_setValueDate",
    value: function _setValueDate(key, value) {
      if (!value) {
        return;
      }
      if (value instanceof _Carbon["default"]) {
        this[key] = value;
        return;
      }
      var format_dates = _Carbon["default"].FORMAT_DEFAULT;
      if (this.constructor.FORMAT_DATES && this.constructor.FORMAT_DATES[key]) {
        format_dates = this.constructor.FORMAT_DATES[key];
      }
      this[key] = new _Carbon["default"](value, format_dates);
    }

    /**
     * Validate the entity
     * @public
     * @since 1.0.0
     * @param {Object} rules Rules to be validated
     * @returns {Validator}
     */
  }, {
    key: "validate",
    value: (function () {
      var _validate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var rules,
          _args3 = arguments;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              rules = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              this._validator.setData(this);
              _context3.n = 1;
              return this._validator.validate(rules);
            case 1:
              return _context3.a(2, this._validator);
          }
        }, _callee3, this);
      }));
      function validate() {
        return _validate.apply(this, arguments);
      }
      return validate;
    }())
  }, {
    key: "validateField",
    value: (
    /**
     * Validate a field entity with rules
     * @public
     * @since 1.0.0
     * @param {String} field
     * @returns {Validator}
     */
    function () {
      var _validateField = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(field) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              this._validator.setData(this);
              _context4.n = 1;
              return this._validator.validateField(field);
            case 1:
              return _context4.a(2, this._validator);
          }
        }, _callee4, this);
      }));
      function validateField(_x4) {
        return _validateField.apply(this, arguments);
      }
      return validateField;
    }())
  }, {
    key: "getAttributes",
    value:
    /**
     * Get just attributes from the entity
     * ignoring relationships and other properties
     * statics
     * @public
     * @since 1.0.0
     * @returns {Object}
     */
    function getAttributes() {
      var _this = this;
      var attributes = Object.getOwnPropertyNames(this).filter(function (prop) {
        return typeof _this[prop] !== 'function' && !_EntityHelper["default"].ATTRIBUTE_IGNORE.includes(prop);
      });
      return attributes;
    }

    /**
     * Get the entity as a JSON object
     * @public
     * @since 1.0.0
     * @param {Object} options
     * @property {String<Boolean>} just_attributes_with_values If true, only attributes with values will be returned
     * @property {String<Boolean>} ignore_relationships If true, relationships will be ignored
     * @returns {Object}
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      options = Object.assign({
        just_attributes_with_values: true,
        ignore_relationships: false
      }, options);
      return new _EntitySerializeJSON["default"](this, options).serialize();
    }

    /**
    * Reset entity instance
    *
    * @public
    * @since 1.0.0
    * @returns {void}
    */
  }, {
    key: "reset",
    value: function reset() {
      _EntityHelper["default"].resetEntity(this);
    }

    /**
     * Get a name classe
     * @public
     * @since 1.0.0
     * @returns {String}
     */
  }], [{
    key: "className",
    get: function get() {
      return 'Entity';
    }
  }]);
}();