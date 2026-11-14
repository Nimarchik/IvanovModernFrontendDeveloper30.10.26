const arrray = [1, 2, 3, 4, 5, 6, 7, 5];

function removeElement(arr, el) {
  const removeEl = arr.reduce((acc, item) => {
    if (item !== el) acc.push(item);
    return acc
  }, [])

  console.log(removeEl);
  
}

removeElement(arrray, 5)
console.log(arrray);
