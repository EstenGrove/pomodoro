// Main Timer - center display
let mainTimer = document.querySelector('.counter-mainTimer');

//Change Work Time Display
const setCounter = document.querySelector('.set-counter');

// Change Break Time Display
const breakCounter = document.querySelector('.break1');

// Work Buttons
const addWork = document.querySelector('.addWork');
const subWork = document.querySelector('.subWork');

// Break Buttons
const addBreak = document.querySelector('.addBreak');
const subBreak = document.querySelector('.subBreak');

// Counter Controls
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const breakBtn = document.querySelector('.break');


//Break Countdown variables
let breakSecs = 60;
let breakMins = 15;




// let curCounter = '';
// let breakCurCounter = '';

//Change Break Time fn
addBreak.addEventListener('click', (e) => {
    breakMins = ++breakMins;
    breakCurCounter = breakCounter.textContent = breakMins + ' mins';
})
subBreak.addEventListener('click', (e) => {
    breakMins = --breakMins;
    breakCurCounter = breakCounter.textContent = breakMins + ' mins';
})

//Just for Displaying really**
// let breakCountDown = (breakMins - 1) + ':' + (breakSecs - 1);

//Countdown Variable
let countdownSecs = 60;
let countdownMins = 25;

//Change Work Time fn
addWork.addEventListener('click', (e) => {
    countdownMins = ++countdownMins;
    curCounter = setCounter.textContent = countdownMins + ' mins';
    console.log(curCounter);
})
subWork.addEventListener('click', (e) => {
    countdownMins = --countdownMins;
    curCounter = setCounter.textContent = countdownMins + ' mins';
    console.log(curCounter);
})

//Just for Displaying really**
let CountDown = (countdownMins - 1) + ':' + (countdownSecs - 1);

//Timer Function
function timer() {
    countdownMins = countdownMins - 1;
    setInterval(function () {
        countdownSecs = --countdownSecs;
        //Consider a switch statement here
        if (countdownSecs <= 0) {
            countdownSecs = 60;
            countdownSecs--;
            countdownMins = countdownMins - 1;
        } else {
            countdownSecs = countdownSecs;
        }
        mainTimer.textContent = countdownMins + ':' + countdownSecs;
    }, 1000)
}

// Break Timer Function
function breakTimer() {
    breakMins = breakMins - 1;
    setInterval(function () {
        breakSecs = --breakSecs;
        //Consider a switch statement here
        if (breakSecs <= 0) {
            breakSecs = 60;
            breakSecs--;
            breakMins = breakMins - 1;
        } else {
            breakSecs = breakSecs;
        }
        mainTimer.textContent = breakMins + ':' + breakSecs;
    }, 1000)
}




play.addEventListener('click', timer);
breakBtn.addEventListener('click', breakTimer);

//Change times Displays 
setCounter.textContent = countdownMins + ' mins';
breakCounter.textContent = breakMins + ' mins';