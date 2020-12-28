  //  chrome.webNavigation.onCompleted.addListener(function() {
  //     alert("This is my favorite website!");

  // }, {url: [{urlMatches : 'http://127.0.0.1:5500/testweb/index.html'}]});

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     //alert(request.message);
//     // Callback
//     sendResponse({ message: 'Content script has received that message ⚡' })
// })
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.cmd === "celebration_file"){
        $.ajax({
            url: chrome.extension.getURL("celebration.html"),
            dataType: "html",
            success: sendResponse
        });
       return true;
    } 
  
   
})
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({ active: true }, function(tabs) {
            const msg = "s";
            chrome.tabs.sendMessage(tabs[0].id, { "message": msg });
        })
    }
});
