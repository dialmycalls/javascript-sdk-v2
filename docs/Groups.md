# DialmycallsJsClient.Groups

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](Groups.md#creategroup) | **POST** /group | Add Group
[**deleteGroupById**](Groups.md#deletegroupbyid) | **DELETE** /group/{GroupId} | Delete Group
[**getGroupById**](Groups.md#getgroupbyid) | **GET** /group/{GroupId} | Get Group
[**getGroups**](Groups.md#getgroups) | **GET** /groups | List Groups
[**updateGroupById**](Groups.md#updategroupbyid) | **PUT** /group/{GroupId} | Update Group


<a name="createGroup"></a>
# **createGroup**
> Object createGroup(createGroupParameters)

Add Group

Add a contact group. <br><br> Returns a group object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"name\": \"Test Group\"}" https://$API_KEY@api.dialmycalls.com/2.0/group ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Groups();

var createGroupParameters = new DialmycallsJsClient.CreateGroupParameters(); // CreateGroupParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGroup(createGroupParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroupParameters** | [**CreateGroupParameters**](CreateGroupParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteGroupById"></a>
# **deleteGroupById**
> Object deleteGroupById(groupId)

Delete Group

Delete a contact group. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/group/$GROUP_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Groups();

var groupId = "groupId_example"; // String | GroupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteGroupById(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| GroupId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getGroupById"></a>
# **getGroupById**
> Object getGroupById(groupId)

Get Group

Retrieve a contact group. <br><br> Returns a group object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/group/$GROUP_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Groups();

var groupId = "groupId_example"; // String | GroupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupById(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| GroupId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getGroups"></a>
# **getGroups**
> Object getGroups(opts)

List Groups

Retrieve a list of contact groups. <br><br> Returns a list of group objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/groups ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Groups();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of groups requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of groups requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="updateGroupById"></a>
# **updateGroupById**
> Object updateGroupById(updateGroupByIdParameters, groupId)

Update Group

Update an existing contact group. <br><br> Returns a group object if a valid identifier was provided and input validation passed, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X PUT -d "{\"name\": \"Test Group Updated\"}" https://$API_KEY@api.dialmycalls.com/2.0/group/$GROUP_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Groups();

var updateGroupByIdParameters = new DialmycallsJsClient.UpdateGroupByIdParameters(); // UpdateGroupByIdParameters | Request body

var groupId = "groupId_example"; // String | GroupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGroupById(updateGroupByIdParameters, groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGroupByIdParameters** | [**UpdateGroupByIdParameters**](UpdateGroupByIdParameters.md)| Request body | 
 **groupId** | **String**| GroupId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

