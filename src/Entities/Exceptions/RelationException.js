"use strict";

import Exception from "@hice/Exceptions/Exception";

/**
 * @description Class to handle Relation exceptions
 * Modules
 *
 * @class
 * @extends Exception
 * @license public
 * @author Roni Sommerfeld <roni@4tech.mobi>
 */
export default class RelationException extends Exception {
  /**
   * Identify name Exception
   * @type {String}
   */
  name = "RelationException";

  /**
   * Identify the code
   * @type {String}
   */
  code = "RELATION_EXCEPTION";
}