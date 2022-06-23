const breakAutostart = document.querySelector('.breakAutostart') 
const workAutostart = document.querySelector('.workAutostart')
const breakAutostartOn = document.querySelector('.breakAutostartOn') 
const breakAutostartOff = document.querySelector('.breakAutostartOff') 
const workAutostartOn = document.querySelector('.workAutostartOn')
const workAutostartOff = document.querySelector('.workAutostartOff')

icon.addEventListener('click', clickOnSettings)
sound.addEventListener('click', switchSoundOnOff)
workAutostart.addEventListener('click', switchWorkAutostartOnOff)
breakAutostart.addEventListener('click', switchBreakAutostartOnOff)

switchThemes()

function clickOnSettings() {
    icon.classList.toggle('rotate')

    //only shows changed values when timer isn't running
    if (isFirstRun) {
        updateTimerDisplay(workTimeDuration.value*60, workTimerDisplay)
        updateTimerDisplay(longBreakTimeDuration.value*60, longBreakTimerDisplay)
        updateTimerDisplay(breakTimeDuration.value*60, breakTimerDisplay)
    }

    menu.classList.toggle('showMenu')
    centralDisplay.classList.toggle('hide')
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
            setTimeout(function () {
                light.classList.remove('clicked')
            }, 700)
        }
        
        dark.addEventListener('click', switchThemeToDark)
        
        function switchThemeToDark() {
            container.classList.add('dark') 
            container.classList.remove('light')
            
            icon.classList.add('darkIcon')
            
            dark.classList.add('clicked')
            setTimeout(function () {
                dark.classList.remove('clicked')
            }, 700)
        }
}

function switchSoundOnOff() {
    soundOn.classList.toggle('hide')
    soundOff.classList.toggle('hide')

    sound.classList.add('clicked') 
    setTimeout(function () {
        sound.classList.remove('clicked')
    }, 700)
}

function switchBreakAutostartOnOff() {
    breakAutostartOff.classList.toggle('hide')
    breakAutostartOn.classList.toggle('hide')
    
    breakAutostart.classList.add('clicked') 
    setTimeout(function () {
        breakAutostart.classList.remove('clicked')
    }, 700)
}

function switchWorkAutostartOnOff() {
    workAutostartOff.classList.toggle('hide')
    workAutostartOn.classList.toggle('hide')
    
    workAutostart.classList.add('clicked') 
    setTimeout(function () {
        workAutostart.classList.remove('clicked')
    }, 700)
}
