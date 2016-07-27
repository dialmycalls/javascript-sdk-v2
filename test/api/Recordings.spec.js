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
    instance = new DialmycallsJsClient.Recordings();
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

  describe('Recordings', function() {
    describe('createRecording', function() {
      it('should call createRecording successfully', function(done) {
        //uncomment below and update the code to test createRecording
        //instance.createRecording(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRecordingByPhone', function() {
      it('should call createRecordingByPhone successfully', function(done) {
        //uncomment below and update the code to test createRecordingByPhone
        //instance.createRecordingByPhone(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRecordingByUrl', function() {
      it('should call createRecordingByUrl successfully', function(done) {
        //uncomment below and update the code to test createRecordingByUrl
        //instance.createRecordingByUrl(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRecordingById', function() {
      it('should call deleteRecordingById successfully', function(done) {
        //uncomment below and update the code to test deleteRecordingById
        //instance.deleteRecordingById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordingById', function() {
      it('should call getRecordingById successfully', function(done) {
        //uncomment below and update the code to test getRecordingById
        //instance.getRecordingById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordings', function() {
      it('should call getRecordings successfully', function(done) {
        //uncomment below and update the code to test getRecordings
        //instance.getRecordings(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRecordingById', function() {
      it('should call updateRecordingById successfully', function(done) {
        //uncomment below and update the code to test updateRecordingById
        //instance.updateRecordingById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));