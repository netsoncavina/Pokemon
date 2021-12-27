class Item {
  constructor(id, name, type, description, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.price = price;
    this.image = "sprites/items/" + this.name + ".png";
  }

  use(pokemon) {
    console.log("Using " + this.name + " on " + pokemon.name);
  }

  toss() {
    console.log("Tossing " + this.name);
  }

  give(pokemon) {
    console.log("Giving " + this.name + " to " + pokemon.name);
  }

  showItem() {
    let item = document.getElementById(`item1`);
    item.src = this.image;
  }
}

let antidote = new Item(1, "apicot-berry", "Healing", "Heals the user.", 50);
antidote.showItem();
