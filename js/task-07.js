const scrollbar = document.querySelector("#font-size-control");
const txt = document.querySelector("#text");
txt.style.fontSize = `${scrollbar.value}px`;
scrollbar.addEventListener("input", (e) => {
  let value = `${e.currentTarget.value}px`;
  txt.style.fontSize = value;
});
