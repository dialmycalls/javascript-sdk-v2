/**
 * DialMyCalls API
 * The DialMyCalls API
 *
 * OpenAPI spec version: 2.0.0
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DialmycallsJsClient);
  }
}(this, function(expect, DialmycallsJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DialmycallsJsClient.Contacts();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Contacts', function() {
    describe('createContact', function() {
      it('should call createContact successfully', function(done) {
        //uncomment below and update the code to test createContact
        //instance.createContact(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContactById', function() {
      it('should call deleteContactById successfully', function(done) {
        //uncomment below and update the code to test deleteContactById
        //instance.deleteContactById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContactById', function() {
      it('should call getContactById successfully', function(done) {
        //uncomment below and update the code to test getContactById
        //instance.getContactById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContacts', function() {
      it('should call getContacts successfully', function(done) {
        //uncomment below and update the code to test getContacts
        //instance.getContacts(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContactsByGroupId', function() {
      it('should call getContactsByGroupId successfully', function(done) {
        //uncomment below and update the code to test getContactsByGroupId
        //instance.getContactsByGroupId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateContactById', function() {
      it('should call updateContactById successfully', function(done) {
        //uncomment below and update the code to test updateContactById
        //instance.updateContactById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));