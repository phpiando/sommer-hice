/**
 * @description Class responsible for managing list data
 *more simply and without the need for a
 *unique identifier for items.
 * @class
 * @extends Error
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class Exception extends Error {
  /**
   * Error type identifier
   * @type {String}
   */
  name = 'Exception';

  /**
   * Error code identifier
   * @type {String}
   */
  code = 'UNKNOWN_CODE';

  /**   
   * @constructor
   * @param {String} message 
   * @param {Object} options 
   */
  constructor(message, options) {
    if (options && 'code' in options) {
      this.code = options.code;
    }

    super(message, options);
  }
}