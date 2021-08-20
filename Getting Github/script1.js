var infoDiv = document.querySelector("#showuser")
var Username = "";
function getUsername(element){
    console.log(element.value)
    Username = element.value
}


function showInfo(data){
    var res = `<div class="show">
                <h3>${data.name} has ${data.followers} followers</h3>
                <img src="${data.avatar_url}" alt="${data.name}'s avatar">
                </div>`
    return res;
}

async function callGit() {
    var response = await fetch("https://api.github.com/users/" + Username)
    var coderdata = await response.json();
    console.log(coderdata)
    infoDiv.innerHTML = showInfo(coderdata)

}

