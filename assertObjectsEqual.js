const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`)
  }
}

const eqObjects = function(obj1, obj2) {
  let result;
  let key1 = Object.keys(obj1);
  let val1 = Object.values(obj1);
  let key2 = Object.keys(obj2);
  let val2 = Object.keys(obj2);
  if (key1.length !== key2.length && val1.length !== val2.length){
    result = false;
  } else {
    let i = 0;
      for (const key in obj1) {
        if (obj1[key] == obj2[key]) {
          i++;
        }
      }
     if (i = key1.length){
       result = true;
     } 
    }
  return result;
};



module.exports = assertObjectsEqual;