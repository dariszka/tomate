const title = document.querySelector('#title');
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
const goalToday = document.querySelector('.goalToday')
const timeWorkedDiv = document.querySelector('.timeWorked')
const sessionsWorkedDiv = document.querySelector('.sessionsWorked') 

const soundOn = document.querySelector('.on')
const soundOff = document.querySelector('.off')
const sound = document.querySelector('.sound')
const audio = document.querySelector('.audio')

let workTimeDuration = document.querySelector('.workTime')
let breakTimeDuration = document.querySelector('.breakTime')
let longBreakTimeDuration = document.querySelector('.longBreakTime')

let interval = false;
let endTime
let startTime
let isFirstRun = true
let duration = false
let remainingTime
let sessionCount = 0
let sessionDuration 

let previousTimeWorked = 0
let totalTimeWorked = 0
let convertedTotalTimeWorked

window.onload = function () {
    workTimerDisplay.textContent = workTimeDuration.value < 10 ? '0' + workTimeDuration.value + ':00': workTimeDuration.value + ':00';
    breakTimerDisplay.classList.add('hide')
    longBreakTimerDisplay.classList.add('hide')
}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});

workTimerDisplay.onclick = function () {
    handleTimerClick(workTimeDuration.value, workTimerDisplay);
};
workTimerDisplay.ondblclick = switchToBreakDisplay

breakTimerDisplay.onclick = function () {
    handleTimerClick(breakTimeDuration.value, breakTimerDisplay);
};
breakTimerDisplay.ondblclick = switchToWorkDisplay

longBreakTimerDisplay.onclick = function() {
    handleTimerClick(longBreakTimeDuration.value, longBreakTimerDisplay);
};
timerDisplays.addEventListener('click', (e) => {
    if (e.detail === 3) {
        if (longBreakTimerDisplay.classList.contains('hide')) {
            longBreakTimerDisplay.classList.remove('hide')
            updateTimerDisplay(longBreakTimeDuration.value*60, longBreakTimerDisplay)
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

                if (sessionDuration === workTimeDuration.value) {
                    switchToBreakDisplay()
                    sessionCount++
                    trackProgress(sessionCount, sessionDuration)
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
        hours = Math.floor(remainingTime / 3600) 
        minutes = ((remainingTime / 60) % 60) | 0
        seconds = Math.floor((remainingTime) % 60) | 0;

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        console.log(seconds)
        
        if (hours != 0) {
            display.textContent = hours + ':' + minutes + ':' + seconds
            title.textContent = hours + ':' + minutes + ':' + seconds + ' left babez 🙈'
        } else {
            display.textContent = minutes + ':' + seconds
            title.textContent = minutes + ':' + seconds + ' left babez 🙈'
        }
}

function switchToBreakDisplay() {
    clearInterval(interval)
    interval = false;
    updateTimerDisplay(breakTimeDuration.value*60, breakTimerDisplay)
    breakTimerDisplay.classList.remove('hide')
    isFirstRun = true

    workTimerDisplay.classList.add('hide')
    longBreakTimerDisplay.classList.add('hide')
};

function switchToWorkDisplay() {
    clearInterval(interval)
    interval = false;
    updateTimerDisplay(workTimeDuration.value*60, workTimerDisplay)
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

function trackProgress(sessionCount, sessionDuration) {
    if (sessionCount == goalToday.value) {
        sessionsWorkedDiv.textContent ='congratzz u finished ur goal4today'
    } else if (sessionCount > goalToday.value) {
        sessionsWorkedDiv.innerHTML = 'u kinda slay,'+ '<br />' + 'u did ' + (sessionCount - goalToday.value) + ' more than ur goal'
    } else {
        sessionsWorkedDiv.textContent = sessionCount + '/' + (goalToday.value)
    }

    totalTimeWorked = previousTimeWorked + parseInt(sessionDuration) 
    previousTimeWorked = totalTimeWorked

        if (totalTimeWorked == 60){
            convertedTotalTimeWorked = (totalTimeWorked/60) + ' hour'
        } else if ((totalTimeWorked % 60) == 0){
            convertedTotalTimeWorked = (totalTimeWorked/60) + ' hours'
        } else if (totalTimeWorked > 120){
            convertedTotalTimeWorked = ((totalTimeWorked/60) | 0) + ' hours and ' + (totalTimeWorked % 60) + ' minutes'
        } else if (totalTimeWorked > 60){
            convertedTotalTimeWorked = ((totalTimeWorked/60) | 0) + ' hour and ' + (totalTimeWorked % 60) + ' minutes'
        } else {
            convertedTotalTimeWorked = totalTimeWorked + ' minutes'
        } 
}

progress.addEventListener('dblclick', function () {
    if ((convertedTotalTimeWorked === undefined)||(totalTimeWorked === 0)) {
        return
    }

    timeWorkedDiv.textContent = 'uve done ' + convertedTotalTimeWorked + ' of work btw'

    timeWorkedDiv.classList.toggle('hide')
    sessionsWorkedDiv.classList.toggle('hide')
})
