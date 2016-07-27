# DialmycallsJsClient.CreateTextParameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | (Required)  Name the broadcast. | [optional] 
**keywordId** | **String** | (Required)  The keyword id that should be associated with this broadcast. | [optional] 
**messages** | **[String]** | (Required)  List of messages to send (up to 10). | [optional] 
**sendAt** | **String** | When the broadcast should be sent. | [optional] 
**sendImmediately** | **Boolean** | Should the broadcast go out immediately? | [optional] 
**sendEmail** | **Boolean** | Also send an email to the contacts? | [optional] 
**accessaccountId** | **String** | Schedule this broadcast as an access account. | [optional] 
**shortcodeId** | **String** | The shortcode id that the broadcast will be sent from. | [optional] 
**concatenateSms** | **Boolean** | Combine all SMS messages into 1 message on the end users device. | [optional] 
**contacts** | [**[ContactAttributes]**](ContactAttributes.md) | (Required)  List of contact information that should be sent the broadcast. | [optional] 


