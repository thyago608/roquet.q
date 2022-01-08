export default function Modal() {
  const wrapperModal = document.querySelector(".modal-wrapper");
  const buttonCancel = document.querySelector(".buttons button.cancel");

  buttonCancel.addEventListener("click", close);

  function open() {
    wrapperModal.classList.add("active");
  }

  function close() {
    wrapperModal.classList.remove("active");
  }

  return {
    open,
  };
}
