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
    define(['ApiClient', 'Models/ContactAttributes', 'Models/PushToListenAgain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactAttributes'), require('./PushToListenAgain'));
  } else {
    // Browser globals (root is window)
    if (!root.DialmycallsJsClient) {
      root.DialmycallsJsClient = {};
    }
    root.DialmycallsJsClient.CreateCallParameters = factory(root.DialmycallsJsClient.ApiClient, root.DialmycallsJsClient.ContactAttributes, root.DialmycallsJsClient.PushToListenAgain);
  }
}(this, function(ApiClient, ContactAttributes, PushToListenAgain) {
  'use strict';




  /**
   * The CreateCallParameters model module.
   * @module Models/CreateCallParameters
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>CreateCallParameters</code>.
   * @alias module:Models/CreateCallParameters
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>CreateCallParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Models/CreateCallParameters} obj Optional instance to populate.
   * @return {module:Models/CreateCallParameters} The populated <code>CreateCallParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('callerid_id')) {
        obj['callerid_id'] = ApiClient.convertToType(data['callerid_id'], 'String');
      }
      if (data.hasOwnProperty('recording_id')) {
        obj['recording_id'] = ApiClient.convertToType(data['recording_id'], 'String');
      }
      if (data.hasOwnProperty('machine_recording_id')) {
        obj['machine_recording_id'] = ApiClient.convertToType(data['machine_recording_id'], 'String');
      }
      if (data.hasOwnProperty('send_at')) {
        obj['send_at'] = ApiClient.convertToType(data['send_at'], 'String');
      }
      if (data.hasOwnProperty('send_immediately')) {
        obj['send_immediately'] = ApiClient.convertToType(data['send_immediately'], 'Boolean');
      }
      if (data.hasOwnProperty('use_amd')) {
        obj['use_amd'] = ApiClient.convertToType(data['use_amd'], 'Boolean');
      }
      if (data.hasOwnProperty('send_email')) {
        obj['send_email'] = ApiClient.convertToType(data['send_email'], 'Boolean');
      }
      if (data.hasOwnProperty('accessaccount_id')) {
        obj['accessaccount_id'] = ApiClient.convertToType(data['accessaccount_id'], 'String');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], [ContactAttributes]);
      }
      if (data.hasOwnProperty('add_ons')) {
        obj['add_ons'] = ApiClient.convertToType(data['add_ons'], [PushToListenAgain]);
      }
    }
    return obj;
  }

  /**
   * (Required)  Name the broadcast.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * (Required)  The caller id that the message should be sent from.
   * @member {String} callerid_id
   */
  exports.prototype['callerid_id'] = undefined;
  /**
   * (Required)  The recording id of the message that should be played.
   * @member {String} recording_id
   */
  exports.prototype['recording_id'] = undefined;
  /**
   * The recording id of the message that should be played on answering machines.  If not supplied the recording_id will be used.  use_amd must be true in order for this feature to work.
   * @member {String} machine_recording_id
   */
  exports.prototype['machine_recording_id'] = undefined;
  /**
   * When the broadcast should be sent. (Ex: 2016-07-25T12:00:00+0000)
   * @member {String} send_at
   */
  exports.prototype['send_at'] = undefined;
  /**
   * Should the broadcast go out immediately?
   * @member {Boolean} send_immediately
   */
  exports.prototype['send_immediately'] = undefined;
  /**
   * Using answering machine detection?
   * @member {Boolean} use_amd
   */
  exports.prototype['use_amd'] = undefined;
  /**
   * Also send an email to the contacts?
   * @member {Boolean} send_email
   */
  exports.prototype['send_email'] = undefined;
  /**
   * Schedule this broadcast as an access account.
   * @member {String} accessaccount_id
   */
  exports.prototype['accessaccount_id'] = undefined;
  /**
   * (Required)  List of contact information that should be sent the broadcast.
   * @member {Array.<module:Models/ContactAttributes>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * A list of feature add-ons for the calls.
   * @member {Array.<module:Models/PushToListenAgain>} add_ons
   */
  exports.prototype['add_ons'] = undefined;



  return exports;
}));


