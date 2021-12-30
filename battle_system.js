import { pokemons } from "./pokemon_data.js";
import { getPlayersPokemon, getComputersPokemon } from "./pick_system.js";
import { attacks } from "./attack_data.js";

let playerPokemon = getPlayersPokemon();
let computerPokemon = getComputersPokemon();
function getHP(pokemon) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name.toUpperCase() == pokemon.toUpperCase()) {
      return pokemons[i].hp;
    }
  }
}

function getPokemonType(pokemon) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name.toUpperCase() == pokemon.toUpperCase()) {
      return pokemons[i].type;
    }
  }
}

function getAttackType(attack) {
  for (let i = 0; i < attacks.length; i++) {
    if (attacks[i].name.toUpperCase() == attack.toUpperCase()) {
      return attacks[i].type;
    }
  }
}

function getAttackDamage(attack) {
  for (let i = 0; i < attacks.length; i++) {
    if (attacks[i].name.toUpperCase() == attack.toUpperCase()) {
      return attacks[i].power;
    }
  }
}

function getAttackList(pokemon) {
  let attackList = [];
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == pokemon) {
      attackList.push(pokemons[i].moves);
    }
  }
  return attackList;
}

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

function getAttack() {
  let attack = document.querySelector("input[name=attackRadio]:checked").value;
  //   console.log(attack);
  return attack;
}

function playerAttack(computerPokemonHP, damage) {
  computerPokemonHP -= damage;
  updateHealthbar(computerPokemonHP, "computer");
  return computerPokemonHP;
}

function computerAttack(playerPokemonHP, damage) {
  playerPokemonHP -= damage;
  console.log(playerPokemonHP, damage);
  updateHealthbar(playerPokemonHP, "player");
  return playerPokemonHP;
}

function typeEffectiviness(attackerType, defenderType) {
  if (attackerType == "water" && defenderType == "fire") {
    return 2;
  }
  if (attackerType == "fire" && defenderType == "water") {
    return 0.5;
  } else {
    return 0;
  }
}

function isSTAB(attackerType, attackType) {
  if (attackerType == attackType) {
    return true;
  }
  return false;
}
function getDamage(baseDamage, attackerType, attackType, defenderType) {
  let multiplier = 0.25;
  if (isSTAB(attackerType, attackType)) {
    multiplier = 0.25;
  }
  multiplier += typeEffectiviness(attackerType, defenderType);
  return baseDamage * multiplier;
}

function attack(firstPokemon, secondPokemon) {
  let secondPokemonHP = getHP(secondPokemon);
  let secondHealthbar = document.getElementById("healthbar2");
  let secondCurrentPercent = Number(secondHealthbar.style.width.slice(0, -1));
  let secondCurrentHP = secondPokemonHP * (secondCurrentPercent / 100);
  let attack = getAttack();
  let damage = getDamage(
    getAttackDamage(attack),
    getPokemonType(firstPokemon),
    getAttackType(attack),
    getPokemonType(secondPokemon)
  );

  //   console.log(secondPokemonHP, secondCurrentPercent, secondCurrentHP, damage);
  //   battle(firstPokemon, secondPokemon);
  let finalHP = playerAttack(Math.ceil(secondCurrentHP), damage);
  showOutPutAttack(firstPokemon, attack, damage, secondPokemon, finalHP, 1);
}

function secondAttack(firstPokemon, secondPokemon) {
  let secondPokemonHP = getHP(secondPokemon);
  let secondHealthbar = document.getElementById("healthbar1");
  let secondCurrentPercent = Number(secondHealthbar.style.width.slice(0, -1));
  let secondCurrentHP = secondPokemonHP * (secondCurrentPercent / 100);
  let attack = randomAttack(firstPokemon);
  let damage = getDamage(
    getAttackDamage(attack),
    getPokemonType(firstPokemon),
    getAttackType(attack),
    getPokemonType(secondPokemon)
  );
  console.log(
    randomAttack(firstPokemon),
    getAttackDamage(attack),
    getPokemonType(firstPokemon),
    getAttackType(attack),
    getPokemonType(secondPokemon)
  );
  //   console.log(secondPokemonHP, secondCurrentPercent, secondCurrentHP, damage);
  let finalHP = computerAttack(Math.ceil(secondCurrentHP), damage);
  showOutPutAttack(firstPokemon, attack, damage, secondPokemon, finalHP, 2);
}

function randomAttack(computerPokemon) {
  let computerAttacks = getAttackList(computerPokemon);
  let chosenAttack =
    computerAttacks[0][Math.floor(Math.random() * computerAttacks[0].length)];
  return chosenAttack;
}

function battle(playerPokemon, computerPokemon) {
  let playerHealthbar = document.getElementById("healthbar1").style.width;
  let enemyHealthbar = document.getElementById("healthbar2").style.width;
  if (playerHealthbar != "0%" && enemyHealthbar != "0%") {
    attack(playerPokemon, computerPokemon);
    secondAttack(computerPokemon, playerPokemon);
  }
}

function showOutPutAttack(
  attackerPokemon,
  attack,
  damage,
  targetPokemon,
  targetPokemonHP,
  outputLocation
) {
  let output = document.getElementById(`output${outputLocation}`);
  output.innerHTML = "";
  if (outputLocation == 1) {
    output.innerHTML += "<p class='h6'>Player attack</p>";
  } else {
    output.innerHTML += "<p class='h6'>Computer attack</p>";
  }

  // output.innerHTML += `<p>${attacker_pokemon.name}'s hp is now ${attacker_pokemon.hp}</p>`;
  output.innerHTML += `<p>${attackerPokemon} attacked ${targetPokemon} with ${attack}</p>`;
  // output.innerHTML += `<p>${message}</p>`;
  // output.innerHTML += `<p>${message}</p>`;
  output.innerHTML += `<p>${targetPokemon}'s lost ${damage} hp</p>`;
  output.innerHTML += `<p>${targetPokemon}'s hp is now ${targetPokemonHP}</p>`;
}

let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  battle(playerPokemon, computerPokemon);
});

let playerButton = document.getElementById("playerButton");
playerButton.addEventListener("click", function () {
  playerPokemon = updatePlayersPokemon();
  updateHealthbar(getHP(playerPokemon), "player");
  //   console.log(getPokemonType(playerPokemon));
});

let computerButton = document.getElementById("computerButton");
computerButton.addEventListener("click", function () {
  computerPokemon = updateComputersPokemon();
  updateHealthbar(getHP(computerPokemon), "computer");
});

// battle("Charmander", "Squirtle");

let attackButton = document.getElementById("attackButton");
attackButton.addEventListener("click", function () {
  //   playerAttack(computerPokemon, getHP(computerPokemon));
  //   console.log(getHP(computerPokemon));
  battle(playerPokemon, computerPokemon);
});
