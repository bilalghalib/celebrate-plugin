$( document ).ready(function() {  
    chrome.runtime.sendMessage({cmd:"celebration_file"}, function(htmlString){
        $("body").append(htmlString);
        let btn = document.getElementById('complete');
        console.log(btn)
        if (btn){   
            btn.addEventListener('click', function() {
                let anmClass = document.getElementById('animation')
                let wheelClass=document.getElementById('wheelClass')
                if (btn.checked){
                    anmClass.style.display = "block"
                    // wheelClass.innerHTML="whaaaat"
                } else {
                    anmClass.style.display = "none"
                }
                
            })
        } 
        var wheelgame = $('#container').wheelgame({
            shuffle: true,
            update: function(slice) {
                $('#sel_name').text(slice.name);
                $('#sel_teakind').text(slice.kind);
                $('#sel_description').text(slice.description);
                $('#sel_serving').text(slice.serving);
            },
            finished: function(slice) {
                $('#sel_name').text(slice.name);
                $('#sel_teakind').text(slice.kind);
                $('#sel_description').text(slice.description);
                $('#sel_serving').text(slice.serving);
            }
        });
        $('#spinbtn').on("click",function() {
            wheelgame.spin();
        });
    })
    
})

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.message == "s") {
//         var x = document.getElementsByClassName("jss6krjoy");
// 		x[0].innerHTML = x[0].innerHTML + "<a href='https://bloom.pm/celebrate' id='a' style='z-index:100;  position: relative; target=\"_blank\"'>🎉</a><div id=\"popup\"> </div>"
//     } 
//     // Callback
//     sendResponse({ message: 'Content script has received that message ⚡' })
// })

        
