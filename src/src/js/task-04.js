let counterValue = 0;
const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const valueDown = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const valueUp = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

btnDown.addEventListener("click", valueDown);
btnUp.addEventListener("click", valueUp);
