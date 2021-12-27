class Party {
  constructor() {
    this.party = [];
  }

  addPokemon(pokemon) {
    if (this.isPartyFull()) {
      console.log("Party is full");
    } else {
      this.party.push(pokemon);
      console.log(this.party);
    }
  }

  getParty() {
    return this.party;
  }

  getPokemon(index) {
    return this.party[index];
  }

  getPartySize() {
    return this.party.length;
  }

  removePokemon(index) {
    this.party.splice(index, 1);
  }

  showParty() {
    for (let i = 0; i < this.party.length; i++) {
      this.party[i].showPokemon(i + 1);
    }
  }

  isPartyFull() {
    if (this.party.length >= 6) {
      return true;
    }
  }
}
