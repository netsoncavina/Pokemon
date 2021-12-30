// let items = [
//   {
//     id: 1,
//     name: "potion",
//     type: "healing",
//     description:
//       "A spray-type wound medicine. It restores the HP of one Pokémon by 20 points.",
//     price: 50,
//   },
//   {
//     id: 2,
//     name: "super-potion",
//     type: "healing",
//     description:
//       "A spray-type wound medicine. It restores the HP of one Pokémon by 50 points.",
//     price: 100,
//   },
//   {
//     id: 3,
//     name: "hyper-potion",
//     type: "healing",
//     description:
//       "A spray-type wound medicine. It restores the HP of one Pokémon by 200 points.",
//     price: 200,
//   },
//   {
//     id: 4,
//     name: "full-restore",
//     type: "healing",
//     description:
//       "A spray-type wound medicine. It restores the HP of one Pokémon to full.",
//     price: 500,
//   },
//   //   {
//   //     id: 5,
//   //     name: "poke-ball",
//   //     type: "pokeball",
//   //     description:
//   //       "A Poké Ball is used to catch Pokémon. It is thrown like a ball at a Pokémon to attempt to catch it.",
//   //     price: 100,
//   //   },
// ];

import { items } from "./item_data.js";

function showItems(itemList) {
  let itemListElement = document.getElementById("item-list");
  itemListElement.innerHTML = "";

  let div = "";
  for (let i = 0; i < itemList.length; i++) {
    // image = `sprites/pokemon/main-sprites/${dexNumber}.png`
    div += `<div class="form-check ">
        <input class="form-check-input" type="radio" name="itemRadio" id="item${i}" value="${itemList[i].name}">
        <label class="form-check-label" for="item${i}"><img src="sprites/items/${itemList[i].name}.png"/>${itemList[i].name}</label>
      </div> `;
  }

  itemListElement.innerHTML += div;
}

function findItem(item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name == item) {
      return items[i];
    }
  }
}

function getItemName(item) {
  return findItem(item).name;
}

function determineItemType(item) {
  let type = findItem(item).type;
  return type;
}

function itemEffect(item) {
  let type = determineItemType(item);
  let itemName = getItemName(item);
  console.log(type, itemName);

  if (type == "healing") {
    if (itemName == "potion") {
      return [20, "HP"];
    }
    if (itemName == "super-potion") {
      return [50, "HP"];
    }
    if (itemName == "hyper-potion") {
      return [200, "HP"];
    }
    if (itemName == "full-restore") {
      return [90000, "HP"];
    }
  }

  return false;
}

function useItem(pokemon) {
  let item = document.querySelector("input[name=itemRadio]:checked").value;
  return itemEffect(item);
}

showItems(items);

let itemButton = document.getElementById("itemButton");
itemButton.addEventListener("click", function () {
  squirtle.healPokemon(useItem(squirtle)[0]);
});
