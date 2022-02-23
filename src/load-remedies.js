export default loadRemedies;

function loadRemedies() {
    const main = document.querySelector('main');
    main.textContent = '';
    return main.append(createRemedyPage());
}

function createRemedyPage() {
    const box_parent = document.createElement('div');
    box_parent.classList.add('box');
    // const heading2 = document.createElement('h2');
    // heading2.innerText = ''
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const item1 = createRemedyItem('../src/images/assortment.jpg', 'green paste', 'span-two');
    const item2 = createRemedyItem('../src/images/flasks.jpg', 'green paste');
    const item3 = createRemedyItem('../src/images/mortar-pestle.jpg', 'green paste');
    const item4 = createRemedyItem('../src/images/black-tea.jpg', 'green paste');
    const item5 = createRemedyItem('../src/images/herbal-tea.jpg', 'green paste', 'span-two');
    const item6 = createRemedyItem('../src/images/hanging-herbs.jpg', 'green paste');
    const item7 = createRemedyItem('../src/images/green-paste.jpg', 'green paste', 'span-two');
    const item8 = createRemedyItem('../src/images/red-tea.jpg', 'green paste');
    const item9 = createRemedyItem('../src/images/tools.jpg', 'green paste');
    const item10 = createRemedyItem('../src/images/spoons.jpg', 'green paste', 'span-two');
    const item11 = createRemedyItem('../src/images/herbs-cup.jpg', 'green paste');
    
    itemContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11);
    box_parent.append(itemContainer);

    return box_parent;
}

function createRemedyItem(url, caption, optionalClass) {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.classList.add('remedy-image')
    image.src = url;
    image.alt = caption;
    const figureCaption = document.createElement('figcaption');
    figureCaption.innerText = caption;

    figure.append(image, figureCaption);
    if (optionalClass) figure.classList.add(optionalClass);
    
    return figure;
}

