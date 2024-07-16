"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _RuleException2 = _interopRequireDefault(require("./RuleException.js"));
var _RuleRequiredIfException;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @description Class to handle Validation exceptions
 * Modules
 *
 * @class
 * @extends Exception
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var RuleRequiredIfException = exports["default"] = /*#__PURE__*/function (_RuleException) {
  /**
   *
   * @param {*} attribute
   * @param {*} code
   */
  function RuleRequiredIfException(attribute) {
    var _this;
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RuleRequiredIfException.RULE_REQUIRED_IF;
    _classCallCheck(this, RuleRequiredIfException);
    _this = _callSuper(this, RuleRequiredIfException, [RuleRequiredIfException.MESSAGES_ERRORS[code].replaceAll('{attribute}', attribute)]);
    /**
     * Identify name Exception
     * @type {String}
     */
    _defineProperty(_this, "name", "RuleRequiredIfException");
    _this.code = code;
    return _this;
  }
  _inherits(RuleRequiredIfException, _RuleException);
  return _createClass(RuleRequiredIfException);
}(_RuleException2["default"]);
_RuleRequiredIfException = RuleRequiredIfException;
/**
 * Identify the code
 * @type {String}
 */
_defineProperty(RuleRequiredIfException, "RULE_REQUIRED_IF", "RULE_REQUIRED_IF");
/**
 * Parameters missing
 * @type {String}
 */
_defineProperty(RuleRequiredIfException, "PARAMETERS_MISSING", "PARAMETERS_MISSING");
/**
 * Message exception
 * @type {String}
 */
_defineProperty(RuleRequiredIfException, "MESSAGES_ERRORS", _defineProperty(_defineProperty({}, _RuleRequiredIfException.RULE_REQUIRED_IF, "This field is required if {attribute} is present"), _RuleRequiredIfException.PARAMETERS_MISSING, "The parameters are missing for the validation rule {attribute}. Eg: required_if:attribute,condition,value"));