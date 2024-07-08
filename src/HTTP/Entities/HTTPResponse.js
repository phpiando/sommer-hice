"use strict";

/**
 * @description Entity responsible for mapping
 * response fields
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class HTTPResponse {
  /**
   * Header that returned from the response
   * of the request
   * @since 1.0.0
   * @type {Headers}
   * @default Headers
   */
  headers = new Headers();

  /**
   * Status request
   * @since 1.0.0
   * @type {Number}
   */
  status = 200;

  /**
   * Success in request
   * @since 1.0.0
   * @type {Boolean}
   * @default true
   */
  success = true;

  /**
   * Return that may vary depending on the
   * use of the class, if it identifies the property
   * message or messages in the request will add
   *
   * @since 1.0.0
   * @type {Array|Object}
   */
  messages;

  /**
   * Value body converted in json
   * @since 1.0.0
   * @type {Object}
   */
  data_json;

  /**
   * Get the first message of the request
   * @since 1.0.0
   * @public
   * @returns {String|Array|Object|null}
   */
  getFirstMessage(){
    return this.messages[0] || null;
  }

  get message(){
    return this.getFirstMessage();
  }
}
