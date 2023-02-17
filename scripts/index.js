let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let nameInput = document.querySelector(".popup__username");
let jobInput = document.querySelector(".popup__description");
let popup = document.querySelector(".popup");
let changeNameButton = document.querySelector("#change-profile-name");

changeNameButton.addEventListener("click", function (event) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popup.classList.add("popup__opened");
});

function popupClose() {
  popup.classList.remove("popup__opened");
}

let closePopup = document.querySelector(".popup__close");
closePopup.addEventListener("click", function (event) {
  popupClose();
});

let formElement = document.querySelector("#form-edit");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
});
