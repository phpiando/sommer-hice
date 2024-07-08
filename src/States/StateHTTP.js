"use strict";

import StateBase from "./StateBase";

export {StateHTTP as default};

/**
 * @description State base class
 * @class
 * @since 1.0.0
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
class StateHTTP extends StateBase {
  /**
   * Stores callbacks functions
   * in the using of the state
   *
   * @private
   * @since 1.0.0
   * @type {Object}
   */
  _callbacks = {};

  /**
   * Sets a custom event state
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String|Array} id
   * @param {String} state
   *
   * @returns {void}
   */
  dispatch(id, state) {
    this.states[id] = state;
    this._callLoadedCallbacks(id, state);
  }

  /**
  * Sets State to Loading
  * @public
  *
  * @since 1.0.0
  *
  * @param {String} id
  *
  * @returns {void}
  */
  setLoading(id) {
    this.dispatch(id, 'loading');
  }

  /**
   * Sets State to success if load value is true, or error if false
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} id
   * @param {Boolean|String} value
   *
   * @returns {void}
   */
  setSuccess(id, value) {
    this.dispatch(id, (value === true ? 'success' : 'error'));
  }

  /**
   * Deletes all states and callbacks
   * to id
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} id
   *
   * @returns {void}
   */
  unset(id) {
    delete this.states[id];
    delete this._callbacks[id];
  }

  /**
   * Registers an on Loaded function to be called on state change
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} id
   * @param {String} state
   * @param {Function} callable
   *
   * @returns {void}
   */
  on(id, state, callable) {
    this._setCallback(id, state, callable);
    this._callLoadedCallbacks(id, state);
  }

  /**
  * Destroys a registered callback
  *
  * @public
  *
  * @since 1.0.0
  *
  * @param {String} id
  * @param {String} state
  * @param {Function} callable
  *
  * @returns {void}
  */
  off(id, state, callable) {
    if (!this._callbacks[id] || !this._callbacks[id][state]) return;
    this._callbacks[id][state] = this._callbacks[id][state].filter(cb => cb !== callable);
  }

  /**
   * Sets a loadded callback function
   *
   * @private
   *
   * @since 1.0.0
   *
   * @param {String} id
   * @param {String} state
   * @param {Function} callable
   *
   * @returns {void}
   */
  _setCallback(id, state, callback) {
    if (!this._callbacks[id]) this._callbacks[id] = {};
    if (!this._callbacks[id][state]) this._callbacks[id][state] = [];
    this._callbacks[id][state].push(callback);
  }

  /**
   * Calls all registered loaded calbacks
   *
   * @private
   * @since 1.0.0
   * @param {*} id
   * @param {*} state
   *
   * @returns {void}
   */
  _callLoadedCallbacks(id, state) {
    if (this.states[id] !== state || !this._callbacks[id] || !this._callbacks[id][state]) return;
    this._callbacks[id][state].forEach(callback => callback());
    this._callbacks[id][state] = [];
  }
}
