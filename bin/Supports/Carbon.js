"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Str = _interopRequireDefault(require("./Str.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Represents a date utility class.
 * @class
 * @since 1.0.0
 */
var Carbon = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {String|Date} date
   */
  function Carbon(date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Carbon.FORMAT_DEFAULT;
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
    this.setDate(date);
    this.setFormatDefault(format);
  }

  /**
   * Get Actual date instance
   * @public
   * @since 1.0.0
   * @returns {Carbon}
   */
  _createClass(Carbon, [{
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
  return Carbon;
}();
exports["default"] = Carbon;
/**
 * Default date format
 * @since 1.0.0
 * @type {String}
 */
_defineProperty(Carbon, "FORMAT_DEFAULT", 'YYYY-MM-DD HH:mm:ss');