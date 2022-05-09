const icon = document.querySelector('#icon');
const settings = document.querySelector('#settings');
const menu = document.querySelector('.menu');
const box = document.querySelector('#box');
const timer = document.querySelector('.timer')

createSettingsContents()

icon.addEventListener('click', clickOnSettings)



//////////////////////////////////////////////

function createSettingsContents() {

const mode = document.createElement('div');
    mode.classList.add('mode')
    mode.textContent = 'dark/light'
    menu.appendChild(mode)

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


