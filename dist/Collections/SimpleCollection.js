"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description Class responsible for managing list data
 *more simply and without the need for a
 *unique identifier for items.
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var SimpleCollection = /*#__PURE__*/function () {
  function SimpleCollection() {
    _classCallCheck(this, SimpleCollection);
    /**
     * Identifies the number of items that exist
     * in item collection
     * @type {Number}
     */
    _defineProperty(this, "size", 0);
    /**
     * Additional way by indexing the items
     * associatively with the identified ids
     * @type {Object.<String, *>}
     */
    _defineProperty(this, "indexes", {});
    /**
     * list of items you have in the collection
     * @type {Array}
     */
    _defineProperty(this, "items", []);
  }
  _createClass(SimpleCollection, [{
    key: "set",
    value:
    /**
     * Set an item to the list
     *
     * @public
     * @since 0.0.1
     * @param {String|Number} key index identifier
     * @param {*} value data to be added to the list
     * @returns {Boolean}
     */
    function set(key, value) {
      if (this.indexes[key]) {
        return false;
      }
      this.add(key, value);
      return true;
    }

    /**
     * Adds the value to the collection
     *
     * @private
     * @since 0.0.1
     * @param {String|Number} key
     * @param {*} value
     * @returns {void}
     */
  }, {
    key: "add",
    value: function add(key, value) {
      this.items.push(value);
      this.indexes[key] = value;
      this.size++;
    }

    /**
     * Identifies if the key exists
     * added to item list
     *
     * @public
     * @since 0.0.1
     * @param {String|Number} key
     * @returns {Boolean}
     */
  }, {
    key: "has",
    value: function has(key) {
      return key in this.indexes;
    }

    /**
     * Retrieves the indexed value in the collection by
     * identifier reference
     *
     * @public
     * @since 0.0.1
     * @param {String|Number} key identificador do index da lista
     * @returns {Object|null}
     */
  }, {
    key: "get",
    value: function get(key) {
      return this.indexes[key] || null;
    }

    /**
     * Deletes an item from the list and removes it from
     * saved list indexes
     *
     * @public
     * @since 0.0.1
     * @param {String|Number} key Identificador index
     * @returns {Boolean}
     */
  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.indexes[key]) {
        return false;
      }
      var value = this.indexes[key];
      var index = this.items.indexOf(value);
      this.items.splice(index, 1);
      delete this.indexes[key];
      this.size--;
      return true;
    }

    /**
     * Chunk Items of Array
     *
     * @public
     * @since 0.0.1
     * @param {Number} size
     * @returns {Array}
     */
  }, {
    key: "chunk",
    value: function chunk(size) {
      var chunks = [];
      var index = 0;
      while (index < this.items.length) {
        chunks.push(this.items.slice(index, index + size));
        index += size;
      }
      return chunks;
    }

    /**
     * Reset all values
     *
     * @public
     * @since 0.0.1
     * @returns {void}
     */
  }, {
    key: "clear",
    value: function clear() {
      this.size = 0;
      this.indexes = {};
      this.items = [];
    }
  }]);
  return SimpleCollection;
}();
exports["default"] = SimpleCollection;