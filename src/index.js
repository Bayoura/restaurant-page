import './styles.css';
import loadPage from './load-page.js';
import loadHomepage from './load-home.js';
import loadRemedies from './load-remedies.js';
import loadAbout from './load-about.js';
import loadContact from './load-contact.js';

loadInitialPage();

function loadInitialPage() {
    loadPage();
    loadHomepage();
    const logo = document.querySelector('.logo-container');
    logo.classList.add('current');
    addMenuEvents();
}

function addMenuEvents() {
    const logo = document.querySelector('.logo-container');
    const remedies = document.getElementById('remedies');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');

    logo.addEventListener('click', button => {
        if (button.currentTarget.classList.contains('current')) {
            return;
        } else {
            setCurrentClass(button.currentTarget);
            loadHomepage();
        }
    })
    remedies.addEventListener('click', button => {
        if (button.target.classList.contains('current')) {
            return;
        } else {
            setCurrentClass(button.target);
            loadRemedies();
        }
    });
    about.addEventListener('click', button => {
        if (button.target.classList.contains('current')) {
            return;
        } else {
            setCurrentClass(button.target);
            loadAbout();
        }
    });
    contact.addEventListener('click', button => {
        if (button.target.classList.contains('current')) {
            return;
        } else {
            setCurrentClass(button.target);
            loadContact();
        }
    }); 
}

function setCurrentClass(clickedButton) {
    if (clickedButton.classList.contains('current')) return;

    const logo = document.querySelector('.logo-container');
    if (logo !== clickedButton) {
        logo.classList.remove('current');
    }

    const buttons = document.querySelectorAll('.nav-link');
    buttons.forEach(button => {
        if (button != clickedButton) button.classList.remove('current');
    });
    clickedButton.classList.add('current');
}