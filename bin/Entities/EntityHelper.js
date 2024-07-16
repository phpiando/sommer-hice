"use strict";

/**
 * @description Helper methods for entities
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 * @since 1.0.0
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
var EntityHelper = exports["default"] = /*#__PURE__*/function () {
  function EntityHelper() {
    _classCallCheck(this, EntityHelper);
  }
  return _createClass(EntityHelper, null, [{
    key: "getTypeRelationship",
    value:
    /**
     * Get type relationship
     *
     * @public
     * @param {String} attribute
     * @param {Entity} entity_instance
     * @returns {String|null}
     */
    function getTypeRelationship(attribute, entity_instance) {
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
  }, {
    key: "getEntityRelationship",
    value: function getEntityRelationship(attribute, entity_instance) {
      var type = this.getTypeRelationship(attribute, entity_instance);
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
  }, {
    key: "isRelationship",
    value: function isRelationship(attribute, entity_instance) {
      var is_has_one = entity_instance.hasOne && entity_instance.hasOne[attribute] || false;
      var is_has_many = entity_instance.hasMany && entity_instance.hasMany[attribute] || false;
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
  }, {
    key: "isAttributeAndNotRelationship",
    value: function isAttributeAndNotRelationship(attribute, entity_instance) {
      var key_exists_in_this = Object.prototype.hasOwnProperty.call(entity_instance, attribute);
      var is_not_relationship = !this.isRelationship(attribute, entity_instance);
      return key_exists_in_this && is_not_relationship;
    }

    /**
     * Reset entity instance
     *
     * @public
     * @param {Entity} entity_instance
     * @returns {void}
     */
  }, {
    key: "resetEntity",
    value: function resetEntity(entity_instance) {
      for (var attribute in entity_instance) {
        if (this.isAttributeAndNotRelationship(attribute, entity_instance)) {
          entity_instance[attribute] = null;
        }
      }
    }
  }]);
}();
/**
 * Name the key is type dates
 * @static
 * @type {String}
 * @default dates
 */
_defineProperty(EntityHelper, "KEY_DATE", "dates");
/**
 * Name the key is type string
 * that will ignored in entity case need
 * @static
 * @type {String}
 */
_defineProperty(EntityHelper, "ATTRIBUTE_IGNORE", ["_relationshipManager", "_validator", "hasOne", "hasMany"]);