//Visit Counter fetching value and updating HTML
const counter = document.querySelector(" .counter-container")
async function updateCounter() {
  let response = await fetch("https://n3tnwi3e7bekc222japxbhomea0pnxkv.lambda-url.us-east-1.on.aws/");
  let data = await response.json();
  document.getElementById('visit-count').textContent = data;
}

updateCounter()