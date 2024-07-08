"use strict"

import TypeChecker from '../Supports/TypeChecker';
import RuleException from './Exceptions/RuleException';

export { ValidatorParseInstance as default }
/**
 * @description Class to parse validation rules
 * inspired by Laravel's Validator 
 */
class ValidatorParse {
  /**
   * Parse string rules
   * @public
   * @since 1.0.0
   * @param {String} rules
   * @throws {RuleException} If rules is not defined
   * @returns {Array}
   */
  async parse(rules) {
    if (!rules) {
      throw new RuleException('Object {rules} is required');
    }

    if (typeof rules === 'string') {
      return this._parseStringRule(rules);
    }
  }

  /**
   * Parse string rules into array
   * @private
   * @since 1.0.0
   * @param {String} rules
   * @returns {Array}
   */
  _parseStringRule(rules) {
    if (rules.includes('|')) {
      return this._explodePipeRule(rules);
    }

    const parsed = this._parseRule(rules);

    if(TypeChecker.isObject(parsed) || TypeChecker.isString(parsed)){
      return [parsed];
    }
  }

  /**
   * Explode pipe rules
   * @private
   * @since 1.0.0
   * @param {String} rule
   * @returns {Array}
   */
  _explodePipeRule(rule) {
    const rules = rule.split('|');
    return rules.map((rule) => {
      return this._parseRule(rule);
    });
  }

  /**
   * Parse rule
   * @private
   * @since 1.0.0
   * @param {String} rule
   * @returns {String}
   */
  _parseRule(rule) {
    if (rule.includes(':')) {
      return this._parseRuleWithParams(rule);
    }

    return rule;
  }

  /**
   * Parse rule with params
   * @private
   * @since 1.0.0
   * @param {String} rule
   * @returns {Object}
   */
  _parseRuleWithParams(rule) {
    const rule_splitted = rule.split(':');

    return {
      rule: rule_splitted[0],
      conditions: this._parseRuleConditions(rule_splitted[1])
    };
  }

  /**
   * Parse rule conditions
   * @private
   * @since 1.0.0
   * @param {String} conditions
   * @returns {Array}
   */
  _parseRuleConditions(conditions) {
    conditions = conditions.split(',');

    //if has only one condition is a value
    if(conditions.length === 1){
      return {
        value: conditions[0]
      }
    }

    return {
      attribute: conditions[0],
      condition: conditions[1],
      value: conditions[2]
    };
  }
}

const ValidatorParseInstance = new ValidatorParse;