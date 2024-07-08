"use strict";

export {HTTPConstants as default};

/**
 * @description HTTPConstants responsible for storing constants related to HTTP
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
class HTTPConstants {
  /**
   * Methods used in HTTP requests
   *
   * @since 1.0.0
   * @public
   * @type {Object}
   * @property {string<String>} Method Method name
   */
  static METHODS = {
    GET : 'GET',
    POST: 'POST',
    PUT : 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    OPTIONS: 'OPTIONS',
  };

  /**
   * Default timeout for HTTP requests
   * @since 1.0.0
   * @public
   * @type {number}
   */
  static TIMEOUT_DEFAULT = 100;
}