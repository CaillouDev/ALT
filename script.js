console.log("test")

const apiMeal = ["Maryline", "Thomas", "Tanguy", "Jérémy V", "Jérémy F", "Quentin", "Tien", "Pierre"];
const annonceList = ["Le hasard a désigné", "C'est ainsi que le sort désigne", "Tous les regards se posent sur", "Hats down for", "C'est ton tour", "A toi de jouer", "Surprends-nous"];
const randomBtn = document.getElementById("random-button");

function random (formation, annonce) {
  const randomIndex = Math.floor(Math.random()*formation);
  console.log(randomIndex);
  const randomAnnonce = Math.floor(Math.random()*annonce);
  console.log(randomAnnonce);
  alert (`${annonceList[randomAnnonce]} ${apiMeal[randomIndex]}.`);
  return
 }

randomBtn.addEventListener("click", () => random(apiMeal.length, annonceList.length));
