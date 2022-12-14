// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount
// и добавляет их в div#boxes.

// 1. Размеры самого первого < div > - 30px на 30px.

// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

// 3. Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
let size = 30;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = input.value;
  const boxesArr = [];

  for (let i = 1; i <= amount; i++) {
    size += 10;
    const div = document.createElement("div");
    const colorValue = getRandomHexColor();
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${colorValue}`;
    boxesArr.push(div);
  }
  boxes.append(...boxesArr);
}
function destroyBoxes() {
  input.value = "";
  boxes.innerHTML = "";
  size = 30;
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
