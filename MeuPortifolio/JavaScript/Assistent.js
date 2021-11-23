window.watsonAssistantChatOptions = 
{
    integrationID: "4d8f8d12-c5e7-44f3-869f-100b5dc9817b", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "e6584dca-266e-4973-8808-f0cb8e13ea4a", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
};
    setTimeout(function()
    {
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
    document.head.appendChild(t);
    });
     