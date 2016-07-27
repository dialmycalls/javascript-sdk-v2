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
    define(['ApiClient', 'Models/CreateContactParameters', 'Models/UpdateContactByIdParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Models/CreateContactParameters'), require('../Models/UpdateContactByIdParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.DialmycallsJsClient) {
      root.DialmycallsJsClient = {};
    }
    root.DialmycallsJsClient.Contacts = factory(root.DialmycallsJsClient.ApiClient, root.DialmycallsJsClient.CreateContactParameters, root.DialmycallsJsClient.UpdateContactByIdParameters);
  }
}(this, function(ApiClient, CreateContactParameters, UpdateContactByIdParameters) {
  'use strict';

  /**
   * Contacts service.
   * @module Api/Contacts
   * @version 2.0.1
   */

  /**
   * Constructs a new Contacts. 
   * @alias module:Api/Contacts
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createContact operation.
     * @callback module:Api/Contacts~createContactCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Contact
     * Add a contact to your contact list. &lt;br&gt;&lt;br&gt; Returns a contact object on success, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X POST -d \&quot;{\\\&quot;phone\\\&quot;: \\\&quot;5555555555\\\&quot;}\&quot; https://$API_KEY@api.dialmycalls.com/2.0/contact &#x60;&#x60;&#x60;
     * @param {module:Models/CreateContactParameters} createContactParameters Request body
     * @param {module:Api/Contacts~createContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createContact = function(createContactParameters, callback) {
      var postBody = createContactParameters;

      // verify the required parameter 'createContactParameters' is set
      if (createContactParameters == undefined || createContactParameters == null) {
        throw "Missing the required parameter 'createContactParameters' when calling createContact";
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
        '/contact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContactById operation.
     * @callback module:Api/Contacts~deleteContactByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Contact
     * Delete a contact from your contact list. &lt;br&gt;&lt;br&gt; Returns the following if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/contact/$CONTACT_ID &#x60;&#x60;&#x60;
     * @param {String} contactId ContactId
     * @param {module:Api/Contacts~deleteContactByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteContactById = function(contactId, callback) {
      var postBody = null;

      // verify the required parameter 'contactId' is set
      if (contactId == undefined || contactId == null) {
        throw "Missing the required parameter 'contactId' when calling deleteContactById";
      }


      var pathParams = {
        'ContactId': contactId
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
        '/contact/{ContactId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContactById operation.
     * @callback module:Api/Contacts~getContactByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Contact
     * Retrieve a contact to your contact list. &lt;br&gt;&lt;br&gt; Returns a contact object if a valid identifier was provided, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/contact/$CONTACT_ID &#x60;&#x60;&#x60;
     * @param {String} contactId ContactId
     * @param {module:Api/Contacts~getContactByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getContactById = function(contactId, callback) {
      var postBody = null;

      // verify the required parameter 'contactId' is set
      if (contactId == undefined || contactId == null) {
        throw "Missing the required parameter 'contactId' when calling getContactById";
      }


      var pathParams = {
        'ContactId': contactId
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
        '/contact/{ContactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContacts operation.
     * @callback module:Api/Contacts~getContactsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Contacts
     * Retrieve a list of contacts. &lt;br&gt;&lt;br&gt; Returns a list of contact objects. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/contacts &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.range Range (ie \&quot;records&#x3D;201-300\&quot;) of contacts requested
     * @param {module:Api/Contacts~getContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getContacts = function(opts, callback) {
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
        '/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContactsByGroupId operation.
     * @callback module:Api/Contacts~getContactsByGroupIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Contacts in Group
     * Retrieve a list of contacts in a contact group. &lt;br&gt;&lt;br&gt; Returns a list of contact objects. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X GET https://$API_KEY@api.dialmycalls.com/2.0/contacts/$GROUP_ID &#x60;&#x60;&#x60;
     * @param {String} groupId GroupId
     * @param {module:Api/Contacts~getContactsByGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getContactsByGroupId = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getContactsByGroupId";
      }


      var pathParams = {
        'GroupId': groupId
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
        '/contacts/{GroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContactById operation.
     * @callback module:Api/Contacts~updateContactByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Contact
     * Update an existing contact in your contact list. &lt;br&gt;&lt;br&gt; Returns a contact object if a valid identifier was provided and input validation passed, and returns an error otherwise. &lt;br&gt;&lt;br&gt; &#x60;&#x60;&#x60; curl -i -H \&quot;Content-Type: application/json\&quot; -X PUT -d \&quot;{\\\&quot;phone\\\&quot;: \\\&quot;5555555555\\\&quot;}\&quot; https://$API_KEY@api.dialmycalls.com/2.0/contact/$CONTACT_ID &#x60;&#x60;&#x60;
     * @param {module:Models/UpdateContactByIdParameters} updateContactByIdParameters Request body
     * @param {String} contactId ContactId
     * @param {module:Api/Contacts~updateContactByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateContactById = function(updateContactByIdParameters, contactId, callback) {
      var postBody = updateContactByIdParameters;

      // verify the required parameter 'updateContactByIdParameters' is set
      if (updateContactByIdParameters == undefined || updateContactByIdParameters == null) {
        throw "Missing the required parameter 'updateContactByIdParameters' when calling updateContactById";
      }

      // verify the required parameter 'contactId' is set
      if (contactId == undefined || contactId == null) {
        throw "Missing the required parameter 'contactId' when calling updateContactById";
      }


      var pathParams = {
        'ContactId': contactId
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
        '/contact/{ContactId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
