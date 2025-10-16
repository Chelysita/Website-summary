function displaySummary(response) {
  let summaryElement = document.querySelector("#summary");
  summaryElement.innerHTML = response.data.answer;
}
function generateSummary(event) {
  event.preventDefault();

  let apikey = "e1054aod00e03d00aeectb39af13a2bb";
  let prompt = `Generate the summary of this ${instructionsInput.value}`;

  let context =
    "You are an assistant that analyzes the contents of a website, and provides a short summary, ignoring text that might be navigation related. Respond in markdown";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiUrl).then(displaySummary);
}

let summaryGenerator = document.querySelector("#form-generator");
summaryGenerator.addEventListener("submit", generateSummary);
