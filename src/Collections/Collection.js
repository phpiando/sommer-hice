"use strict";

/**
 * @description Class responsible for managing list data
 *more simply and without the need for a
 *unique identifier for items.

 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class Collection {
  /**
   * Identifies the number of items that exist
   * in item collection
   *
   * @type {Number}
   */
  size = 0;

  /**
   * Additional way by indexing the items
   * associatively with the identified ids
   *
   * @type {Object.<String, *>}
   */
  indexes = {}

  /**
   * list of items you have in the collection
   * @type {Array}
   */
  items = [];

  /**
   * Set an item to the list
   *
   * @public
   * @since 1.0.0
   * @param {String|Number} key index identifier
   * @param {*} value data to be added to the list
   * @param {Boolean} at_beginning add item in beginning of the list
   * @returns {Boolean}
   */
  set(key, value, at_beginning = false) {
    if (this.indexes[key]) {
      return false;
    }

    at_beginning ? this._addAtBeginning(key, value) : this._add(key, value);
    return true;
  }

  /**
   * Adds the value to the collection
   *
   * @private
   *
   * @since 1.0.0
   *
   * @param {String|Number} key
   * @param {*} value
   *
   * @returns {void}
   */
  _add(key, value) {
    this.items.push(value);
    this.indexes[key] = value;
    this.size++;
  }

  /**
   * Add item in beginning of the list
   *
   * @public
   * @since 1.0.0
   * @param {*} key
   * @param {*} value
   * @returns {void}
   */
  _addAtBeginning(key, value) {
    this.items.unshift(value);
    this.indexes[key] = value;
    this.size++;
  }

  /**
   * Identifies if the key exists
   * added to item list
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String|Number} key
   *
   * @returns {Boolean}
   */
  has(key) {
    return (key in this.indexes);
  }

  /**
   * Retrieves the indexed value in the collection by
   * identifier reference
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String|Number} key identificador do index da lista
   *
   * @returns {Object|null}
   */
  get(key) {
    return this.indexes[key] || this.indexes[String(key)] || null;
  }

  /**
   * Get first item in the list
   * @public
   * @since 1.0.0
   * @returns {Object|null}
   */
  first(){
    return this.items[0] || null;
  }

  /**
   * Deletes an item from the list and removes it from
   * saved list indexes
   *
   * @public
   * @since 1.0.0
   * @param {String|Number} key Identificador index
   * @returns {Boolean}
   */
  delete(key) {
    if (!this.indexes[key]) {
      return false;
    }

    let value = this.indexes[key];
    let index = this.items.indexOf(value);

    this.items.splice(index, 1);
    delete this.indexes[key];

    this.size--;

    return true;
  }

  /**
   * Chunk Items of Array
   *
   * @public
   * @since 1.0.0
   * @param {Number} size
   * @returns {Array}
   */
  chunk(size) {
    const chunks = [];
    let index = 0;

    while (index < this.items.length) {
      chunks.push(this.items.slice(index, index + size));
      index += size;
    }

    return chunks;
  }

  sortBy(key, order = 'asc') {
    return this.items.sort((a, b) => {
      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  /**
   * Reset all values
   *
   * @public
   * @since 1.0.0
   * @returns {void}
   */
  clear() {
    this.size = 0;
    this.indexes = {};
    this.items = [];
  }

  /**
   * Get a name classe
   * @public
   * @since 1.0.0
   * @returns {String}
   */
  static get className(){
    return 'Collection';
  }
}