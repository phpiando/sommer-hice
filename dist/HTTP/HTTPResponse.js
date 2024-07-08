"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HTTPResponse = /*#__PURE__*/function () {
  function HTTPResponse() {
    _classCallCheck(this, HTTPResponse);
    /**
     * Cabeçalho que retornou da resposta
     * da requisição
     * @type {Headers}
     */
    _defineProperty(this, "headers", new Headers());
    /**
     * Status request
     *
     * @type {Number}
     */
    _defineProperty(this, "status", 200);
    /**
     * Return that may vary depending on the
     * use of the class, if it identifies the property
     * message or messages in the request will add
     * @type {Array|Object}
     */
    _defineProperty(this, "messages", void 0);
    /**
     * Returna a message single
     * if exist in API
     *
     * @type {String}
     */
    _defineProperty(this, "message", void 0);
    /**
     * Response after request using fetch()
     * @type {Response}
     */
    _defineProperty(this, "data_body", void 0);
    /**
     * Value body converted in json
     * @type {Object}
     */
    _defineProperty(this, "data_json", void 0);
  }
  _createClass(HTTPResponse, [{
    key: "getFirstMessage",
    value: function getFirstMessage() {}
  }, {
    key: "getMessageByIndex",
    value: function getMessageByIndex() {}
  }, {
    key: "getMessageById",
    value: function getMessageById() {}
  }]);
  return HTTPResponse;
}();
exports["default"] = HTTPResponse;