export function downloadPDF() {
  // Настроить элементы для преобразования
  const element = document.querySelector("main");

  const options = {
    margin: 0,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  // Преобразование элемента в PDF и начало загрузки
  html2pdf().from(element).set(options).save();
}
