# DialmycallsJsClient.Texts

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTextById**](Texts.md#canceltextbyid) | **DELETE** /service/text/{TextId} | Cancel Text
[**createText**](Texts.md#createtext) | **POST** /service/text | Create Text
[**deleteIncomingTextById**](Texts.md#deleteincomingtextbyid) | **DELETE** /incoming/text/{TextId} | Delete Incoming Text
[**getIncomingTextById**](Texts.md#getincomingtextbyid) | **GET** /incoming/text/{TextId} | Get Incoming Text
[**getIncomingTexts**](Texts.md#getincomingtexts) | **GET** /incoming/texts | List Incoming Texts
[**getShortCodes**](Texts.md#getshortcodes) | **GET** /shortcodes | List Shortcodes
[**getTextById**](Texts.md#gettextbyid) | **GET** /service/text/{TextId} | Get Text
[**getTextRecipientsByTextId**](Texts.md#gettextrecipientsbytextid) | **GET** /service/text/{TextId}/recipients | Get Text Recipients
[**getTexts**](Texts.md#gettexts) | **GET** /service/texts | List Texts


<a name="cancelTextById"></a>
# **cancelTextById**
> Object cancelTextById(textId)

Cancel Text

Cancel an outgoing text. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/service/text/$TEXT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var textId = "textId_example"; // String | TextId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelTextById(textId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textId** | **String**| TextId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="createText"></a>
# **createText**
> Object createText(createTextParameters)

Create Text

Create an outgoing text broadcast. <br><br> Returns a service object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"keyword_id\": \"dfe49537-a0a8-4f4a-98a1-e03df388af11\", \"send_immediately\": true,\"messages\": [\"Testing testing\"], \"contacts\": [{\"phone\":\"1116551235\"},{\"phone\":\"1116551234\"}]}" https://$API_KEY@api.dialmycalls.com/2.0/service/text ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var createTextParameters = new DialmycallsJsClient.CreateTextParameters(); // CreateTextParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createText(createTextParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTextParameters** | [**CreateTextParameters**](CreateTextParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteIncomingTextById"></a>
# **deleteIncomingTextById**
> Object deleteIncomingTextById(textId)

Delete Incoming Text

Delete a incoming text. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/incoming/text/$TEXT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var textId = "textId_example"; // String | TextId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteIncomingTextById(textId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textId** | **String**| TextId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getIncomingTextById"></a>
# **getIncomingTextById**
> Object getIncomingTextById(textId)

Get Incoming Text

Retrieve a text. <br><br> Returns a Incoming Text object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/incoming/text/$TEXT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var textId = "textId_example"; // String | TextId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIncomingTextById(textId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textId** | **String**| TextId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getIncomingTexts"></a>
# **getIncomingTexts**
> Object getIncomingTexts(opts)

List Incoming Texts

Retrieve a list of texts. <br><br> Returns a list of Incoming Text objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/incoming/texts ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of texts requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIncomingTexts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of texts requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getShortCodes"></a>
# **getShortCodes**
> Object getShortCodes(opts)

List Shortcodes

Retrieve a list of shortcodes. <br><br> Returns a list of shortcode objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/shortcodes ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of shortcodes requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShortCodes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of shortcodes requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getTextById"></a>
# **getTextById**
> Object getTextById(textId)

Get Text

Retrieve a text. <br><br> Returns a service object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/service/text/$TEXT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var textId = "textId_example"; // String | TextId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTextById(textId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textId** | **String**| TextId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getTextRecipientsByTextId"></a>
# **getTextRecipientsByTextId**
> Object getTextRecipientsByTextId(textId, opts)

Get Text Recipients

Retrieve a list of a text's recipients. <br><br> Returns a list of text recipient objects if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/service/text/$TEXT_ID/recipients ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var textId = "textId_example"; // String | TextId

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
apiInstance.getTextRecipientsByTextId(textId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textId** | **String**| TextId | 
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of recipients requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getTexts"></a>
# **getTexts**
> Object getTexts(opts)

List Texts

Retrieve a list of texts. <br><br> Returns a list of service objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/service/texts ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Texts();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of texts requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTexts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of texts requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

