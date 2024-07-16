"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _RuleRequiredIfException = _interopRequireDefault(require("../Exceptions/RuleRequiredIfException"));
var _TypeChecker = _interopRequireDefault(require("../../Supports/TypeChecker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RuleRequiredIf = exports["default"] = /*#__PURE__*/function () {
  function RuleRequiredIf() {
    _classCallCheck(this, RuleRequiredIf);
  }
  return _createClass(RuleRequiredIf, [{
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
      if (data_object[parameters.attribute] == parameters.value && !value) {
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
}();