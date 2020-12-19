   chrome.webNavigation.onCompleted.addListener(function() {
      alert("This is my favorite website!");

  }, {url: [{urlMatches : 'https://testing.bloom.pm/'}]});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //alert(request.message);
    // Callback
    sendResponse({ message: 'Content script has received that message ⚡' })
})


  chrome.runtime.onMessage.addListener(function(message, callback) {

    if (message.message == "s") {
      alert("Alarm!!");
    } else if (message.message == "runLogic") {
      alert("“runLogic”!");
    } else if (message.message == "changeColor") {
            alert("changecolor!");
    };
  });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({ active: true }, function(tabs) {
            const msg = "s";
            chrome.tabs.sendMessage(tabs[0].id, { "message": msg });
        })
    }
});
