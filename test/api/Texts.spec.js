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
    instance = new DialmycallsJsClient.Texts();
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

  describe('Texts', function() {
    describe('cancelTextById', function() {
      it('should call cancelTextById successfully', function(done) {
        //uncomment below and update the code to test cancelTextById
        //instance.cancelTextById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createText', function() {
      it('should call createText successfully', function(done) {
        //uncomment below and update the code to test createText
        //instance.createText(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIncomingTextById', function() {
      it('should call deleteIncomingTextById successfully', function(done) {
        //uncomment below and update the code to test deleteIncomingTextById
        //instance.deleteIncomingTextById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIncomingTextById', function() {
      it('should call getIncomingTextById successfully', function(done) {
        //uncomment below and update the code to test getIncomingTextById
        //instance.getIncomingTextById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIncomingTexts', function() {
      it('should call getIncomingTexts successfully', function(done) {
        //uncomment below and update the code to test getIncomingTexts
        //instance.getIncomingTexts(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShortCodes', function() {
      it('should call getShortCodes successfully', function(done) {
        //uncomment below and update the code to test getShortCodes
        //instance.getShortCodes(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTextById', function() {
      it('should call getTextById successfully', function(done) {
        //uncomment below and update the code to test getTextById
        //instance.getTextById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTextRecipientsByTextId', function() {
      it('should call getTextRecipientsByTextId successfully', function(done) {
        //uncomment below and update the code to test getTextRecipientsByTextId
        //instance.getTextRecipientsByTextId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTexts', function() {
      it('should call getTexts successfully', function(done) {
        //uncomment below and update the code to test getTexts
        //instance.getTexts(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
