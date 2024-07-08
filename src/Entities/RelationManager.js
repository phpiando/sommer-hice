"use strict";

import CollectionIndexed from "../Collections/CollectionIndexed";
import Entity            from "./Entity";
import EntityHelper      from "./EntityHelper";
import HasManyCollection from "./Collections/HasManyCollection";
import RelationException from "./Exceptions/RelationException";
import TypeChecker       from "../Supports/TypeChecker";

/**
 * @description Class dealing with relationships
 * of entities when defined
 *
 * For example:
 *
 * @example class EntityItem extends entity {
 *  hasOne = {
 *   'relation': EntityRelation
 *  }
 *  hasMany = {
 *  'relation': [EntityRelation, {collection_id: 'id'}]
 *  }
 * }
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class RelationManager {
  /**
   * Add relationships
   * that refer to hasOne to the entity object
   *
   * @public
   * @since 1.0.0
   * @param {Object} entity Entity
   * @param {Object} data_object
   * @returns {void}
   */
  setHasOne(entity, data_object) {
    if (!entity.hasOwnProperty('hasOne')) {
      return;
    }

    this._handleOneToOne(data_object, entity);
  }

  /**
   * This method tries to create relationships based on classes
   * that were defined in entities 1 to 1
   *
   * @private
   * @since 1.0.0
   * @param {*} data_object
   * @param {*} entity
   * @throws {RelationException} If the class does not extend Entity
   * @returns {void}
   */
  _handleOneToOne(data_object, entity) {
    for (let relation in entity.hasOne) {
      if (Object.prototype.hasOwnProperty.call(data_object, relation)) {
        entity[relation] = new entity.hasOne[relation]();

        if (!data_object[relation]) {
          continue;
        }

        if (!(entity[relation] instanceof Entity)) {
          throw new RelationException(`Class for relation ${relation} does not extend Entity`);
        }

        entity[relation].fill(data_object[relation]);
      }
    }
  }

  /**
   * Add relationships
   * that refer to hasMany to the entity object
   *
   * @public
   * @since 1.0.0
   * @param {Object} entity
   * @param {Object} data_object
   * @throws {RelationException} If the class does not extend Entity
   * @returns {void}
   */
  setHasMany(entity, data_object) {
    if (!entity.hasOwnProperty('hasMany')) {
      return;
    }

    for (let relation in entity.hasMany) {
      const relation_struct = this._getDescontructRelation(relation, entity.hasMany);
      const index_id  = relation_struct.options.collection_id || 'id';
      entity[relation] = new HasManyCollection(index_id);

      if (Object.prototype.hasOwnProperty.call(data_object, relation)) {
        data_object[relation].forEach(item => {
          let relation_entity = new relation_struct['class_instance']();

          if (!(relation_entity instanceof Entity)) {
            throw new RelationException(`Class for relation ${relation} does not extend Entity`);
          }

          relation_entity.fill(item);

          entity[relation].set(relation_entity);
        });
      }
    }
  }

  /**
   * Deconstructs the relationship extracting the class and personalized options
   * that can have
   *
   * @private
   *
   * @since 1.0.0
   *
   * @param {String} relation
   * @param {Array|Class} relation_type
   *
   * @throws {RelationException} If the class does not extend Entity
   *
   * @returns {Object}
   * @property {Object.<Class>} class_instance Class used in relationship
   * @property {Object} options Object with properties
   * @property {String} options.collection_id Index used in Collections
   */
  _getDescontructRelation(relation, relation_type) {
    if (typeof relation_type[relation] !== 'function') {
      if (!relation_type[relation][0] || typeof relation_type[relation][0] !== 'function') {
        throw new RelationException(`Class for relation ${relation} does not exists`)
      }

      return {
        class_instance: relation_type[relation][0],
        options: relation_type[relation][1] || {}
      }
    }

    return {
      class_instance: relation,
      options: {}
    };
  }

  /**
   * Get relationship from entity instance
   *
   * @public
   * @since 1.0.0
   * @param {String} attribute
   * @param {Object} entity_instance
   * @returns {Entity}
   */
  getRelationInstance(attribute, entity_instance) {
    const instance = EntityHelper.getEntityRelationship(attribute, entity_instance);

    if (!instance) {
      return null;
    }

    return (new instance());
  }

  /**
   * Set the value of a relationship in the entity instance
   * based on the attribute and value passed
   *
   * @public
   * @since 1.0.0
   * @param {*} attribute
   * @param {*} value
   * @param {*} entity_instance
   * @returns
   */
  async setRelationValue(attribute, value, entity_instance) {
    const entity_relation = this.getRelationInstance(attribute, entity_instance);

    if(!entity_relation){
      return;
    }

    if(TypeChecker.isArray(value)){
      if(!(entity_instance[attribute] instanceof HasManyCollection)){
        entity_instance[attribute] = new HasManyCollection('id');
      }

      for(let item of value){
        await entity_relation.fill(item);
        entity_instance[attribute].add(entity_relation);
      }

      return;
    }

    entity_instance[attribute] = entity_relation;
  }
}