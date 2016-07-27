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
    root.DialmycallsJsClient.Callservice = factory(root.DialmycallsJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Callservice model module.
   * @module Models/Callservice
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>Callservice</code>.
   * @alias module:Models/Callservice
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Callservice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Models/Callservice} obj Optional instance to populate.
   * @return {module:Models/Callservice} The populated <code>Callservice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('accessaccount_id')) {
        obj['accessaccount_id'] = ApiClient.convertToType(data['accessaccount_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('recording_id')) {
        obj['recording_id'] = ApiClient.convertToType(data['recording_id'], 'String');
      }
      if (data.hasOwnProperty('pending_cancel')) {
        obj['pending_cancel'] = ApiClient.convertToType(data['pending_cancel'], 'Boolean');
      }
      if (data.hasOwnProperty('credit_cost')) {
        obj['credit_cost'] = ApiClient.convertToType(data['credit_cost'], 'Number');
      }
      if (data.hasOwnProperty('total_recipients')) {
        obj['total_recipients'] = ApiClient.convertToType(data['total_recipients'], 'Number');
      }
      if (data.hasOwnProperty('send_at')) {
        obj['send_at'] = ApiClient.convertToType(data['send_at'], 'String');
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
   * Unique identifier for this service.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Unique identifier for the access account which initiated this if available.
   * @member {String} accessaccount_id
   */
  exports.prototype['accessaccount_id'] = undefined;
  /**
   * The name of the service.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Unique identifier for the recording.
   * @member {String} recording_id
   */
  exports.prototype['recording_id'] = undefined;
  /**
   * Whether the service has been flagged to be cancelled.
   * @member {Boolean} pending_cancel
   */
  exports.prototype['pending_cancel'] = undefined;
  /**
   * The amount of credits required to schedule this service.
   * @member {Number} credit_cost
   */
  exports.prototype['credit_cost'] = undefined;
  /**
   * The amount of recipients for this service.
   * @member {Number} total_recipients
   */
  exports.prototype['total_recipients'] = undefined;
  /**
   * When the service will be sent.
   * @member {String} send_at
   */
  exports.prototype['send_at'] = undefined;
  /**
   * When the service was created.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * When the service was last updated.
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));

