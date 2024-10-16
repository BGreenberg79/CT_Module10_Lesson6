var startButton = document.getElementById("start");
var resetButton =document.getElementById("reset");
var inputHours= document.getElementById("hours");
var inputMinutes= document.getElementById("minutes");
var inputSeconds = document.getElementById("seconds");

var startTimer = null;

// Task 1 Countdown Timer

function setTimer() {
    if (inputHours.value == 0 && inputMinutes.value == 0 && inputSeconds.value== 0 ){
        inputHours.value = 0;
        inputMinutes.value = 0;
        inputSeconds.value = 0;
        stop();
        clearInterval(notifyInterval);
    }
    else if (inputSeconds.value != 0 ){inputSeconds.value --;}
    else if (inputSeconds.value == 0 && inputMinutes.value != 0) {
        inputSeconds.value = 59;
        inputMinutes.value--;
        notifyInterval = setInterval(()=>alert("One minute has passed"), 60000);
    }
    else if (inputHours.value != 0 && inputMinutes.value == 0 && inputSeconds.value == 0) {
        inputSeconds.value =59;
        inputMinutes.value =59;
        inputHours.value--;
    }
}

function stop(){
    clearInterval(startTimer);
    setTimeout(()=>alert("Timer has expired"), 2000);
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
    inputSeconds.value = 0;
    stop() 
})


// Task 2 Delayed Notification
// See line 32
// Task 3 Repeat Notification
// See Lines 23 and 17