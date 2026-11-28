const menu = document.querySelector('.menu');
const people = document.querySelector('.people')
const url = 'https://swapi.dev/api/'

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

    switch (target.textContent) {
      case 'people':
        getPeaple(`${url}${target.textContent}/`);
        break;
    }
  })
}


async function getPeaple(url) {
  const data = await getData(url);
  const arr = data.results;
  const list = document.createElement('ul');
  list.classList.add('ulPeople');

  console.log(arr);

  arr.forEach(item => {
    const items = document.createElement('li');
    const title = document.createElement(`h6`);

    title.textContent = item.name;
    items.appendChild(title);
    list.appendChild(items);
    people.appendChild(list);
  })

}

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

getBtn('https://swapi.dev/api/');