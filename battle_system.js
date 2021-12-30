import { pokemons } from "./pokemon_data.js";
import { getPlayersPokemon, getComputersPokemon } from "./pick_system.js";

function getHP(pokemon) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == pokemon) {
      return pokemons[i].hp;
    }
  }
}

function showHealthbar(position, pokemon) {
  let healthbar = document.getElementById(`healthbar${position}`);
  let hp = getHP(pokemon);
  console.log(hp);
  //   healthbar.innerHTML = "";
  //   let div = "";
}

let playerPokemon = getPlayersPokemon();
let computerPokemon = getComputersPokemon();

export function updatePlayersPokemon() {
  let currentPlayerPokemon = getPlayersPokemon();
  return currentPlayerPokemon;
}

export function updateComputersPokemon() {
  let currentComputerPokemon = getComputersPokemon();
  return currentComputerPokemon;
}

function updateHealthbar(pokemonHP, position) {
  let healthbar;
  let currentHp;
  let currentPercentage;
  if (position == "player") {
    healthbar = document.getElementById(`healthbar1`);
    currentHp = `${pokemonHP}/${getHP(playerPokemon)}`;
    currentPercentage = (pokemonHP / getHP(playerPokemon)) * 100;
  }
  if (position == "computer") {
    healthbar = document.getElementById(`healthbar2`);
    currentHp = `${pokemonHP}/${getHP(computerPokemon)}`;
    currentPercentage = (pokemonHP / getHP(computerPokemon)) * 100;
  }
  healthbar.innerHTML = currentHp;

  if (currentPercentage <= 25) {
    healthbar.className =
      "progress-bar progress-bar-striped progress-bar-animated bg-danger";
  }
  if (currentPercentage > 25 && currentPercentage <= 50) {
    healthbar.className =
      "progress-bar progress-bar-striped progress-bar-animated bg-warning";
  }
  if (currentPercentage > 50 && currentPercentage <= 75) {
    healthbar.className = "progress-bar bg-success";
  }
  if (currentPercentage > 75 && currentPercentage <= 100) {
    healthbar.style.backgroundColor = "green";
  }
  if (pokemonHP <= 0) {
    currentPercentage = 0;
    healthbar.style = `width: 0%`;
    healthbar.innerHTML = 0;
  }
  healthbar.style = `width: ${currentPercentage}%`;
}

function printName(name1, name2) {
  console.log(name1, name2);
}

let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  printName(getHP(playerPokemon), getHP(computerPokemon));
});

let playerButton = document.getElementById("playerButton");
playerButton.addEventListener("click", function () {
  playerPokemon = updatePlayersPokemon();
  updateHealthbar(getHP(playerPokemon), "player");
});

let computerButton = document.getElementById("computerButton");
computerButton.addEventListener("click", function () {
  computerPokemon = updateComputersPokemon();
  updateHealthbar(getHP(computerPokemon), "computer");
});
