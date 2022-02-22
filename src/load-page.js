// function createPage() {
//     // create elements
//     const content_parent = document.getElementById('content');
//     // header
//     const header_parent = document.createElement('header');
//     const logoContainer_parent = document.createElement('div');
//     const logoName = document.createElement('h1');
//     const logoImg = document.createElement('img');
//     const nav_parent = document.createElement('nav');
//     const ul_parent = document.createElement('ul');
//     const liOne = document.createElement('li');
//     const liTwo = document.createElement('li');
//     const liThree = document.createElement('li');
//     const linkOne = document.createElement('a');
//     const linkTwo = document.createElement('a');
//     const linkThree = document.createElement('a');
//     // box content
//     const welcomeBox_parent = document.createElement('div');
//     const heading2 = document.createElement('h2');
//     const paragraphOne = document.createElement('p');
//     const paragraphTwo = document.createElement('p');
//     const button = document.createElement('button');

//     // define elements
//     logoName.innerText = 'Sweet Relief';
//     logoImg.src = '../src/images/sweet-relief-logo.png';
//     logoImg.alt = 'a mortar and pestle: the sweet relief logo';
//     logoContainer_parent.tabIndex = 0;
//     linkOne.innerText = 'Our Remedies';
//     linkOne.setAttribute('href', '#');
//     linkTwo.innerText = 'About';
//     linkTwo.setAttribute('href', '#');
//     linkThree.innerText = 'Contact';
//     linkThree.setAttribute('href', '#');
//     heading2.innerText = 'Welcome, weary traveller!';
//     paragraphOne.innerText = 'Whatever ailment plagues you, be assured, we got a cure. Our treatments range from medicinal teas over healing herbs and soothing ointments to magic potions.';
//     paragraphTwo.innerText = 'Whether you suffer from a headache, a flesh wound or food poisoning — we have the remedy to provide you with sweet relief.';
//     button.innerText = 'Look at what we have to offer';
//     button.type = 'button';

//     // add classes
//     logoContainer_parent.classList.add('logo-container');
//     nav_parent.classList.add('menu');
//     linkOne.classList.add('nav-link');
//     linkTwo.classList.add('nav-link');
//     linkThree.classList.add('nav-link');
//     welcomeBox_parent.classList.add('welcome-box');

//     // append elements
//     logoContainer_parent.append(logoName, logoImg);
//     liOne.appendChild(linkOne);
//     liTwo.appendChild(linkTwo);
//     liThree.appendChild(linkThree);
//     ul_parent.append(liOne, liTwo, liThree);
//     nav_parent.append(ul_parent);
//     header_parent.append(logoContainer_parent, nav_parent);
//     welcomeBox_parent.append(heading2, paragraphOne, paragraphTwo, button);
    
    
//     content_parent.append(header_parent, welcomeBox_parent);

//     return content_parent;
// }

export default loadPage;

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
    logoImg.alt = 'a mortar and pestle: the sweet relief logo';

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

function loadPage() {
    const content_parent = document.getElementById('content');
    const main = document.createElement('main');
    return content_parent.append(createHeader(), main);
}

