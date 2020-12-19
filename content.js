

$( document ).ready(function() {

    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });

	const msg = 's'

chrome.runtime.sendMessage({ message: msg }, function(response) {
    console.log(response);
});

});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.message == "s") {
        //alert(request.message);
        //alert("this is great");
        var x = document.getElementsByClassName("jss6krjoy");
		x[0].innerHTML = x[0].innerHTML + "<a href='https://bloom.pm/celebrate' id='a' style='z-index:100;  position: relative; target=\"_blank\"'>🎉</a><div id=\"popup\"> </div>"

    }
    
    // Callback
    sendResponse({ message: 'Content script has received that message ⚡' })
})


        
