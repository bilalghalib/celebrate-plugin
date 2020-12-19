$( document ).ready(function() {
    const msg = 's'
    chrome.runtime.sendMessage({ message: msg }, function(response) {
        console.log(response);
    });
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == "s") {
        var x = document.getElementsByClassName("jss6krjoy");
		x[0].innerHTML = x[0].innerHTML + "<a href='https://bloom.pm/celebrate' id='a' style='z-index:100;  position: relative; target=\"_blank\"'>🎉</a><div id=\"popup\"> </div>"
    } 
    // Callback
    sendResponse({ message: 'Content script has received that message ⚡' })
})

        
