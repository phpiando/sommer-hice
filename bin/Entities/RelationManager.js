"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _CollectionIndexed = _interopRequireDefault(require("../Collections/CollectionIndexed"));
var _Entity = _interopRequireDefault(require("./Entity"));
var _EntityHelper = _interopRequireDefault(require("./EntityHelper"));
var _HasManyCollection = _interopRequireDefault(require("./Collections/HasManyCollection"));
var _RelationException = _interopRequireDefault(require("./Exceptions/RelationException"));
var _TypeChecker = _interopRequireDefault(require("../Supports/TypeChecker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @description Class dealing with relationships
 * of entities when defined
 *
 * For example:
 *
 * @example class EntityItem extends entity {
 *  hasOne = {
 *   'relation': EntityRelation
 *  }
 *  hasMany = {
 *  'relation': [EntityRelation, {collection_id: 'id'}]
 *  }
 * }
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var RelationManager = exports["default"] = /*#__PURE__*/function () {
  function RelationManager() {
    _classCallCheck(this, RelationManager);
  }
  return _createClass(RelationManager, [{
    key: "setHasOne",
    value:
    /**
     * Add relationships
     * that refer to hasOne to the entity object
     *
     * @public
     * @since 1.0.0
     * @param {Object} entity Entity
     * @param {Object} data_object
     * @returns {void}
     */
    function setHasOne(entity, data_object) {
      if (!entity.hasOwnProperty('hasOne')) {
        return;
      }
      this._handleOneToOne(data_object, entity);
    }

    /**
     * This method tries to create relationships based on classes
     * that were defined in entities 1 to 1
     *
     * @private
     * @since 1.0.0
     * @param {*} data_object
     * @param {*} entity
     * @throws {RelationException} If the class does not extend Entity
     * @returns {void}
     */
  }, {
    key: "_handleOneToOne",
    value: function _handleOneToOne(data_object, entity) {
      for (var relation in entity.hasOne) {
        if (Object.prototype.hasOwnProperty.call(data_object, relation)) {
          entity[relation] = new entity.hasOne[relation]();
          if (!data_object[relation]) {
            continue;
          }
          if (!(entity[relation] instanceof _Entity["default"])) {
            throw new _RelationException["default"]("Class for relation ".concat(relation, " does not extend Entity"));
          }
          entity[relation].fill(data_object[relation]);
        }
      }
    }

    /**
     * Add relationships
     * that refer to hasMany to the entity object
     *
     * @public
     * @since 1.0.0
     * @param {Object} entity
     * @param {Object} data_object
     * @throws {RelationException} If the class does not extend Entity
     * @returns {void}
     */
  }, {
    key: "setHasMany",
    value: function setHasMany(entity, data_object) {
      var _this = this;
      if (!entity.hasOwnProperty('hasMany')) {
        return;
      }
      var _loop = function _loop(relation) {
        var relation_struct = _this._getDescontructRelation(relation, entity.hasMany);
        var index_id = relation_struct.options.collection_id || 'id';
        entity[relation] = new _HasManyCollection["default"](index_id);
        if (Object.prototype.hasOwnProperty.call(data_object, relation)) {
          data_object[relation].forEach(function (item) {
            var relation_entity = new relation_struct['class_instance']();
            if (!(relation_entity instanceof _Entity["default"])) {
              throw new _RelationException["default"]("Class for relation ".concat(relation, " does not extend Entity"));
            }
            relation_entity.fill(item);
            entity[relation].set(relation_entity);
          });
        }
      };
      for (var relation in entity.hasMany) {
        _loop(relation);
      }
    }

    /**
     * Deconstructs the relationship extracting the class and personalized options
     * that can have
     *
     * @private
     *
     * @since 1.0.0
     *
     * @param {String} relation
     * @param {Array|Class} relation_type
     *
     * @throws {RelationException} If the class does not extend Entity
     *
     * @returns {Object}
     * @property {Object.<Class>} class_instance Class used in relationship
     * @property {Object} options Object with properties
     * @property {String} options.collection_id Index used in Collections
     */
  }, {
    key: "_getDescontructRelation",
    value: function _getDescontructRelation(relation, relation_type) {
      if (typeof relation_type[relation] !== 'function') {
        if (!relation_type[relation][0] || typeof relation_type[relation][0] !== 'function') {
          throw new _RelationException["default"]("Class for relation ".concat(relation, " does not exists"));
        }
        return {
          class_instance: relation_type[relation][0],
          options: relation_type[relation][1] || {}
        };
      }
      return {
        class_instance: relation,
        options: {}
      };
    }

    /**
     * Get relationship from entity instance
     *
     * @public
     * @since 1.0.0
     * @param {String} attribute
     * @param {Object} entity_instance
     * @returns {Entity}
     */
  }, {
    key: "getRelationInstance",
    value: function getRelationInstance(attribute, entity_instance) {
      var instance = _EntityHelper["default"].getEntityRelationship(attribute, entity_instance);
      if (!instance) {
        return null;
      }
      return new instance();
    }

    /**
     * Set the value of a relationship in the entity instance
     * based on the attribute and value passed
     *
     * @public
     * @since 1.0.0
     * @param {*} attribute
     * @param {*} value
     * @param {*} entity_instance
     * @returns
     */
  }, {
    key: "setRelationValue",
    value: (function () {
      var _setRelationValue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(attribute, value, entity_instance) {
        var entity_relation, _iterator, _step, item, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              entity_relation = this.getRelationInstance(attribute, entity_instance);
              if (entity_relation) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              if (!_TypeChecker["default"].isArray(value)) {
                _context.n = 10;
                break;
              }
              if (!(entity_instance[attribute] instanceof _HasManyCollection["default"])) {
                entity_instance[attribute] = new _HasManyCollection["default"]('id');
              }
              _iterator = _createForOfIteratorHelper(value);
              _context.p = 2;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context.n = 6;
                break;
              }
              item = _step.value;
              _context.n = 4;
              return entity_relation.fill(item);
            case 4:
              entity_instance[attribute].add(entity_relation);
            case 5:
              _context.n = 3;
              break;
            case 6:
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              _iterator.e(_t);
            case 8:
              _context.p = 8;
              _iterator.f();
              return _context.f(8);
            case 9:
              return _context.a(2);
            case 10:
              entity_instance[attribute] = entity_relation;
            case 11:
              return _context.a(2);
          }
        }, _callee, this, [[2, 7, 8, 9]]);
      }));
      function setRelationValue(_x, _x2, _x3) {
        return _setRelationValue.apply(this, arguments);
      }
      return setRelationValue;
    }())
  }]);
}();