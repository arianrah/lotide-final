const letterPositions = function(sentence) {
  sentence = sentence.split(' ').join('');
  const results = {};

  for (let i = 0; i < sentence.length; i++){
       results[sentence[i]] = i+1;
  }
  console.log(results);
};
letterPositions("four");

