var hrs = 24
var min = 60;
var sec = 60;
var milliSec = 10;
var displayHrs = document.getElementById("displayHrs");
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMilliSec = document.getElementById("displayMilliSec");

var interval;

function timer() {
    milliSec--;
    if (milliSec == 0) {
        milliSec = 10;
        sec--;
        if(sec == 0) {
            sec= 60;
            min--;
            if (min == 0) {
                min = 60;
                hrs--;
                if (hrs == 0 && min == 0 && sec == 0 && milliSec == 0) {
                clearInterval(interval);
                alert("time Up");
                }
        }
    }
}
    displayHrs.innerHTML = hrs;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMilliSec.innerHTML = milliSec;

};
function startTimer() {
  interval = setInterval
  (function () {
    timer();
  }, 100);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    pauseTimer();
    hrs = 0;
    min = 0;
    sec = 0;
    milliSec = 0;
    displayHrs.innerHTML = hrs;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMilliSec.innerHTML = milliSec;
}