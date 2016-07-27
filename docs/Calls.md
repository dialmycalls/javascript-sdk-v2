# DialmycallsJsClient.Calls

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelCallById**](Calls.md#cancelcallbyid) | **DELETE** /service/call/{CallId} | Cancel Call
[**createCall**](Calls.md#createcall) | **POST** /service/call | Create Call
[**getCallById**](Calls.md#getcallbyid) | **GET** /service/call/{CallId} | Get Call
[**getCallRecipientsByCallId**](Calls.md#getcallrecipientsbycallid) | **GET** /service/call/{CallId}/recipients | Get Call Recipients
[**getCalls**](Calls.md#getcalls) | **GET** /service/calls | List Calls


<a name="cancelCallById"></a>
# **cancelCallById**
> Object cancelCallById(callId)

Cancel Call

Cancel an outgoing call. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/service/call/$CALL_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Calls();

var callId = "callId_example"; // String | CallId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelCallById(callId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callId** | **String**| CallId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="createCall"></a>
# **createCall**
> Object createCall(createCallParameters)

Create Call

Create an outgoing call broadcast. <br><br> Returns a call service object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"name\": \"Test\", \"callerid_id\": \"8bc6748e-d8a0-11e4-8b2d-00163e603cea\", \"recording_id\": \"079ff28a-1b75-11e5-88eb-00163e603cea\", \"send_immediately\": true, \"use_amd\": true, \"contacts\": [{\"phone\":\"1116551235\"},{\"phone\":\"1116551234\"}]}" https://$API_KEY@api.dialmycalls.com/2.0/service/call ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Calls();

var createCallParameters = new DialmycallsJsClient.CreateCallParameters(); // CreateCallParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCall(createCallParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCallParameters** | [**CreateCallParameters**](CreateCallParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getCallById"></a>
# **getCallById**
> Object getCallById(callId)

Get Call

Retrieve a call. <br><br> Returns a call service object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/service/call/$CALL_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Calls();

var callId = "callId_example"; // String | CallId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallById(callId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callId** | **String**| CallId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getCallRecipientsByCallId"></a>
# **getCallRecipientsByCallId**
> Object getCallRecipientsByCallId(callId, opts)

Get Call Recipients

Retrieve a list of a call's recipients. <br><br> Returns a list of call recipient objects if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/service/call/$CALL_ID/recipients ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Calls();

var callId = "callId_example"; // String | CallId

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of recipients requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallRecipientsByCallId(callId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callId** | **String**| CallId | 
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of recipients requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getCalls"></a>
# **getCalls**
> Object getCalls(opts)

List Calls

Retrieve a list of calls. <br><br> Returns a list of call service objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/service/calls ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Calls();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of calls requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCalls(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of calls requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

