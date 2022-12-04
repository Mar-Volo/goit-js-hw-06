const taskItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${taskItems.length}`);
for (let i = 0; i < taskItems.length; i++) {
  console.log(`Category: ${taskItems[i].querySelector("h2").textContent}`),
    console.log(`Elements: ${taskItems[i].querySelectorAll("ul li").length}`);
}
