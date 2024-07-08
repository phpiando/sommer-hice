"use strict";

export {StorageLocalSingleton as default};

/**
 * @description StorageLocal class is responsible for managing local storage
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
class StorageLocal {
  /**
   * Storage interface
   *
   * @type {Storage}
   *
   * @private
   *
   * @since 1.0.0
   */
  storage;

  constructor() {
    this.storage = window.localStorage;
  }

  /**
   * Add item to storage
   *
   * @param {String} key Storage key
   * @param {*} value Stroage value
   *
   * @since 1.0.0
   *
   * @return {void}
   */
  setItem(key, value) {
    this.storage.setItem(key, value);
  }

  /**
   * Add object to storage
   *
   * @param {String} key Storage key
   * @param {Object} value Stroage value
   *
   * @since 1.0.0
   *
   * @return {void}
   */
  setObject(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  /**
   * Get item from storage
   *
   * @param {String} key
   * @param {*} default_value
   *
   * @since 1.0.0
   *
   * @returns {void}
   */
  getItem(key, default_value = null) {
    return this.storage[key] || default_value;
  }

  /**
   * Get object from storage
   *
   * @param {String} key
   * @param {*} default_value
   *
   * @since 1.0.0
   *
   * @returns {void}
   */
  getObject(key, default_value = null) {
    return this.storage[key] ? JSON.parse(this.storage[key]) : default_value;
  }
}

const StorageLocalSingleton = new StorageLocal;