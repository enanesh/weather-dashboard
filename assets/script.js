

//Variables 
var city = "";
var lon = "";
var lat = "";


//Saves the user input into localstorage 

function SaveInput() {
    document.getElementById('button').addEventListener("click", function (e) {
        e.preventDefault();
        var city = document.getElementById("search-input").value;
        var item = JSON.parse(localStorage.getItem("cities"));
        if (item == null) {
            item = [city];
        } else {
            if (!item.includes(city)) {
                item.push(city)
            }
        }
        localStorage.setItem("cities",JSON.stringify(item))
    })
}



console.log(city)
SaveInput()