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
export default class RuleRequiredIfException extends RuleException {
  /**
   * Identify name Exception
   * @type {String}
   */
  name = "RuleRequiredIfException";

  /**
   * Identify the code
   * @type {String}
   */
  static RULE_REQUIRED_IF = "RULE_REQUIRED_IF";

  /**
   * Parameters missing
   * @type {String}
   */
  static PARAMETERS_MISSING = "PARAMETERS_MISSING";

  /**
   * Message exception
   * @type {String}
   */
  static MESSAGES_ERRORS = {
    [RuleRequiredIfException.RULE_REQUIRED_IF]: "This field is required if {attribute} is present",
    [RuleRequiredIfException.PARAMETERS_MISSING]: "The parameters are missing for the validation rule {attribute}. Eg: required_if:attribute,condition,value",
  };

  /**
   *
   * @param {*} attribute
   * @param {*} code
   */
  constructor(attribute, code = RuleRequiredIfException.RULE_REQUIRED_IF){
    super(RuleRequiredIfException.MESSAGES_ERRORS[code].replaceAll('{attribute}', attribute));
    this.code = code;
  }
}