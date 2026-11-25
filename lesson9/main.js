const array = [1, 2, 3, 4, [4.1, 4.2], 5, [5.1,5.2]]
const div = document.querySelector('div');

function generateList(arr) {
  if (Array.isArray(arr)) {
    const newlist = document.createElement('ul');

    arr.forEach(item => {
      const newItem = document.createElement('li');

      if (Array.isArray(item)) {
        const newSecondList = document.createElement('ul');

        item.forEach(i => {
          const newSecondItem = document.createElement('li');

          newSecondItem.textContent = i;

          newSecondList.appendChild(newSecondItem)
          newlist.appendChild(newItem);

        })
        newItem.appendChild(newSecondList);

      } else {
        newItem.textContent = item;
      }
      newlist.appendChild(newItem);

    });

    div.appendChild(newlist);

  }
}

generateList(array);
