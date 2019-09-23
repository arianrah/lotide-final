const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

const findKeyByValue = function(bestTVShowsByGenre, movie) {
  let result;
  let key = Object.keys(bestTVShowsByGenre);
  let val = Object.values(bestTVShowsByGenre);
  for (let i = 0; i < key.length; i++){
    if (movie = val[i]){
      result = key[i];
    }
  }

  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
