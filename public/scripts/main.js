import Modal from "./modal.js";

const modal = Modal();

const buttonsCheck = document.querySelectorAll(".actions button.check");
const buttonsDelete = document.querySelectorAll(".actions button.delete");

for (const button of buttonsCheck) {
  button.addEventListener("click", (event) => modal.open());
}

for (const button of buttonsDelete) {
  button.addEventListener("click", (event) => modal.open());
}
