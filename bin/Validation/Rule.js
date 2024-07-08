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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Rule = /*#__PURE__*/function () {
  function Rule() {
    _classCallCheck(this, Rule);
  }
  _createClass(Rule, null, [{
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
  return Rule;
}();
exports["default"] = Rule;