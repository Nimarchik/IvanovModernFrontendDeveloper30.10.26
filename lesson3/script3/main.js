// Дано два різні числа. Визначити, яке з них більше, а яке менше.

const number1 = 10;
const number2 = 4;

number1 > number2 ? console.log('The number "number1" is greater than the number "number2".') : console.log('Number "number1" is less than number "number2"');

// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

const foot = 2500 * 0.305;
const km = 3 * 1000;

foot > km ? console.log(`${foot}м більше ніж у км`) : console.log(`${km}м більше  ніж у футах`);

// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

const a = 8;
const b = 4;

if (a % b == 0) {
  console.log('число a є діліником числа b', a % b);
}

if (b % a == 0) {
  console.log('число b є дільником числа a');
} else {
  console.log('число b не є дільником числа a');
}

// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

const num3 = 128;

(num3 % 10) % 2 === 0 ? console.log('є праною цифрою') : console.log('не є праною');

// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

const num4 = 54;

const first = Math.floor((num4 % 1000) / 10);
const seconds = num4 % 10;

first > seconds ? console.log('перше число більше ніж друге') : console.log('Друге число більше ніж перше');

/*  Дано тризначне число.
 Визначити чи є парною сума його цифр.
 Визначити, чи кратна сума цифр п'яти.
Визначити чи є добуток його цифр більше 100. */

const num5 = 567;
const str = String(num5);
let sum1 = 0;
let product = 1;

for (let i = 0; i < str.length; i++) {
  sum1 += +str[i];
  product *= +str[i];
}

sum1 % 2 == 0 ? console.log('сума цифр є парною') : console.log('сума цифр не є парною');

sum1 % 5 == 0 || sum1 % 5 == 5 ? console.log("сума цифр кратна п'яти") : console.log("сума цифр не кратна п'яти");

product > 100 ? console.log(`Добуток цифр ${product} > 100`) : console.log(`Добуток цифр ${product} < 100`);

/*Дано тризначне число.
  Чи правда, що всі цифри однакові?
  Чи є серед цифр цифри однакові?
*/

const num = 455;
const str1 = String(num);

//Чи правда, що всі цифри однакові?
let same = true
console.log(num);

for (let i = 0; i < str1.length; i++) {
  for (let j = i + 1; j < str1.length; j++) {
    if (str1[i] === str1[j] && same) {
      console.log('Правда всі однакові');
    } else {
      same = false
      console.log('Не правада не всі однакові');
      break;

    }
  }
}

// Чи є серед цифр цифри однакові?
let duplicate = false

for (let i = 0; i < str1.length; i++) {
  for (let j = i + 1; j < str1.length; j++) {
    if (str1[i] === str1[j]) {
      duplicate = true
      console.log('Є однакові цифри');
      break;
    }
  }
}



