let blockPopup = document.querySelector('.popup');
let nameFromPage = document.querySelector('.profile__name');
let jobFromPage = document.querySelector('.profile__profession');
let nameFromForm = document.querySelector('.popup__input_name');
let jobFromForm = document.querySelector('.popup__input_work');
let openBlockPopup = document.querySelector('.profile__pic-edit');
let closeBlockPopup = blockPopup.querySelector('.popup__close');


function togglePopup(){
  blockPopup.classList.toggle('popup_opened');
  nameFromForm.value = nameFromPage.textContent;
  jobFromForm.value = jobFromPage.textContent;
}

function savePopup (event){
  event.preventDefault();
  nameFromPage.textContent = nameFromForm.value;
  jobFromPage.textContent = jobFromForm.value;
  closePopup();
}

function closePopup(){
  blockPopup.classList.remove('popup_opened');
}

openBlockPopup.addEventListener('click', togglePopup);

blockPopup.addEventListener('submit', savePopup);

closeBlockPopup.addEventListener('click', togglePopup);

