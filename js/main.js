document.addEventListener("DOMContentLoaded", checkThemeChange);

function checkThemeChange() {
    let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    let colorSchemeChangeHandler = event => {
        if (event.matches) {
            document.documentElement.className = 'dark';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.className = 'light';
            localStorage.setItem('theme', 'light');
        }
    }
    colorSchemeQueryList.addEventListener('change', colorSchemeChangeHandler);
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.documentElement.className = storedTheme;
    } else if (colorSchemeQueryList.matches) {
        document.documentElement.className = 'dark';
    } else {
        document.documentElement.className = 'light';
    }
}

document.getElementById('themeButton').addEventListener('click', function() {
    if (document.documentElement.className === 'dark') {
        document.documentElement.className = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.className = 'dark';
        localStorage.setItem('theme', 'dark');
    }
});