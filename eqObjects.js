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

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
*/
module.exports = eqObjects;