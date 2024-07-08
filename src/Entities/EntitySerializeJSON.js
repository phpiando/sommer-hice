"use strict";

import Carbon            from "../Supports/Carbon";
import Entity            from "./Entity";
import EntityHelper      from "./EntityHelper";
import HasManyCollection from "./Collections/HasManyCollection";
import TypeChecker       from "../Supports/TypeChecker";

/**
 * @description EntitySerializeJSON class to serialize data
 * in JSON format
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 * @since 1.0.0 
 */
export default class EntitySerializeJSON {

  /**
   * Entity instance
   * @private
   * @type {Entity}
   */
  _entity_instance;

  /**
   * Options
   * @private
   * @type {Object}
   */
  _options = {};

  /**
   * Debug mode
   * @private
   * @type {Boolean}
   */
  _debug = false;

  /**
   * Special cases that need to be formatted
   * @private
   * @type {Object}
   */
  _specialCases = {
    'Carbon': (attribute, instance) => instance[attribute].format(),
    'Entity': (attribute, instance) => (new EntitySerializeJSON(instance[attribute], this._options)).serialize(),
    'CollectionIndexed': (attribute, instance) => this.serializeCollection(attribute, instance),
    'Array': (attribute, instance) => this.serializeArray(attribute, instance),
  }

  /**
   *
   * @param {Class} entity
   * @param {Object} options
   */
  constructor(entity, options = {}) {
    if (!(entity instanceof Entity)) {
      console.error('EntitySerializeJSON: Entity must be an instance of Entity');
    }

    this._entity_instance = entity;
    this._options = options;
    this._debug = options.debug || false;

    this._log('------------------ EntitySerializeJSON ------------------');
    this._log('Entity:', this._entity_instance);
  }

  /**
   * Serialize data to JSON
   *
   * @public
   * @param {Entity} data
   * @returns {Object} JSON
   */
  serialize() {
    return this._entity_instance.getAttributes().reduce((data_object, attribute) => {
      if (this._options.ignore_relationships && this._isRelationship(attribute)) {
        return data_object;
      }

      if (this._isSpecialCase(attribute)) {
        return this._formatSpecialCase(attribute, data_object);
      }

      if (this._options.just_attributes_with_values && !this._hasValue(attribute)) {
        return data_object;
      }

      data_object[attribute] = this._entity_instance[attribute];
      return data_object;
    }, {});
  }

  /**
   * Serialize a collections
   *
   * @param {*} attribute
   * @param {*} instance
   * @returns
   */
  serializeCollection(attribute, instance) {
    if(instance[attribute].size === 0){
      return [];
    }

    return instance[attribute].items.map((item) => {
      this._log('*** Collections item:', item);
      if(!(item instanceof Entity)){
        return item;
      }

      return (new EntitySerializeJSON(item, this._options)).serialize();
    });
  }

  /**
   *
   * @param {*} attribute
   * @param {*} instance
   * @returns
   */
  serializeArray(attribute, instance) {
    this._log('*** Array:', {
      attribute : attribute,
      instance  : instance,
      is_empty: TypeChecker.isEmpty(instance['attribute']),
    })

    if(!TypeChecker.isEmpty(instance['attribute'])){
      return [];
    }

    return instance[attribute].map((item) => {
      this._log('*** Array item:', item);

      if(!(item instanceof Entity)){
        return item;
      }

      return (new EntitySerializeJSON(item, this._options)).serialize();
    });
  }

  /**
   * Identify if attribute is a special case
   * that need to be formatted
   *
   * @private
   * @param {String} attribute
   * @returns {Boolean}
   */
  _isSpecialCase(attribute) {
    const constructor_instance = this._entity_instance[attribute]?.constructor?.className || null;
    const constructor_name =  constructor_instance || this._entity_instance[attribute]?.constructor?.name || null;

    let special_case = constructor_name;
    special_case = (this._isEntity(attribute) ? 'Entity' : special_case);

    this._log({
      constructor_name : constructor_name,
      attribute_value: this._entity_instance[attribute],
      special_case : special_case,
      attribute   : attribute,
      typeof: typeof this._entity_instance[attribute],
    });

    return this._specialCases[special_case] || false;
  }

  /**
   * Format special case
   *
   * @private
   * @param {String} attribute
   * @param {Object} data_object
   * @returns {void}
   */
  _formatSpecialCase(attribute, data_object) {
    if(!this._isSpecialCase(attribute)){
      return data_object;
    }

    this._log('-> Before format special case:', attribute);

    const constructor_instance = this._entity_instance[attribute]?.constructor?.className || null;
    let constructor_name = constructor_instance || this._entity_instance[attribute].constructor?.name || null;
    constructor_name = (this._isEntity(attribute) ? 'Entity' : constructor_name);

    const formatted = this._specialCases[constructor_name](attribute, this._entity_instance);

    this._log('-> Formatted Special Cases:', {
      attribute        : attribute,
      constructor_name : constructor_name,
      formatted        : formatted,
    })

    data_object[attribute] = formatted;

    return data_object;
  }

  /**
   * Identify if attribute is an entity
   *
   * @private
   * @param {String} attribute
   * @returns {Boolean}
   */
  _isEntity(attribute) {
    return (this._entity_instance[attribute] instanceof Entity);
  }

  /**
   * Identify if attribute is a relationship
   *
   * @private
   * @param {String} attribute
   * @returns {Boolean}
   */
  _isRelationship(attribute) {
    return EntityHelper.isRelationship(attribute, this._entity_instance);
  }

  /**
   * Identify if attribute has value
   *
   * @private
   * @param {String} attribute
   * @returns {Boolean}
   */
  _hasValue(attribute) {
    return (this._entity_instance[attribute] && !TypeChecker.isEmpty(this._entity_instance[attribute]));
  }

  /**
   * Debug log
   *
   * @param  {...any} args
   * @returns {void}
   */
  _log(...args) {
    if (this._debug) {
      console.log(...args);
    }
  }
}