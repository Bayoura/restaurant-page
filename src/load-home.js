import loadRemedies from "./load-remedies";
export default loadHomepage;

function loadHomepage() {
    const main = document.querySelector('main');
    main.textContent = '';
    return main.append(createHomepage());
}

function createHomepage() {
    const box_parent = document.createElement('div');
    box_parent.classList.add('box');
    const heading2 = document.createElement('h2');
    heading2.innerText = 'Welcome, weary traveller!';
    const button = document.createElement('button');
    button.innerText = 'Look at what we have to offer';
    button.type = 'button';
    button.addEventListener('click', () => {
        document.querySelector('.logo-container').classList.remove('current');
        document.getElementById('remedies').classList.add('current');
        loadRemedies();
    });
    
    box_parent.append(heading2, createParagraph('Whatever ailment plagues you, be assured, we got a cure. Our treatments range from medicinal teas over healing herbs and soothing ointments to magic potions.'), createParagraph('Whether you suffer from a headache, a flesh wound or food poisoning — we have the remedy to provide you with sweet relief.'), button);
    
    return box_parent;
}

function createParagraph(text) {
    const para = document.createElement('p');
    para.innerText = text;
    return para;
}

