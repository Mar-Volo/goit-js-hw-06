const taskItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${taskItems.length}`);
taskItems.forEach(function (item) {
  console.log(`Category: ${item.querySelector("h2").textContent}`),
    console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
