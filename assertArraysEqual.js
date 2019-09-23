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
  if (newArr.length === firstArr.length){
    return true
  } else {
    return false
  }
}

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === true){
    console.log(`✅✅✅ Assertion Passed`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`)
  }
}
assertArraysEquals([1, 2, 3], [1, 2, 3]) // => true
