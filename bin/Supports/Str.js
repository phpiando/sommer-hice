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
var Str = /*#__PURE__*/function () {
  function Str() {
    _classCallCheck(this, Str);
  }
  _createClass(Str, null, [{
    key: "studly",
    value:
    /**
     * Studly case words
     *
     * @public
     * @since 1.0.0
     * @param {String} value
     * @returns {String}
     */
    function studly(value) {
      var key = value;
      if (Str.studly_cache[key]) {
        return Str.studly_cache[key];
      }
      var words = value.replace(/[-_]/g, ' ').split(' ');
      var studlyWords = words.map(function (word) {
        return Str.ucfirst(word);
      });
      return Str.studly_cache[key] = studlyWords.join('');
    }

    /**
     * Camel case words
     *
     * @public
     * @since 1.0.0
     * @param {String} value
     * @returns {String}
     */
  }, {
    key: "camel",
    value: function camel(value) {
      return Str.lcfirst(Str.studly(value));
    }

    /**
     * Lower case first letter
     *
     * @public
     * @since 1.0.0
     * @param {String} value
     * @returns {String}
     */
  }, {
    key: "lcfirst",
    value: function lcfirst(value) {
      return value.charAt(0).toLowerCase() + value.slice(1);
    }

    /**
     * Replace all occurences of a string
     *
     * @public
     * @since 1.0.0
     * @param {String} value
     * @param {String} search
     * @param {String} replace
     * @returns {String}
     */
  }, {
    key: "replace",
    value: function replace(value, search, _replace) {
      if (!value) {
        return value;
      }
      return value.replaceAll(search, _replace);
    }

    /**
     * Ucfirst case
     *
     * @public
     * @since 1.0.0
     * @param {String} value
     * @returns {String}
     */
  }, {
    key: "ucfirst",
    value: function ucfirst(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }]);
  return Str;
}();
exports["default"] = Str;
/**
 * Studly cache
 *
 * @private
 * @since 1.0.0
 * @type {Object}
 * @default {}
 * @example {words: 'StudlyWords'}
 */
_defineProperty(Str, "studly_cache", {});