const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_username");
const jobInput = document.querySelector(".popup__input_type_description");
const popupChangeProfile = document.querySelector("#popup-change-profile");
const changeNameButton = document.querySelector("#change-profile-name");
const inputPlaceUrl = document.querySelector(".popup__input_image");
const inputPlaceName = document.querySelector(".popup__input_name");
const popupFullPic = document.querySelector("#popup-full-image");
const popupFullPicImage = popupFullPic.querySelector(".popup__pic");
const popupFullPicDescription = document.querySelector(
  ".popup__pic-description"
);

changeNameButton.addEventListener("click", function (event) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupChangeProfile);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popupCloseButton) {
  popupCloseButton.classList.remove("popup_opened");
}

const closePopupButton = document.querySelector(".popup__close");
closePopupButton.addEventListener("click", function () {
  closePopup(popupChangeProfile);
});

const closePopupFullImage = popupFullPic.querySelector(".popup__close");
closePopupFullImage.addEventListener("click", function () {
  closePopup(popupFullPic);
});

const formElement = document.querySelector("#form-edit");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupChangeProfile);
  form.reset();
});

//Создание карточек по шаблону
const elements = document.querySelector(".elements");

function createHtmlCard(card) {
  const htmlCard = document
    .querySelector("#cardTemplate")
    .content.cloneNode(true);
  const cardHeading = htmlCard.querySelector(".element__title");
  cardHeading.textContent = card.name;
  const cardImage = htmlCard.querySelector(".element__img");
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  const deleteButton = htmlCard.querySelector(".element__delete");
  deleteButton.addEventListener("click", handleDeleteButtonClick);

  // Лайки

  const likeActive = htmlCard.querySelector(".element__likes");
  likeActive.addEventListener("click", function (event) {
    likeActive.classList.toggle("element__likes_active");
  });

  // Модульная картинка

  cardImage.addEventListener("click", function (event) {
    popupFullPicImage.setAttribute("src", card.link);
    popupFullPicImage.setAttribute("name", card.name);
    popupFullPicImage.setAttribute("alt", card.name);

    popupFullPicDescription.textContent = cardHeading.textContent;
    openPopup(popupFullPic);
  });

  return htmlCard;
}

initialCards.forEach(function (card) {
  const htmlCard = createHtmlCard(card);
  addHtmlCardToDom(htmlCard, false);
});

function addHtmlCardToDom(htmlCard, addToStart) {
  if (addToStart) {
    elements.prepend(htmlCard);
  } else {
    elements.append(htmlCard);
  }
}

function handleDeleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".element");
  card.remove();
}

//Попап карточек

const popupAddCard = document.querySelector("#popup-add-card");
const addCardClose = popupAddCard.querySelector(".popup__close");
const buttonOpen = document.querySelector(".profile__add-place");
buttonOpen.addEventListener("click", function (event) {
  openPopup(popupAddCard);
});

addCardClose.addEventListener("click", function () {
  closePopup(popupAddCard);
  form.reset();
});

//Добавление новых карточек

const form = document.querySelector("#form-edit-cards");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const card = {
    name: inputPlaceName.value,
    link: inputPlaceUrl.value,
  };

  const htmlCard = createHtmlCard(card);
  addHtmlCardToDom(htmlCard, true);
  form.reset();
  closePopup(popupAddCard);
}
