"use strict";

import Exception from "@hice/Exceptions/Exception.js";

export { HTTPRequestException as default };

/**
 * Class to handle HTTP exceptions
 * Modules.
 */
class HTTPRequestException extends Exception {
  /**
   * Identify name Exception
   * @type {String}
   */
  name = "HttpRequestException";

  /**
   * Identify the code network request error
   * when is 404
   *
   * @type {String}
   * @static
   * @constant
   */
  static REQUEST_NOT_FOUND = "NETWORK_REQUEST_ERROR";

  /**
   * When request response 403
   * @type {String}
   * @static
   * @constant
   */
  static PERMISSION_DENIED = "PERMISSION_DENIED";

  /**
   *
   * @param {*} message
   * @param {*} code
   */
  constructor(message, code = HTTPRequestException.REQUEST_NOT_FOUND){
    super(message);
    this.code = code;
  }
}