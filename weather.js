console.log ('Running main.js');

// function to alert the chosen city //

function burbank() {
    alert("Loading weather report to Burbank!");
}

function chicago() {
    alert("Loading weather report to Chicago!");
}

function dallas() {
    alert("Loading weather report to Dallas!");
}

// function to disappear the message //

var x = document.querySelector("#disappearBox");

function disappear() {
    x.remove();
}

// function to convert the temperature // not finished!!!!!

var y = [document.querySelectorAll('#red, #blue')];
var celsiusT = [24,18,27,19,21,16,26,21];
var farenT = [celsiusT[temp] * 1.8 + 32];

function change(element) {
    var temp = 0; temp <=8; temp++;

    if (element.value == "°C") {
        y.innerText = y;
    }
    else {
        y.innerText = farenT;
    }
}

