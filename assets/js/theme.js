const THEMES = { SYSTEM: 'system', LIGHT: 'light', DARK: 'dark' };

const systemUsesDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
const themeMenu = document.getElementById('theme');

function checkThemeChange(event) {
	if (!themeMenu) return;

	let theme = localStorage.getItem('theme') || THEMES.SYSTEM;

	if (event?.type === 'click') {
		switch (true) {
			case theme === THEMES.SYSTEM:
				theme = THEMES.LIGHT;
				break;
			case theme === THEMES.LIGHT:
				theme = THEMES.DARK;
				break;
			case theme === THEMES.DARK:
				theme = THEMES.SYSTEM;
				break;
			default:
				return;
		}
	}

	themeMenu.title = theme[0].toUpperCase() + theme.slice(1);
	localStorage.setItem('theme', theme);

	if (theme === THEMES.SYSTEM) {
		theme = systemUsesDarkTheme.matches ? 'dark system' : 'light system';
	}

	document.documentElement.className = theme;
}

checkThemeChange({ type: 'DOMContentLoaded' });
systemUsesDarkTheme.addEventListener('change', checkThemeChange);
themeMenu?.addEventListener('click', checkThemeChange);
