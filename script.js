let popup = document.querySelector('.popup');

let openPopup = document.querySelector('.profile__edit');
let openClose = document.querySelector('.popup__submit-close');

let profileTitle = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__profession');

let popupTitle = document.querySelector('.popup__field_name');
let popupSubtitle = document.querySelector('.popup__field_subname');

let popupSave = document.querySelector('.popup__form');


function offClick(){
    popup.classList.remove('popup_opened');
};

function onClick(){
    popup.classList.add('popup_opened');
    popupTitle.value = profileTitle.textContent;
    popupSubtitle.value = profileSubtitle.textContent;
};

function reName(evt){
    evt.preventDefault();
    profileTitle.textContent = popupTitle.value;
    profileSubtitle.textContent = popupSubtitle.value;
    offClick();
};

openClose.addEventListener('click', offClick);

openPopup.addEventListener('click', onClick);

popupSave.addEventListener('submit', reName);