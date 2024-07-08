"use strict";

import Carbon                     from "../Supports/Carbon";
import EntityHelper               from "./EntityHelper";
import EntitySerializeJSON        from "./EntitySerializeJSON";
import PropertyRequiredException  from "./Exceptions/PropertyRequiredException";
import RelationManager            from "./RelationManager";
import TypeChecker                from "../Supports/TypeChecker";
import Validator                  from "../Validation/Validator";

/**
 * @description Standard class that can be used
 *to create entities in the project so that
 *makes relationships and additions automated
 *something to make the frontend more templated
 *OOP
 *
 *  @example class EntityItem extends entity {
 *    static DATES = ['created_at', 'updated_at'];
 *    static RULES = {
 *      'name': 'required|string',
 *      'email': 'required|email',
 *      'password': 'required|string'
 *    }
 *    static FORMAT_DATES = {
 *     'created_at': 'YYYY-MM-DD',
 *    }
 *    attribute = null;
 *
 *    hasOne = {
 *      'relation': EntityRelation
 *    }
 *    hasMany = {
 *      'relation': [EntityRelation, {collection_id: 'id'}]
 *    }
 * }
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class Entity {
  /**
   * @private
   * @since 1.0.0
   * @type {RelationManager}
   */
  _relationshipManager = new RelationManager;

  /**
   * @public
   * @since 1.0.0
   * @type {Validator}
   */
  _validator;

  /**
   * Constructor
   * @constructor
   * @param {Object} data_object Object with data to be set in the Entity
   */
  constructor(data_object = null) {
    if(data_object){
      this.fill(data_object);
    }

    this.setRulesValidator();
    this._makeNonEnumerable('_relationshipManager');
    this._makeNonEnumerable('_validator');
  }

  /**
   * Set rules validator for entity class
   * @public
   * @since 1.0.0
   * @returns {void}
   */
  setRulesValidator(){
    const rules = this.constructor.RULES || {};
    this._validator = new Validator(rules);
  }

  /**
   * Make a non-enumerated value
   *
   * @private
   *
   * @since 0.0.1
   *
   * @param {String} propertyName
   *
   * @returns {void}
   */
  _makeNonEnumerable(propertyName) {
    Object.defineProperty(this, propertyName, {
      enumerable: false,
      configurable: true,  //makes the property reconfigurable if necessary
      writable: true       //makes the property rewritable
    });
  }

  /**
  * Method that dynamically adds values ​​to the
  * Entity that extends, allowing to map the fields that the
  * EntityClass waits.
  *
  * @public
  *
  * @since 1.0.0
  *
  * @param {Object} data_object {param, param...}
  *
  * @returns {void}
  */
  async fill(data_object) {
    if (!data_object) {
      return;
    }

    for (let key in data_object) {
      if (this._isKeyNotRelationAndExists(key)) {
        this.setAttributeValue(key, data_object[key]);
      }
    }

    this._relationshipManager.setHasOne(this, data_object);
    this._relationshipManager.setHasMany(this, data_object);
  }

  /**
  * Identifies whether the property is not a relationship
  * defined
  *
  * @private
  *
  * @since 1.0.0
  *
  * @param {String} key
  *
  * @returns {void}
  */
  _isKeyNotRelationAndExists(key) {
    return EntityHelper.isAttributeAndNotRelationship(key, this);
  }

  /**
   * Adds a value to the Entity property
   *
   * @public
   * @since 1.0.0
   * @param {String} key
   * @param {*} value
   * @throws {PropertyRequiredException} If the property does not exist
   * in the Entity
   * @returns {void}
   */
  setAttributeValue(key, value) {
    if(!key){
      return;
    }

    if (!this.hasOwnProperty(key) && !EntityHelper.isRelationship(key, this)) {
      throw new PropertyRequiredException(`${key} not exists in Entity`);
    }

    //TODO: think more about this
    // if(EntityHelper.isRelationship(key, this)){
    //   this._setValueRelationship(key, value);
    //   return;
    // }

    if(this.constructor.DATES && TypeChecker.isArray(this.constructor.DATES) && this.constructor.DATES.includes(key)){
      this._setValueDate(key, value);
      return;
    }

    this[key] = value;
  }

  /**
   * Set a value in a relationship
   *
   * @private
   * @since 1.0.0
   * @param {String} key
   * @param {*} value
   * @returns
   */
  async _setValueRelationship(key, value){
    if(!value){
      return;
    }

    await this._relationshipManager.setRelationValue(key, value, this);
  }

  /**
   * Set value date
   * @public
   * @since 1.0.0
   * @param {String} key
   * @param {*} value
   * @returns {void}
   */
  _setValueDate(key, value){
    if(!value){
      return;
    }

    if(value instanceof Carbon){
      this[key] = value;
      return;
    }

    let format_dates = Carbon.FORMAT_DEFAULT;

    if(this.constructor.FORMAT_DATES && this.constructor.FORMAT_DATES[key]){
      format_dates = this.constructor.FORMAT_DATES[key];
    }

    this[key] = new Carbon(value, format_dates);
  }

  /**
   * Validate the entity
   * @public
   * @since 1.0.0
   * @param {Object} rules Rules to be validated
   * @returns {Validator}
   */
  async validate(rules = {}){
    this._validator.setData(this);

    await this._validator.validate(rules);

    return this._validator;
  };

  /**
   * Validate a field entity with rules
   * @public
   * @since 1.0.0
   * @param {String} field
   * @returns {Validator}
   */
  async validateField(field){
    this._validator.setData(this);
    await this._validator.validateField(field);
    return this._validator;
  };

  /**
   * Get just attributes from the entity
   * ignoring relationships and other properties
   * statics
   * @public
   * @since 1.0.0
   * @returns {Object}
   */
  getAttributes(){
    const attributes =  Object.getOwnPropertyNames(this).filter(prop => {
      return typeof this[prop] !== 'function' && !EntityHelper.ATTRIBUTE_IGNORE.includes(prop);
    });
    return attributes;
  }

  /**
   * Get the entity as a JSON object
   * @public
   * @since 1.0.0
   * @param {Object} options
   * @property {String<Boolean>} just_attributes_with_values If true, only attributes with values will be returned
   * @property {String<Boolean>} ignore_relationships If true, relationships will be ignored
   * @returns {Object}
   */
  toJSON(options = {}){
    options = Object.assign({just_attributes_with_values : true, ignore_relationships : false}, options);
    return (new EntitySerializeJSON(this, options)).serialize();
  }

  /**
  * Reset entity instance
  *
  * @public
  * @since 1.0.0
  * @returns {void}
  */
  reset(){
    EntityHelper.resetEntity(this);
  }

  /**
   * Get a name classe
   * @public
   * @since 1.0.0
   * @returns {String}
   */
  static get className(){
    return 'Entity';
  }
}
