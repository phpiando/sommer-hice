"use strict";

import TypeChecker            from "../Supports/TypeChecker.js";
import RuleException          from "./Exceptions/RuleException.js";
import RuleRequiredException  from "./Exceptions/RuleRequiredException.js";
import Str                    from "../Supports/Str.js";
import RuleRequiredIf from "./Rules/RuleRequiredIf.js";

export default class Rule {
  /**
   * Validate a Rule using the attribute and value
   * and throw an exception if the rule fails
   *
   * @public
   * @since 1.0.0
   * @param {String} rule Rule used example required,email, etc
   * @param {String} attribute Attribute name in the object
   * @param {*} value Value to be validated
   * @param {Object} data Data can be the entity used or object
   * @throws {RuleException} If the rule is not valid
   * @returns {void}
   */
  static validate(rule, attribute, value, data_object = {}){
    let options = {};

    if(TypeChecker.isObject(rule)){
      options = rule.conditions || {};
      rule = rule.rule; //replace rule with the rule name
    }

    const rule_method = Str.camel(rule);

    if(!Rule[rule_method]){
      throw new RuleException(`Rule: ${rule} not found`);
    }

    Rule[rule_method](attribute, value, options, data_object);
  }

  /**
   * Validate if the value is required
   * @public
   * @since 1.0.0
   * @param {String} attribute Attribute name in the object
   * @param {*} value value to be validated
   * @throws {RuleRequiredException} If the value is not defined or empty
   * @returns {Boolean}
   */
  static required(attribute, value){
    if(!value){
      throw new RuleRequiredException(attribute);
    }

    return true;
  }

  /**
   * Validate if value is required another attribute is present
   *
   * @public
   * @param {*} attribute String attribute name is used
   * @param {*} value value to be validated
   * @param {Object} options Object with options with conditions
   * @param {*} data_object Object with data to be validated
   */
  static requiredIf(attribute, value, options, data_object){
    RuleRequiredIf.passes(attribute, value, options, data_object);
  }
}