`use strict`;

document.addEventListener("DOMContentLoaded", function () {
  const buyBtns = document.querySelectorAll(`.buy-button`);
  const modalOrder = document.querySelector(`.modal-container`);
  const modalBtnClose = document.querySelector(".modal-button-close");
  const formModal = document.querySelector(`.modal-form`);
  const formContacts = document.querySelector(`.contact-form`);

  buyBtns.forEach((btn) => {
    btn.addEventListener(`click`, (event) => {
      modalOrder.classList.add(`is-open`);
    });
  });

  if (modalBtnClose) {
    modalBtnClose.addEventListener(`click`, (event) => {
      modalOrder.classList.remove(`is-open`);
    });
  }

  formModal.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const userName = document.getElementById("user-name").value.trim();
    const userPhone = document.getElementById("user-phone").value.trim();
    const userEmail = document.getElementById("user-email").value.trim();
    const userComment = document.getElementById("user-comment").value.trim();
    const userPrivacy = document.getElementById("user-privacy-modal").checked;

    if (!userName || !userPhone || !userEmail || !userComment || !userPrivacy) {
      alert("Заповніть всі поля, будь ласка.");
    } else {
      formModal.reset();
      modalOrder.classList.remove(`is-open`);
      alert("DONE!!!!");
    }
  });

  formContacts.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const userName = document.getElementById("user-name-form").value.trim();
    const userPhone = document.getElementById("user-phone-form").value.trim();
    const userEmail = document.getElementById("user-email-form").value.trim();
    const userComment = document
      .getElementById("user-comment-form")
      .value.trim();
    const userPrivacy = document.getElementById("user-privacy-form").checked;
    const formInputTrim = formInput.value.trim();
    const formInputAreaTrim = formInputArea.value.trim();
    if (!userName || !userPhone || !userEmail || !userComment || !userPrivacy) {
      alert("Заповніть всі поля, будь ласка.");
    } else {
      formContacts.reset();
      alert("DONE!!!!");
    }
  });
});
