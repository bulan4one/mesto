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
closePopup.addEventListener("click", popupClose.apply(null, popupChangeProfile));

let formElement = document.querySelector("#form-edit");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose(popupChangeProfile);
});

//Создание карточек по шаблону
const elements = document.querySelector(".elements");

initialCards.forEach(function (card) {
  const cardTemplate = document
    .querySelector("#cardTemplate")
    .content.cloneNode(true);
  const cardHeading = cardTemplate.querySelector(".element__title");
  cardHeading.textContent = card.name;
  const cardImage = cardTemplate.querySelector(".element__img");
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.alt);
  elements.append(cardTemplate);
});

let popupAddCard = document.querySelector("#popup-add-card");
let buttonOpen = document.querySelector(".profile__add-place");
buttonOpen.addEventListener("click", function (event) {
  popupAddCard.classList.add("popup_opened");

  event.preventDefault();
});
