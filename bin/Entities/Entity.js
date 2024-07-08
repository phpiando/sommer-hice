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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var Entity = /*#__PURE__*/function () {
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
  _createClass(Entity, [{
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
    value: function () {
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
    value: function () {
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
    value: function () {
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
    }()
  }, {
    key: "validateField",
    value:
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
    }()
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
  return Entity;
}();
exports["default"] = Entity;