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
    root.DialmycallsJsClient.Vanitynumber = factory(root.DialmycallsJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Vanitynumber model module.
   * @module Models/Vanitynumber
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>Vanitynumber</code>.
   * @alias module:Models/Vanitynumber
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Vanitynumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Models/Vanitynumber} obj Optional instance to populate.
   * @return {module:Models/Vanitynumber} The populated <code>Vanitynumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('minutes_used')) {
        obj['minutes_used'] = ApiClient.convertToType(data['minutes_used'], 'Number');
      }
      if (data.hasOwnProperty('minutes_allowed')) {
        obj['minutes_allowed'] = ApiClient.convertToType(data['minutes_allowed'], 'Number');
      }
      if (data.hasOwnProperty('voicemails_new')) {
        obj['voicemails_new'] = ApiClient.convertToType(data['voicemails_new'], 'Integer');
      }
      if (data.hasOwnProperty('voicemails_old')) {
        obj['voicemails_old'] = ApiClient.convertToType(data['voicemails_old'], 'Integer');
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
   * Unique identifier for this group.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The phone number.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * The status of the vanity number. Options: active, onhold, billingdecline, pendingdelete
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The amount of minutes used since last billing.
   * @member {Number} minutes_used
   */
  exports.prototype['minutes_used'] = undefined;
  /**
   * The amount of minutes included with the vanity number before billed additionally.
   * @member {Number} minutes_allowed
   */
  exports.prototype['minutes_allowed'] = undefined;
  /**
   * The amount of voicemails that have not been downloaded.
   * @member {Integer} voicemails_new
   */
  exports.prototype['voicemails_new'] = undefined;
  /**
   * The amount of voicemails that have been downloaded.
   * @member {Integer} voicemails_old
   */
  exports.prototype['voicemails_old'] = undefined;
  /**
   * When the keyword was created.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * When the keyword was last updated.
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));

