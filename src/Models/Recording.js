/**
 * DialMyCalls API
 * The DialMyCalls API
 *
 * OpenAPI spec version: 2.0.1
 * Contact: support@dialmycalls.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DialmycallsJsClient) {
      root.DialmycallsJsClient = {};
    }
    root.DialmycallsJsClient.Recording = factory(root.DialmycallsJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Recording model module.
   * @module Models/Recording
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>Recording</code>.
   * @alias module:Models/Recording
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Recording</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Models/Recording} obj Optional instance to populate.
   * @return {module:Models/Recording} The populated <code>Recording</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('seconds')) {
        obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Integer');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('processed')) {
        obj['processed'] = ApiClient.convertToType(data['processed'], 'Boolean');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for this recording.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The recording name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The recording type. Options: text or sound
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The length of the recording.
   * @member {Integer} seconds
   */
  exports.prototype['seconds'] = undefined;
  /**
   * The URL of the recording file.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Whether the recording is ready for use.
   * @member {Boolean} processed
   */
  exports.prototype['processed'] = undefined;
  /**
   * When the recording was created.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * When the recording was last updated.
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));


