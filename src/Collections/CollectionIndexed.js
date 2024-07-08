"use strict";

import Collection from "./Collection";

/**
 * @description This class is designed to manage collections where items are automatically indexed
 * based on a pre-defined property of the objects being inserted. It simplifies the
 * process of adding items to the collection by eliminating the need to explicitly
 * specify an index key each time. This makes the usage more direct and convenient
 * for scenarios where the index key is inherently part of the object structure.
 *
 * @class
 * @extends Collection
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class CollectionIndexed extends Collection {
  /**
   * Defines Index key id
   *
   * @private
   * @type {Number}
   */
  _index_id;

  constructor(index_id) {
    super();
    this._index_id = index_id;
  }

  /**
   * Set an item to the list
   *
   * @public
   * @since 1.0.0
   * @param {Object} item data to be added to the list
   * @param {Boolean} at_beginning add item in beginning of the list
   * @returns {Boolean}
   */
  set(item, at_beginning = false) {
    if (!item[this._index_id]) {
      return false;
    }

    const id = item[this._index_id];
    return super.set(id, item, at_beginning);
  }

  /**
   * Add an item to the collection or
   * update if it already exists
   *
   * @public
   * @since 1.0.0
   * @param {Object} item
   * @param {Boolean} at_beginning  add item in beginning of the list
   * @returns {Boolean}
   */
  add(item, at_beginning = false) {
    if(!item[this._index_id]){
      return false;
    }

    if(this.indexes[item[this._index_id]]){
      return this.update(item, at_beginning);
    }

    return this.set(item, at_beginning);
  }

  /**
   * Update an item in the collection
   *
   * @public
   * @since 1.0.0
   * @param {Object} item
   * @param {Boolean} at_beginning
   * @returns {Boolean}
   */
  update(item, at_beginning = false) {
    if (!this.indexes[item[this._index_id]]) {
      return false;
    }

    super.delete(item[this._index_id]);
    return this.set(item, at_beginning);
  }

  /**
   * Filter items from the collection based on a key and value
   * where the value is equal to the key
   * @public
   * @param {String} key
   * @param {*} value
   * @returns
   */
  whereEqual(key, value) {
    const new_items = this.filter(item => item[key] === value);
    return this.newCollection(new_items);
  }

  /**
   * Filter items from the collection based on a key and value
   * where the value is not equal to the key
   * @public
   * @param {String} key
   * @param {*} value
   * @returns
   */
  whereNotEqual(key, value) {
    const new_items = this.filter(item => item[key] !== value);
    return this.newCollection(new_items);
  }

  /**
   * Filter items from the collection based on a callback
   * @public
   * @param {Function} callback
   * @returns {Array}
   */
  filter(callback) {
    return this.items.filter(callback);
  }

  /**
   * Create new collection with base in the items
   * Object|Array
   * @param {*} items
   * @returns
   */
  newCollection(items) {
    const collection = new CollectionIndexed(this._index_id);
    collection.setFromArray(items);
    return collection;
  }

  /**
   * Set items from an array
   *
   * @public
   * @since 1.0.0
   * @param {Array} items
   * @returns {void}
   */
  async setFromArray(items) {
    for (let item of items) {
      this.set(item);
    }
  }

  /**
   * Get index keys from the indexed list
   * @public
   * @since 1.0.0
   * @returns {Array}
   */
  getIndexKeys() {
    if(this.size === 0){
      return [];
    }

    return Object.keys(this.indexes);
  }

  /**
   * Get a name classe
   * @public
   * @since 1.0.0
   * @returns {String}
   */
  static get className(){
    return 'CollectionIndexed';
  }
}