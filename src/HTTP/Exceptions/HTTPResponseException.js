"use strict";

import Exception from "@hice/Exceptions/Exception.js";

export { HTTPResponseException as default };

/**
 * Class to handle HTTP exceptions
 * Modules.
 */
class HTTPResponseException extends Exception {
  /**
   * Identify name Exception
   * @type {String}
   */
  name = "HttpResponseException";

  /**
   * Identify the code
   * @type {String}
   */
  code = "HTTP_CLIENT_RESPONSE";
}