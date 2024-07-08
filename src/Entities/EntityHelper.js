"use strict";

/**
 * @description Helper methods for entities
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 * @since 1.0.0
 */
export default class EntityHelper {
  /**
   * Name the key is type dates
   * @static
   * @type {String}
   * @default dates
   */
  static KEY_DATE = "dates";

  /**
   * Name the key is type string
   * that will ignored in entity case need
   * @static
   * @type {String}
   */
  static ATTRIBUTE_IGNORE = [
    "_relationshipManager",
    "_validator",
    "hasOne",
    "hasMany",
  ];

  /**
   * Get type relationship
   *
   * @public
   * @param {String} attribute
   * @param {Entity} entity_instance
   * @returns {String|null}
   */
  static getTypeRelationship(attribute, entity_instance) {
    if (!this.isRelationship(attribute, entity_instance)) {
      return null;
    }

    if (entity_instance.hasOne && entity_instance.hasOne[attribute]) {
      return "hasOne";
    }

    if (entity_instance.hasMany && entity_instance.hasMany[attribute]) {
      return "hasMany";
    }
  }

  /**
   * Get entity relationship
   *
   * @public
   * @param {String} attribute
   * @param {Entity} entity_instance
   * @returns {EntityRelation}
   */
  static getEntityRelationship(attribute, entity_instance) {
    const type = this.getTypeRelationship(attribute, entity_instance);

    if (!type) {
      return null;
    }

    if (type === "hasMany") {
      return entity_instance.hasMany[attribute][0];
    }

    return entity_instance.hasOne[attribute];
  }

  /**
   * Identify if attribute is a relationship
   *
   * @public
   * @param {String} attribute
   * @param {Entity} entity_instance
   * @returns {Boolean}
   */
  static isRelationship(attribute, entity_instance) {
    const is_has_one =
      (entity_instance.hasOne && entity_instance.hasOne[attribute]) || false;
    const is_has_many =
      (entity_instance.hasMany && entity_instance.hasMany[attribute]) || false;

    return is_has_one || is_has_many;
  }

  /**
   * Identify if attribute is not a relationship
   * and exists in object of class
   *
   * @public
   * @param {String} attribute
   * @param {Entity} entity_instance
   * @returns {Boolean}
   */
  static isAttributeAndNotRelationship(attribute, entity_instance) {
    const key_exists_in_this = Object.prototype.hasOwnProperty.call(
      entity_instance,
      attribute
    );
    const is_not_relationship = !this.isRelationship(
      attribute,
      entity_instance
    );

    return key_exists_in_this && is_not_relationship;
  }

  /**
   * Reset entity instance
   *
   * @public
   * @param {Entity} entity_instance
   * @returns {void}
   */
  static resetEntity(entity_instance) {
    for (let attribute in entity_instance) {
      if (this.isAttributeAndNotRelationship(attribute, entity_instance)) {
        entity_instance[attribute] = null;
      }
    }
  }
}
