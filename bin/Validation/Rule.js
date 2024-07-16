"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TypeChecker = _interopRequireDefault(require("../Supports/TypeChecker.js"));
var _RuleException = _interopRequireDefault(require("./Exceptions/RuleException.js"));
var _RuleRequiredException = _interopRequireDefault(require("./Exceptions/RuleRequiredException.js"));
var _Str = _interopRequireDefault(require("../Supports/Str.js"));
var _RuleRequiredIf = _interopRequireDefault(require("./Rules/RuleRequiredIf.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Rule = exports["default"] = /*#__PURE__*/function () {
  function Rule() {
    _classCallCheck(this, Rule);
  }
  return _createClass(Rule, null, [{
    key: "validate",
    value:
    /**
     * Validate a Rule using the attribute and value
     * and throw an exception if the rule fails
     *
     * @public
     * @since 1.0.0
     * @param {String} rule Rule used example required,email, etc
     * @param {String} attribute Attribute name in the object
     * @param {*} value Value to be validated
     * @param {Object} data Data can be the entity used or object
     * @throws {RuleException} If the rule is not valid
     * @returns {void}
     */
    function validate(rule, attribute, value) {
      var data_object = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var options = {};
      if (_TypeChecker["default"].isObject(rule)) {
        options = rule.conditions || {};
        rule = rule.rule; //replace rule with the rule name
      }
      var rule_method = _Str["default"].camel(rule);
      if (!Rule[rule_method]) {
        throw new _RuleException["default"]("Rule: ".concat(rule, " not found"));
      }
      Rule[rule_method](attribute, value, options, data_object);
    }

    /**
     * Validate if the value is required
     * @public
     * @since 1.0.0
     * @param {String} attribute Attribute name in the object
     * @param {*} value value to be validated
     * @throws {RuleRequiredException} If the value is not defined or empty
     * @returns {Boolean}
     */
  }, {
    key: "required",
    value: function required(attribute, value) {
      if (!value) {
        throw new _RuleRequiredException["default"](attribute);
      }
      return true;
    }

    /**
     * Validate if value is required another attribute is present
     *
     * @public
     * @param {*} attribute String attribute name is used
     * @param {*} value value to be validated
     * @param {Object} options Object with options with conditions
     * @param {*} data_object Object with data to be validated
     */
  }, {
    key: "requiredIf",
    value: function requiredIf(attribute, value, options, data_object) {
      _RuleRequiredIf["default"].passes(attribute, value, options, data_object);
    }
  }]);
}();