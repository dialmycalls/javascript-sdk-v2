# DialmycallsJsClient.CallerIds

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCallerId**](CallerIds.md#createcallerid) | **POST** /callerid | Add Caller ID
[**createUnverifiedCallerId**](CallerIds.md#createunverifiedcallerid) | **POST** /verify/callerid | Add Caller ID (Unverified)
[**deleteCallerIdById**](CallerIds.md#deletecalleridbyid) | **DELETE** /callerid/{CalleridId} | Delete Caller ID
[**getCallerIdById**](CallerIds.md#getcalleridbyid) | **GET** /callerid/{CalleridId} | Get Caller ID
[**getCallerIds**](CallerIds.md#getcallerids) | **GET** /callerids | List Caller IDs
[**updateCallerIdById**](CallerIds.md#updatecalleridbyid) | **PUT** /callerid/{CalleridId} | Update Caller ID
[**verifyCallerIdById**](CallerIds.md#verifycalleridbyid) | **PUT** /verify/callerid/{CalleridId} | Verify Caller ID


<a name="createCallerId"></a>
# **createCallerId**
> Object createCallerId(createCallerIdParameters)

Add Caller ID

Add a caller ID. <br><br> Returns a caller ID object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"phone\": \"5555555555\", \"name\": \"New Number\"}" https://$API_KEY@api.dialmycalls.com/2.0/callerid ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.CallerIds();

var createCallerIdParameters = new DialmycallsJsClient.CreateCallerIdParameters(); // CreateCallerIdParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCallerId(createCallerIdParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCallerIdParameters** | [**CreateCallerIdParameters**](CreateCallerIdParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="createUnverifiedCallerId"></a>
# **createUnverifiedCallerId**
> Object createUnverifiedCallerId(createUnverifiedCallerIdParameters)

Add Caller ID (Unverified)

Initiate adding a new caller ID when you need to go through the verification process. You will receive a phone call at the phone number provided and will need to make a subsequent API call with the PIN code that you are provided. <br><br> Returns a caller ID object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"phone\": \"5555555555\", \"name\": \"New Number\"}" https://$API_KEY@api.dialmycalls.com/2.0/verify/callerid ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.CallerIds();

var createUnverifiedCallerIdParameters = new DialmycallsJsClient.CreateUnverifiedCallerIdParameters(); // CreateUnverifiedCallerIdParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUnverifiedCallerId(createUnverifiedCallerIdParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUnverifiedCallerIdParameters** | [**CreateUnverifiedCallerIdParameters**](CreateUnverifiedCallerIdParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteCallerIdById"></a>
# **deleteCallerIdById**
> Object deleteCallerIdById(calleridId)

Delete Caller ID

Delete a caller ID. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/callerid/$CALLERID_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.CallerIds();

var calleridId = "calleridId_example"; // String | CalleridId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCallerIdById(calleridId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calleridId** | **String**| CalleridId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getCallerIdById"></a>
# **getCallerIdById**
> Object getCallerIdById(calleridId)

Get Caller ID

Retrieve a caller ID. <br><br> Returns a caller ID object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/callerid/$CALLERID_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.CallerIds();

var calleridId = "calleridId_example"; // String | CalleridId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallerIdById(calleridId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calleridId** | **String**| CalleridId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getCallerIds"></a>
# **getCallerIds**
> Object getCallerIds(opts)

List Caller IDs

Retrieve a list of caller IDs. <br><br> Returns a list of caller ID objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/callerids ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.CallerIds();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of callerids requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallerIds(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of callerids requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="updateCallerIdById"></a>
# **updateCallerIdById**
> Object updateCallerIdById(updateCallerIdByIdParameters, calleridId)

Update Caller ID

Update an existing caller ID. <br><br> Returns a caller ID object if a valid identifier was provided and input validation passed, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X PUT -d "{\"name\": \"New Number Updated\"}" https://$API_KEY@api.dialmycalls.com/2.0/callerid/$CALLERID_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.CallerIds();

var updateCallerIdByIdParameters = new DialmycallsJsClient.UpdateCallerIdByIdParameters(); // UpdateCallerIdByIdParameters | Request body

var calleridId = "calleridId_example"; // String | CalleridId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCallerIdById(updateCallerIdByIdParameters, calleridId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallerIdByIdParameters** | [**UpdateCallerIdByIdParameters**](UpdateCallerIdByIdParameters.md)| Request body | 
 **calleridId** | **String**| CalleridId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="verifyCallerIdById"></a>
# **verifyCallerIdById**
> Object verifyCallerIdById(verifyCallerIdByIdParameters, calleridId)

Verify Caller ID

Verify a new caller ID. <br><br> Returns a caller ID object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"phone\": \"5555555555\", \"name\": \"New Number\"}" https://$API_KEY@api.dialmycalls.com/2.0/verify/callerid/$CALLERID_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.CallerIds();

var verifyCallerIdByIdParameters = new DialmycallsJsClient.VerifyCallerIdByIdParameters(); // VerifyCallerIdByIdParameters | Request body

var calleridId = "calleridId_example"; // String | CalleridId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyCallerIdById(verifyCallerIdByIdParameters, calleridId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyCallerIdByIdParameters** | [**VerifyCallerIdByIdParameters**](VerifyCallerIdByIdParameters.md)| Request body | 
 **calleridId** | **String**| CalleridId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

