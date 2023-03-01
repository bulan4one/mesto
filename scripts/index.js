const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "Архыз"
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let nameInput = document.querySelector(".popup__input_type_username");
let jobInput = document.querySelector(".popup__input_type_description");
let popup = document.querySelector(".popup");
let changeNameButton = document.querySelector("#change-profile-name");

changeNameButton.addEventListener("click", function (event) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popup.classList.add("popup_opened");
});

function popupClose() {
  popup.classList.remove("popup_opened");
}

let closePopup = document.querySelector(".popup__close");
closePopup.addEventListener("click", popupClose);

let formElement = document.querySelector("#form-edit");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
});

const elements = document.querySelector(".elements");

// //Создание карточек по-старинке

// initialCards.forEach(function (card) {
//   const cardsHTML = `<article class="element">
//   <button type="button" class="element__delete">Удалить</button>
//   <img src="${card.link}" alt="${card.alt}" class="element__img">
//   <div class="element__block">
//     <h2 class="element__title">${card.name}</h2>
//     <button type="button" title="Лайк" class="element__likes"></button>
//   </div>
// </article>`;

//   elements.insertAdjacentHTML("beforeend", cardsHTML);
// });

//Создание карточек по шаблону

initialCards.forEach(function(cards) {
  const cardTemplate = document.querySelector('#cardTemplate').content.cloneNode(true)
  elements.append(cardTemplate)
  const cardHeading = cardTemplate.querySelector('.element__title')
  cardHeading.textContent = 'bladsfdsafa'
  const cardImage = cardTemplate.querySelector('.element__img')
  cardImage.setAttribute('src', initialCards.link)
})