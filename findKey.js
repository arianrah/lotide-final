const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`)
  }
}

const findKey = function(obj, callback) {
  let keyName;
  for (const name in obj) {
    if (callback(name) == true) {
      keyName = name;
    } else {
      //pass
      console.log("fail skip",name)
    }
  }
  console.log(keyName)
}

/*Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
  //if x.stars === 2 (boolean)
  */
 module.exports = findKey;
