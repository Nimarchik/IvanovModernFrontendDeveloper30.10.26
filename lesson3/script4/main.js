// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

function additionDoll(num) {
  return console.log(`${num}$ це ${num * 40}грн`);
}

for (let i = 10; i <= 100; i += 10) {
  additionDoll(i);
}

// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const num = prompt('Ведіть число: ');

for (let i = 1; i <= 100; i++) {
  if (i ** 2 < num) {
    console.log(i);
  }
}

//Дано ціле число.З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).

const num1 = 25;
let isPrime = true

for (let i = 2; i <= Math.sqrt(num1); i++) {
  if (num1 % i == 0) {
    isPrime = false
    break;
  }
}

isPrime
  ? console.log(`${num1} просте`)
  : console.log(`${num1} не просте`);

// Дано деяке число. Ваше завдання – визначити, чи можна отримати це число, піднявши число 3 до певного натурального ступеня. (Як приклад, числа 9 та 81 можна отримати цим способом, але 13 – ні.)

const num2 = 81;
let isNatural = false;
let naturalNum = 0;

for (let i = 1; i <= num2; i++) {
  if (3 ** i == num2) {
    isNatural = true
    naturalNum = i
    break;
  }
}

isNatural ? console.log(`Так, ступінь ${naturalNum}`) : console.log(`${num2}, ні`);
