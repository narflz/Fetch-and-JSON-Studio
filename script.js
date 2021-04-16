window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const div = document.getElementById("container");
            let htmlBlock = "";
            for (item of json) {
                htmlBlock+=
                `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${item.firstName} ${item.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${item.hoursInSpace}</li>
                            <li>Active: ${item.active}</li>
                            <li>Skills: ${item.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${item.picture}">
                </div>
                `;
            }
            div.innerHTML = htmlBlock;
        })
    })
})