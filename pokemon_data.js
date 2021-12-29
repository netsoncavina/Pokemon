export const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "grass",
    level: 5,
    hp: 45,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/1.png",
  },
  {
    id: 2,
    name: "Ivysaur",
    type: "grass",
    level: 16,
    hp: 60,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/2.png",
  },
  {
    id: 3,
    name: "Venusaur",
    type: "grass",
    level: 36,
    hp: 80,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/3.png",
  },
  {
    id: 4,
    name: "Charmander",
    type: "fire",
    level: 5,
    hp: 39,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/4.png",
  },
  {
    id: 5,
    name: "Charmeleon",
    type: "fire",
    level: 16,
    hp: 58,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/5.png",
  },
  {
    id: 6,
    name: "Charizard",
    type: "fire",
    level: 36,
    hp: 78,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/6.png",
  },
  {
    id: 7,
    name: "Squirtle",
    type: "water",
    level: 5,
    hp: 44,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/7.png",
  },
  {
    id: 8,
    name: "Wartortle",
    type: "water",
    level: 16,
    hp: 59,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/8.png",
  },
  {
    id: 9,
    name: "Blastoise",
    type: "water",
    level: 36,
    hp: 79,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/9.png",
  },
  {
    id: 10,
    name: "Caterpie",
    type: "bug",
    level: 5,
    hp: 45,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/10.png",
  },
  {
    id: 11,
    name: "Metapod",
    type: "bug",
    level: 16,
    hp: 60,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/11.png",
  },
  {
    id: 12,
    name: "Butterfree",
    type: "bug",
    level: 36,
    hp: 80,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/12.png",
  },
  {
    id: 13,
    name: "Weedle",
    type: "bug",
    level: 5,
    hp: 45,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/13.png",
  },
  {
    id: 14,
    name: "Kakuna",
    type: "bug",
    level: 16,
    hp: 60,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/14.png",
  },
  {
    id: 15,
    name: "Beedrill",
    type: "bug",
    level: 36,
    hp: 80,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/15.png",
  },
  {
    id: 16,
    name: "Pidgey",
    type: "normal",
    level: 5,
    hp: 40,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/16.png",
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: "normal",
    level: 16,
    hp: 63,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/17.png",
  },
  {
    id: 18,
    name: "Pidgeot",
    type: "normal",
    level: 36,
    hp: 83,
    moves: ["tackle", "growl", "leech seed", "vine whip"],
    image: "sprites/pokemon/main-sprites/firered-leafgreen/18.png",
  },
];

function showPokemons(pokemonList) {
  let id = document.getElementById("pokemons");
  id.innerHTML = "";
  let div = "";
  for (let i = 0; i < pokemonList.length; i++) {
    div += `
            <div class="form-check col-4">
            <img src="sprites/pokemon/main-sprites/firered-leafgreen/${pokemonList[i].id}.png"/>
            <input class="form-check-input mx-auto my-auto" type="radio" name="pokemonRadio" id="pokemon${i}" value="${pokemonList[i].name}">
            <label class="form-check-label" for="pokemon${i}">
            ${pokemonList[i].name}</label>
          </div> `;
  }
  id.innerHTML += div;
}

showPokemons(pokemons);
