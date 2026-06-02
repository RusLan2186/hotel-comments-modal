import "./styles/main.scss";



const btn = document.querySelector(".page__open-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

if (btn && overlay && closeModal && modal) {
  btn.addEventListener("click", () => {
    overlay.classList.add("is-open");
  });

  closeModal.addEventListener("click", () => {
    overlay.classList.remove("is-open");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("is-open");
  });

  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
