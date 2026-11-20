'use strict'
/* Створити сутність людини
ім'я
вік
Метод виведення даних
Створити сутність автомобіля:

Характеристики автомобіля окремими властивостями
Методи:

Виведення на екран даних про цей автомобіль
Присвоєння цього автомобіля власнику(записати в автомобіль об'єкт власника)
Усі дані про людину та про автомобіль отримувати від користувача.Реалізувати необхідні перевірки на коректність введення(порожні поля, вік > 18 в людини і т.д.у разі потреби).
Максимально використовувати функції */

const setName = prompt("Ваше ім'я:");
const setAge = Number(prompt('Ваш вік:'));
const setBrand = prompt('Бренд вашого авто: ');
const setColor = prompt('Колір вашего авто: ');


function isEmpty(value) {
  return !value || value.trim() === ''
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }


  isNumber(value) {
    return !Number.isNaN(value);
  }

  getPerson() {
    let arr = {}
    !isEmpty(this.name) && this.isNumber(this.age) ? arr = { name: this.name, age: this.age } : alert("Ведіть коректні дані!");
    return arr
  }
}

class Car {
  constructor(brand, color, owner) {
    this.brand = brand;
    this.color = color;
    this.owner = owner;
  }

  getCar() {
    if (!isEmpty(this.brand) && !isEmpty(this.color) && this.owner) {
      if (this.owner.age > 18) {
        alert(`Бренд вашего авто: ${this.brand}, колір: ${this.color}, власник ${this.owner.name}`);
      } else {
        alert('Вам не дозволено керувати авто!')
      }
    }
  }
}

const newPerson = new Person(setName, setAge);
const newCar = new Car(setBrand, setColor, newPerson.getPerson());

newPerson.getPerson();
newCar.getCar();