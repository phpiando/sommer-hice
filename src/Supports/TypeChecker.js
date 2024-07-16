"use strict";

/**
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class TypeChecker {
  /**
   * Checks if the given value is undefined.
   * @static
   * @since 1.0.0
   * @param {*} value
   * @returns {boolean}
   */
  static isUndefined(value) {
    return value === undefined || value === 'undefined';
  }

  /**
   * Check if is string
   * @static
   * @since 1.0.0
   * @param {*} value
   * @returns {boolean}
   */
  static isString(value){
    return typeof value === 'string';
  }

  /**
   * Checks if the given value is null.
   * @static
   * @since 1.0.0
   * @param {*} value
   * @returns {boolean}
   */
  static isNull(value) {
    return value === null || value === 'null';
  }

  /**
   * Checks if the given value is of boolean type.
   * @static
   * @since 1.0.0
   * @param {*} value
   * @returns {boolean}
   */
  static isBoolean(value) {
    return typeof value === 'boolean';
  }

  /**
  * Checks if the given value is an object.
  * @static
  * @since 1.0.0
  * @param {*} value
  * @returns {boolean}
  */
  static isObject(value) {
    return value === Object(value);
  }

  /**
 * Checks if the given value is an array.
 * @static
 * @since 1.0.0
 * @param {*} value
 * @returns {boolean}
 */
  static isArray(value) {
    return Array.isArray(value);
  }

  /**
  * Checks if the given value is a date instance.
  * @static
  * @since 1.0.0
  * @param {*} value
  * @returns {boolean}
  */
  static isDate(value) {
    return value instanceof Date;
  }

  /**
  * Check if the given value is a number.
  * @static
  * @since 1.0.0
  * @param {*} value
  * @returns {boolean}
  */
  static isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * Checks if the given value is a blob.
   * @static
   * @since 1.0.0
   * @param {*} value
   * @param {boolean} isReactNative
   * @returns {boolean}
   */
  static isBlob(value, isReactNative) {
    return isReactNative
      ? this.isObject(value) && !this.isUndefined(value.uri)
      : this.isObject(value) &&
      typeof value.size === 'number' &&
      typeof value.type === 'string' &&
      typeof value.slice === 'function';
  }

  /**
   * check if value is empty
   * @static
   * @since 1.0.0
   * @param {*} value
   * @returns {boolean}
   */
  static isEmpty(value) {
    return (
      this.isUndefined(value) ||
      this.isNull(value) ||
      (this.isString(value) && value.trim() === '') ||
      (this.isArray(value) && value.length === 0) ||
      (this.isObject(value) && Object.keys(value).length === 0)
    );
  }

  /**
   * Checks if the given value is a file.
   * @static
   * @since 1.0.0
   * @param {*} value
   * @param {boolean} isReactNative
   * @returns {boolean}
   */
  static isFile(value, isReactNative) {
    return (
      this.isBlob(value, isReactNative) &&
      typeof value.name === 'string' &&
      (this.isObject(value.lastModifiedDate) || typeof value.lastModified === 'number')
    );
  }
}