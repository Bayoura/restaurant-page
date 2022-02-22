export default loadAbout;

function loadAbout() {
    const main = document.querySelector('main');
    main.textContent = '';
    return main.append(createRemedyOptions());
}

function createRemedyOptions() {
    const heading = document.createElement('h1');
    heading.innerText = 'About';
    return heading;
}