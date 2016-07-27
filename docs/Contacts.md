# DialmycallsJsClient.Contacts

All URIs are relative to *https://api.dialmycalls.com/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](Contacts.md#createcontact) | **POST** /contact | Add Contact
[**deleteContactById**](Contacts.md#deletecontactbyid) | **DELETE** /contact/{ContactId} | Delete Contact
[**getContactById**](Contacts.md#getcontactbyid) | **GET** /contact/{ContactId} | Get Contact
[**getContacts**](Contacts.md#getcontacts) | **GET** /contacts | List Contacts
[**getContactsByGroupId**](Contacts.md#getcontactsbygroupid) | **GET** /contacts/{GroupId} | List Contacts in Group
[**updateContactById**](Contacts.md#updatecontactbyid) | **PUT** /contact/{ContactId} | Update Contact


<a name="createContact"></a>
# **createContact**
> Object createContact(createContactParameters)

Add Contact

Add a contact to your contact list. <br><br> Returns a contact object on success, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X POST -d "{\"phone\": \"5555555555\"}" https://$API_KEY@api.dialmycalls.com/2.0/contact ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Contacts();

var createContactParameters = new DialmycallsJsClient.CreateContactParameters(); // CreateContactParameters | Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContact(createContactParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactParameters** | [**CreateContactParameters**](CreateContactParameters.md)| Request body | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteContactById"></a>
# **deleteContactById**
> Object deleteContactById(contactId)

Delete Contact

Delete a contact from your contact list. <br><br> Returns the following if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X DELETE https://$API_KEY@api.dialmycalls.com/2.0/contact/$CONTACT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Contacts();

var contactId = "contactId_example"; // String | ContactId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteContactById(contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ContactId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getContactById"></a>
# **getContactById**
> Object getContactById(contactId)

Get Contact

Retrieve a contact to your contact list. <br><br> Returns a contact object if a valid identifier was provided, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/contact/$CONTACT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Contacts();

var contactId = "contactId_example"; // String | ContactId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactById(contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ContactId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getContacts"></a>
# **getContacts**
> Object getContacts(opts)

List Contacts

Retrieve a list of contacts. <br><br> Returns a list of contact objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/contacts ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Contacts();

var opts = { 
  'range': "range_example" // String | Range (ie \"records=201-300\") of contacts requested
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContacts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **String**| Range (ie \&quot;records&#x3D;201-300\&quot;) of contacts requested | [optional] 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getContactsByGroupId"></a>
# **getContactsByGroupId**
> Object getContactsByGroupId(groupId)

List Contacts in Group

Retrieve a list of contacts in a contact group. <br><br> Returns a list of contact objects. <br><br> ``` curl -i -H "Content-Type: application/json" -X GET https://$API_KEY@api.dialmycalls.com/2.0/contacts/$GROUP_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Contacts();

var groupId = "groupId_example"; // String | GroupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactsByGroupId(groupId, callback);
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

<a name="updateContactById"></a>
# **updateContactById**
> Object updateContactById(updateContactByIdParameters, contactId)

Update Contact

Update an existing contact in your contact list. <br><br> Returns a contact object if a valid identifier was provided and input validation passed, and returns an error otherwise. <br><br> ``` curl -i -H "Content-Type: application/json" -X PUT -d "{\"phone\": \"5555555555\"}" https://$API_KEY@api.dialmycalls.com/2.0/contact/$CONTACT_ID ```

### Example
```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');
var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

var apiInstance = new DialmycallsJsClient.Contacts();

var updateContactByIdParameters = new DialmycallsJsClient.UpdateContactByIdParameters(); // UpdateContactByIdParameters | Request body

var contactId = "contactId_example"; // String | ContactId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateContactById(updateContactByIdParameters, contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactByIdParameters** | [**UpdateContactByIdParameters**](UpdateContactByIdParameters.md)| Request body | 
 **contactId** | **String**| ContactId | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

