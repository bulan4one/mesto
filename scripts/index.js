let nameInput = document.querySelector(".popup__username");
let jobInput = document.querySelector(".popup__description");
let popup = document.querySelector(".popup");
let changeNameButton = document.querySelector("#change-profile-name");
changeNameButton.addEventListener("click", function (event) {
  popup.classList.add("popup__opened");
});

let closePopup = document.querySelector(".popup__close");
closePopup.addEventListener("click", function (event) {
  popup.classList.remove("popup__opened");
});

let formElement = document.querySelector("#form-edit");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form");
});

