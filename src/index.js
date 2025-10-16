function generateSummary(event) {
  event.preventDefault();

  let summaryElement = document.querySelector("#summary");
  summaryElement.innerHTML = "resumen";
}

let summaryGenerator = document.querySelector("#form-generator");
summaryGenerator.addEventListener("submit", generateSummary);
