icon.addEventListener('click', clickOnSettings)
sound.addEventListener('click', switchSoundOnOff)

switchThemes()

const progress = document.querySelector('.progress')
const goalToday = document.querySelector('.goalToday').nodeValue

progress.textContent = sessionCount + '/' + goalToday

function clickOnSettings() {
    icon.classList.toggle('rotate')

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
}
