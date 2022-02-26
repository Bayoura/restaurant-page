export default loadAbout;

function loadAbout() {
    const main = document.querySelector('main');
    main.textContent = '';
    return main.append(createAboutPage());
}

function createAboutPage() {
    const box_parent = document.createElement('div');
    box_parent.classList.add('box');

    const heading2 = document.createElement('h2');
    heading2.innerText = 'About Us';
    const paragraph1 = document.createElement('p');
    paragraph1.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const paragraph2 = document.createElement('p');
    paragraph2.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';

    box_parent.append(heading2, paragraph1, paragraph2);

    return box_parent;
}