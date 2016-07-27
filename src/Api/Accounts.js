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
    define(['ApiClient', 'Models/CreateAccessAccountParameters', 'Models/UpdateAccessAccountByIdParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Models/CreateAccessAccountParameters'), require('../Models/UpdateAccessAccountByIdParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.DialmycallsJsClient) {
      root.DialmycallsJsClient = {};
    }
    root.DialmycallsJsClient.Accounts = factory(root.DialmycallsJsClient.ApiClient, root.DialmycallsJsClient.CreateAccessAccountParameters, root.DialmycallsJsClient.UpdateAccessAccountByIdParameters);
  }
}(this, function(ApiClient, CreateAccessAccountParameters, UpdateAccessAccountByIdParameters) {
  'use strict';

  /**
   * Accounts service.
   * @module Api/Accounts
   * @version 2.0.1
   */

  /**
   * Constructs a new Accounts. 
   * @alias module:Api/Accounts
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAccessAccount operation.
     * @callback module:Api/Accounts~createAccessAccountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Access Account
     * Add a access account. &lt;br&gt;&lt;br&gt; Returns a access account object on success, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X POST -d \&quot;{\\\&quot;email\\\&quot;: \\\&quot;test@test.com\\\&quot;, \\\&quot;password\\\&quot;: \\\&quot;1234A5678\\\&quot;, \\\&quot;name\\\&quot;: \\\&quot;John Doe\\\&quot;}\&quot; https://$API_KEY@api.dialmycalls.com/2.0/accessaccount &#x60;&#x60;&#x60;
     * @param {module:Models/CreateAccessAccountParameters} createAccessAccountParameters Request body
     * @param {module:Api/Accounts~createAccessAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createAccessAccount = function(createAccessAccountParameters, callback) {
      var postBody = createAccessAccountParameters;

      // verify the required parameter 'createAccessAccountParameters' is set
      if (createAccessAccountParameters == undefined || createAccessAccountParameters == null) {
        throw "Missing the required parameter 'createAccessAccountParameters' when calling createAccessAccount";
      }


      var pathParams = {
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
        '/accessaccount', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAccessAccountById operation.
     * @callback module:Api/Accounts~deleteAccessAccountByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Access Account
     * Delete a access account. &lt;br&gt;&lt;br&gt; Returns the following if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/accessaccount/$ACCESSACCOUNT_ID &#x60;&#x60;&#x60;
     * @param {String} accessAccountId AccessAccountId
     * @param {module:Api/Accounts~deleteAccessAccountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteAccessAccountById = function(accessAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'accessAccountId' is set
      if (accessAccountId == undefined || accessAccountId == null) {
        throw "Missing the required parameter 'accessAccountId' when calling deleteAccessAccountById";
      }


      var pathParams = {
        'AccessAccountId': accessAccountId
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
        '/accessaccount/{AccessAccountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccessAccountById operation.
     * @callback module:Api/Accounts~getAccessAccountByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Access Account
     * Retrieve an access account. &lt;br&gt;&lt;br&gt; Returns a access account object if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/accessaccount/$ACCESSACCOUNT_ID &#x60;&#x60;&#x60;
     * @param {String} accessAccountId AccessAccountId
     * @param {module:Api/Accounts~getAccessAccountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAccessAccountById = function(accessAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'accessAccountId' is set
      if (accessAccountId == undefined || accessAccountId == null) {
        throw "Missing the required parameter 'accessAccountId' when calling getAccessAccountById";
      }


      var pathParams = {
        'AccessAccountId': accessAccountId
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
        '/accessaccount/{AccessAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccessAccounts operation.
     * @callback module:Api/Accounts~getAccessAccountsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Access Accounts
     * Retrieve a list of access accounts. &lt;br&gt;&lt;br&gt; Returns a list of access account objects. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/accessaccounts &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.range Range (ie \&quot;records&#x3D;201-300\&quot;) of accessaccounts requested
     * @param {module:Api/Accounts~getAccessAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAccessAccounts = function(opts, callback) {
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
        '/accessaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccount operation.
     * @callback module:Api/Accounts~getAccountCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account
     * Retrieve account details. &lt;br&gt;&lt;br&gt; Returns a account object if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/account &#x60;&#x60;&#x60;
     * @param {module:Api/Accounts~getAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAccount = function(callback) {
      var postBody = null;


      var pathParams = {
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
        '/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAccessAccountById operation.
     * @callback module:Api/Accounts~updateAccessAccountByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Access Account
     * Update an existing access account. &lt;br&gt;&lt;br&gt; Returns a access account object if a valid identifier was provided and input validation passed, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X PUT -d \&quot;{\\\&quot;name\\\&quot;: \\\&quot;New Name\\\&quot;}\&quot; https://$API_KEY@api.dialmycalls.com/2.0/accessaccount/$ACCESSACCOUNT_ID &#x60;&#x60;&#x60;
     * @param {module:Models/UpdateAccessAccountByIdParameters} updateAccessAccountByIdParameters Request body
     * @param {String} accessAccountId AccessAccountId
     * @param {module:Api/Accounts~updateAccessAccountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateAccessAccountById = function(updateAccessAccountByIdParameters, accessAccountId, callback) {
      var postBody = updateAccessAccountByIdParameters;

      // verify the required parameter 'updateAccessAccountByIdParameters' is set
      if (updateAccessAccountByIdParameters == undefined || updateAccessAccountByIdParameters == null) {
        throw "Missing the required parameter 'updateAccessAccountByIdParameters' when calling updateAccessAccountById";
      }

      // verify the required parameter 'accessAccountId' is set
      if (accessAccountId == undefined || accessAccountId == null) {
        throw "Missing the required parameter 'accessAccountId' when calling updateAccessAccountById";
      }


      var pathParams = {
        'AccessAccountId': accessAccountId
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
        '/accessaccount/{AccessAccountId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
