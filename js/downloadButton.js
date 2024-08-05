export function downloadPDF() {
  const element = document.querySelector("#resume");

  const options = {
    margin: 2,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.95 },
    html2canvas: {
      scale: 2,
      onclone: function (element) {
        element.documentElement.style.fontSize = "13px";
        return element;
      },
    },
    jsPDF: { unit: "pt", orientation: "p", format: "a4" },
  };

  html2pdf().from(element).set(options).save();
}
