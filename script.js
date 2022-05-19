const container = document.querySelector('#container');
const icon = document.querySelector('.icon');
const settings = document.querySelector('#settings');
const menu = document.querySelector('.menu');
const box = document.querySelector('#box');
const timerDisplay = document.querySelector('.timer')

let workTimeDuration = 1  

window.onload = function () {
    workTimeDuration = workTimeDuration < 10 ? '0' + workTimeDuration : workTimeDuration;
    timerDisplay.textContent = workTimeDuration + ':00'
}

timerDisplay.onclick = function () {
    handleTimerClick(workTimeDuration * 60, timerDisplay);
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
        console.log(duration/1000)
        
        interval = setInterval(function(){
            let remainingTime = (endTime - Date.now());
            updateTimerDisplay(remainingTime/1000, timerDisplay)
            console.log(remainingTime/1000)
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