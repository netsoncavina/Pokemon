class Bag {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  showItems() {
    console.log(this.items);
  }
}
