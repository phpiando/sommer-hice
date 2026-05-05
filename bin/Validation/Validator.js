"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Rule = _interopRequireDefault(require("./Rule"));
var _ValidatorParse = _interopRequireDefault(require("./ValidatorParse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Validator = exports["default"] = /*#__PURE__*/function () {
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
  return _createClass(Validator, [{
    key: "validate",
    value: (function () {
      var _validate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var rules_override,
          rules_validate,
          _i,
          _Object$entries,
          _Object$entries$_i,
          attribute,
          rules,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              rules_override = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              this.reset();
              rules_validate = Object.keys(rules_override).length ? rules_override : this._rules;
              _i = 0, _Object$entries = Object.entries(rules_validate);
            case 1:
              if (!(_i < _Object$entries.length)) {
                _context.n = 3;
                break;
              }
              _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), attribute = _Object$entries$_i[0], rules = _Object$entries$_i[1];
              _context.n = 2;
              return this.validateAttribute(attribute, rules);
            case 2:
              _i++;
              _context.n = 1;
              break;
            case 3:
              return _context.a(2);
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
    )
  }, {
    key: "validateField",
    value: (function () {
      var _validateField = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(attribute) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (this._rules[attribute]) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.n = 2;
              return this.validateAttribute(attribute, this._rules[attribute]);
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function validateField(_x) {
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
    )
  }, {
    key: "scrollToFirstError",
    value: (function () {
      var _scrollToFirstError = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var first_error, element;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              first_error = this.firstError();
              if (first_error) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              element = document.querySelector("[name*=\"".concat(first_error, "\"]"));
              if (element) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              element.scrollIntoView();
            case 3:
              return _context3.a(2);
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
    )
  }, {
    key: "validateAttribute",
    value: (function () {
      var _validateAttribute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(attribute, rules) {
        var message, _t;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return this.passes(rules, attribute, this._data[attribute]);
            case 1:
              this.setAttributeValidated(attribute, this._data[attribute]);
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t = _context4.v;
              message = this._messages[attribute] || _t.message;
              this.setAttributeError(attribute, message);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 2]]);
      }));
      function validateAttribute(_x2, _x3) {
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
    )
  }, {
    key: "passes",
    value: (
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
      var _passes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(rules, attribute, value) {
        var parsed_rules, index, rule;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _ValidatorParse["default"].parse(rules);
            case 1:
              parsed_rules = _context5.v;
              index = 0;
            case 2:
              if (!(index < parsed_rules.length)) {
                _context5.n = 4;
                break;
              }
              rule = parsed_rules[index];
              _context5.n = 3;
              return _Rule["default"].validate(rule, attribute, value, this._data);
            case 3:
              index++;
              _context5.n = 2;
              break;
            case 4:
              return _context5.a(2, true);
          }
        }, _callee5, this);
      }));
      function passes(_x4, _x5, _x6) {
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
    )
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
     * Set the messages to be returned
     *
     * @public
     * @since 1.3.1
     * @param {Object} messages
     * @returns {void}
     */
  }, {
    key: "setMessages",
    value: function setMessages(messages) {
      this._messages = messages;
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
}();