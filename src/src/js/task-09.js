// // Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
const cl = document.querySelector('.color');
const changeCl = document.querySelector('.change-color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeCl.addEventListener('click', (e) => {
  e.currentTarget.value = getRandomHexColor();
  document.body.style.backgroundColor = `${e.currentTarget.value}`;
  cl.textContent = e.currentTarget.value;
});
