const body = document.querySelector('body');
const btnTheme = document.querySelector('#theme');
const r = document.querySelector(':root');

btnTheme.addEventListener('change', e => {
    changeTheme(e);
});

function changeTheme(event) {
    if (event.target.checked) {
        changeThemeToLight();
    } else {
        changeThemeToDark();
    }
}

function changeThemeToLight() {
    body.style.setProperty('background-image', 'url(../images/bg-desktop-light.jpg')
    r.style.setProperty('--background-color', 'hsl(236, 33%, 92%)');
    r.style.setProperty('--box-color', 'hsl(0, 0%, 98%)');
    r.style.setProperty('--font-color', 'hsl(235, 19%, 35%)');
    r.style.setProperty('--hover-font-color', 'hsl(235, 19%, 35%)');
    r.style.setProperty('--completed-task-color', 'hsl(233, 11%, 84%)');
    r.style.setProperty('--check-border-color', 'hsl(233, 11%, 84%)');
    r.style.setProperty('--footer-font-color', 'hsl(236, 9%, 61%)');
}

function changeThemeToDark() {
    body.style.setProperty('background-image', 'url(../images/bg-desktop-dark.jpg')
    r.style.setProperty('--background-color', 'hsl(235, 21%, 11%)');
    r.style.setProperty('--box-color', 'hsl(235, 24%, 19%)');
    r.style.setProperty('--font-color', 'hsl(234, 39%, 85%)');
    r.style.setProperty('--hover-font-color', 'hsl(236, 33%, 92%)');
    r.style.setProperty('--completed-task-color', 'hsl(234, 11%, 52%)');
    r.style.setProperty('--check-border-color', 'hsl(237, 14%, 26%)');
}
