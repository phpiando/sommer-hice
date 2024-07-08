"use strict";

import Exception from "@hice/Exceptions/Exception";

/**
 * @description Class to handle Entity exceptions
 * Modules
 *
 * @class
 * @extends Exception
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class PropertyRequiredException extends Exception {
  /**
   * Identify name Exception
   * @type {String}
   */
  name = "PropertyRequiredException";

  /**
   * Identify the code
   * @type {String}
   */
  code = "PROPERTY_REQUIRED";
}