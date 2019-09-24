const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] == val) {
      return key;
    }
  }
};

/*
const obj = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(obj, "The Wire"), "drama");
assertEqual(findKeyByValue(obj, "That '70s Show"), undefined);
*/

module.exports = findKeyByValue;
