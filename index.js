// -------------------------------------- City Management --------------------------------------------- //

var cities = ["Karachi", "Islamabad", "Peshawar", "Balochistan"];

function xyz() {
    var list = document.getElementById("list");
    list.innerHTML = ""; // Clear old list
    for (var i = 0; i < cities.length; i++) {
        list.innerHTML += `<li>${cities[i]}</li>`;
    }
    console.log("Cities displayed:", cities);
}

function addToList() {
    var city = prompt("Enter city to add:");
    if (city) {
        cities.push(city);
        xyz(); // Re-render the list after adding
    }
}
