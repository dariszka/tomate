icon.addEventListener('click', clickOnSettings)

switchThemes()

function clickOnSettings() {
    icon.classList.toggle('rotate')

    menu.classList.toggle('showMenu')
    box.classList.toggle('showMenu')

    timerDisplays.classList.toggle('hideTimer')
} 

let timeout 

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
