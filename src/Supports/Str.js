"use strict";

export default class Str {
  /**
   * Studly cache
   *
   * @private
   * @since 1.0.0
   * @type {Object}
   * @default {}
   * @example {words: 'StudlyWords'}
   */
  static studly_cache = {};

  /**
   * Studly case words
   *
   * @public
   * @since 1.0.0
   * @param {String} value
   * @returns {String}
   */
  static studly(value) {
    const key = value;

    if (Str.studly_cache[key]) {
      return Str.studly_cache[key];
    }

    const words = value.replace(/[-_]/g, ' ').split(' ');

    const studlyWords = words.map(word => Str.ucfirst(word));

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
  static camel(value) {
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
  static lcfirst(value) {
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
  static replace(value, search, replace) {
    if(!value){
      return value;
    }

    return value.replaceAll(search, replace);
  }

  /**
   * Ucfirst case
   *
   * @public
   * @since 1.0.0
   * @param {String} value
   * @returns {String}
   */
  static ucfirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }  

  /**
   * Get the first part of a string
   *
   * @param {String} value
   * @param {Number} length
   * @returns {String}
   */
  static first(value, length = 1) {
    return String(value).substring(0, length);
  }

  /**
   * Normalize string to remove accents
   *
   * @param {String} str
   * @returns {String}
   */
  static normalizeString(str){
    return str
      .normalize('NFD') // words with accents are separated in two parts
      .replace(/[\u0300-\u036f]/g, '');
  };
}