const container = document.querySelector('#container');
const icon = document.querySelector('.icon');
const settings = document.querySelector('#settings');
const menu = document.querySelector('.menu');
const box = document.querySelector('#box');
const timerDisplay = document.querySelector('.timer')


icon.addEventListener('click', clickOnSettings)

switchThemes()

let config = {
    workTimeDuration: 25,
    isInitialRun: true
}

///////////////////////////////////////////////

let interval;
let secondsPassedSincePause = 0;

function setUpTimer(duration, display) {

    let start = Date.now();
    let isPaused = false;
    let difference,
        //hours,
        minutes, 
        seconds;

    
    function runTimer() {
            difference = (duration - secondsPassedSincePause) - ((Date.now() - start) / 1000);
            updateDisplay(difference)
    }

    function updateDisplay(difference) {
        minutes = (difference / 60) | 0;
        seconds = (difference % 60) | 0;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;


        display.textContent = minutes + ':' + seconds

        if (difference <= 0) {
            start = Date.now() + 2000;
        }
    }

    if (!interval) {
       interval = setInterval(runTimer, 1000);
    } else {
        secondsPassedSincePause = duration - ((Date.now() - start) / 1000);
        clearInterval(interval);
        interval = false;
    } 

}



let workTimeDuration = config.workTimeDuration;

window.onload = function () {
    workTimeDuration = workTimeDuration < 10 ? '0' + workTimeDuration : workTimeDuration;
    
    timerDisplay.textContent = workTimeDuration + ':00'
}



timerDisplay.onclick = function () {
    let convertedWorkTime = workTimeDuration * 60

    // if (config.isInitialRun === true) {
        setUpTimer(convertedWorkTime, timerDisplay);
        // config.isInitialRun = false;
    
};




//////////////////////////////////////////////

function clickOnSettings() {
    icon.classList.toggle('rotate')

    menu.classList.toggle('showMenu')
    box.classList.toggle('showMenu')

    timerDisplay.classList.toggle('hideTimer')

} 

function switchThemes() {
    const dark = document.querySelector('#dark');
    const light = document.querySelector('#light');

    light.addEventListener('click', switchThemeToLight)

        function switchThemeToLight() {
            container.classList.add('light') 
            container.classList.remove('dark')
            
            icon.classList.remove('darkIcon')
            
            light.classList.add('clicked')
            dark.classList.remove('clicked')
        }

    dark.addEventListener('click', switchThemeToDark)

        function switchThemeToDark() {
            container.classList.add('dark') 
            container.classList.remove('light')
            
            icon.classList.add('darkIcon')
            
            dark.classList.add('clicked')
            light.classList.remove('clicked')
        }
}

