import "../css/reset.css";
import "../css/style.css";
import { downloadPDF } from "./downloadButton.js";

document
  .querySelector("#downloadResume")
  .addEventListener("click", () => downloadPDF());

const handleBlur = (event) => {
  localStorage.setItem(event.target.id, event.target.innerHTML);
};
document.querySelectorAll("[contenteditable]").forEach((element) => {
  element.addEventListener("blur", handleBlur);
});

const loadFromLocalStorage = () => {
  document.querySelectorAll("[contenteditable]").forEach((element) => {
    element.innerHTML = localStorage.getItem(element.id) || element.innerHTML;
  });
};

window.addEventListener("load", loadFromLocalStorage);
