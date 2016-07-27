# DialmycallsJsClient.Recordings

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecording**](Recordings.md#createrecording) | **POST** /recording/tts | Create Recording (Text-to-Speech)
[**createRecordingByPhone**](Recordings.md#createrecordingbyphone) | **POST** /recording/phone | Create Recording (Phone)
[**createRecordingByUrl**](Recordings.md#createrecordingbyurl) | **POST** /recording/url | Create Recording (URL)
[**deleteRecordingById**](Recordings.md#deleterecordingbyid) | **DELETE** /recording/{RecordingId} | Delete Recording
[**getRecordingById**](Recordings.md#getrecordingbyid) | **GET** /recording/{RecordingId} | Get Recording
[**getRecordings**](Recordings.md#getrecordings) | **GET** /recordings | List Recordings
[**updateRecordingById**](Recordings.md#updaterecordingbyid) | **PUT** /recording/{RecordingId} | Update Recording


<a name="createRecording"></a>
# **createRecording**
> Object createRecording(createRecordingParameters)

Create Recording (Text-to-Speech)

Create a new recording using text-to-speech. <br><br> Returns a recording object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"name\": \"Test Recording\", \"gender\": \"M\", \"language\": \"en\", \"text\": \"This is just a test.\"}" https://$API_KEY@api.dialmycalls.com/2.0/recording/tts ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Recordings();

var createRecordingParameters = new DialmycallsJsClient.CreateRecordingParameters(); // CreateRecordingParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecording(createRecordingParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRecordingParameters** | [**CreateRecordingParameters**](CreateRecordingParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="createRecordingByPhone"></a>
# **createRecordingByPhone**
> Object createRecordingByPhone(createRecordingByPhoneParameters)

Create Recording (Phone)

Create a new recording by phone. <br><br> Returns a recording object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"name\": \"Test Recording\", \"phone\": \"5551234567\", \"callerid_id\": \"$CALLERID_ID\"}" https://$API_KEY@api.dialmycalls.com/2.0/recording/phone ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Recordings();

var createRecordingByPhoneParameters = new DialmycallsJsClient.CreateRecordingByPhoneParameters(); // CreateRecordingByPhoneParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecordingByPhone(createRecordingByPhoneParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRecordingByPhoneParameters** | [**CreateRecordingByPhoneParameters**](CreateRecordingByPhoneParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="createRecordingByUrl"></a>
# **createRecordingByUrl**
> Object createRecordingByUrl(createRecordingByUrlParameters)

Create Recording (URL)

Create a new recording from a URL. <br><br> Returns a recording object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"name\": \"Test Recording\", \"url\": \"https://ia700200.us.archive.org/1/items/testmp3testfile/mpthreetest.mp3\"}" https://$API_KEY@api.dialmycalls.com/2.0/recording/url ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Recordings();

var createRecordingByUrlParameters = new DialmycallsJsClient.CreateRecordingByUrlParameters(); // CreateRecordingByUrlParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecordingByUrl(createRecordingByUrlParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRecordingByUrlParameters** | [**CreateRecordingByUrlParameters**](CreateRecordingByUrlParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteRecordingById"></a>
# **deleteRecordingById**
> Object deleteRecordingById(recordingId)

Delete Recording

Delete a recording. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/recording/$RECORDING_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Recordings();

var recordingId = "recordingId_example"; // String | RecordingId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRecordingById(recordingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordingId** | **String**| RecordingId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getRecordingById"></a>
# **getRecordingById**
> Object getRecordingById(recordingId)

Get Recording

Retrieve a recording. <br><br> Returns a recording object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/recording/$RECORDING_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Recordings();

var recordingId = "recordingId_example"; // String | RecordingId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecordingById(recordingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordingId** | **String**| RecordingId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getRecordings"></a>
# **getRecordings**
> Object getRecordings(opts)

List Recordings

Retrieve a list of recordings. <br><br> Returns a list of recording objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/recordings ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Recordings();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of recordings requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecordings(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of recordings requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="updateRecordingById"></a>
# **updateRecordingById**
> Object updateRecordingById(updateRecordingByIdParameters, recordingId)

Update Recording

Update an existing recording. <br><br> Returns a recording object if a valid identifier was provided and input validation passed, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X PUT -d "{\"name\": \"Test Recording Updated\"}" https://$API_KEY@api.dialmycalls.com/2.0/recording/$RECORDING_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Recordings();

var updateRecordingByIdParameters = new DialmycallsJsClient.UpdateRecordingByIdParameters(); // UpdateRecordingByIdParameters | Request body

var recordingId = "recordingId_example"; // String | RecordingId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRecordingById(updateRecordingByIdParameters, recordingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRecordingByIdParameters** | [**UpdateRecordingByIdParameters**](UpdateRecordingByIdParameters.md)| Request body | 
 **recordingId** | **String**| RecordingId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

