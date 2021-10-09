// Toggle Theme Color:
let themeChange = document.getElementById('theme-toggle');
let sectionThemeToggle = document.getElementById('fem-smd');

themeChange.addEventListener('click', e => {
    if(document.getElementById('theme-toggle').checked == true) {
        themeChange.value = 'light-theme';
        sectionThemeToggle.classList.remove('dark-theme-section');
        sectionThemeToggle.classList.add('light-theme-section');
    } 
    if(document.getElementById('theme-toggle').checked == false) {
        themeChange.value = 'dark-theme';
        sectionThemeToggle.classList.remove('light-theme-section');
        sectionThemeToggle.classList.add('dark-theme-section');
    }
});
