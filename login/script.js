const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link"); // Тепер клас правильний
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", (event) => {
  event.preventDefault(); // Запобігає оновленню сторінки
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", (event) => {
  event.preventDefault(); // Запобігає оновленню сторінки
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", (event) => {
  event.preventDefault(); // Запобігає оновленню сторінки
  wrapper.classList.remove("active-popup");
});
