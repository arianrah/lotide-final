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

const middle = function(arr) {
  let midArr = [];
  let arrLen = arr.length;
  if (arrLen <= 2){
   return midArr;
  } else {
    if (arrLen % 2 != 0) { //odd
      let i = Math.ceil(arrLen/2)-1;
      midArr.push(arr[i]);
    } else { //even
      let lowerIndex = Math.floor(arrLen/2-1);
      let higherIndex = Math.ceil(arrLen/2);
      midArr.push(arr[lowerIndex]);
      midArr.push(arr[higherIndex]);
    }
  }
  return midArr;
}

//fail
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
//odd
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
//even
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
