class Pokemon {
  constructor(name, dexNumber, type, level, hp, attackList) {
    this.name = name;
    this.dexNumber = dexNumber;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.currentHp = hp;
    this.attackList = attackList;
    this.image = `sprites/pokemon/main-sprites/firered-leafgreen/${this.dexNumber}.png`;
  }

  getType() {
    return this.type;
  }

  getHP() {
    return this.hp;
  }

  updateHp(damage) {
    this.currentHp -= damage;
    return this.currentHp;
  }

  getAttackList() {
    return this.attackList;
  }

  showPokemon(spriteLocation) {
    let sprite = document.getElementById(`sprite${spriteLocation}`);
    sprite.src = this.image;
  }
}

let charmander = new Pokemon("Charmander", 4, "fire", 5, 39, [
  "Scratch",
  "Growl",
  "Ember",
  "Smokescreen",
]);
charmander.showPokemon(1);

let bulbasaur = new Pokemon("Bulbasaur", 1, "grass", 5, 39, []);
bulbasaur.showPokemon(2);
