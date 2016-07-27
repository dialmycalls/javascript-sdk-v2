# DialmycallsJsClient.DoNotContacts

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDoNotContacts**](DoNotContacts.md#getdonotcontacts) | **GET** /donotcontacts | List DoNotContacts


<a name="getDoNotContacts"></a>
# **getDoNotContacts**
> Object getDoNotContacts(opts)

List DoNotContacts

Retrieve a list of donotcontacts. <br><br> Returns a list of donotcontact objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/donotcontacts ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.DoNotContacts();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of donotcontacts requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDoNotContacts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of donotcontacts requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

