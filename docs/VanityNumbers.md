# DialmycallsJsClient.VanityNumbers

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteVanityNumberById**](VanityNumbers.md#deletevanitynumberbyid) | **DELETE** /vanitynumber/{VanityNumberId} | Delete Vanity Number
[**getVanityNumberById**](VanityNumbers.md#getvanitynumberbyid) | **GET** /vanitynumber/{VanityNumberId} | Get Vanity Number
[**getVanityNumbers**](VanityNumbers.md#getvanitynumbers) | **GET** /vanitynumbers | List Vanity Numbers
[**updateVanityNumberById**](VanityNumbers.md#updatevanitynumberbyid) | **PUT** /vanitynumber/{VanityNumberId} | Update Vanity Number


<a name="deleteVanityNumberById"></a>
# **deleteVanityNumberById**
> Object deleteVanityNumberById(vanityNumberId)

Delete Vanity Number

Delete a vanity number. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/keyword/$VANITYNUMBER_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.VanityNumbers();

var vanityNumberId = "vanityNumberId_example"; // String | VanityNumberId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteVanityNumberById(vanityNumberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vanityNumberId** | **String**| VanityNumberId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getVanityNumberById"></a>
# **getVanityNumberById**
> Object getVanityNumberById(vanityNumberId)

Get Vanity Number

Retrieve a vanity number. <br><br> Returns a vanitynumber object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/vanitynumber/$VANITYNUMBER_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.VanityNumbers();

var vanityNumberId = "vanityNumberId_example"; // String | VanityNumberId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVanityNumberById(vanityNumberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vanityNumberId** | **String**| VanityNumberId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getVanityNumbers"></a>
# **getVanityNumbers**
> Object getVanityNumbers(opts)

List Vanity Numbers

Retrieve a list of vanity numbers. <br><br> Returns a list of vanitynumber objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/vanitynumbers ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.VanityNumbers();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of vanitynumbers requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVanityNumbers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of vanitynumbers requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="updateVanityNumberById"></a>
# **updateVanityNumberById**
> Object updateVanityNumberById(updateVanityNumberByIdParameters, vanityNumberId)

Update Vanity Number

Update a vanity number. <br><br> Returns a vanitynumber object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X PUT -d "{\"ptt_number_id\":\"aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeee\",\"call_options\":{\"voicemail\":true}}" https://$API_KEY@api.dialmycalls.com/2.0/vanitynumber/$VANITYNUMBER_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.VanityNumbers();

var updateVanityNumberByIdParameters = new DialmycallsJsClient.UpdateVanityNumberByIdParameters(); // UpdateVanityNumberByIdParameters | Request body

var vanityNumberId = "vanityNumberId_example"; // String | VanityNumberId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVanityNumberById(updateVanityNumberByIdParameters, vanityNumberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateVanityNumberByIdParameters** | [**UpdateVanityNumberByIdParameters**](UpdateVanityNumberByIdParameters.md)| Request body | 
 **vanityNumberId** | **String**| VanityNumberId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

