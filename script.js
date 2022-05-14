const container = document.querySelector('#container');
const icon = document.querySelector('.icon');
const settings = document.querySelector('#settings');
const menu = document.querySelector('.menu');
const box = document.querySelector('#box');
const timer = document.querySelector('.timer')

createSettingsContents()

icon.addEventListener('click', clickOnSettings)

switchThemes()

///////////////////////////////////////////////

function startTimer(duration, display) {

    let start = Date.now(),
            difference,
            //hours,
            minutes, 
            seconds;

    function timer() {
        difference = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (difference / 60) | 0;
        seconds = (difference % 60) | 0;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;


        display.textContent = minutes + ':' + seconds

        if (difference <= 0) {
            start = Date.now() + 1000;
        }

        // if (difference > 3600) {
        //    hours = () | 0;

        //    display.textContent = hours + minutes + ':' + seconds
        // }
    };
    timer()
    setInterval(timer, 1000);
}


let workTime = 5;

window.onload = function () {
    workTime = workTime < 10 ? '0' + workTime : workTime;
    
    timer.textContent = workTime + ':00'
}

timer.onclick = function () {
    let convertedWorkTime = workTime * 60
        display = document.querySelector('.timer');
    startTimer(convertedWorkTime, display);
};




//////////////////////////////////////////////


function createSettingsContents() {

const theme = document.createElement('div');
    theme.classList.add('theme')
    theme.innerHTML = "<span id='light'>Light</span><span>/</span><span id='dark'>Dark</span>"
    menu.appendChild(theme)

const workTimeDiv = document.createElement('div');
    workTimeDiv.classList.add('work')
    workTimeDiv.textContent = 'work time: '
    menu.appendChild(workTimeDiv)

const breakTimeDiv = document.createElement('div');
    breakTimeDiv.classList.add('break')
    breakTimeDiv.textContent = 'break time: '
    menu.appendChild(breakTimeDiv)

const progress = document.createElement('div');
    progress.classList.add('progress')
    progress.textContent = '/goal'
    menu.appendChild(progress)

}

function clickOnSettings() {
    icon.classList.toggle('rotate')

    menu.classList.toggle('showMenu')
    box.classList.toggle('showMenu')

    timer.classList.toggle('hideTimer')

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

