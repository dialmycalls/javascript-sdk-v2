# DialmycallsJsClient.Accounts

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessAccount**](Accounts.md#createaccessaccount) | **POST** /accessaccount | Add Access Account
[**deleteAccessAccountById**](Accounts.md#deleteaccessaccountbyid) | **DELETE** /accessaccount/{AccessAccountId} | Delete Access Account
[**getAccessAccountById**](Accounts.md#getaccessaccountbyid) | **GET** /accessaccount/{AccessAccountId} | Get Access Account
[**getAccessAccounts**](Accounts.md#getaccessaccounts) | **GET** /accessaccounts | List Access Accounts
[**getAccount**](Accounts.md#getaccount) | **GET** /account | Get Account
[**updateAccessAccountById**](Accounts.md#updateaccessaccountbyid) | **PUT** /accessaccount/{AccessAccountId} | Update Access Account


<a name="createAccessAccount"></a>
# **createAccessAccount**
> Object createAccessAccount(createAccessAccountParameters)

Add Access Account

Add a access account. <br><br> Returns a access account object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"email\": \"test@test.com\", \"password\": \"1234A5678\", \"name\": \"John Doe\"}" https://$API_KEY@api.dialmycalls.com/2.0/accessaccount ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Accounts();

var createAccessAccountParameters = new DialmycallsJsClient.CreateAccessAccountParameters(); // CreateAccessAccountParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAccessAccount(createAccessAccountParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAccessAccountParameters** | [**CreateAccessAccountParameters**](CreateAccessAccountParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteAccessAccountById"></a>
# **deleteAccessAccountById**
> Object deleteAccessAccountById(accessAccountId)

Delete Access Account

Delete a access account. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/accessaccount/$ACCESSACCOUNT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Accounts();

var accessAccountId = "accessAccountId_example"; // String | AccessAccountId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAccessAccountById(accessAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessAccountId** | **String**| AccessAccountId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getAccessAccountById"></a>
# **getAccessAccountById**
> Object getAccessAccountById(accessAccountId)

Get Access Account

Retrieve an access account. <br><br> Returns a access account object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/accessaccount/$ACCESSACCOUNT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Accounts();

var accessAccountId = "accessAccountId_example"; // String | AccessAccountId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessAccountById(accessAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessAccountId** | **String**| AccessAccountId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getAccessAccounts"></a>
# **getAccessAccounts**
> Object getAccessAccounts(opts)

List Access Accounts

Retrieve a list of access accounts. <br><br> Returns a list of access account objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/accessaccounts ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Accounts();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of accessaccounts requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessAccounts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of accessaccounts requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getAccount"></a>
# **getAccount**
> Object getAccount()

Get Account

Retrieve account details. <br><br> Returns a account object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/account ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Accounts();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccount(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="updateAccessAccountById"></a>
# **updateAccessAccountById**
> Object updateAccessAccountById(updateAccessAccountByIdParameters, accessAccountId)

Update Access Account

Update an existing access account. <br><br> Returns a access account object if a valid identifier was provided and input validation passed, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X PUT -d "{\"name\": \"New Name\"}" https://$API_KEY@api.dialmycalls.com/2.0/accessaccount/$ACCESSACCOUNT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Accounts();

var updateAccessAccountByIdParameters = new DialmycallsJsClient.UpdateAccessAccountByIdParameters(); // UpdateAccessAccountByIdParameters | Request body

var accessAccountId = "accessAccountId_example"; // String | AccessAccountId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAccessAccountById(updateAccessAccountByIdParameters, accessAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAccessAccountByIdParameters** | [**UpdateAccessAccountByIdParameters**](UpdateAccessAccountByIdParameters.md)| Request body | 
 **accessAccountId** | **String**| AccessAccountId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

