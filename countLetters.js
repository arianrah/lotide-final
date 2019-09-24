const countLetters = function(string) {
  let newStr = string.replace(/ /g, '')
  let stringToArray = [];
  const results = {};

  //string to array
  for (let i = 0; i < newStr.length; i++) {
    stringToArray.push(newStr.charAt(i));
  }

  //count
  for (const item of allItems) {//loops through allItems with item

    if (itemsToCount[item]) { //checks to match item with items to count

      if (results[item]) {
       results[item] += 1;
      } else {
      results[item] = 1;
      }

    }

  }
  return results;
};

module.exports = countLetters;