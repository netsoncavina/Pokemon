import { pokemons } from "./pokemon_data.js";

export function pickPokemon() {
  let pick = document.querySelector("input[name=pokemonRadio]:checked").value;
  showPokemon(pick);
  return pick;
}

function showPokemon(pokemon) {
  let sprite = document.getElementById(`sprite1`);
  let pokemonImage = getPokemonImage(pokemon);
  sprite.src = pokemonImage;
}

function getPokemonImage(pokemon) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == pokemon) {
      return pokemons[i].image;
    }
  }
}

let button = document.getElementById("pickButton");
button.addEventListener("click", function () {
  pickPokemon();
});
