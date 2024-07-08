"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Rule = _interopRequireDefault(require("./Rule"));
var _ValidatorParse = _interopRequireDefault(require("./ValidatorParse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Validator = /*#__PURE__*/function () {
  function Validator() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var messages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Validator);
    /**
     * Attributes that failed validation
     *
     * @public
     * @since 1.0.0
     * @type {Object}
     * @default {}
     */
    _defineProperty(this, "errors", {});
    /**
     * Amount of failed validations
     *
     * @private
     * @since 1.0.0
     * @type {Object}
     * @default {}
     */
    _defineProperty(this, "_errors_count", 0);
    /**
     * Rules to be validated
     *
     * @private
     * @since 1.0.0
     * @type {Object}
     */
    _defineProperty(this, "_rules", {});
    /**
     * Data to be validated
     *
     * @private
     * @since 1.0.0
     * @type {Object}
     */
    _defineProperty(this, "_data", {});
    /**
     * Messages to be returned
     * in case of validation failure
     *
     * @private
     * @since 1.0.0
     * @type {Object}
     */
    _defineProperty(this, "_messages", {});
    /**
     * Attributes that passed validation
     *
     * @public
     * @since 1.0.0
     * @type {Object}
     */
    _defineProperty(this, "validated", {});
    this._rules = rules;
    this._messages = messages;
    this._data = data;
  }

  /**
   * Validate the data based on the rules
   * and messages set
   * @public
   * @since 1.0.0
   * @param {Object} rules_override Object with rules to be validated
   * @returns {void}
   */
  _createClass(Validator, [{
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var rules_override,
          rules_validate,
          _i,
          _Object$entries,
          _Object$entries$_i,
          attribute,
          rules,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              rules_override = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              this.reset();
              rules_validate = Object.keys(rules_override).length ? rules_override : this._rules;
              _i = 0, _Object$entries = Object.entries(rules_validate);
            case 4:
              if (!(_i < _Object$entries.length)) {
                _context.next = 11;
                break;
              }
              _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), attribute = _Object$entries$_i[0], rules = _Object$entries$_i[1];
              _context.next = 8;
              return this.validateAttribute(attribute, rules);
            case 8:
              _i++;
              _context.next = 4;
              break;
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function validate() {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
    /**
     * Validate a single field
     *
     * @public
     * @since 1.0.0
     * @param {String} attribute
     * @returns {void}
     */
  }, {
    key: "validateField",
    value: function () {
      var _validateField = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(attribute) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this._rules[attribute]) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _context2.next = 4;
              return this.validateAttribute(attribute, this._rules[attribute]);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function validateField(_x2) {
        return _validateField.apply(this, arguments);
      }
      return validateField;
    }()
    /**
     * Scroll to the first error
     *
     * @public
     * @since 1.0.0
     * @returns {void}
     */
  }, {
    key: "scrollToFirstError",
    value: function () {
      var _scrollToFirstError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var first_error, element;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              first_error = this.firstError();
              if (first_error) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              element = document.querySelector("[name*=\"".concat(first_error, "\"]"));
              if (element) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              element.scrollIntoView();
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function scrollToFirstError() {
        return _scrollToFirstError.apply(this, arguments);
      }
      return scrollToFirstError;
    }()
    /**
     * Validate fields with the rules
     * and messages set
     * @public
     * @since 1.0.0
     * @param {String} attribute
     * @param {Object} rules
     * @returns {void}
     */
  }, {
    key: "validateAttribute",
    value: function () {
      var _validateAttribute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(attribute, rules) {
        var message;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return this.passes(rules, attribute, this._data[attribute]);
            case 3:
              this.setAttributeValidated(attribute, this._data[attribute]);
              _context4.next = 10;
              break;
            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              message = this._messages[attribute] || _context4.t0.message;
              this.setAttributeError(attribute, message);
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 6]]);
      }));
      function validateAttribute(_x3, _x4) {
        return _validateAttribute.apply(this, arguments);
      }
      return validateAttribute;
    }()
    /**
     * Create a new instance of the class
     * and set the rules to be validated
     *
     * @public
     * @since 1.0.0
     * @param {Object} rules Object with rules to be validated
     * @param {Object} messages Object with messages to be returned in case of validation failure
     * @returns {Validator}
     */
  }, {
    key: "passes",
    value:
    /**
     * Determine if the data passes the validation rules
     *
     * @public
     * @since 1.0.0
     *
     * @param {String} rules rules to be validated
     * @param {String} attribute attribute to be validated
     * @param {*} value value to be validated
     * @throws {RuleException} If the rule is not valid
     * @returns {Boolean}
     */
    function () {
      var _passes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(rules, attribute, value) {
        var parsed_rules, index, rule;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _ValidatorParse["default"].parse(rules);
            case 2:
              parsed_rules = _context5.sent;
              index = 0;
            case 4:
              if (!(index < parsed_rules.length)) {
                _context5.next = 11;
                break;
              }
              rule = parsed_rules[index];
              _context5.next = 8;
              return _Rule["default"].validate(rule, attribute, value, this._data);
            case 8:
              index++;
              _context5.next = 4;
              break;
            case 11:
              return _context5.abrupt("return", true);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function passes(_x5, _x6, _x7) {
        return _passes.apply(this, arguments);
      }
      return passes;
    }()
    /**
     * Set the data to be validated
     *
     * @public
     * @since 1.0.0
     * @param {Object} data
     * @returns {void}
     */
  }, {
    key: "setData",
    value: function setData(data) {
      this._data = data;
    }

    /**
     * Rules to be validated
     *
     * @public
     * @since 1.0.0
     * @param {Object.<String,String>} rules
     * @returns {void}
     */
  }, {
    key: "setRules",
    value: function setRules(rules) {
      this._rules = rules;
    }

    /**
     * set attribute valitated
     *
     * @public
     * @since 1.0.0
     * @param {String} attribute
     * @param {*} value
     * @returns {Object}
     */
  }, {
    key: "setAttributeValidated",
    value: function setAttributeValidated(attribute, value) {
      this.validated[attribute] = value;
      if (this.errors[attribute]) {
        delete this.errors[attribute];
        this._errors_count--;
      }
    }

    /**
     * Set attribute error
     * @public
     * @since 1.0.0
     * @param {String} attribute
     * @param {*} message
     * @returns {void}
     */
  }, {
    key: "setAttributeError",
    value: function setAttributeError(attribute, message) {
      if (this.errors[attribute]) {
        return;
      }
      this.errors[attribute] = message;
      this._errors_count++;
    }

    /**
     * Check if the data does not pass the validation rules
     *
     * @public
     * @since 1.0.0
     * @returns {Boolean}
     */
  }, {
    key: "fails",
    value: function fails() {
      return this._errors_count > 0;
    }

    /**
     * Get the first invalid attribute
     *
     * @public
     * @since 1.0.0
     * @returns {String}
     */
  }, {
    key: "firstError",
    value: function firstError() {
      return Object.keys(this.errors)[0] || null;
    }

    /**
     * Reset the validation data
     * to the initial state
     *
     * @public
     * @since 1.0.0
     * @returns {void}
     */
  }, {
    key: "reset",
    value: function reset() {
      this.errors = {};
      this.validated = {};
      this._errors_count = 0;
    }
  }], [{
    key: "make",
    value: function make(rules, data) {
      var messages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new this(rules, data, messages);
    }
  }]);
  return Validator;
}();
exports["default"] = Validator;