
"use strict";

import TypeChecker from "./TypeChecker.js";

/**
 * @description FormDataSerializer class to serialize data
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class FormDataSerializer {
  /**
   * Configuration object for the FormDataSerializer.
   * @type {Object}
   * @property {boolean} indices - If true, append indices to array keys.
   * @property {boolean} nullsAsUndefineds - If true, treat null values as undefined and don't append them.
   * @property {boolean} booleansAsIntegers - If true, convert boolean values to integers (true -> 1, false -> 0).
   * @property {boolean} allowEmptyArrays - If true, empty arrays will be appended.
   * @property {boolean} noAttributesWithArrayNotation - If true, don't use array notation for attributes.
   * @property {boolean} noFilesWithArrayNotation - If true, don't use array notation for file attributes.
   * @property {boolean} dotsForObjectNotation - If true, use dot notation for nested objects.
   */
  config = {
    indices: false,
    nullsAsUndefineds: false,
    booleansAsIntegers: false,
    allowEmptyArrays: false,
    noAttributesWithArrayNotation: false,
    noFilesWithArrayNotation: false,
    dotsForObjectNotation: false
  };

  constructor() {
    this.handlers = [
      this.handleUndefined.bind(this),
      this.handleNull.bind(this),
      this.handleBoolean.bind(this),
      this.handleArray.bind(this),
      this.handleDate.bind(this),
      this.handleObject.bind(this),
      this.handleDefault.bind(this),
    ];
  }

  /**
 * Initializes the configuration with default values.
 * @private
 * @since 1.0.0
 * @param {*} value
 * @returns {boolean|*}
 */
  initConfig(value) {
    return TypeChecker.isUndefined(value) ? false : value;
  }

  /**
  * Handles undefined data types.
  * @private
  * @since 1.0.0
  * @param {*} data
  * @param {FormData} formData
  * @returns {FormData|undefined}
  */
  handleUndefined(data, formData) {
    if (!TypeChecker.isUndefined(data)) {
      return;
    }
    return formData;
  }

  /**
  * Appends null values to formData if allowed.
  * @private
  * @since 1.0.0
  * @param {*} data
  * @param {FormData} formData
  * @param {string} prefix
  * @returns {void}
  */
  handleNull(data, formData, prefix) {
    if (!TypeChecker.isNull(data) || this.config.nullsAsUndefineds) {
      return;
    }
    formData.append(prefix, '');
  }

  /**
  * Handles and appends boolean values to formData.
  * @private
  * @since 1.0.0
  * @param {*} data
  * @param {FormData} formData
  * @param {string} prefix
  * @returns {void}
  */
  handleBoolean(data, formData, prefix) {
    if (!TypeChecker.isBoolean(data)) {
      return;
    }
    const value = this.config.booleansAsIntegers ? (data ? 1 : 0) : data;
    formData.append(prefix, value);
  }

  /**
   * Handles and appends array values to formData.
   * @private
   * @since 1.0.0
   * @param {Array} data
   * @param {FormData} formData
   * @param {string} prefix
   * @returns {void}
   */
  handleArray(data, formData, prefix) {
    if (!TypeChecker.isArray(data)) {
      return;
    }

    if (data.length === 0 && this.config.allowEmptyArrays) {
      formData.append(this.config.noAttributesWithArrayNotation ? prefix : prefix + '[]', '');
      return;
    }

    data.forEach((value, index) => {
      const key = prefix + '[' + (this.config.indices ? index : '') + ']';

      if (this.config.noAttributesWithArrayNotation) {
        this.serialize(value, this.config, formData, prefix);
      } else {
        this.serialize(value, this.config, formData, key);
      }
    });
  }

  /**
   * Appends date values to formData in ISO string format.
   * @private
   * @since 1.0.0
   * @param {Date} data
   * @param {FormData} formData
   * @param {string} prefix
   * @returns {void}
   */
  handleDate(data, formData, prefix) {
    if (!TypeChecker.isDate(data)) {
      return;
    }

    formData.append(prefix, data.toISOString());
  }

  /**
   * Serializes object properties and appends them to formData.
   * @private
   * @since 1.0.0
   * @param {Object} data
   * @param {FormData} formData
   * @param {string} prefix
   * @param {boolean} isReactNative
   * @returns {void}
   */
  handleObject(data, formData, prefix, isReactNative) {
    console.log(Object.keys(data)[0])
    if (!TypeChecker.isObject(data)
          || TypeChecker.isBlob(data, isReactNative)
          || TypeChecker.isNumber(Object.keys(data)[0])) {
      return;
    }
    console.log("-------------------")
    console.log("Handle Object", data, prefix)
    Object.keys(data).forEach(prop => {
      const value = data[prop];
      console.log("---> PROP", prop, "VALUE", value, " IS ARRAY ",  TypeChecker.isArray(value))
      // If it's an array, remove the end brackets so we can
      // add the correct notation in the handleArray method.
      if (TypeChecker.isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2);
        }
      }

      const key = prefix
        ? this.config.dotsForObjectNotation
          ? prefix + '.' + prop
          : prefix + '[' + prop + ']'
        : prop;
      console.log("---> KEY", key)
      this.serialize(value, this.config, formData, key);
    });
    console.log("-------------------")

  }

  /**
   * Appends default data values to formData.
   * @private
   * @since 1.0.0
   * @param {*} data
   * @param {FormData} formData
   * @param {string} prefix
   * @returns {void}
   */
  handleDefault(data, formData, prefix) {
    // if (!prefix || formData.has(prefix)) {
    if (!prefix) {
      return;
    }

    formData.append(prefix, data);
  }

  serializeObject(data) {
    if (!TypeChecker.isObject(data)) {
      return;
    }

    const formData = new FormData;
    Object.keys(data).forEach(prop => {
      const value = data[prop];
      this.serialize(value, this.config, formData, prop);
    });

    return formData;
  }

  /**
   * Main method to serialize any data type and append it to formData.
   * @public
   * @since 1.0.0
   * @param {*} data
   * @param {Object} config
   * @param {string} prefix
   * @returns {FormData}
   */
  serialize(data, config = {}, formData = new FormData, prefix = "") {
    this.config = config;
    const isReactNative = typeof formData.getParts === 'function';

    for(var property in data) {
      console.log("PROPERTY", property, "VALUE", data[property])
      if(TypeChecker.isArray(data[property])){
        this.handleArray(data[property], formData, prefix);
        continue;
      }
      if(TypeChecker.isObject(data[property])){
        this.handleObject(data[property], formData, prefix, isReactNative);
        continue;
      }
      this.handleDefault(data[property], formData, prefix);
    }
    // for (const handler of this.handlers) {
    //   handler(data, formData, prefix, isReactNative);
    // }

    return formData;
  }
}