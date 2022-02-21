import './styles.css';
import loadPage from './load-page.js';
import loadHomepage from './load-home.js';
import loadRemedies from './load-remedies.js';

loadInitialPage();

function loadInitialPage() {
    loadPage();
    loadHomepage();
    addMenuEvents();
}

function addMenuEvents() {
    const remedies = document.getElementById('remedies');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    remedies.addEventListener('click', loadRemedies);
    about.addEventListener('click', loadAbout);
    contact.addEventListener('click', loadContact);
}