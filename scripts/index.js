const initialCards = [
  {
    name: "QATAR AIRLINES",
    link: "https://mobimg.b-cdn.net/v3/fetch/37/37be55ad00aa4f82f3af8e5166003040.jpeg",
    alt: "QATAR AIRLINES",
  },
  {
    name: "Самолет на закате",
    link: "https://proprikol.ru/wp-content/uploads/2020/12/samolety-krasivye-kartinki-25.jpg",
    alt: "Самолет на закате",
  },
  {
    name: "Самолет в небе",
    link: "https://wallart.ua/wplg/10004-orig.jpg",
    alt: "Самолет в небе",
  },
  {
    name: "QANTAS",
    link: "https://ne-kurim.ru/forum/attachments/vetton_ru_boeing747qantastheaustralianairlines-1920x1200_633-jpg.902790/",
    alt: "Самолет QANTAS",
  },
  {
    name: "МРИЯ",
    link: "https://mobimg.b-cdn.net/v3/fetch/86/8634e7a37adc0bc19c0718fabe782db5.jpeg",
    alt: "МРИЯ",
  },
  {
    name: "АН 124 РУСЛАН",
    link: "https://sun9-70.userapi.com/sun9-45/impg/z37-vGyLZO0ZiQqx3A2wZdQZukXIT_UJEssN0Q/ecQHDl7YFSY.jpg?size=1080x772&quality=96&sign=a518c688231134cba6f23cc5e5802193&c_uniq_tag=8pQBuSP-N0zA-NyT0DJ7UYFtWVb9tdeeQUXdKlm7W6s&type=album",
    alt: "АН 124 РУСЛАН",
  },
];

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let nameInput = document.querySelector(".popup__input_type_username");
let jobInput = document.querySelector(".popup__input_type_description");
let popupChangeProfile = document.querySelector("#popup-change-profile");
let changeNameButton = document.querySelector("#change-profile-name");

const inputPlaceUrl = document.querySelector(".popup__input_image");
const inputPlaceName = document.querySelector(".popup__input_name");

const popupFullPic = document.querySelector("#popup-full-image");

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

let closePopupFullImage = popupFullPic.querySelector(".popup__close");
closePopupFullImage.addEventListener("click", function () {
  popupClose(popupFullPic);
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

function createCard(card, addToStart) {
  const cardTemplate = document
    .querySelector("#cardTemplate")
    .content.cloneNode(true);  
    const cardHeading = cardTemplate.querySelector(".element__title");
  cardHeading.textContent = card.name;
  const cardImage = cardTemplate.querySelector(".element__img");
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  const deleteButton = cardTemplate.querySelector(".element__delete");
  deleteButton.addEventListener("click", handleDeleteButtonClick);

// Лайки

  let likeActive = cardTemplate.querySelector(".element__likes");
  likeActive.addEventListener("click", function (event) {
    likeActive.classList.toggle("element__likes_active"); 
  
});

// Модульная картинка

cardImage.addEventListener("click", function(event){
  popupFullPic.classList.add("popup_opened")
  const popupFullPicImage = popupFullPic.querySelector(".popup__pic")
  popupFullPicImage.setAttribute("src", card.link)
  popupFullPicImage.setAttribute("name", card.name)
  popupFullPicImage.setAttribute("alt", card.alt)

  let popupFullPicDescription = document.querySelector('.popup__pic-description')
    
})

if (addToStart) {
    elements.prepend(cardTemplate);
  } else {
    elements.append(cardTemplate);
  }
}

initialCards.forEach(function (card) {
  createCard(card, false);
});

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
  createCard(card, true);
  form.reset();
  popupClose(popupAddCard);
}


