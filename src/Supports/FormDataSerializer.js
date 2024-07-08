
"use strict";

import TypeChecker from "./TypeChecker.js";

/**
 * @description FormDataSerializer class to serialize data
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class FormDataSerializer {

  handleDefault(data, form_data, namespace) {
    form_data.append(namespace, data);
  }

  /**
   * Serialize data to FormData
   *
   * @param {*} data
   * @param {*} form_data
   * @param {*} namespace
   * @returns
   */
  serialize(data, form_data = new FormData(), namespace) {
    for (var property in data) {
      let formKey = property;

      if (data.hasOwnProperty(property)) {
        if (namespace) {
          formKey = namespace + '[' + property + ']';
        }

        // if the property is an object, but not a File,
        // use recursivity.
        if (TypeChecker.isObject(data[property]) && !(data[property] instanceof File)) {
          this.serialize(data[property], form_data, formKey);
          continue;
        }

        this.handleDefault(data[property], form_data, formKey)
      }
    }

    return form_data;
  }
}