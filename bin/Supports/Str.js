"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Str = exports["default"] = /*#__PURE__*/function () {
  function Str() {
    _classCallCheck(this, Str);
  }
  return _createClass(Str, null, [{
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

    /**
     * Get the first part of a string
     *
     * @param {String} value
     * @param {Number} length
     * @returns {String}
     */
  }, {
    key: "first",
    value: function first(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return String(value).substring(0, length);
    }

    /**
     * Normalize string to remove accents
     *
     * @param {String} str
     * @returns {String}
     */
  }, {
    key: "normalizeString",
    value: function normalizeString(str) {
      return str.normalize('NFD') // Decompõe os caracteres acentuados
      .replace(/[\u0300-\u036f]/g, '');
    }
  }]);
}();
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