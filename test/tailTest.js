const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it('returns [lighthouse, Labs] from [Yo Yo, Lighthouse, Labs]', () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  })

})


/*
const words = ['Yo Yo', 'Lighthouse', 'Labs']
tail(words) // no need to capture the return value since we are not checking it
assertEqual(words.length, 3) // original array should still have 3 elements!
*/