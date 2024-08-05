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
  element.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");

    // Добавляем элемент волны в контейнер
    this.appendChild(ripple);

    // Получаем размеры и позицию контейнера
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    // Позиция клика относительно контейнера
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Устанавливаем размеры и позицию волны
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    // Удаляем волну после завершения анимации
    ripple.addEventListener("animationend", () => ripple.remove());
  });
});

const loadFromLocalStorage = () => {
  document.querySelectorAll("[contenteditable]").forEach((element) => {
    element.innerHTML = localStorage.getItem(element.id) || element.innerHTML;
  });
};

window.addEventListener("load", loadFromLocalStorage);
