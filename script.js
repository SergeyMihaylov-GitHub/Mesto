let popup = document.querySelector('.popup');

let openPopup = document.querySelector('.profile__edit');
let openClose = document.querySelector('.popup__button-close');

let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

let popupName = document.querySelector('.popup__field_type_name');
let popupProfession = document.querySelector('.popup__field_type_profession');

let popupSave = document.querySelector('.popup__form');


function offClick(){
    popup.classList.remove('popup_opened');
};

function onClick(){
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
};

function reName(evt){
    evt.preventDefault();
    profilName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    offClick();
};

openClose.addEventListener('click', offClick);

openPopup.addEventListener('click', onClick);

popupSave.addEventListener('submit', reName);