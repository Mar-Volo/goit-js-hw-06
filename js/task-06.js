const validation = document.querySelector("#validation-input");
const valid = +validation.dataset.length;

validation.addEventListener("blur", (event) => {
  if (validation.value.length === valid) {
    validation.classList.add("valid");
    validation.classList.remove("invalid");
  } else {
    validation.classList.remove("valid");
    validation.classList.add("invalid");
  }
});
