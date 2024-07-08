"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.http = void 0;
var _HTTPRequest = _interopRequireDefault(require("./HTTPRequest"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Allows you to use HTTPRequest in a
 * Singleton to carry out requests
 */
var http = new _HTTPRequest["default"]();
exports.http = http;