"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _StateBase2 = _interopRequireDefault(require("./StateBase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description State base class
 * @class
 * @since 1.0.0
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
var StateHTTP = /*#__PURE__*/function (_StateBase) {
  _inherits(StateHTTP, _StateBase);
  var _super = _createSuper(StateHTTP);
  function StateHTTP() {
    var _this;
    _classCallCheck(this, StateHTTP);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    /**
     * Stores callbacks functions
     * in the using of the state
     *
     * @private
     * @since 1.0.0
     * @type {Object}
     */
    _defineProperty(_assertThisInitialized(_this), "_callbacks", {});
    return _this;
  }
  _createClass(StateHTTP, [{
    key: "dispatch",
    value:
    /**
     * Sets a custom event state
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String|Array} id
     * @param {String} state
     *
     * @returns {void}
     */
    function dispatch(id, state) {
      this.states[id] = state;
      this._callLoadedCallbacks(id, state);
    }

    /**
    * Sets State to Loading
    * @public
    *
    * @since 1.0.0
    *
    * @param {String} id
    *
    * @returns {void}
    */
  }, {
    key: "setLoading",
    value: function setLoading(id) {
      this.dispatch(id, 'loading');
    }

    /**
     * Sets State to success if load value is true, or error if false
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     * @param {Boolean|String} value
     *
     * @returns {void}
     */
  }, {
    key: "setSuccess",
    value: function setSuccess(id, value) {
      this.dispatch(id, value === true ? 'success' : 'error');
    }

    /**
     * Deletes all states and callbacks
     * to id
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     *
     * @returns {void}
     */
  }, {
    key: "unset",
    value: function unset(id) {
      delete this.states[id];
      delete this._callbacks[id];
    }

    /**
     * Registers an on Loaded function to be called on state change
     *
     * @public
     *
     * @since 1.0.0
     *
     * @param {String} id
     * @param {String} state
     * @param {Function} callable
     *
     * @returns {void}
     */
  }, {
    key: "on",
    value: function on(id, state, callable) {
      this._setCallback(id, state, callable);
      this._callLoadedCallbacks(id, state);
    }

    /**
    * Destroys a registered callback
    *
    * @public
    *
    * @since 1.0.0
    *
    * @param {String} id
    * @param {String} state
    * @param {Function} callable
    *
    * @returns {void}
    */
  }, {
    key: "off",
    value: function off(id, state, callable) {
      if (!this._callbacks[id] || !this._callbacks[id][state]) return;
      this._callbacks[id][state] = this._callbacks[id][state].filter(function (cb) {
        return cb !== callable;
      });
    }

    /**
     * Sets a loadded callback function
     *
     * @private
     *
     * @since 1.0.0
     *
     * @param {String} id
     * @param {String} state
     * @param {Function} callable
     *
     * @returns {void}
     */
  }, {
    key: "_setCallback",
    value: function _setCallback(id, state, callback) {
      if (!this._callbacks[id]) this._callbacks[id] = {};
      if (!this._callbacks[id][state]) this._callbacks[id][state] = [];
      this._callbacks[id][state].push(callback);
    }

    /**
     * Calls all registered loaded calbacks
     *
     * @private
     * @since 1.0.0
     * @param {*} id
     * @param {*} state
     *
     * @returns {void}
     */
  }, {
    key: "_callLoadedCallbacks",
    value: function _callLoadedCallbacks(id, state) {
      if (this.states[id] !== state || !this._callbacks[id] || !this._callbacks[id][state]) return;
      this._callbacks[id][state].forEach(function (callback) {
        return callback();
      });
      this._callbacks[id][state] = [];
    }
  }]);
  return StateHTTP;
}(_StateBase2["default"]);
exports["default"] = StateHTTP;