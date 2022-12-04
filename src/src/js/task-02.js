const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const items = [];
for (let ingredient of ingredients) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  items.push(item);
  list.append(...items);
}
