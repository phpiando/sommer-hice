"use strict";

import Rule from "./Rule";
import ValidatorParse from "./ValidatorParse";

export default class Validator {
  /**
   * Attributes that failed validation
   *
   * @public
   * @since 1.0.0
   * @type {Object}
   * @default {}
   */
  errors = {};

  /**
   * Amount of failed validations
   *
   * @private
   * @since 1.0.0
   * @type {Object}
   * @default {}
   */
  _errors_count = 0;

  /**
   * Rules to be validated
   *
   * @private
   * @since 1.0.0
   * @type {Object}
   */
  _rules = {};

  /**
   * Data to be validated
   *
   * @private
   * @since 1.0.0
   * @type {Object}
   */
  _data = {};

  /**
   * Messages to be returned
   * in case of validation failure
   *
   * @private
   * @since 1.0.0
   * @type {Object}
   */
  _messages = {};

  /**
   * Attributes that passed validation
   *
   * @public
   * @since 1.0.0
   * @type {Object}
   */
  validated = {};

  constructor(rules = {}, data = {}, messages = {}) {
    this._rules = rules;
    this._messages = messages;
    this._data = data;
  }

  /**
   * Validate the data based on the rules
   * and messages set
   * @public
   * @since 1.0.0
   * @param {Object} rules_override Object with rules to be validated
   * @returns {void}
   */
  async validate(rules_override = {}){
    this.reset();

    const rules_validate = Object.keys(rules_override).length ? rules_override : this._rules;

    for (const [attribute, rules] of Object.entries(rules_validate)) {
      await this.validateAttribute(attribute, rules);
    }
  }

  /**
   * Validate a single field
   *
   * @public
   * @since 1.0.0
   * @param {String} attribute
   * @returns {void}
   */
  async validateField(attribute){
    if(!this._rules[attribute]){
      return;
    }

    await this.validateAttribute(attribute, this._rules[attribute]);
  }

  /**
   * Scroll to the first error
   *
   * @public
   * @since 1.0.0
   * @returns {void}
   */
  async scrollToFirstError(){
    const first_error = this.firstError();
    if(!first_error){
      return;
    }

    const element = document.querySelector(`[name*="${first_error}"]`);
    if(!element){
      return;
    }

    element.scrollIntoView();
  }

  /**
   * Validate fields with the rules
   * and messages set
   * @public
   * @since 1.0.0
   * @param {String} attribute
   * @param {Object} rules
   * @returns {void}
   */
  async validateAttribute(attribute, rules){
    try {
      await this.passes(rules, attribute, this._data[attribute]);
      this.setAttributeValidated(attribute, this._data[attribute]);
    } catch (error) {
      const message = this._messages[attribute] || error.message;
      this.setAttributeError(attribute, message);
    }
  }

  /**
   * Create a new instance of the class
   * and set the rules to be validated
   *
   * @public
   * @since 1.0.0
   * @param {Object} rules Object with rules to be validated
   * @param {Object} messages Object with messages to be returned in case of validation failure
   * @returns {Validator}
   */
  static make(rules, data, messages = {}){
    return new this(rules, data, messages);
  }

  /**
   * Determine if the data passes the validation rules
   *
   * @public
   * @since 1.0.0
   *
   * @param {String} rules rules to be validated
   * @param {String} attribute attribute to be validated
   * @param {*} value value to be validated
   * @throws {RuleException} If the rule is not valid
   * @returns {Boolean}
   */
  async passes(rules, attribute, value){
    const parsed_rules = await ValidatorParse.parse(rules);

    for (let index = 0; index < parsed_rules.length; index++) {
      const rule = parsed_rules[index];
      await Rule.validate(rule, attribute, value, this._data);
    }

    return true;
  }

  /**
   * Set the data to be validated
   *
   * @public
   * @since 1.0.0
   * @param {Object} data
   * @returns {void}
   */
  setData(data){
    this._data = data;
  }

  /**
   * Rules to be validated
   *
   * @public
   * @since 1.0.0
   * @param {Object.<String,String>} rules
   * @returns {void}
   */
  setRules(rules){
    this._rules = rules;
  }

  /**
   * set attribute valitated
   *
   * @public
   * @since 1.0.0
   * @param {String} attribute
   * @param {*} value
   * @returns {Object}
   */
  setAttributeValidated(attribute, value){
    this.validated[attribute] = value;

    if(this.errors[attribute]){
      delete this.errors[attribute];
      this._errors_count--;
    }
  }

  /**
   * Set attribute error
   * @public
   * @since 1.0.0
   * @param {String} attribute
   * @param {*} message
   * @returns {void}
   */
  setAttributeError(attribute, message){
    if(this.errors[attribute]){
      return;
    }

    this.errors[attribute] = message;
    this._errors_count++;
  }

  /**
   * Check if the data does not pass the validation rules
   *
   * @public
   * @since 1.0.0
   * @returns {Boolean}
   */
  fails(){
    return (this._errors_count > 0);
  }

  /**
   * Get the first invalid attribute
   *
   * @public
   * @since 1.0.0
   * @returns {String}
   */
  firstError() {
    return Object.keys(this.errors)[0] || null;
  }

  /**
   * Reset the validation data
   * to the initial state
   *
   * @public
   * @since 1.0.0
   * @returns {void}
   */
  reset(){
    this.errors         = {};
    this.validated      = {};
    this._errors_count  = 0;
  }
}