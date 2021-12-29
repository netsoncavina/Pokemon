import { pokemons } from "./pokemon_data.js";

export function pickPokemon(position) {
  let pick = document.querySelector("input[name=pokemonRadio]:checked").value;

  showPokemon(pick, position);
  showMoves(pick, position);
  //   showBattleTitle();
  return pick;
}

function showBattleTitle() {
  let title = document.getElementById("battleTitle");
  title.innerHTML = "Time for battle!";
}

function showPokemon(pokemon, position) {
  let sprite = document.getElementById(`sprite${position}`);
  let pokemonImage = getPokemonImage(pokemon);
  sprite.src = pokemonImage;
}

function showMoves(pokemon, position) {
  let moveList = getPokemonMoves(pokemon);
  let attackList = document.getElementById(`attackList${position}`);
  attackList.innerHTML = "";

  let div = "";
  for (let i = 0; i < moveList.length; i++) {
    div += `<div class="form-check ">
          <input class="form-check-input" type="radio" name="attackRadio1" id="attack${i}" value="${moveList[i]}">
          <label class="form-check-label" for="attack${i}">${moveList[i]}</label>
        </div> `;
  }

  attackList.innerHTML += div;
}

function getPokemonImage(pokemon) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == pokemon) {
      return pokemons[i].image;
    }
  }
}

function getPokemonMoves(pokemon) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == pokemon) {
      return pokemons[i].moves;
    }
  }
}

let playerButton = document.getElementById("playerButton");
playerButton.addEventListener("click", function () {
  pickPokemon(1);
});

let computerButton = document.getElementById("computerButton");
computerButton.addEventListener("click", function () {
  pickPokemon(2);
});
