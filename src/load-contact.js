export default loadContact;

function loadContact() {
    const main = document.querySelector('main');
    main.textContent = ''; 
    return main.append(createContactPage());
} 

function createContactPage() {
    const box_parent = document.createElement('div');
    box_parent.classList.add('box');
    
    box_parent.append(createAddressBox(), createContactForm());
    return box_parent;
}

function createAddressBox() {
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container'); 
    const heading2 = document.createElement('h2');
    heading2.innerText = 'Visit us';
    const address = document.createElement('p');
    address.innerText = 'Address: Cabin in the woods';
    const note = document.createElement('p');
    note.innerText = 'Read below for detailed directions:';

    const list_parent = document.createElement('ul');
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');
    listItem1.innerText = 'Turn left at the third tree on your right';
    listItem2.innerHTML = 'Walk towards the holly tree (do <strong>not</strong> eat the berries, though! They are poisonous! <em>(Rest assured, we always have the cure on hand, just in case.)</em>';
    listItem3.innerText = 'Follow the trail of violet starflowers, and you cannot miss us!';

    list_parent.append(listItem1, listItem2, listItem3);
    addressContainer.append(heading2, address, note, list_parent);
    
    return addressContainer;
}

function createContactForm() {
    const contactContainer = document.createElement('div');
    const contactForm = document.createElement('form'); 
    contactForm.onsubmit = 'return false';
    const heading2 = document.createElement('h2');
    heading2.innerText = 'Want us to prepare a custom treatment for you and deliver it to your doorstep?';
    const service = document.createElement('p');
    service.innerText = 'Also, feel free to contact us with any questions regarding our services. We\'re also happy to counsel you on any health or medicine related questions! Every serious request will receive an answer.';
    const nameSection = createSection('text', 'fullName', 'Your full name', 'Mary Sue');
    const mailSection = createSection('email', 'mail', 'Your e-mail address', 'realMail@realistic.com');
    const addressSection = createSection ('text', 'address', 'Your address (only necessary for deliveries)', 'Real house in a real place');
    
    const descriptionSection = document.createElement('section');
    const labelElement = document.createElement('label');
    labelElement.htmlFor = 'text-field';
    labelElement.innerText = 'Please state your request. When describing ailments, please be as detailed as possible';
    const textAreaElement = document.createElement('textarea');
    textAreaElement.id = 'text-field';
    textAreaElement.placeholder = 'After eating some strange red berries I got nauseous and had to vomit multiple times. I also feel drowsy, and kind of hot and cold at the same time. I\'ve also experienced explosive diarrhea. Am I dying?? Please send help.';
    textAreaElement.required = true;
    descriptionSection.append(labelElement, textAreaElement);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Send';

    contactForm.append(nameSection, mailSection, addressSection, descriptionSection, submitButton);
    contactContainer.append(heading2, service, contactForm);
    return contactContainer;
}

function createSection(type, id, labelText, placeholder) {
    const inputLabelSection = document.createElement('section');
    const labelElement = document.createElement('label');
    labelElement.htmlFor = id;
    labelElement.innerText = labelText;
    const inputElement = document.createElement('input');
    inputElement.id = id;
    inputElement.type = type;
    inputElement.placeholder = placeholder;
    if (id !== 'address') inputElement.required = true;
    
    inputLabelSection.append(labelElement, inputElement);
    return inputLabelSection;
}