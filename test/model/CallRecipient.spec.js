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
    instance = new DialmycallsJsClient.CallRecipient();
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

  describe('CallRecipient', function() {
    it('should create an instance of CallRecipient', function() {
      // uncomment below and update the code to test CallRecipient
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be.a(DialmycallsJsClient.CallRecipient);
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property miscellaneous (base name: "miscellaneous")', function() {
      // uncomment below and update the code to test the property miscellaneous
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property extension (base name: "extension")', function() {
      // uncomment below and update the code to test the property extension
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property addOn (base name: "add_on")', function() {
      // uncomment below and update the code to test the property addOn
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property attempts (base name: "attempts")', function() {
      // uncomment below and update the code to test the property attempts
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property successful (base name: "successful")', function() {
      // uncomment below and update the code to test the property successful
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

    it('should have the property calledAt (base name: "called_at")', function() {
      // uncomment below and update the code to test the property calledAt
      //var instane = new DialmycallsJsClient.CallRecipient();
      //expect(instance).to.be();
    });

  });

}));
