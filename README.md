# dialmycalls-js-client

DialmycallsJsClient - JavaScript client for dialmycalls-js-client
The DialMyCalls API

For more information, please visit [https://www.dialmycalls.com](https://www.dialmycalls.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install dialmycalls-js-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/dialmycalls/javascript-sdk-v2
then install it via:

```shell
    npm install dialmycalls/javascript-sdk-v2 --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DialmycallsJsClient = require('dialmycalls-js-client');

var defaultClient = DialmycallsJsClient.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"

var api = new DialmycallsJsClient.Accounts()

var createAccessAccountParameters = new DialmycallsJsClient.CreateAccessAccountParameters(); // {CreateAccessAccountParameters} Request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAccessAccount(createAccessAccountParameters, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.dialmycalls.com/2.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DialmycallsJsClient.Accounts* | [**createAccessAccount**](docs/Accounts.md#createAccessAccount) | **POST** /accessaccount | Add Access Account
*DialmycallsJsClient.Accounts* | [**deleteAccessAccountById**](docs/Accounts.md#deleteAccessAccountById) | **DELETE** /accessaccount/{AccessAccountId} | Delete Access Account
*DialmycallsJsClient.Accounts* | [**getAccessAccountById**](docs/Accounts.md#getAccessAccountById) | **GET** /accessaccount/{AccessAccountId} | Get Access Account
*DialmycallsJsClient.Accounts* | [**getAccessAccounts**](docs/Accounts.md#getAccessAccounts) | **GET** /accessaccounts | List Access Accounts
*DialmycallsJsClient.Accounts* | [**getAccount**](docs/Accounts.md#getAccount) | **GET** /account | Get Account
*DialmycallsJsClient.Accounts* | [**updateAccessAccountById**](docs/Accounts.md#updateAccessAccountById) | **PUT** /accessaccount/{AccessAccountId} | Update Access Account
*DialmycallsJsClient.CallerIds* | [**createCallerId**](docs/CallerIds.md#createCallerId) | **POST** /callerid | Add Caller ID
*DialmycallsJsClient.CallerIds* | [**createUnverifiedCallerId**](docs/CallerIds.md#createUnverifiedCallerId) | **POST** /verify/callerid | Add Caller ID (Unverified)
*DialmycallsJsClient.CallerIds* | [**deleteCallerIdById**](docs/CallerIds.md#deleteCallerIdById) | **DELETE** /callerid/{CalleridId} | Delete Caller ID
*DialmycallsJsClient.CallerIds* | [**getCallerIdById**](docs/CallerIds.md#getCallerIdById) | **GET** /callerid/{CalleridId} | Get Caller ID
*DialmycallsJsClient.CallerIds* | [**getCallerIds**](docs/CallerIds.md#getCallerIds) | **GET** /callerids | List Caller IDs
*DialmycallsJsClient.CallerIds* | [**updateCallerIdById**](docs/CallerIds.md#updateCallerIdById) | **PUT** /callerid/{CalleridId} | Update Caller ID
*DialmycallsJsClient.CallerIds* | [**verifyCallerIdById**](docs/CallerIds.md#verifyCallerIdById) | **PUT** /verify/callerid/{CalleridId} | Verify Caller ID
*DialmycallsJsClient.Calls* | [**cancelCallById**](docs/Calls.md#cancelCallById) | **DELETE** /service/call/{CallId} | Cancel Call
*DialmycallsJsClient.Calls* | [**createCall**](docs/Calls.md#createCall) | **POST** /service/call | Create Call
*DialmycallsJsClient.Calls* | [**getCallById**](docs/Calls.md#getCallById) | **GET** /service/call/{CallId} | Get Call
*DialmycallsJsClient.Calls* | [**getCallRecipientsByCallId**](docs/Calls.md#getCallRecipientsByCallId) | **GET** /service/call/{CallId}/recipients | Get Call Recipients
*DialmycallsJsClient.Calls* | [**getCalls**](docs/Calls.md#getCalls) | **GET** /service/calls | List Calls
*DialmycallsJsClient.Contacts* | [**createContact**](docs/Contacts.md#createContact) | **POST** /contact | Add Contact
*DialmycallsJsClient.Contacts* | [**deleteContactById**](docs/Contacts.md#deleteContactById) | **DELETE** /contact/{ContactId} | Delete Contact
*DialmycallsJsClient.Contacts* | [**getContactById**](docs/Contacts.md#getContactById) | **GET** /contact/{ContactId} | Get Contact
*DialmycallsJsClient.Contacts* | [**getContacts**](docs/Contacts.md#getContacts) | **GET** /contacts | List Contacts
*DialmycallsJsClient.Contacts* | [**getContactsByGroupId**](docs/Contacts.md#getContactsByGroupId) | **GET** /contacts/{GroupId} | List Contacts in Group
*DialmycallsJsClient.Contacts* | [**updateContactById**](docs/Contacts.md#updateContactById) | **PUT** /contact/{ContactId} | Update Contact
*DialmycallsJsClient.DoNotContacts* | [**getDoNotContacts**](docs/DoNotContacts.md#getDoNotContacts) | **GET** /donotcontacts | List DoNotContacts
*DialmycallsJsClient.Groups* | [**createGroup**](docs/Groups.md#createGroup) | **POST** /group | Add Group
*DialmycallsJsClient.Groups* | [**deleteGroupById**](docs/Groups.md#deleteGroupById) | **DELETE** /group/{GroupId} | Delete Group
*DialmycallsJsClient.Groups* | [**getGroupById**](docs/Groups.md#getGroupById) | **GET** /group/{GroupId} | Get Group
*DialmycallsJsClient.Groups* | [**getGroups**](docs/Groups.md#getGroups) | **GET** /groups | List Groups
*DialmycallsJsClient.Groups* | [**updateGroupById**](docs/Groups.md#updateGroupById) | **PUT** /group/{GroupId} | Update Group
*DialmycallsJsClient.Keywords* | [**deleteKeywordByID**](docs/Keywords.md#deleteKeywordByID) | **DELETE** /keyword/{KeywordId} | Delete Keyword
*DialmycallsJsClient.Keywords* | [**getKeywordByID**](docs/Keywords.md#getKeywordByID) | **GET** /keyword/{KeywordId} | Get Keyword
*DialmycallsJsClient.Keywords* | [**getKeywords**](docs/Keywords.md#getKeywords) | **GET** /keywords | List Keywords
*DialmycallsJsClient.Recordings* | [**createRecording**](docs/Recordings.md#createRecording) | **POST** /recording/tts | Create Recording (Text-to-Speech)
*DialmycallsJsClient.Recordings* | [**createRecordingByPhone**](docs/Recordings.md#createRecordingByPhone) | **POST** /recording/phone | Create Recording (Phone)
*DialmycallsJsClient.Recordings* | [**createRecordingByUrl**](docs/Recordings.md#createRecordingByUrl) | **POST** /recording/url | Create Recording (URL)
*DialmycallsJsClient.Recordings* | [**deleteRecordingById**](docs/Recordings.md#deleteRecordingById) | **DELETE** /recording/{RecordingId} | Delete Recording
*DialmycallsJsClient.Recordings* | [**getRecordingById**](docs/Recordings.md#getRecordingById) | **GET** /recording/{RecordingId} | Get Recording
*DialmycallsJsClient.Recordings* | [**getRecordings**](docs/Recordings.md#getRecordings) | **GET** /recordings | List Recordings
*DialmycallsJsClient.Recordings* | [**updateRecordingById**](docs/Recordings.md#updateRecordingById) | **PUT** /recording/{RecordingId} | Update Recording
*DialmycallsJsClient.Texts* | [**cancelTextById**](docs/Texts.md#cancelTextById) | **DELETE** /service/text/{TextId} | Cancel Text
*DialmycallsJsClient.Texts* | [**createText**](docs/Texts.md#createText) | **POST** /service/text | Create Text
*DialmycallsJsClient.Texts* | [**deleteIncomingTextById**](docs/Texts.md#deleteIncomingTextById) | **DELETE** /incoming/text/{TextId} | Delete Incoming Text
*DialmycallsJsClient.Texts* | [**getIncomingTextById**](docs/Texts.md#getIncomingTextById) | **GET** /incoming/text/{TextId} | Get Incoming Text
*DialmycallsJsClient.Texts* | [**getIncomingTexts**](docs/Texts.md#getIncomingTexts) | **GET** /incoming/texts | List Incoming Texts
*DialmycallsJsClient.Texts* | [**getShortCodes**](docs/Texts.md#getShortCodes) | **GET** /shortcodes | List Shortcodes
*DialmycallsJsClient.Texts* | [**getTextById**](docs/Texts.md#getTextById) | **GET** /service/text/{TextId} | Get Text
*DialmycallsJsClient.Texts* | [**getTextRecipientsByTextId**](docs/Texts.md#getTextRecipientsByTextId) | **GET** /service/text/{TextId}/recipients | Get Text Recipients
*DialmycallsJsClient.Texts* | [**getTexts**](docs/Texts.md#getTexts) | **GET** /service/texts | List Texts
*DialmycallsJsClient.VanityNumbers* | [**deleteVanityNumberById**](docs/VanityNumbers.md#deleteVanityNumberById) | **DELETE** /vanitynumber/{VanityNumberId} | Delete Vanity Number
*DialmycallsJsClient.VanityNumbers* | [**getVanityNumberById**](docs/VanityNumbers.md#getVanityNumberById) | **GET** /vanitynumber/{VanityNumberId} | Get Vanity Number
*DialmycallsJsClient.VanityNumbers* | [**getVanityNumbers**](docs/VanityNumbers.md#getVanityNumbers) | **GET** /vanitynumbers | List Vanity Numbers
*DialmycallsJsClient.VanityNumbers* | [**updateVanityNumberById**](docs/VanityNumbers.md#updateVanityNumberById) | **PUT** /vanitynumber/{VanityNumberId} | Update Vanity Number


## Documentation for Models

 - [DialmycallsJsClient.Accessaccount](docs/Accessaccount.md)
 - [DialmycallsJsClient.Account](docs/Account.md)
 - [DialmycallsJsClient.CallRecipient](docs/CallRecipient.md)
 - [DialmycallsJsClient.Callerid](docs/Callerid.md)
 - [DialmycallsJsClient.Callservice](docs/Callservice.md)
 - [DialmycallsJsClient.Contact](docs/Contact.md)
 - [DialmycallsJsClient.ContactAttributes](docs/ContactAttributes.md)
 - [DialmycallsJsClient.CreateAccessAccountParameters](docs/CreateAccessAccountParameters.md)
 - [DialmycallsJsClient.CreateCallParameters](docs/CreateCallParameters.md)
 - [DialmycallsJsClient.CreateCallerIdParameters](docs/CreateCallerIdParameters.md)
 - [DialmycallsJsClient.CreateContactParameters](docs/CreateContactParameters.md)
 - [DialmycallsJsClient.CreateGroupParameters](docs/CreateGroupParameters.md)
 - [DialmycallsJsClient.CreateRecordingByPhoneParameters](docs/CreateRecordingByPhoneParameters.md)
 - [DialmycallsJsClient.CreateRecordingByUrlParameters](docs/CreateRecordingByUrlParameters.md)
 - [DialmycallsJsClient.CreateRecordingParameters](docs/CreateRecordingParameters.md)
 - [DialmycallsJsClient.CreateTextParameters](docs/CreateTextParameters.md)
 - [DialmycallsJsClient.CreateUnverifiedCallerIdParameters](docs/CreateUnverifiedCallerIdParameters.md)
 - [DialmycallsJsClient.Donotcontact](docs/Donotcontact.md)
 - [DialmycallsJsClient.Group](docs/Group.md)
 - [DialmycallsJsClient.Identifier](docs/Identifier.md)
 - [DialmycallsJsClient.Incomingtext](docs/Incomingtext.md)
 - [DialmycallsJsClient.Keyword](docs/Keyword.md)
 - [DialmycallsJsClient.Polling](docs/Polling.md)
 - [DialmycallsJsClient.PushToListenAgain](docs/PushToListenAgain.md)
 - [DialmycallsJsClient.PushToOptOut](docs/PushToOptOut.md)
 - [DialmycallsJsClient.PushToRecord](docs/PushToRecord.md)
 - [DialmycallsJsClient.PushToTalk](docs/PushToTalk.md)
 - [DialmycallsJsClient.Recording](docs/Recording.md)
 - [DialmycallsJsClient.Service](docs/Service.md)
 - [DialmycallsJsClient.Shortcode](docs/Shortcode.md)
 - [DialmycallsJsClient.TextRecipient](docs/TextRecipient.md)
 - [DialmycallsJsClient.UpdateAccessAccountByIdParameters](docs/UpdateAccessAccountByIdParameters.md)
 - [DialmycallsJsClient.UpdateCallerIdByIdParameters](docs/UpdateCallerIdByIdParameters.md)
 - [DialmycallsJsClient.UpdateContactByIdParameters](docs/UpdateContactByIdParameters.md)
 - [DialmycallsJsClient.UpdateGroupByIdParameters](docs/UpdateGroupByIdParameters.md)
 - [DialmycallsJsClient.UpdateRecordingByIdParameters](docs/UpdateRecordingByIdParameters.md)
 - [DialmycallsJsClient.UpdateVanityNumberByIdParameters](docs/UpdateVanityNumberByIdParameters.md)
 - [DialmycallsJsClient.Vanitynumber](docs/Vanitynumber.md)
 - [DialmycallsJsClient.VerifyCallerIdByIdParameters](docs/VerifyCallerIdByIdParameters.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-Auth-ApiKey
- **Location**: HTTP header

