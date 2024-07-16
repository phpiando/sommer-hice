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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
      var _setRelationValue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(attribute, value, entity_instance) {
        var entity_relation, _iterator, _step, item;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              entity_relation = this.getRelationInstance(attribute, entity_instance);
              if (entity_relation) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              if (!_TypeChecker["default"].isArray(value)) {
                _context.next = 24;
                break;
              }
              if (!(entity_instance[attribute] instanceof _HasManyCollection["default"])) {
                entity_instance[attribute] = new _HasManyCollection["default"]('id');
              }
              _iterator = _createForOfIteratorHelper(value);
              _context.prev = 6;
              _iterator.s();
            case 8:
              if ((_step = _iterator.n()).done) {
                _context.next = 15;
                break;
              }
              item = _step.value;
              _context.next = 12;
              return entity_relation.fill(item);
            case 12:
              entity_instance[attribute].add(entity_relation);
            case 13:
              _context.next = 8;
              break;
            case 15:
              _context.next = 20;
              break;
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](6);
              _iterator.e(_context.t0);
            case 20:
              _context.prev = 20;
              _iterator.f();
              return _context.finish(20);
            case 23:
              return _context.abrupt("return");
            case 24:
              entity_instance[attribute] = entity_relation;
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[6, 17, 20, 23]]);
      }));
      function setRelationValue(_x, _x2, _x3) {
        return _setRelationValue.apply(this, arguments);
      }
      return setRelationValue;
    }())
  }]);
}();