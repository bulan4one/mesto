const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "Архыз",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "Архыз",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "Архыз",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "Архыз",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Архыз",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "Архыз",
  },
];

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let nameInput = document.querySelector(".popup__input_type_username");
let jobInput = document.querySelector(".popup__input_type_description");
let popupChangeProfile = document.querySelector("#popup-change-profile");
let changeNameButton = document.querySelector("#change-profile-name");

changeNameButton.addEventListener("click", function (event) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popupChangeProfile.classList.add("popup_opened");
});

function popupClose(popup) {
  popup.classList.remove("popup_opened");
}

let closePopup = document.querySelector(".popup__close");
closePopup.addEventListener("click", function () {
  popupClose(popupChangeProfile);
});

let formElement = document.querySelector("#form-edit");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose(popupChangeProfile);
});

//Создание карточек по шаблону
const elements = document.querySelector(".elements");

function createCard(card) {
  const cardTemplate = document
    .querySelector("#cardTemplate")
    .content.cloneNode(true);
  const cardHeading = cardTemplate.querySelector(".element__title");
  cardHeading.textContent = card.name;
  const cardImage = cardTemplate.querySelector(".element__img");
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.alt);
  const deleteButton = cardTemplate.querySelector(".element__delete");
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  elements.append(cardTemplate);
};

initialCards.forEach(createCard)

function handleDeleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".element");
  card.remove();
}
//Попап карточек

let popupAddCard = document.querySelector("#popup-add-card");
let addCardClose = popupAddCard.querySelector(".popup__close");
let buttonOpen = document.querySelector(".profile__add-place");
buttonOpen.addEventListener("click", function (event) {
  popupAddCard.classList.add("popup_opened");
});

addCardClose.addEventListener("click", function () {
  popupClose(popupAddCard);
});

// const submit = popupAddCard.querySelector('.popup__submit')
// form.addEventListener('submit', handleFormSubmit)

// function handleFormSubmit(event) {
//   event.preventDefault()
//   const submit = event.target
//   const name = popupAddCard.querySelector('.element__title').value
//   const link = popupAddCard.querySelector('.element__img').value
//   const card = { name, link }

// createCard(card)
// }


const form = document.querySelector('.popup__form')
form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault()
  const form = event.target
  const link = form.querySelector('.popup__input_image').value
  const name = form.querySelector('.popup__input_name').value
  const card = {
    name, link
  }
  createCard(card)
}
