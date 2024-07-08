"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TypeChecker = _interopRequireDefault(require("./TypeChecker.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description FormDataSerializer class to serialize data
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var FormDataSerializer = /*#__PURE__*/function () {
  function FormDataSerializer() {
    _classCallCheck(this, FormDataSerializer);
  }
  _createClass(FormDataSerializer, [{
    key: "handleDefault",
    value: function handleDefault(data, form_data, namespace) {
      form_data.append(namespace, data);
    }

    /**
     * Serialize data to FormData
     *
     * @param {*} data
     * @param {*} form_data
     * @param {*} namespace
     * @returns
     */
  }, {
    key: "serialize",
    value: function serialize(data) {
      var form_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
      var namespace = arguments.length > 2 ? arguments[2] : undefined;
      for (var property in data) {
        var formKey = property;
        if (data.hasOwnProperty(property)) {
          if (namespace) {
            formKey = namespace + '[' + property + ']';
          }

          // if the property is an object, but not a File,
          // use recursivity.
          if (_TypeChecker["default"].isObject(data[property]) && !(data[property] instanceof File)) {
            this.serialize(data[property], form_data, formKey);
            continue;
          }
          this.handleDefault(data[property], form_data, formKey);
        }
      }
      return form_data;
    }
  }]);
  return FormDataSerializer;
}();
exports["default"] = FormDataSerializer;