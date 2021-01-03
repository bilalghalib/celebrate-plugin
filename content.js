function loadcelebrations() {
    fetch('https://raghadhav.com/celebrate/api/celebrations').then(r => r.json()).then(result => {
        console.log(result)
        let container = document.getElementById('container');
        console.log(result.length)
        for (let i = 0; i < result.length; i++) {
            let celebrationDiv = document.createElement('div');
            // protecting from undefined result
            let name = (result[i].name) ? result[i].name : ''; 
            let kind = (result[i].kind) ? result[i].kind : ''; 
            let description = (result[i].description) ? result[i].description : ''; 
            let serving = (result[i].serving) ? result[i].serving : '';  

            // appending html to div inside the wheel container  
            let celebrationString = `
            <name>${name}</name>
            <kind>${kind}</kind>
            <description>${description}</description>
            <serving>${serving}</serving>
            `
            celebrationDiv.innerHTML = celebrationString; 
            container.appendChild(celebrationDiv);
        }
    }).then(() => {
        var wheelgame = $('#container').wheelgame({
            shuffle: true,
            update: function (slice) {
                $('#sel_name').text(slice.name);
                $('#sel_teakind').text(slice.kind);
                $('#sel_description').text(slice.description);
                $('#sel_serving').text(slice.serving);
            },
            finished: function (slice) {
                $('#sel_name').text(slice.name);
                $('#sel_teakind').text(slice.kind);
                $('#sel_description').text(slice.description);
                $('#sel_serving').text(slice.serving);
            }
        });
        $('#spinbtn').on("click", function () {
            wheelgame.spin();
        });
    })
}

$(document).ready(function () {
    chrome.runtime.sendMessage({ cmd: "celebration_file" }, function (htmlString) {
        // On runtime, append the extention to the body of the website.
        $("body").append(htmlString);
        loadcelebrations();
        let btn = document.getElementById('complete');
        let doneBtn = document.getElementById('doneBtn');
        let doneCeleBtn = document.getElementById('doneCeleBtn');
        let mainContainer = document.getElementById('mainContainer');
        let closeClass = document.getElementById('closeClass');
        let anmClass = document.getElementById('animation')
        let dialogBox = document.getElementById('dialogBox')

        closeClass.addEventListener('click', function () {
            mainContainer.style.display = "none"
        })
        doneCeleBtn.addEventListener('click', function () {
            mainContainer.style.display = "grid"
            anmClass.style.display = "none"
            dialogBox.style.display = "none"
        })
        doneBtn.addEventListener('click', function () {
            dialogBox.style.display = "none"
            anmClass.style.display = "none"
        })
        // if the complete button exists
        if (btn) {
            btn.addEventListener('click', function () {
                // only disply when checked
                if (btn.checked) {
                    anmClass.style.display = "block"
                    dialogBox.style.display = "block"
                } else {
                    dialogBox.style.display = "none"
                }

            })
        }    
    })
})

