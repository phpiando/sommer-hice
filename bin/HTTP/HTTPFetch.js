"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HTTPFetch = /*#__PURE__*/function () {
  function HTTPFetch(method, uri, headers) {
    var _this = this;
    _classCallCheck(this, HTTPFetch);
    this.xhr = new XMLHttpRequest();
    this.headers = null;
    if (method && uri) {
      this.open(method, uri);
    }
    if (headers && headers.length) {
      headers.forEach(function (_ref) {
        var header = _ref.header,
          value = _ref.value;
        _this.setRequestHeader(header, value);
      });
    }
  }
  _createClass(HTTPFetch, [{
    key: "open",
    value: function open(method, uri) {
      if (method && uri) {
        this.xhr.open(method, uri);
      }
    }
  }, {
    key: "setRequestHeader",
    value: function setRequestHeader(header, value) {
      if (header && value) {
        this.xhr.setRequestHeader(header, value);
      }
    }
  }, {
    key: "fetchFromServer",
    value: function fetchFromServer(payload) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        _this2.xhr.onload = function () {
          if (_this2.xhr.readyState === _this2.xhr.HEADERS_RECEIVED) {
            _this2.headers = _this2.xhr.getAllResponseHeaders();
          }
          if (_this2.xhr.status === 200) {
            var responseData = _this2.parseResponse(_this2.xhr.responseText);
            resolve({
              json: responseData,
              headers: _this2.headers
            });
          } else {
            reject(_this2.xhr.statusText || "Status ".concat(_this2.xhr.status));
          }
        };
        _this2.xhr.onerror = function (e) {
          reject(e.target.status);
        };
        if (payload instanceof FormData) {
          _this2.xhr.send(payload);
        } else {
          _this2.xhr.send(JSON.stringify(payload));
        }
      });
    }
  }, {
    key: "send",
    value: function send(payload) {
      if (!this._fetchingPromise) {
        this._fetchingPromise = this.fetchFromServer(payload);
      }
      return this._fetchingPromise;
    }
  }, {
    key: "parseResponse",
    value: function parseResponse(responseText) {
      return JSON.parse(responseText, function (key, value) {
        if (['createdon', 'updatedon', 'askedon', 'publishedon', 'lastUpdated'].includes(key) && Date.parse(value)) {
          return new Date(value);
        }
        if (key === 'json' && typeof value === 'string') {
          return JSON.parse(value);
        }
        return value;
      });
    }
  }]);
  return HTTPFetch;
}();
exports["default"] = HTTPFetch;