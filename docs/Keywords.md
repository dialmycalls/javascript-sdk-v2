# DialmycallsJsClient.Keywords

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteKeywordByID**](Keywords.md#deletekeywordbyid) | **DELETE** /keyword/{KeywordId} | Delete Keyword
[**getKeywordByID**](Keywords.md#getkeywordbyid) | **GET** /keyword/{KeywordId} | Get Keyword
[**getKeywords**](Keywords.md#getkeywords) | **GET** /keywords | List Keywords


<a name="deleteKeywordByID"></a>
# **deleteKeywordByID**
> Object deleteKeywordByID(keywordId)

Delete Keyword

Delete a keyword. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/keyword/$KEYWORD_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Keywords();

var keywordId = "keywordId_example"; // String | KeywordId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteKeywordByID(keywordId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keywordId** | **String**| KeywordId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getKeywordByID"></a>
# **getKeywordByID**
> Object getKeywordByID(keywordId)

Get Keyword

Retrieve a keyword. <br><br> Returns a keyword object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/keyword/$KEYWORD_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Keywords();

var keywordId = "keywordId_example"; // String | KeywordId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKeywordByID(keywordId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keywordId** | **String**| KeywordId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getKeywords"></a>
# **getKeywords**
> Object getKeywords(opts)

List Keywords

Retrieve a list of keywords. <br><br> Returns a list of keyword objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/keywords ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Keywords();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of keywords requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKeywords(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of keywords requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

