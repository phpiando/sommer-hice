"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TypeChecker = _interopRequireDefault(require("../../Supports/TypeChecker"));
var _RuleRequiredIfException = _interopRequireDefault(require("../Exceptions/RuleRequiredIfException"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RuleRequiredIf = /*#__PURE__*/function () {
  function RuleRequiredIf() {
    _classCallCheck(this, RuleRequiredIf);
  }
  _createClass(RuleRequiredIf, [{
    key: "_validate",
    value:
    /**
     * @description Method to validate the attribute
     *
     * @private
     * @since 1.0.0
     * @param {*} attribute
     * @param {*} value
     * @param {*} parameters
     * @param {*} data_object
     * @returns {Boolean}
     */
    function _validate(attribute, value, parameters, data_object) {
      this._validateParameters(attribute, parameters);
      if (!_TypeChecker["default"].isObject(data_object) || !data_object.hasOwnProperty(parameters.attribute)) {
        return true;
      }
      if (data_object[parameters.attribute] === parameters.value && !value) {
        throw new _RuleRequiredIfException["default"](parameters.attribute, _RuleRequiredIfException["default"].RULE_REQUIRED_IF);
      }
      return true;
    }

    /**
     * @description validate the parameters is correct
     *
     * @private
     * @since 1.0.0
     * @param {String} attribute
     * @param {Object} parameters
     * @throws {RuleRequiredIfException} If the parameters is not valid
     * @returns {void}
     */
  }, {
    key: "_validateParameters",
    value: function _validateParameters(attribute, parameters) {
      if (!parameters || parameters.length < 3) {
        throw new _RuleRequiredIfException["default"](attribute, _RuleRequiredIfException["default"].PARAMETERS_MISSING);
      }
    }
  }], [{
    key: "passes",
    value:
    /**
     * @description Method to handle the rule
     *
     * @public
     * @since 1.0.0
     * @param {*} attribute
     * @param {*} value
     * @param {*} parameters
     * @param {*} data_object
     */
    function passes(attribute, value, parameters, data_object) {
      var required_if = new RuleRequiredIf();
      required_if._validate(attribute, value, parameters, data_object);
    }
  }]);
  return RuleRequiredIf;
}();
exports["default"] = RuleRequiredIf;