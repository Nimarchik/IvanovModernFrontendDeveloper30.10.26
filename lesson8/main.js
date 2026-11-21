'use strict'

/*
Створити програму для відображення результатів голосування. Як варіанти відповіді - смайлики. За замовчуванням 5 шт.

Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл

При натисканні на смайл - під ним змінюється значення лічильника

Реалізувати таким чином, щоб додавання нових варіантів відповіді не призводило до додавання нових функцій
 */


const list = document.querySelector('.listEmoji');




list.addEventListener('click', (event) => {
  const target = event.target;
  const span = target.querySelector('.span');

  if (target.tagName === 'LI') {
    span.textContent = Number(span.textContent) + 1;
  }
})
