"use strict";

import RuleException from "./RuleException.js";

/**
 * @description Class to handle Validation exceptions
 * Modules
 *
 * @class
 * @extends Exception
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class RuleRequiredException extends RuleException {
  /**
   * Identify name Exception
   * @type {String}
   */
  name = "RuleRequiredException";

  /**
   * Identify the code
   * @type {String}
   */
  static RULE_REQUIRED = "RULE_REQUIRED";

  /**
   * Message exception
   * @type {String}
   */
  static MESSAGE_ERROR = "This field is required";

  /**
   *
   * @param {*} attribute
   * @param {*} code
   */
  constructor(attribute, code = RuleRequiredException.RULE_REQUIRED){
    super(RuleRequiredException.MESSAGE_ERROR.replace('{attribute}', attribute));
    this.code = code;
  }
}