class Pokemon {
  constructor(name, dexNumber, type, hp, level) {
    this.name = name;
    this.dexNumber = dexNumber;
    this.type = type;
    this.hp = hp;
    this.level = level;

    // this.currentHP = hp;

    // this.image = `sprites/pokemon/main-sprites/firered-leafgreen/${dexNumber}.png`;
    this.image = `sprites/pokemon/main-sprites/${dexNumber}.png`;

    this.updateHealthbar = function (spriteLocation, currentHP) {
      let healthbar = document.getElementById(`hp${spriteLocation}`);
      let currentPercentage = (currentHP * 100) / this.hp;
      console.log(currentPercentage);
      healthbar.innerHTML = `${currentHP}/${this.hp}`;

      if (currentPercentage >= 100) {
        healthbar.style.width = "100%";
        healthbar.className = "progress-bar";
      }
      if (currentHP <= 0) {
        currentPercentage = 0;
        healthbar.style = `width: 0%`;
        healthbar.innerHTML = 0;
      } else {
        if (currentPercentage >= 50) {
          healthbar.className = "progress-bar bg-success";
        }
        if (currentPercentage < 50 && currentPercentage >= 25) {
          healthbar.className =
            "progress-bar progress-bar-striped progress-bar-animated bg-warning";
        }
        if (currentPercentage < 25) {
          healthbar.className =
            "progress-bar progress-bar-striped progress-bar-animated bg-danger";
        }
        if (this.hp >= hp) {
          this.hp = hp;
          // currentHP = hp;
        }
        healthbar.style = `width: ${currentPercentage}%`;

        healthbar.innerHTML = `${currentHP}/${this.hp}`;
      }
    };

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
      this.damage = this.level * 2 * 2 * this.multiplier;
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
      this.updateHealthbar(2, target_pokemon.hp);
      // console.log(`${target_pokemon.name}'s hp is now ${target_pokemon.hp}`);
      target_pokemon.isAlive();
      let array = [this.damage, message];
      return array;
    };

    this.healPokemon = function (healValue) {
      if (this.hp <= hp && this.hp + healValue <= hp) {
        this.hp += healValue;
        this.updateHealthbar(2, hp);
      } else if (this.hp + healValue > hp) {
        this.hp = hp;
        this.updateHealthbar(2, hp);
      } else {
        this.hp = hp;
        this.updateHealthbar(2, hp);
      }
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

let charmander = new Pokemon("Charmander", 4, "fire", 100, 5);
charmander.attackList = ["Scratch", "Growl", "Ember", "Smokescreen"];
charmander.showPokemon(1);
charmander.showAttackList(1);
let squirtle = new Pokemon("Squirtle", 7, "water", 100, 5);
squirtle.attackList = ["Tackle", "Tail Whip", "Water Gun", "Withdraw"];
squirtle.showPokemon(2);
squirtle.showAttackList(2);
