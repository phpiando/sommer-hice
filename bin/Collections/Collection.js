"use strict";

/**
 * @description Class responsible for managing list data
 *more simply and without the need for a
 *unique identifier for items.

 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Collection = exports["default"] = /*#__PURE__*/function () {
  function Collection() {
    _classCallCheck(this, Collection);
    /**
     * Identifies the number of items that exist
     * in item collection
     *
     * @type {Number}
     */
    _defineProperty(this, "size", 0);
    /**
     * Additional way by indexing the items
     * associatively with the identified ids
     *
     * @type {Object.<String, *>}
     */
    _defineProperty(this, "indexes", {});
    /**
     * list of items you have in the collection
     * @type {Array}
     */
    _defineProperty(this, "items", []);
  }
  return _createClass(Collection, [{
    key: "set",
    value:
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
    function set(key, value) {
      var at_beginning = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
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
  }, {
    key: "_add",
    value: function _add(key, value) {
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
  }, {
    key: "_addAtBeginning",
    value: function _addAtBeginning(key, value) {
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
     *
     * @since 1.0.0
     *
     * @param {String|Number} key identificador do index da lista
     *
     * @returns {Object|null}
     */
  }, {
    key: "get",
    value: function get(key) {
      return this.indexes[key] || this.indexes[String(key)] || null;
    }

    /**
     * Get first item in the list
     * @public
     * @since 1.0.0
     * @returns {Object|null}
     */
  }, {
    key: "first",
    value: function first() {
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
     * @since 1.0.0
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
  }, {
    key: "sortBy",
    value: function sortBy(key) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
      return this.items.sort(function (a, b) {
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
  }, {
    key: "clear",
    value: function clear() {
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
  }], [{
    key: "className",
    get: function get() {
      return 'Collection';
    }
  }]);
}();