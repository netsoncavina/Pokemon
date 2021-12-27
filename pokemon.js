class Pokemon {
  constructor(name, type, hp, level) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.level = level;

    this.image = `sprites/${this.name}.png`;
    // this.image = "sprites/pokemon/main-sprites/firered-leafgreen/37.png";

    this.showPokemon = function (spriteLocation) {
      let sprite = document.getElementById(`sprite${spriteLocation}`);
      sprite.src = this.image;
    };
    this.getType = function () {
      return this.type;
    };

    this.info = function () {
      return (
        "The " +
        this.name +
        " is a " +
        this.type +
        " type pokemon that is level " +
        this.level +
        "."
      );
    };

    this.isAlive = function () {
      if (this.hp <= 0) {
        console.log("The " + this.name + " is fainted.");
      }
    };

    this.attack_effectiveness = function (type1, type2) {
      if (type1 == type2) {
        return 1;
      }
      if (type1 == "fire" && type2 == "grass") {
        return 2;
      }

      if (type1 == "fire" && type2 == "water") {
        return 0.5;
      }
      if (type1 == "water" && type2 == "fire") {
        return 2;
      }
      if (type1 == "water" && type2 == "grass") {
        return 0.5;
      }
      if (type1 == "grass" && type2 == "water") {
        return 2;
      }
      if (type1 == "grass" && type2 == "fire") {
        return 0.5;
      }
    };

    this.attackList = [];

    this.showAttackList = function (pokemonLocation) {
      let attackList = document.getElementById(`attackList${pokemonLocation}`);
      attackList.innerHTML = "";

      let div = "";
      for (let i = 0; i < this.attackList.length; i++) {
        div += `<div class="form-check ">
          <input class="form-check-input" type="radio" name="attackRadio${pokemonLocation}" id="attack${i}" value="${this.attackList[i]}">
          <label class="form-check-label" for="attack${i}">${this.attackList[i]}</label>
        </div> `;
      }

      attackList.innerHTML += div;
    };

    this.attack = function (target_pokemon) {
      this.multiplier = this.attack_effectiveness(
        this.type,
        target_pokemon.type
      );
      let message = "";
      this.damage = this.level * 2 * this.multiplier;
      //   console.log(target_pokemon.hp);

      console.log(`${this.name} attacked ${target_pokemon.name}`);
      if (this.multiplier == 0.5) {
        message += `Not very effective `;
      } else if (this.multiplier == 1) {
        message += `Effective `;
      } else if (this.multiplier == 2) {
        message += `Super effective! `;
      }

      target_pokemon.hp -= this.damage;
      // console.log(`${target_pokemon.name}'s hp is now ${target_pokemon.hp}`);
      target_pokemon.isAlive();
      let array = [this.damage, message];
      return array;
    };
  }
}

function showOutPut(attacker_pokemon, attack, damage, target_pokemon, message) {
  let output = document.getElementById("output");
  output.innerHTML = "";
  // output.innerHTML += `<p>${attacker_pokemon.name}'s hp is now ${attacker_pokemon.hp}</p>`;
  output.innerHTML += `<p>${attacker_pokemon.name} attacked ${target_pokemon.name} with ${attack}</p>`;
  output.innerHTML += `<p>${message}</p>`;
  // output.innerHTML += `<p>${message}</p>`;
  output.innerHTML += `<p>${target_pokemon.name}'s lost ${damage} hp</p>`;
  output.innerHTML += `<p>${target_pokemon.name}'s hp is now ${target_pokemon.hp}</p>`;
}

function attack(attacker_pokemon, attack, target_pokemon) {
  let hit = document.getElementById(`attack${attack}`);
  if (hit.checked) {
    let info = attacker_pokemon.attack(target_pokemon);
    damage = info[0];
    showOutPut(attacker_pokemon, hit.value, damage, target_pokemon, info[1]);
  }
}

let charmander = new Pokemon("Charmander", "fire", 100, 5);
charmander.attackList = ["Scratch", "Growl", "Ember", "Smokescreen"];
charmander.showPokemon(1);
charmander.showAttackList(1);
let squirtle = new Pokemon("Squirtle", "water", 100, 5);
squirtle.attackList = ["Tackle", "Tail Whip", "Water Gun", "Withdraw"];
squirtle.showPokemon(2);
squirtle.showAttackList(2);
