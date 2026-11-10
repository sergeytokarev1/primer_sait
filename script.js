// Смена темы
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Кнопка "Нажми меня"
document.getElementById('helloBtn').addEventListener('click', () => {
  alert('Привет! Кнопка работает.');
});

// Счётчик
let count = 0;
const counterBtn = document.getElementById('counterBtn');
counterBtn.addEventListener('click', () => {
  count++;
  counterBtn.textContent = 'Счётчик: ' + count;
});

// Кнопки "Подробнее" в карточках
document.querySelectorAll('[data-info]').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(btn.dataset.info);
  });
});