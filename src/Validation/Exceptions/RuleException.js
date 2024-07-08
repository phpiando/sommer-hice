"use strict";

import Exception from "@hice/Exceptions/Exception";

/**
 * @description Class to handle Validation exceptions
 * Modules
 *
 * @class
 * @extends Exception
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class RuleException extends Exception {
  /**
   * Identify name Exception
   * @type {String}
   */
  name = "RuleException";

  /**
   * Identify the code
   * @type {String}
   */
  code = "RULES_NOT_FOUND";

  static RULE_NOT_EXISTS = "RULE_NOT_EXISTS";
}