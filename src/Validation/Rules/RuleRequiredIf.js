"use strict";

import TypeChecker              from "../../Supports/TypeChecker";
import RuleRequiredIfException  from "../Exceptions/RuleRequiredIfException";

export default class RuleRequiredIf{
  /**
   * @description Method to handle the rule
   *
   * @public
   * @since 1.0.0
   * @param {*} attribute
   * @param {*} value
   * @param {*} parameters
   * @param {*} data_object
   */
  static passes(attribute, value, parameters, data_object){
    const required_if = new RuleRequiredIf;
    required_if._validate(attribute, value, parameters, data_object);
  }

  /**
   * @description Method to validate the attribute
   *
   * @private
   * @since 1.0.0
   * @param {*} attribute
   * @param {*} value
   * @param {*} parameters
   * @param {*} data_object
   * @returns {Boolean}
   */
  _validate(attribute, value, parameters, data_object){
    this._validateParameters(attribute, parameters);

    if(!TypeChecker.isObject(data_object) || !data_object.hasOwnProperty(parameters.attribute)){
      return true;
    }

    if(data_object[parameters.attribute] === parameters.value && !value){
      throw new RuleRequiredIfException(parameters.attribute, RuleRequiredIfException.RULE_REQUIRED_IF);
    }

    return true;
  }

  /**
   * @description validate the parameters is correct
   *
   * @private
   * @since 1.0.0
   * @param {String} attribute
   * @param {Object} parameters
   * @throws {RuleRequiredIfException} If the parameters is not valid
   * @returns {void}
   */
  _validateParameters(attribute, parameters){
    if(!parameters || parameters.length < 3){
      throw new RuleRequiredIfException(attribute, RuleRequiredIfException.PARAMETERS_MISSING);
    }

  }
}