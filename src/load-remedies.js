export default loadRemedies;

function loadRemedies() {
    const main = document.querySelector('main');
    main.textContent = '';
    return main.append(createRemedyPage()); 
}

function createRemedyPage() {
    const box_parent = document.createElement('div');
    box_parent.classList.add('box');
    const heading2 = document.createElement('h2');
    heading2.innerText = 'Our Remedies';
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const item1 = createRemedyItem('../src/images/assortment.jpg', 'We offer a wide assortment of various remedies', 'various herbs and bottles', 'span-two');
    const item2 = createRemedyItem('../src/images/flasks.jpg', 'The perfect ingredients for every cure', 'many flasks on a shelf');
    const item3 = createRemedyItem('../src/images/mortar-pestle.jpg', 'Only natural ingredients', 'mortar and pestle');
    const item4 = createRemedyItem('../src/images/black-tea.jpg', 'Aromatic black tea to stimulate your senses', 'black tea');
    const item5 = createRemedyItem('../src/images/herbal-tea.jpg', 'Freshly gathered ingredients', 'a bag of herbs next to a cup', 'span-two');
    const item6 = createRemedyItem('../src/images/hanging-herbs.jpg', 'A big supply of healing herbs', 'dried hanging herbs');
    const item7 = createRemedyItem('../src/images/green-paste.jpg', 'Soothing ointments to treat your wounds', 'green paste in a mortar with pestle', 'span-two');
    const item8 = createRemedyItem('../src/images/red-tea.jpg', 'Calming tea', 'red tea with herbs');
    const item9 = createRemedyItem('../src/images/tools.jpg', 'Every remedy is carefully made by hand', 'tools and ingredients on a table');
    const item10 = createRemedyItem('../src/images/spoons.jpg', 'A variety of nature\'s finest herbs', 'different herbs on spoons', 'span-two');
    const item11 = createRemedyItem('../src/images/herbs-cup.jpg', 'The most potent remedies', 'herbs in a cup');
    
    itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11);
    box_parent.append(heading2, itemContainer);

    return box_parent;
}

function createRemedyItem(url, caption, altText, optionalClass) {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.classList.add('remedy-image')
    image.src = url;
    image.alt = altText;
    const figureCaption = document.createElement('figcaption');
    figureCaption.innerText = caption;

    figure.append(image, figureCaption);
    if (optionalClass) figure.classList.add(optionalClass);
    
    return figure;
}

