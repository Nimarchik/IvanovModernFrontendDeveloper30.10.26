import { getData } from "./getData.js";

export async function getPeople(url) {
  const data = await getData(url);
  const people = document.querySelector('.people')
  const arr = data.results;
  const list = document.createElement('ul');
  list.classList.add('ulPeople');


  arr.forEach(item => {
    const items = document.createElement('li');
    const title = document.createElement(`h6`);
    const eyeColor = document.createElement('p');
    const gender = document.createElement('p');
    const heirColor = document.createElement('p');


    addClass(items, 'ulPeopleItem');
    addClass(title, 'ulPeopleTitle');
    addClass(eyeColor, 'ulPeopleEyeColor');
    addClass(gender, 'ulPeopleGender');


    eyeColor.textContent = `Цвет глаз: ${item.eye_color}`
    title.textContent = `Имя: ${item.name}`;
    gender.textContent = `Пол: ${item.gender}`
    items.appendChild(title);
    items.appendChild(eyeColor);
    items.appendChild(gender)

    list.appendChild(items);
  })

  return people.appendChild(list);

}

function addClass(nameItem, nameClass) {
  return nameItem.classList.add(nameClass)
}

