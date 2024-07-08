"use strict";

export {StateBase as default};

/**
 * @description State base class
 * @class
 * @since 1.0.0
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
class StateBase {
  /**
   * Defines all states
   * @type {Object}
   */
  states = {};

  /**
   * Gets the state
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} id
   *
   * @returns {String|null}
   */
  get(id) {
    return this.states[id] || null;
  }

  /**
   * Sets a state
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} id Index id of the state
   * @param {String} state State to be set (loading, success, error, etc.)
   *
   * @returns {void}
   */
  setState(id, state) {
    this.states[id] = state;
  }

  /**
   * Deletes an state
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
  }
}
