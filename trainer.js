class Trainer {
  constructor(name, id, gold) {
    this.name = name;
    this.id = id;
    this.gold = gold;
    this.image = `sprites/trainers/${this.id}.png`;
    this.badges = 0;
    this.party = [];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getGold() {
    return this.gold;
  }
}
