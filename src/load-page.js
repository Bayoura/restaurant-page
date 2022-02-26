export default loadPage;

function loadPage() {
    const content_parent = document.getElementById('content');
    const main = document.createElement('main');
    return content_parent.append(createHeader(), main);
}

function createHeader() {
    const header_parent = document.createElement('header');
    const logoContainer_parent = document.createElement('div');
    logoContainer_parent.classList.add('logo-container');
    logoContainer_parent.tabIndex = 0;
    const nav_parent = document.createElement('nav');
    nav_parent.classList.add('menu');
    const logoName = document.createElement('h1');
    logoName.innerText = 'Sweet Relief';
    const logoImg = document.createElement('img');
    logoImg.src = '../src/images/sweet-relief-logo.png';
    logoImg.alt = 'mortar and pestle: the sweet relief logo';

    logoContainer_parent.append(logoName, logoImg);
    nav_parent.append(createLink('Our Remedies', 'remedies'), createLink('About', 'about'), createLink('Contact', 'contact'));
    header_parent.append(logoContainer_parent, nav_parent);
    return header_parent;
}

function createLink(text, id) {
    const link = document.createElement('button');
    link.innerText = text;
    link.id = id;
    link.classList.add('nav-link');
    return link;
}


