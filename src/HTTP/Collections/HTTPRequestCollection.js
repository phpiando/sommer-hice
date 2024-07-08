"use strict";

import Collection from "@hice/Collections/Collection.js";
import HTTPResponse from "../Entities/HTTPResponse.js";

/**
 * @description This is a class responsible for managing connections.
 * Its purpose is to organize our connections in such a
 * way that if there is an existing connection,
 * instead of creating a new one,
 * it returns the existing connection.
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class HTTPRequestCollection extends Collection {

  /**
   * Waits for a request with the same id to be finished
   *
   * @public
   * @param {String|null} request_id request id
   * @param {Number}      timeout    wait timeout in ms
   *
   * @returns {Promise<HTTPResponse>}
   */
  async awaitRequest(request_id, timeout = 100) {
    if (!this.get(request_id)) {
      return;
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.awaitRequest(request_id));
      }, timeout);
    });
  }

  /**
   * Sets the current request
   *
   * @public
   *
   * @param {string|null} request_id
   *
   * @returns {HTTPResponse}
   */
  setCurrentRequest(request_id) {
    if (!request_id) {
      return new HTTPResponse;
    }

    const response = this.get(request_id) || new HTTPResponse;

    this.set(request_id, response);

    return this.get(request_id);
  }

  /**
   * Deletes the current request
   *
   * @public
   *
   * @param {string|null} request_id
   *
   * @returns {void}
   */
  unsetCurrentRequest(request_id) {
    this.delete(request_id);
  }
}