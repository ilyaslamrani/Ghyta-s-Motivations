const quote = document.getElementById("qoute");
const person = document.getElementById("person");
let result = [];
async function generateQuote() {
  result = await fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })

    .then(function (result) {
      let random = Math.floor(Math.random() * result.length);
      console.log("Quote", result[random].text);
      quote.innerHTML = result[random].text;
      person.innerHTML = result[random].author;
      console.log("person", result[random].author);
    });
}
