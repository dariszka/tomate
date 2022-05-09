const icon = document.querySelector('#icon');
const settings = document.querySelector('#settings');

icon.addEventListener('click', clickOnSettings)

createSettingsContents()

//////////////////////////////////////////////

function createSettingsContents() {

const mode = document.createElement('div');
    mode.classList.add('mode')
    mode.textContent = 'dark/light'
    settings.appendChild(mode)

const workTime = document.createElement('div');
    workTime.classList.add('work')
    workTime.textContent = 'work time: '
    settings.appendChild(workTime)

const breakTime = document.createElement('div');
    breakTime.classList.add('break')
    breakTime.textContent = 'break time: '
    settings.appendChild(breakTime)

const progress = document.createElement('div');
    progress.classList.add('progress')
    progress.textContent = '/goal '
    settings.appendChild(progress)

}

function clickOnSettings() {
    icon.classList.toggle('rotate')
} 

function showSettingsContents() {
    
}
