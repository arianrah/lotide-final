// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`)
  }
}

//eqArrays
const eqArrays = function(firstArr, secondArr) {
  let newArr = [];
  if (firstArr.length !== secondArr.length) {
    return false;
  } else {
    for (let i = 0; i < firstArr.length; i++){
      if (firstArr[i] === secondArr[i]){
        newArr.push(firstArr[i]);
      } else {
        newArr.pop();
      }
    }
  }
  if (newArr.length == firstArr.length){
    console.log(true)
  } else {
    console.log(false)
  }
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
