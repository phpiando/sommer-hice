"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Collection2 = _interopRequireDefault(require("./Collection"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var CollectionIndexed = exports["default"] = /*#__PURE__*/function (_Collection) {
  function CollectionIndexed(index_id) {
    var _this;
    _classCallCheck(this, CollectionIndexed);
    _this = _callSuper(this, CollectionIndexed);
    /**
     * Defines Index key id
     *
     * @private
     * @type {Number}
     */
    _defineProperty(_this, "_index_id", void 0);
    _this._index_id = index_id;
    return _this;
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
  _inherits(CollectionIndexed, _Collection);
  return _createClass(CollectionIndexed, [{
    key: "set",
    value: function set(item) {
      var at_beginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!item[this._index_id]) {
        return false;
      }
      var id = item[this._index_id];
      return _superPropGet(CollectionIndexed, "set", this, 3)([id, item, at_beginning]);
    }

    /**
     * Add an item to the collection or
     * update if it already exists
     *
     * @override
     * @public
     * @since 1.0.0
     * @param {Object} item
     * @param {Boolean} at_beginning  add item in beginning of the list
     * @returns {Boolean}
     */
  }, {
    key: "add",
    value: function add(item) {
      var at_beginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!item[this._index_id]) {
        return false;
      }
      var id = item[this._index_id];
      return _superPropGet(CollectionIndexed, "add", this, 3)([id, item, at_beginning]);
    }

    /**
     * Update an item in the collection
     *
     * @override
     * @public
     * @since 1.0.0
     * @param {Object} item
     * @param {Boolean} at_beginning
     * @returns {Boolean}
     */
  }, {
    key: "update",
    value: function update(item) {
      var at_beginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!item[this._index_id]) {
        return false;
      }
      var id = item[this._index_id];
      return _superPropGet(CollectionIndexed, "update", this, 3)([id, item, at_beginning]);
    }

    /**
     * Toogle item in the collection
     *
     * @override
     * @since 1.2.0
     * @param {String|Number} key
     * @param {*} value
     * @param {Boolean} at_beginning
     * @returns {Boolean}
     */
  }, {
    key: "toogle",
    value: function toogle(item) {
      var at_beginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!item[this._index_id]) {
        return false;
      }
      var id = item[this._index_id];
      return _superPropGet(CollectionIndexed, "toogle", this, 3)([id, item, at_beginning]);
    }

    /**
     * Join items from the collection based on a key and separator
     *
     * @public
     * @since 1.2.0
     * @param {String|Number} index_key
     * @returns {Object}
     */
  }, {
    key: "join",
    value: function join() {
      var index_key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._index_id;
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
      return this.items.map(function (item) {
        return item[index_key];
      }).join(separator);
    }

    /**
     * Get the sum of all items in the collection
     *
     * @public
     * @since 1.2.0
     * @param {String|Number} index_key
     * @returns {Number}
     */
  }, {
    key: "sum",
    value: function sum() {
      var index_key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._index_id;
      return this.items.reduce(function (sum, item) {
        return sum + parseFloat(item[index_key]);
      }, 0);
    }

    /**
     * Filter items from the collection based on a key and value
     * where the value is equal to the key
     * @public
     * @param {String} key
     * @param {*} value
     * @returns
     */
  }, {
    key: "whereEqual",
    value: function whereEqual(key, value) {
      var new_items = this.filter(function (item) {
        return item[key] == value;
      });
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
  }, {
    key: "whereNotEqual",
    value: function whereNotEqual(key, value) {
      var new_items = this.filter(function (item) {
        return item[key] != value;
      });
      return this.newCollection(new_items);
    }

    /**
     * Filter items from the collection based on a callback
     * @public
     * @param {Function} callback
     * @returns {Array}
     */
  }, {
    key: "filter",
    value: function filter(callback) {
      return this.items.filter(callback);
    }

    /**
     * Create new collection with base in the items
     * Object|Array
     * @param {*} items
     * @returns
     */
  }, {
    key: "newCollection",
    value: function newCollection(items) {
      var collection = new CollectionIndexed(this._index_id);
      collection.setFromArray(items);
      return collection;
    }

    /**
     * Group by items from the collection based on a key
     *
     * @public
     * @since 1.2.0
     * @param {String|number} index_key
     * @returns {Object|Array}
     */
  }, {
    key: "groupBy",
    value: function groupBy() {
      var index_key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._index_id;
      return this.items.reduce(function (accumulator, item) {
        var key = item[index_key];
        if (!accumulator[key]) {
          accumulator[key] = [];
        }
        accumulator[key].push(item);
        return accumulator;
      }, {});
    }

    /**
     * Count items from the collection based on a key
     *
     * @public
     * @since 1.2.0
     * @returns {Number}
     */
  }, {
    key: "count",
    value: function count() {
      return this.items.reduce(function (accumulator, item) {
        return accumulator + 1;
      }, 0);
    }

    /**
     * Set items from an array
     *
     * @public
     * @since 1.0.0
     * @param {Array} items
     * @returns {void}
     */
  }, {
    key: "setFromArray",
    value: (function () {
      var _setFromArray = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(items) {
        var _iterator, _step, item;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _iterator = _createForOfIteratorHelper(items);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  item = _step.value;
                  this.set(item);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function setFromArray(_x) {
        return _setFromArray.apply(this, arguments);
      }
      return setFromArray;
    }()
    /**
     * Get index keys from the indexed list
     * @public
     * @since 1.0.0
     * @returns {Array}
     */
    )
  }, {
    key: "getIndexKeys",
    value: function getIndexKeys() {
      var column = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.size === 0) {
        return [];
      }
      if (!column) {
        return Object.keys(this.indexes);
      }
      return this.items.map(function (item) {
        return item[column];
      });
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
      return 'CollectionIndexed';
    }
  }]);
}(_Collection2["default"]);