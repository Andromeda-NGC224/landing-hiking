`use strict`;

document.addEventListener("DOMContentLoaded", function () {
  const buyBtns = document.querySelectorAll(`.buy-button`);
  const modalOrder = document.querySelector(`.modal-container`);
  const modalBtnClose = document.querySelector(".modal-button-close");
  const formModal = document.querySelector(`.modal-form`);
  const formContacts = document.querySelector(`.contact-form`);
  const modalContainerGreen = document.querySelector(`.modal-container-green`);
  const modalBtnCloseGreen = document.querySelector(
    ".modal-container-green .modal-button-close"
  );

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
      modalContainerGreen.classList.add(`is-open`);
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
    if (!userName || !userPhone || !userEmail || !userComment || !userPrivacy) {
      alert("Заповніть всі поля, будь ласка.");
    } else {
      formContacts.reset();
      modalContainerGreen.classList.add(`is-open`);
    }
  });

  modalBtnCloseGreen.addEventListener(`click`, () => {
    modalContainerGreen.classList.remove(`is-open`);
  });

  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookie-notice").style.display = "block";
  }
  document
    .getElementById("accept-cookies")
    .addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", true);
      document.getElementById("cookie-notice").style.display = "none";
    });
});
