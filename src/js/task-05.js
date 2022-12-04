const enterName = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

enterName.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    userName.textContent = event.currentTarget.value;
  } else {
    userName.textContent = "Anonymous";
  }
});
