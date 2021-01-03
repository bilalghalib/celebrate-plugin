
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
