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
  console.log(secondPokemonHP, secondCurrentPercent, secondCurrentHP, damage);
  //   battle(firstPokemon, secondPokemon);
  playerAttack(Math.ceil(secondCurrentHP), damage);
  autoAttack(secondPokemon, firstPokemon);
}

function secondAttack(secondPokemon, firstPokemon) {
  let firstPokemonHP = getHP(firstPokemon);
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
  console.log(secondPokemonHP, secondCurrentPercent, secondCurrentHP, damage);

  playerAttack(Math.ceil(secondCurrentHP), damage);
  autoAttack(secondPokemon, firstPokemon);
}
