const popup = document.querySelector('#popup');
const backdrop = document.querySelector('#popup-backdrop');
const nameElement = document.querySelector('#popup-item-name');
const valueElement = document.querySelector('#popup-item-value');
const closeButton = document.querySelector('.popup__close-button');
const body = document.querySelector('body');

const showPopup = (productName, productValue) => {
    popup.classList.add('show');
    backdrop.classList.add('show');
    body.classList.add('overflow-hidden');

    nameElement.innerHTML = productName;
    valueElement.innerHTML = productValue;
};

const closePopup = () => {
    popup.classList.remove('show');
    backdrop.classList.remove('show');
    body.classList.remove('overflow-hidden');
};

window.showPopup = showPopup;
window.closePopup = closePopup;

closeButton.addEventListener('click', closePopup);
