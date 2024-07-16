"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.http = void 0;
var _HTTPRequest = _interopRequireDefault(require("./HTTPRequest"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Allows you to use HTTPRequest in a
 * Singleton to carry out requests
 */
var http = exports.http = new _HTTPRequest["default"]();