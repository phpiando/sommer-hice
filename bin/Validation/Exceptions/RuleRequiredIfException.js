"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _RuleException2 = _interopRequireDefault(require("./RuleException.js"));
var _class, _defineProperty2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description Class to handle Validation exceptions
 * Modules
 *
 * @class
 * @extends Exception
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var RuleRequiredIfException = /*#__PURE__*/function (_RuleException) {
  _inherits(RuleRequiredIfException, _RuleException);
  var _super = _createSuper(RuleRequiredIfException);
  /**
   *
   * @param {*} attribute
   * @param {*} code
   */
  function RuleRequiredIfException(attribute) {
    var _this;
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RuleRequiredIfException.RULE_REQUIRED_IF;
    _classCallCheck(this, RuleRequiredIfException);
    _this = _super.call(this, RuleRequiredIfException.MESSAGES_ERRORS[code].replaceAll('{attribute}', attribute));
    /**
     * Identify name Exception
     * @type {String}
     */
    _defineProperty(_assertThisInitialized(_this), "name", "RuleRequiredIfException");
    _this.code = code;
    return _this;
  }
  return _createClass(RuleRequiredIfException);
}(_RuleException2["default"]);
exports["default"] = RuleRequiredIfException;
_class = RuleRequiredIfException;
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
_defineProperty(RuleRequiredIfException, "MESSAGES_ERRORS", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _class.RULE_REQUIRED_IF, "This field is required if {attribute} is present"), _defineProperty(_defineProperty2, _class.PARAMETERS_MISSING, "The parameters are missing for the validation rule {attribute}. Eg: required_if:attribute,condition,value"), _defineProperty2));