const assertArraysEqual = require('./assertArraysEquals');

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

module.exports = middle;
