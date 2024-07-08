"use strict";

/**
 * @description Class responsible for managing custom events
 * and their respective callback functions
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class BroadcastEvent {
  /**
   * Stores all callback functions
   *
   * @public
   * @type {Object}
   */
  callbacks = {};

  /**
   * Dispatch a custom event event state
   *
   * @public
   * @since 1.0.0
   * @param {String} message
   * @param {mixed}  data
   * @returns {void}
   */
  dispatch(message, data) {
    this._callbacks(message, data);
  }

  /**
   * Registers an on Loaded function to be called on state change
   *
   * @public
   * @since 1.0.0
   * @param {String}   message
   * @param {Function} callable callback function
   * @returns {void}
   */
  on(message, callable) {
    this._setCallback(message, callable);
  }

  /**
   * Destroys a registered callback
   *
   * @public
   * @since 1.0.0
   * @param {String}   message
   * @param {Function} callable callback function
   * @returns {void}
   */
  off(message, callable) {
    if (!this.callbacks[message]) {
      return;
    }

    let index = this.callbacks[message].indexOf(callable);

    if (index > -1) {
      this.callbacks[message].splice(index, 1);
    }
  }

  /**
   * Sets a loadded callback function
   *
   * @private
   * @since 1.0.0
   * @param {String}   message
   * @param {Function} callable callback function
   * @returns {void}
   */
  _setCallback(message, callback) {
    if (!this.callbacks[message]) {
      this.callbacks[message] = []
    }

    this.callbacks[message].push(callback);
  }

  /**
   * Calls all registered loaded calbacks
   *
   * @private
   * @since 1.0.0
   * @param {String} id   operation id
   * @param {*}  data
   * @returns {void}
   */
  _callbacks(message, data) {
    if (!this.callbacks[message]) {
      return;
    }

    this.callbacks[message].forEach((callback) => {
      callback(data);
    })
  }
}