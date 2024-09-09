"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Str = _interopRequireDefault(require("./Str.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents a date utility class.
 * @class
 * @since 1.0.0
 */
var Carbon = exports["default"] = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {String|Date} date
   */
  function Carbon(date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Carbon.FORMAT_DEFAULT;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Carbon);
    /**
     * Format defined by user
     * in the constructor if not exists
     * used the default format
     *
     * @since 1.0.0
     * @type {String}
     */
    _defineProperty(this, "_format", void 0);
    /**
     * Date instance
     * @since 1.0.0
     * @type {Date}
     * @private
     * @memberof Carbon
     */
    _defineProperty(this, "_date", void 0);
    /**
     * Time units to be used in diffForHumans
     * @since 1.0.0
     * @type {Array}
     * @private
     */
    _defineProperty(this, "_time_units", [{
      unit: 'year',
      limit: 31536000
    }, {
      unit: 'month',
      limit: 2592000
    }, {
      unit: 'day',
      limit: 86400
    }, {
      unit: 'hour',
      limit: 3600
    }, {
      unit: 'minute',
      limit: 60
    }, {
      unit: 'second',
      limit: 1
    }]);
    /**
     * Options
     * @since 1.1.0
     * @type {Object}
     * @private
     */
    _defineProperty(this, "_options", {
      ignore_timezone: Carbon.IGNORE_TIMEZONE
    });
    this.setDate(date);
    this.setFormatDefault(format);
    this.setOptions(options);
  }

  /**
   * Get Actual date instance
   * @public
   * @since 1.0.0
   * @returns {Carbon}
   */
  return _createClass(Carbon, [{
    key: "addYears",
    value:
    /**
     * Add years in a date
     * @public
     * @since 1.0.0
     * @param {Number} years
     * @returns {Carbon}
     */
    function addYears(years) {
      this._date.setFullYear(this._date.getFullYear() + years);
      return this;
    }

    /**
     * Add months in a date
     * @public
     * @since 1.0.0
     * @param {Number} months
     * @returns {Carbon}
     */
  }, {
    key: "addMonths",
    value: function addMonths(months) {
      this._date.setMonth(this._date.getMonth() + months);
      return this;
    }

    /**
     * Add days in a date
     * @public
     * @since 1.0.0
     * @param {Number} days
     * @returns {Carbon}
     */
  }, {
    key: "addDays",
    value: function addDays(days) {
      this._date.setDate(this._date.getDate() + days);
      return this;
    }

    /**
     * Add hours in a date
     * @public
     * @since 1.0.0
     * @param {Number} hours
     * @returns {Carbon}
     */
  }, {
    key: "addHours",
    value: function addHours(hours) {
      this._date.setHours(this._date.getHours() + hours);
      return this;
    }

    /**
     * Add minutes in a date
     * @public
     * @since 1.0.0
     * @param {Number} minutes
     * @returns {Carbon}
     */
  }, {
    key: "addMinutes",
    value: function addMinutes(minutes) {
      this._date.setMinutes(this._date.getMinutes() + minutes);
      return this;
    }

    /**
     * Add seconds in a date
     * @public
     * @since 1.0.0
     * @param {Number} seconds
     * @returns {Carbon}
     */
  }, {
    key: "addSeconds",
    value: function addSeconds(seconds) {
      this._date.setSeconds(this._date.getSeconds() + seconds);
      return this;
    }

    /**
     * Subtract seconds from a date
     * @public
     * @since 1.0.0
     * @param {Number} seconds
     * @returns {Carbon}
     */
  }, {
    key: "subDays",
    value: function subDays(days) {
      this._date.setDate(this._date.getDate() - days);
      return this;
    }

    /**
     * Subtract months from a date
     * @public
     * @since 1.0.0
     * @param {Number} months
     * @returns {Carbon}
     */
  }, {
    key: "subMonths",
    value: function subMonths(months) {
      this._date.setMonth(this._date.getMonth() - months);
      return this;
    }

    /**
     * Subtract years from a date
     * @public
     * @since 1.0.0
     * @param {Number} years
     * @returns {Carbon}
     */
  }, {
    key: "subYears",
    value: function subYears(years) {
      this._date.setFullYear(this._date.getFullYear() - years);
      return this;
    }

    /**
     * Subtract hours from a date
     * @public
     * @since 1.0.0
     * @param {Number} hours
     * @returns {Carbon}
     */
  }, {
    key: "subHours",
    value: function subHours(hours) {
      this._date.setHours(this._date.getHours() - hours);
      return this;
    }

    /**
     * Format a date
     * @public
     * @since 1.0.0
     * @param {String} format_string
     * @returns {String} DateFormated
     */
  }, {
    key: "format",
    value: function format() {
      var format_string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!format_string) {
        format_string = this._format;
      }
      if (!this._date) {
        return '';
      }
      var date_parts = {
        YYYY: this._date.getFullYear(),
        MM: String(this._date.getMonth() + 1).padStart(2, '0'),
        DD: String(this._date.getDate()).padStart(2, '0'),
        HH: String(this._date.getHours()).padStart(2, '0'),
        mm: String(this._date.getMinutes()).padStart(2, '0'),
        ss: String(this._date.getSeconds()).padStart(2, '0')
      };
      return format_string.replace(/YYYY|MM|DD|HH|mm|ss/g, function (match) {
        return date_parts[match];
      });
    }

    /**
     * Get the name long of the day
     *
     * @public
     * @since 1.0.0
     * @param {String} language
     * @returns {String} Name of the day
     */
  }, {
    key: "dayLongName",
    value: function dayLongName() {
      var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      var formatter = new Intl.DateTimeFormat(language, {
        weekday: 'long'
      });
      return _Str["default"].ucfirst(formatter.format(this._date));
    }

    /**
     * Get the name short of the day
     *
     * @public
     * @since 1.0.0
     * @param {String} language
     * @returns {String} Name of the day
     */
  }, {
    key: "dayShortName",
    value: function dayShortName() {
      var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      var formatter = new Intl.DateTimeFormat(language, {
        weekday: 'short'
      });
      //return just seg. ter. qua. qui

      return _Str["default"].first(formatter.format(this._date), 3) + '.';
    }

    /**
     * Get the full name of the month from the date
     * @public
     * @since 1.0.0
     * @param {String} locale - Opcional. Padrão 'en-US'
     * @returns {String} Name Month
     */
  }, {
    key: "monthLongName",
    value: function monthLongName() {
      var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
      var formatter = new Intl.DateTimeFormat(locale, {
        month: 'long'
      });
      return formatter.format(this._date);
    }

    /**
    * Get the short name of the month from the date
    * @public
    * @since 1.0.0
    * @param {String} locale - Opcional. Padrão 'en-US'
    * @returns {String} name short of month
    */
  }, {
    key: "monthShortName",
    value: function monthShortName() {
      var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
      var formatter = new Intl.DateTimeFormat(locale, {
        month: 'short'
      });
      return formatter.format(this._date);
    }

    /**
     * Less than or equal to date
     *
     * @since 1.0.0
     * @public
     * @param {*} date
     * @returns {Boolean}
     */
  }, {
    key: "lte",
    value: function lte(date) {
      date = this._parseDate(date);
      return this._date <= date;
    }

    /**
     * Less than to date
     *
     * @since 1.0.0
     * @public
     * @param {*} date
     * @returns {Boolean}
     */
  }, {
    key: "lt",
    value: function lt(date) {
      date = this._parseDate(date);
      return this._date < date;
    }

    /**
     * Greater than or equal to date
     *
     * @since 1.0.0
     * @public
     * @param {*} date
     * @returns {Boolean}
     */
  }, {
    key: "gte",
    value: function gte(date) {
      date = this._parseDate(date);
      return this._date >= date;
    }

    /**
     * Greater than to date
     *
     * @since 1.0.0
     * @public
     * @param {*} date
     * @returns {Boolean}
     */
  }, {
    key: "gt",
    value: function gt(date) {
      date = this._parseDate(date);
      return this._date > date;
    }

    /**
     * Parse date in case if it is not a Date instance
     * or Carbon instance
     *
     * @since 1.0.0
     * @private
     * @param {*} date
     * @returns {Carbon}
     */
  }, {
    key: "_parseDate",
    value: function _parseDate(date) {
      // Handle ISO 8601 date strings ending with 'Z' (UTC)
      if (typeof date === 'string' && date.endsWith('Z') && this._options['ignore_timezone']) {
        date = date.replace('Z', '');
      }
      if (date instanceof Date) {
        return date;
      }
      if (date instanceof Carbon) {
        date = date.format();
      }
      return date = new Date(date);
    }

    /**
     * Get the difference in seconds between the current date and the date
     * @public
     * @since 1.0.0
     * @returns {Number} diff in seconds
     */
  }, {
    key: "diffInSeconds",
    value: function diffInSeconds() {
      var now = new Date().getTime();
      var past = this._date.getTime();
      var diff_seconds = Math.round((now - past) / 1000);
      return diff_seconds;
    }

    /**
    * Get the difference in days between the current date and the date
    * @public
    * @since 1.0.0
    * @returns {Number} diff in days
    */
  }, {
    key: "diffInDays",
    value: function diffInDays() {
      var now = new Date().getTime();
      var past = this._date.getTime();
      var diffMilliseconds = past - now;
      var diffDays = Math.round(diffMilliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      return diffDays;
    }

    /**
     * Get diff in years
     *
     * @public
     * @since 1.3.0
     * @returns {Number} diff in years
     */
  }, {
    key: "diffYears",
    value: function diffYears() {
      var now = new Date();
      var diff = now.getFullYear() - this._date.getFullYear();
      return diff;
    }

    /**
     * Format a date to human readable
     * @public
     * @since 1.0.0
     * @param {String} language
     * @returns {String}
     */
  }, {
    key: "diffForHumans",
    value: function diffForHumans() {
      var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      var diff_seconds = this.diffInSeconds();
      var rtf = new Intl.RelativeTimeFormat(language, {
        numeric: 'auto'
      });
      var _iterator = _createForOfIteratorHelper(this._time_units),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
            unit = _step$value.unit,
            limit = _step$value.limit;
          if (Math.abs(diff_seconds) >= limit) {
            var value = -Math.round(diff_seconds / limit);
            return rtf.format(value, unit);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return 'just now';
    }

    /**
     * Parse a date
     *
     * @param {String|Date} date
     * @returns Carbon
     */
  }, {
    key: "parse",
    value: function parse(date) {
      return new Carbon(date);
    }

    /**
     * Set Date
     * @public
     * @since 1.0.0
     * @param {String|Date} date
     * @returns {void}
     */
  }, {
    key: "setDate",
    value: function setDate(date) {
      if (!date) {
        return;
      }
      this._date = this._parseDate(date);
    }

    /**
     * Set Options
     * @public
     * @since 1.1.0
     * @param {Object} options
     * @returns {void}
     */
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this._options = _objectSpread(_objectSpread({}, this._options), options);
    }

    /**
     * Set format default
     *
     * @public
     * @since 1.0.0
     * @param {String} format
     * @returns {void}
     */
  }, {
    key: "setFormatDefault",
    value: function setFormatDefault(format) {
      this._format = format;
    }

    /**
     * Get a name classe
     * @public
     * @since 1.0.0
     * @returns {String}
     */
  }], [{
    key: "now",
    value: function now() {
      return new Carbon(new Date());
    }
  }, {
    key: "className",
    get: function get() {
      return 'Carbon';
    }
  }]);
}();
/**
 * Default date format
 * @since 1.0.1
 * @type {String}
 * @static
 */
_defineProperty(Carbon, "FORMAT_DEFAULT", 'YYYY-MM-DD HH:mm:ss');
/**
 * Ignore timezone
 * @since 1.1.0
 * @type {Boolean}
 * @static
 */
_defineProperty(Carbon, "IGNORE_TIMEZONE", true);