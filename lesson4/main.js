const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(strLength, strCharacter) {
  let key = [];

  for (let i = 0; i < strLength; i++) {
    const randomKey = Math.floor(Math.random() * strCharacter.length)

    key.push(strCharacter[randomKey])
  }

  return key.join('')
}

const key = generateKey(16, characters);
console.log(key, key.length); // eg599gb60q926j8i
