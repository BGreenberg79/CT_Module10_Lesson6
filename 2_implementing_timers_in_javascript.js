var startButton = document.getElementById("start");
var resetButton =document.getElementById("reset");
var inputHours= document.getElementById("hours");
var inputMinutes= document.getElementById("minutes");
var inputSeconds = document.getElementById("seconds");

var startTimer = null;

// Task 1 Countdown Timer

function setTimer() {
    if (inputHours == 0 && inputMinutes == 0 && inputSeconds == 0 ){
        inputHours.value = 0;
        inputMinutes.value = 0;
        inputSeconds = 0;
    }
    else if (inputSeconds.value != 0 ){inputSeconds.value --;}
    else if (inputSeconds == 0 && inputMinutes.value != 0) {
        inputSeconds.value = 59;
        inputMinutes.value--;
    }
    else if (inputHours.value != 0 && inputMinutes.value == 0 && inputSeconds.value == 0) {
        inputMinutes.value =59;
        inputHours.value--;
    }
}

function stop(){
    clearInterval(startTimer);
}

startButton.addEventListener('click', function(){
    function newInterval(){
        startTimer = setInterval(function(){
            setTimer();}, 1000);}
            newInterval()
    })

resetButton.addEventListener('click', function(){
    inputHours.value = 0;
    inputMinutes.value = 0;
    inputSeconds = 0;
    stop() 
})


