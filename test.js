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

showItems(items);
