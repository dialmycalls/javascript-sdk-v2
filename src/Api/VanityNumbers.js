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
    define(['ApiClient', 'Models/UpdateVanityNumberByIdParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Models/UpdateVanityNumberByIdParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.DialmycallsJsClient) {
      root.DialmycallsJsClient = {};
    }
    root.DialmycallsJsClient.VanityNumbers = factory(root.DialmycallsJsClient.ApiClient, root.DialmycallsJsClient.UpdateVanityNumberByIdParameters);
  }
}(this, function(ApiClient, UpdateVanityNumberByIdParameters) {
  'use strict';

  /**
   * VanityNumbers service.
   * @module Api/VanityNumbers
   * @version 2.0.1
   */

  /**
   * Constructs a new VanityNumbers. 
   * @alias module:Api/VanityNumbers
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteVanityNumberById operation.
     * @callback module:Api/VanityNumbers~deleteVanityNumberByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Vanity Number
     * Delete a vanity number. &lt;br&gt;&lt;br&gt; Returns the following if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/keyword/$VANITYNUMBER_ID &#x60;&#x60;&#x60;
     * @param {String} vanityNumberId VanityNumberId
     * @param {module:Api/VanityNumbers~deleteVanityNumberByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteVanityNumberById = function(vanityNumberId, callback) {
      var postBody = null;

      // verify the required parameter 'vanityNumberId' is set
      if (vanityNumberId == undefined || vanityNumberId == null) {
        throw "Missing the required parameter 'vanityNumberId' when calling deleteVanityNumberById";
      }


      var pathParams = {
        'VanityNumberId': vanityNumberId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/vanitynumber/{VanityNumberId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVanityNumberById operation.
     * @callback module:Api/VanityNumbers~getVanityNumberByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Vanity Number
     * Retrieve a vanity number. &lt;br&gt;&lt;br&gt; Returns a vanitynumber object if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/vanitynumber/$VANITYNUMBER_ID &#x60;&#x60;&#x60;
     * @param {String} vanityNumberId VanityNumberId
     * @param {module:Api/VanityNumbers~getVanityNumberByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getVanityNumberById = function(vanityNumberId, callback) {
      var postBody = null;

      // verify the required parameter 'vanityNumberId' is set
      if (vanityNumberId == undefined || vanityNumberId == null) {
        throw "Missing the required parameter 'vanityNumberId' when calling getVanityNumberById";
      }


      var pathParams = {
        'VanityNumberId': vanityNumberId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/vanitynumber/{VanityNumberId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVanityNumbers operation.
     * @callback module:Api/VanityNumbers~getVanityNumbersCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Vanity Numbers
     * Retrieve a list of vanity numbers. &lt;br&gt;&lt;br&gt; Returns a list of vanitynumber objects. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/vanitynumbers &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.range Range (ie \&quot;records&#x3D;201-300\&quot;) of vanitynumbers requested
     * @param {module:Api/VanityNumbers~getVanityNumbersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getVanityNumbers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Range': opts['range']
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/vanitynumbers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVanityNumberById operation.
     * @callback module:Api/VanityNumbers~updateVanityNumberByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Vanity Number
     * Update a vanity number. &lt;br&gt;&lt;br&gt; Returns a vanitynumber object if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X PUT -d \&quot;{\\\&quot;ptt_number_id\\\&quot;:\\\&quot;aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeee\\\&quot;,\\\&quot;call_options\\\&quot;:{\\\&quot;voicemail\\\&quot;:true}}\&quot; https://$API_KEY@api.dialmycalls.com/2.0/vanitynumber/$VANITYNUMBER_ID &#x60;&#x60;&#x60;
     * @param {module:Models/UpdateVanityNumberByIdParameters} updateVanityNumberByIdParameters Request body
     * @param {String} vanityNumberId VanityNumberId
     * @param {module:Api/VanityNumbers~updateVanityNumberByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateVanityNumberById = function(updateVanityNumberByIdParameters, vanityNumberId, callback) {
      var postBody = updateVanityNumberByIdParameters;

      // verify the required parameter 'updateVanityNumberByIdParameters' is set
      if (updateVanityNumberByIdParameters == undefined || updateVanityNumberByIdParameters == null) {
        throw "Missing the required parameter 'updateVanityNumberByIdParameters' when calling updateVanityNumberById";
      }

      // verify the required parameter 'vanityNumberId' is set
      if (vanityNumberId == undefined || vanityNumberId == null) {
        throw "Missing the required parameter 'vanityNumberId' when calling updateVanityNumberById";
      }


      var pathParams = {
        'VanityNumberId': vanityNumberId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/vanitynumber/{VanityNumberId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
