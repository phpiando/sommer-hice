"use strict";

/**
 * @description Class responsible for performing the parse
 * response to API requests
 *
 * @class
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class HTTPMappingResponse {
  /**
   * Parses HTTP Response into the an HTTPResponse
   *
   * @public
   * @since 1.0.0
   * @param {HTTPResponse} response_item
   * @param {Response} request_response
   * @returns {HTTPResponse}
   */
  async parseResponse(response_item, request_response) {
    response_item.success     = request_response.ok;
    response_item.headers     = request_response.headers;
    response_item.data_json   = request_response.body;
    response_item.status      = request_response.status;
    response_item.messages    = response_item.data_json.messages  || [];

    if(response_item.data_json.message){
      response_item.messages.push(response_item.data_json.message);
    }

    return response_item;
  }

  /**
   * Parses XML Response into an Object
   *
   * @public
   * @since 1.0.0
   * @param {String} response_text XML response
   * @returns {Object}
   */
  parseXHRResponse(response_text) {
    return JSON.parse(response_text, (key, value) => {
      if (['createdon', 'updatedon', 'askedon', 'publishedon', 'lastUpdated'].includes(key) && Date.parse(value)) {
        return new Date(value);
      }
      if (key === 'json' && typeof value === 'string') {
        return JSON.parse(value);
      }
      return value;
    });
  }
}