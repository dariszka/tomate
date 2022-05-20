const container = document.querySelector('#container');
const icon = document.querySelector('.icon');
const settings = document.querySelector('#settings');
const menu = document.querySelector('.menu');
const box = document.querySelector('#box');
const timerDisplays = document.querySelector('.workTimer')
const workTimerDisplay = document.querySelector('.workTimer')
const breakTimerDisplay = document.querySelector('.breakTimer')
const longBreakTimerDisplay = document.querySelector('.longBreakTimer')

let workTimeDuration = 25
let breakTimeDuration = 5

window.onload = function () {
    workTimeDuration = workTimeDuration < 10 ? '0' + workTimeDuration : workTimeDuration;
    workTimerDisplay.textContent = workTimeDuration + ':00'
    breakTimerDisplay.classList.add('hideTimer')
    longBreakTimerDisplay.classList.add('hideTimer')
}

workTimerDisplay.onclick = function () {
    handleTimerClick(workTimeDuration * 60, workTimerDisplay);
};

let interval = false;
let endTime
let startTime
let isFirstRun = true
let duration


function handleTimerClick(workTimeDuration) {
    
    if(!interval){
        if (isFirstRun) {
            duration = workTimeDuration * 1000
            isFirstRun = false
        }
        
        startTime = Date.now()
        endTime = startTime + duration
        
        interval = setInterval(function(){
            let remainingTime = (endTime - Date.now());
            updateTimerDisplay(remainingTime/1000, workTimerDisplay)
                
                if (remainingTime === 0) {
                clearInterval(interval)
                }
        }, 1000)
    } else {
        clearInterval(interval);
        interval = false;
        duration = Math.ceil((endTime - Date.now())/1000)*1000
    }
}


function updateTimerDisplay(remainingTime, display) {
    minutes = (remainingTime / 60) | 0;
    seconds = Math.ceil((remainingTime) % 60 ) | 0;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds
}