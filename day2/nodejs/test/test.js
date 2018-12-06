var assert = require('assert');
var fs = require('fs');
var day = require('../day2');
describe('Day 2: Inventory Management System', () => {
  describe('Part 1', () => {
    it('Examples', () => {
      var input = [ {
        id: 'abcdef',
        twiceLetter: false,
        threeTimesLetter: false,
      },{
        id: 'bababc',
        twiceLetter: true,
        threeTimesLetter: true,
      },{
        id: 'abbcde',
        twiceLetter: true,
        threeTimesLetter: false,
      },{
        id: 'abcccd',
        twiceLetter: false,
        threeTimesLetter: true,
      },{
        id: 'aabcdd',
        twiceLetter: true,
        threeTimesLetter: false,
      },{
        id: 'abcdee',
        twiceLetter: true,
        threeTimesLetter: false,
      },{
        id: 'ababab',
        twiceLetter: false,
        threeTimesLetter: true,
      }];

      input.forEach(value => {
        const [twiceLetter, threeTimesLetter] = day.findLetterCount(value.id);
        assert.equal(twiceLetter,value.twiceLetter,value.id);
        assert.equal(threeTimesLetter,value.threeTimesLetter,value.id);
      });

      const ids = input.map(value => value.id);
      assert.equal(day.calculateCheckSum(ids),12);
    });

    it('Puzzle Input', () => {
      const input = fs.readFileSync('./../day2.txt', 'utf8');
      const result = day.calculateCheckSum(input.split('\n'));
      assert.notEqual(Number(result),NaN); 
      console.log('Result of Day 2 Part 1: ' + result)
    });
  });
});