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
//Resume Button
const resume = document.querySelector('.resume');
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

//Name for setInterval for Work
let tick;

// Work Timer Function
let timer = () => {
    countdownMins = countdownMins - 1;
    tick = setInterval(function () {
        countdownSecs = --countdownSecs;
        if (countdownSecs <= 0 && countdownMins <= 0) {
            countdownMins = countdownMins;
            countdownSecs = countdownSecs;
            mainTimer.textContent = 'Time for a break!!'
            clearInterval(tick);
            return;
        } else if (countdownSecs <= 0) {
            countdownSecs = 60;
            countdownSecs--;
            countdownMins = countdownMins - 1;
        } else {
            countdownSecs = countdownSecs;
        }
        mainTimer.textContent = countdownMins + ':' + countdownSecs;
    }, 1000)
}

//Name for setInterval for Breaks
let breakTick;

// Break Timer Function
let breakTimer = () => {
    breakMins = breakMins - 1;
    breakTick = setInterval(function () {
        breakSecs = --breakSecs;
        if (breakSecs <= 0 && breakMins <= 0) {
            breakMins = breakMins;
            breakSecs = breakSecs;
            mainTimer.textContent = '';
            clearInterval(breakTick);
            return;
        } else if (breakSecs <= 0) {
            breakSecs = 60;
            breakSecs--;
            breakMins = breakMins - 1;
        } else {
            breakSecs = breakSecs;
        }
        mainTimer.textContent = breakMins + ':' + breakSecs;
    }, 1000)
}

//Resume Functions
function resumeTimer() {
    countdownSecs = pausedVal.split(':')[1];
    countdownMins = pausedVal.split(':')[0] + 1;
    return timer();
}

//Grab the current count value to use for resuming
let pausedVal = '';

function pauseIt() {
    pausedVal = mainTimer.textContent;
    console.log(pausedVal);
    return timer ? clearInterval(tick) : clearInterval(breakTick);
}

play.addEventListener('click', timer);
breakBtn.addEventListener('click', breakTimer);
pause.addEventListener('click', pauseIt);
resume.addEventListener('click', resumeTimer);

//Change times Displays 
setCounter.textContent = countdownMins + ' mins';
breakCounter.textContent = breakMins + ' mins';