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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
      var _fill = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data_object) {
        var key;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (data_object) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              for (key in data_object) {
                if (this._isKeyNotRelationAndExists(key)) {
                  this.setAttributeValue(key, data_object[key]);
                }
              }
              this._relationshipManager.setHasOne(this, data_object);
              this._relationshipManager.setHasMany(this, data_object);
            case 5:
            case "end":
              return _context.stop();
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
      var _setValueRelationship2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, value) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (value) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _context2.next = 4;
              return this._relationshipManager.setRelationValue(key, value, this);
            case 4:
            case "end":
              return _context2.stop();
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
      var _validate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var rules,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              rules = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              this._validator.setData(this);
              _context3.next = 4;
              return this._validator.validate(rules);
            case 4:
              return _context3.abrupt("return", this._validator);
            case 5:
            case "end":
              return _context3.stop();
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
      var _validateField = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(field) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this._validator.setData(this);
              _context4.next = 3;
              return this._validator.validateField(field);
            case 3:
              return _context4.abrupt("return", this._validator);
            case 4:
            case "end":
              return _context4.stop();
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