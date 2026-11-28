import { getPeople } from './server/getPeople.js';
import { getData } from './server/getData.js';

const menu = document.querySelector('.menu');
const url = 'https://swapi.dev/api/';

async function getBtn() {
  const data = await getData(url);

  for (let obj in data) {
    const newBtn = document.createElement('button');
    newBtn.classList.add('menuBtn');
    newBtn.setAttribute('value', data[obj])
    newBtn.textContent = obj;

    menu.appendChild(newBtn);
  }


  menu.addEventListener('click', event => {
    const target = event.target;
    getData(`${url}${target.textContent}/`)
    switch (target.textContent) {
      case 'people':
        getPeople(`${url}${target.textContent}/`);
        break;
    }
  })


}


getBtn();