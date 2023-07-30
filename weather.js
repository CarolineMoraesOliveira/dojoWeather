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



function changeT(element) {
    console.log(element.value);

    if ((element.value) === "°F"){
        var tempValues = document.querySelectorAll('#red, #blue, #red1, #blue1, #red2, #blue2, #red3, #blue3');
        for (var i=0; i< 9; i++){
        var tempF= Math.round((tempValues[i].innerText) * 1.8 + 32);
            tempValues[i].innerText = tempF;
        }
        console.log(tempF);
    }
    else {
        var tempValues = document.querySelectorAll('#red, #blue, #red1, #blue1, #red2, #blue2, #red3, #blue3');
        for (var i=0; i< 9; i++){
        var tempC= Math.round(((tempValues[i].innerText)-32) * 5/9);
            tempValues[i].innerText = tempC;
        }
       console.log(tempC);
    }
}

    





  