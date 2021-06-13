import './styles.css';
import menu from './menu.json';
import menuTemplate from './menu-template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const menuRef = document.querySelector('.js-menu');
const themeToggle = document.querySelector('.theme-switch__toggle');
const bodyTheme = document.querySelector('body');

themeToggle.addEventListener('change', onThemeToggleChange);


const menuMarkup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

bodyTheme.classList.add(Theme.LIGHT);
populateBodyTheme();



function onThemeToggleChange(event) {
    bodyTheme.classList.toggle(Theme.DARK);
    bodyTheme.classList.toggle(Theme.LIGHT);

    const currentTheme = bodyTheme.classList.value;
    localStorage.setItem('body-theme', currentTheme);
}

function populateBodyTheme() {
    const savedTheme = localStorage.getItem('body-theme');
    if (savedTheme) {
        bodyTheme.classList.value = savedTheme;
    }
}
