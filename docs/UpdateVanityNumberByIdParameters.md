# DialmycallsJsClient.UpdateVanityNumberByIdParameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callOptions** | **[String]** | The options to include when the number is called.  If an option is not included it will be turned off.  Option values should be boolean.  Possible values are: &#39;voicemail&#39; (Leave A Message), &#39;ptt&#39; (Push To Talk), &#39;optin&#39; (Opt-In), &#39;repeat&#39; (Repeat Your Message) -- Note: Optout cannot be removed without prior authorization.  Please contact customer support for this. | [optional] 
**recordingSource** | **String** | Where the recording will be generated from.  (specific, lastsent, lastuploaded) | [optional] 
**specificRecordingId** | **String** | Unique identifier for the recording if recording_source is set to specific. | [optional] 
**playCta** | **Boolean** | Setting this to true our system will play the prompts for keys to be pushed. | [optional] 
**pttNumberId** | **String** | This is a verified caller id that is on your account.  This will be used if PTT option is used. | [optional] 


