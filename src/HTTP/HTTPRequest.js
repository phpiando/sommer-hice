"use strict";

import HTTPRequestException   from './Exceptions/HTTPRequestException.js';
import HTTPRequestCollection  from './Collections/HTTPRequestCollection.js';
import HTTPResponse           from './Entities/HTTPResponse.js';
import HTTPMappingResponse    from './HTTPMappingResponse.js';
import FormDataSerializer     from '../Supports/FormDataSerializer.js';
import HTTPConstants          from './HTTPConstants.js';

/**
 * @description Class responsible for making requests
 * with API
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class HTTPRequest {
  /**
   * Headers used in requests
   *
   * @private
   * @since 1.0.0
   * @type {Object.<String, String>}
   */
  headers = {
    // 'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  };

  /**
   * Origin domain of requests.
   *
   * @private
   * @since 1.0.0
   * @type {String}
   */
  base_uri = typeof document !== 'undefined' ? document.location.origin : '';

  /**
   * Collection request make.
   *
   * @public
   * @since 1.0.0
   * @type {Object<string, HTTPResponse>}
   */
  requests = new HTTPRequestCollection;

  /**
   * Mapping response
   *
   * @private
   * @since 1.0.0
   * @type {HTTPMappingResponse}
   */
  _mapping_response = new HTTPMappingResponse;

  /**
   * Serializer objects to formData
   *
   * @private
   * @since 1.0.0
   * @type {FormDataSerializer}
   */
  _formdata_serializer = new FormDataSerializer;

  /**
   * Options for HTTPRequest
   * @private
   * @since 1.0.0
   * @type {Object<String, *>}
   * @property {String} base_uri Base URI for requests
   * @property {Object.<String, String>} headers Headers for requests
   * @property {String} withCredentials Allow send cookies with request (default is false)
   */
  _options = {};

  /**
   * @constructor
   * @since 1.0.0
   * @param {Object<String, *>} options Options for HTTPRequest
   * @property {String} base_uri Base URI for requests
   * @property {Object.<String, String>} headers Headers for requests
   * @property {String} withCredentials Allow send cookies with request (default is false)
   * @property {Boolean} replaceStatusCode replace status code when body api response
   */
  constructor(options = {}) {
    this.base_uri = options.base_uri || this.base_uri;
    this.headers = options.headers || this.headers;
    this._options = options;
  }

  /**
   * Makes a post request using form url encoded data
   * All requests with the same id will wait for the first request
   * to finish and return the same response.
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} endpoint   server endpoint
   * @param {Object|FormData} data payload
   * @param {Object} options
   *
   * @returns {Promise<HTTPResponse>}
   */
  async post(endpoint, data = {}, options = {}) {
    let params = {
      method: HTTPConstants.METHODS.POST,
    };

    params = Object.assign(params, options);

    return await this.request(endpoint, data, params);
  }

  /**
   * Makes a GET request using form url encoded data or FormData
   * All requests with the same id will wait for the first request
   * to finish and return the same response.
   *
   * @public
   * @since 1.0.0
   * @param {String} endpoint   server endpoint
   * @param {Object|FormData} data payload
   * @param {Object} options
   *
   * @returns {Promise<HTTPResponse>}
   */
  async get(endpoint, data = {}, options = {}) {
    let params = {
      method: HTTPConstants.METHODS.GET,
    };

    params = Object.assign(params, options);

    return await this.request(endpoint, data, params);
  }

  /**
   * Make a DELETE request using form url encoded data or FormData
   *
   * @public
   * @since 1.0.0
   * @param {String} endpoint   server endpoint
   * @param {Object|FormData} data payload
   * @param {Object} options
   *
   * @returns {Promise<HTTPResponse>}
   */
  async delete(endpoint, data = {}, options = {}) {
    let params = {
      method: HTTPConstants.METHODS.DELETE,
    };

    params = Object.assign(params, options);

    return await this.request(endpoint, data, params);
  }

  /**
   * Responsible method for calling requests
   * being GET, POST, PUT or any other.
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {String} endpoint
   * @param {*} data
   * @param {Object} options
   * @property {String} method default is GET
   * @property {String} request_id Avoid duplicate requirements
   * @property {Number} timeout timeout to await request_id
   * @property {*} ... others properties used in XMLHttpRequest()
   *
   * @throws {Error} If undefined request XMLHttpRequest()
   * @throws {HTTPRequestException} If error in request
   *
   * @returns {Promise.<HTTPResponse>}
   */
  async request(endpoint, data = {}, options = {}) {
    this._handleOptionsRequest(options);

    if (this.requests.has(options.request_id)) {
      return await this.requests.awaitRequest(options.request_id, options.timeout);
    }

    const url_request = this._createURLRequest(endpoint);

    this._handleBodyRequest(url_request, data, options);

    try {
      const response_item = this.requests.setCurrentRequest(options.request_id);
      // const request_fetch = await fetch(url_request, options);
      const request_fetch = await this._fetch(url_request, options);

      if (typeof request_fetch.status === 'undefined') {
        throw Error('Error undefined request fetch()');
      }

      await this._mapping_response.parseResponse(response_item, request_fetch);
      return response_item;
    } catch (error) {
      throw new HTTPRequestException(error.message);
    } finally {
      this.requests.unsetCurrentRequest(options.request_id);
    }
  }

  /**
   * Create the class responsible for the request
   * from the endpoint in the api
   *
   * @private
   *
   * @since 1.0.0
   *
   * @param {String} endpoint
   *
   * @returns {URL}
   */
  _createURLRequest(endpoint) {
    const url = new URL(endpoint, this.base_uri);
    return url;
  }

  /**
   * Performs treatments on the Options object that the user
   * provides, identifying or adding properties
   * mandatory
   *
   * @private
   * @since 1.0.0
   * @param {Object} options
   * @returns {void}
   */
  _handleOptionsRequest(options) {
    options.method = options.method || HTTPConstants.METHODS.GET;
    options.timeout = options.timeout || HTTPConstants.TIMEOUT_DEFAULT;
    options.headers = options.headers || this.headers;
    options.request_id = options.request_id || this._generateRequestId();
  }

  /**
   * Generate ID for request
   * @private
   * @since 1.0.0
   * @returns {String}
   */
  _generateRequestId(){
    return Math.random().toString(36).substring(7);
  }

  /**
   * Treats the request body to identify the type of request
   *
   * @private
   *
   * @since 1.0.0
   *
   * @param {URL} url_request
   * @param {*} data
   * @param {Object} options
   *
   * @returns {void}
   */
  _handleBodyRequest(url_request, data, options) {
    if (options.method == HTTPConstants.METHODS.GET) {
      url_request.search = new URLSearchParams(data).toString();
      return;
    }

    if (!(data instanceof FormData)) {
      options.body = this._formdata_serializer.serialize(data);
      return;
    }

    options.body = data;
  }

  /**
   * Fetch Request using XMLHttpRequest
   *
   * @since 1.0.0
   * @private
   * @param {String} url_request
   * @param {Object} options
   * @returns {Promise}
   */
  _fetch(url_request, options) {
    const http = this._openXHRConnect(url_request, options);

    return new Promise((resolve, reject) => {
      http.onload = () => {
        const body_parse = this._mapping_response.parseXHRResponse(http.responseText);
        const response_xhr = {
          headers: this._xhrAllHeaders(http),
          status: http.status,
          body: body_parse,
        };

        if(this._options.replaceStatusCode === true && body_parse.hasOwnProperty('status')){
          response_xhr.status = body_parse.status;
        }

        response_xhr.ok = http.status === 200;

        resolve(response_xhr);
      };

      http.onerror = (e) => {
        reject(e.target.status);
      };

      http.send(options.body);
    });
  }

  /**
   * Get All Headers from response using XHR
   *
   * @private
   * @since 1.0.0
   * @param {XMLHttpRequest} http_xhr
   * @returns {Headers}
   */
  _xhrAllHeaders(http_xhr) {
    if (http_xhr.readyState !== http_xhr.HEADERS_RECEIVED) {
      return new Headers;
    }

    const headers = http_xhr.getAllResponseHeaders();
    const arr = headers.trim().split(/[\r\n]+/);

    const header_map = new Headers;

    arr.forEach((line) => {
      const parts = line.split(": ");
      const header = parts.shift();
      const value = parts.join(": ");
      header_map.append(header, value);
    });

    return header_map;
  }

  /**
   * Open connection with XMLHttpRequest
   * and set headers
   * @private
   * @since 1.0.0
   * @param {String} url_request
   * @param {Object} options
   * @returns {XMLHttpRequest}
   */
  _openXHRConnect(url_request, options) {
    const http = new XMLHttpRequest();
    http.open(options.method, url_request);

    if(this._options.withCredentials){
      http.withCredentials = this._options.withCredentials;
    }

    if (!this.headers || !Object.entries(this.headers).length) {
      return;
    }

    for (let header in this.headers) {
      http.setRequestHeader(header, this.headers[header]);
    }

    return http;
  }

  /**
   * Set values ​​for the request header
   *
   * @public
   *
   * @since 1.0.0
   *
   * @param {Object.<String, String>} values
   *
   * @returns {HTTPRequest}
   */
  setHeaders(values) {
    this.headers = values;

    return this;
  }

  /**
   * Get object headers
   *
   * @public
   *
   * @since 1.0.0
   *
   * @returns {Object}
   */
  getHeaders() {
    return this.headers;
  }
}