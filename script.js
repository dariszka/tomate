const container = document.querySelector('#container');
const icon = document.querySelector('.icon');
const settings = document.querySelector('#settings');
const centralDisplay = document.querySelector('.centralDisplay')
const menu = document.querySelector('.menu');
const timerDisplays = document.querySelector('.timerDisplays')
const workTimerDisplay = document.querySelector('.workTimer')
const breakTimerDisplay = document.querySelector('.breakTimer')
const longBreakTimerDisplay = document.querySelector('.longBreakTimer')
const progress = document.querySelector('.progress')
const goalToday = document.querySelector('.goalToday').value

const soundOn = document.querySelector('.on')
const soundOff = document.querySelector('.off')
const sound = document.querySelector('.sound')
const audio = document.querySelector('.audio')

let workTimeDuration = 25
let breakTimeDuration = 5
let longBreakTimeDuration = 15 

let interval = false;
let endTime
let startTime
let isFirstRun = true
let duration = false
let remainingTime
let sessionCount = 0
let sessionDuration 
let breakStarted = false

window.onload = function () {
    workTimerDisplay.textContent = workTimeDuration < 10 ? '0' + workTimeDuration + ':00': workTimeDuration + ':00';
    breakTimerDisplay.classList.add('hide')
    longBreakTimerDisplay.classList.add('hide')
}

workTimerDisplay.onclick = function () {
    handleTimerClick(workTimeDuration, workTimerDisplay);
};
workTimerDisplay.ondblclick = switchToBreakDisplay

breakTimerDisplay.onclick = function () {
    handleTimerClick(breakTimeDuration, breakTimerDisplay);
};
breakTimerDisplay.ondblclick = switchToWorkDisplay

longBreakTimerDisplay.onclick = function() {
    handleTimerClick(longBreakTimeDuration, longBreakTimerDisplay);
};
timerDisplays.addEventListener('click', (e) => {
    if (e.detail === 3) {
        if (longBreakTimerDisplay.classList.contains('hide')) {
            longBreakTimerDisplay.classList.remove('hide')
            longBreakTimerDisplay.textContent  = longBreakTimeDuration < 10 ? '0' + longBreakTimeDuration + ':00' : longBreakTimeDuration + ':00';
            isFirstRun = true
            clearInterval(interval)
            interval = false;

            breakTimerDisplay.classList.add('hide')
            workTimerDisplay.classList.add('hide')
        } else {
            switchToWorkDisplay()
            longBreakTimerDisplay.classList.add('hide')
        }
    }
});

function handleTimerClick(sessionDuration, display) {
    if(!interval){
        if (isFirstRun) {
            duration = sessionDuration * 60 * 1000
            isFirstRun = false 
        }

        startTime = Date.now()
        endTime = startTime + duration 
        
        interval = setInterval(function(){
            remainingTime = (endTime - Date.now());
            if (remainingTime >= 0) {
                updateTimerDisplay(remainingTime/1000, display)
            } else {
                clearInterval(interval)
                interval = false;
                playSound()

                if (sessionDuration === workTimeDuration) {
                    switchToBreakDisplay()
                    sessionCount++
                    progress.textContent = sessionCount + '/' + goalToday
                } else {
                    switchToWorkDisplay()
                }
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

function switchToBreakDisplay() {
    clearInterval(interval)
    interval = false;
    breakTimerDisplay.textContent = breakTimeDuration < 10 ? '0' + breakTimeDuration + ':00' : breakTimeDuration + ':00';
    breakTimerDisplay.classList.remove('hide')
    isFirstRun = true

    workTimerDisplay.classList.add('hide')
    longBreakTimerDisplay.classList.add('hide')
};

function switchToWorkDisplay() {
    clearInterval(interval)
    interval = false;
    workTimerDisplay.textContent = workTimeDuration < 10 ? '0' + workTimeDuration + ':00': workTimeDuration + ':00';
    workTimerDisplay.classList.remove('hide')
    isFirstRun = true

    breakTimerDisplay.classList.add('hide')
    longBreakTimerDisplay.classList.add('hide')
}

function playSound() {
    if (soundOff.classList.contains('hide')) {
        audio.play()
        setTimeout(function() {  
            audio.pause();
            audio.currentTime = 0;
        }, 6120)
    }
}
