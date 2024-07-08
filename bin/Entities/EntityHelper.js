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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EntityHelper = /*#__PURE__*/function () {
  function EntityHelper() {
    _classCallCheck(this, EntityHelper);
  }
  _createClass(EntityHelper, null, [{
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
  return EntityHelper;
}();
exports["default"] = EntityHelper;
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