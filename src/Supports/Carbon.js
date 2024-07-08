"use strict";

import Str from "./Str.js";

/**
 * Represents a date utility class.
 * @class
 * @since 1.0.0
 */
export default class Carbon {
  /**
   * Default date format
   * @since 1.0.0
   * @type {String}
   */
  static FORMAT_DEFAULT = 'YYYY-MM-DD HH:mm:ss';

  /**
   * Format defined by user
   * in the constructor if not exists
   * used the default format
   *
   * @since 1.0.0
   * @type {String}
   */
  _format;

  /**
   * Date instance
   * @since 1.0.0
   * @type {Date}
   * @private
   * @memberof Carbon
   */
  _date;

  /**
   * Time units to be used in diffForHumans
   * @since 1.0.0
   * @type {Array}
   * @private
   */
  _time_units = [
    { unit: 'year', limit: 31536000 },
    { unit: 'month', limit: 2592000 },
    { unit: 'day', limit: 86400 },
    { unit: 'hour', limit: 3600 },
    { unit: 'minute', limit: 60 },
    { unit: 'second', limit: 1 }
  ];

  /**
   * @constructor
   * @param {String|Date} date
   */
  constructor(date, format = Carbon.FORMAT_DEFAULT) {
    this.setDate(date);
    this.setFormatDefault(format);
  }

  /**
   * Get Actual date instance
   * @public
   * @since 1.0.0
   * @returns {Carbon}
   */
  static now() {
    return new Carbon(new Date());
  }

  /**
   * Add years in a date
   * @public
   * @since 1.0.0
   * @param {Number} years
   * @returns {Carbon}
   */
  addYears(years) {
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
  addMonths(months) {
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
  addDays(days) {
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
  addHours(hours) {
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
  addMinutes(minutes) {
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
  addSeconds(seconds) {
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
  subDays(days) {
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
  subMonths(months) {
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
  subYears(years) {
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
  subHours(hours) {
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
  format(format_string = null) {
    if (!format_string) {
      format_string = this._format;
    }

    if(!this._date) {
      return '';
    }

    const date_parts = {
      YYYY: this._date.getFullYear(),
      MM: String(this._date.getMonth() + 1).padStart(2, '0'),
      DD: String(this._date.getDate()).padStart(2, '0'),
      HH: String(this._date.getHours()).padStart(2, '0'),
      mm: String(this._date.getMinutes()).padStart(2, '0'),
      ss: String(this._date.getSeconds()).padStart(2, '0')
    };

    return format_string.replace(/YYYY|MM|DD|HH|mm|ss/g, match => date_parts[match]);
  }

  /**
   * Get the name long of the day
   *
   * @public
   * @since 1.0.0
   * @param {String} language
   * @returns {String} Name of the day
   */
  dayLongName(language = 'en'){
    const formatter = new Intl.DateTimeFormat(language, { weekday: 'long' });
    return Str.ucfirst(formatter.format(this._date));
  }

  /**
   * Get the full name of the month from the date
   * @public
   * @since 1.0.0
   * @param {String} locale - Opcional. Padrão 'en-US'
   * @returns {String} Name Month
   */
  monthLongName(locale = 'en-US') {
    const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });
    return formatter.format(this._date);
  }

  /**
  * Get the short name of the month from the date
  * @public
  * @since 1.0.0
  * @param {String} locale - Opcional. Padrão 'en-US'
  * @returns {String} name short of month
  */
  monthShortName(locale = 'en-US') {
    const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
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
  lte(date) {
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
  lt(date) {
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
  gte(date) {
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
  gt(date) {
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
  _parseDate(date) {
    if(date instanceof Date){
      return date;
    }

    if(date instanceof Carbon) {
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
  diffInSeconds() {
    const now = (new Date()).getTime();
    const past = this._date.getTime();
    const diff_seconds = Math.round((now - past) / 1000);
    return diff_seconds;
  }

  /**
 * Get the difference in days between the current date and the date
 * @public
 * @since 1.0.0
 * @returns {Number} diff in days
 */
  diffInDays() {
    const now = new Date().getTime();
    const past = this._date.getTime();
    const diffMilliseconds = past - now;
    const diffDays = Math.round(diffMilliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return diffDays;
  }


  /**
   * Format a date to human readable
   * @public
   * @since 1.0.0
   * @param {String} language
   * @returns {String}
   */
  diffForHumans(language = 'en') {
    const diff_seconds = this.diffInSeconds();
    const rtf = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });

    for (const { unit, limit } of this._time_units) {
      if (Math.abs(diff_seconds) >= limit) {
        const value = -Math.round(diff_seconds / limit);
        return rtf.format(value, unit);
      }
    }

    return 'just now';
  }

  /**
   * Parse a date
   *
   * @param {String|Date} date
   * @returns Carbon
   */
  parse(date) {
    return (new Carbon(date));
  }

  /**
   * Set Date
   * @public
   * @since 1.0.0
   * @param {String|Date} date
   * @returns {void}
   */
  setDate(date) {
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
  setFormatDefault(format) {
    this._format = format;
  }

  /**
   * Get a name classe
   * @public
   * @since 1.0.0
   * @returns {String}
   */
  static get className() {
    return 'Carbon';
  }
}