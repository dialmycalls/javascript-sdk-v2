# DialmycallsJsClient.CreateCallParameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | (Required)  Name the broadcast. | [optional] 
**calleridId** | **String** | (Required)  The caller id that the message should be sent from. | [optional] 
**recordingId** | **String** | (Required)  The recording id of the message that should be played. | [optional] 
**machineRecordingId** | **String** | The recording id of the message that should be played on answering machines.  If not supplied the recording_id will be used.  use_amd must be true in order for this feature to work. | [optional] 
**sendAt** | **String** | When the broadcast should be sent. (Ex: 2016-07-25T12:00:00+0000) | [optional] 
**sendImmediately** | **Boolean** | Should the broadcast go out immediately? | [optional] 
**useAmd** | **Boolean** | Using answering machine detection? | [optional] 
**sendEmail** | **Boolean** | Also send an email to the contacts? | [optional] 
**accessaccountId** | **String** | Schedule this broadcast as an access account. | [optional] 
**contacts** | [**[ContactAttributes]**](ContactAttributes.md) | (Required)  List of contact information that should be sent the broadcast. | [optional] 
**addOns** | [**[PushToListenAgain]**](PushToListenAgain.md) | A list of feature add-ons for the calls. | [optional] 


