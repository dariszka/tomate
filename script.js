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






//////////////////////////////////////////////


function createSettingsContents() {

const theme = document.createElement('div');
    theme.classList.add('theme')
    theme.innerHTML = "<span id='light'>Light</span><span>/</span><span id='dark'>Dark</span>"
    menu.appendChild(theme)

const workTime = document.createElement('div');
    workTime.classList.add('work')
    workTime.textContent = 'work time: '
    menu.appendChild(workTime)

const breakTime = document.createElement('div');
    breakTime.classList.add('break')
    breakTime.textContent = 'break time: '
    menu.appendChild(breakTime)

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

