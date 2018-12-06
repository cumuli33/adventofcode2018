var assert = require('assert');
var fs = require('fs');
var day1 = require('../day1');
describe('Day 1: Chronal Calibration', () => {
  describe('Examples', () => {
    it('First Example', () => {
        const input = fs.readFileSync('./../example1.txt', 'utf8');
        assert.equal(day1.calculateFrequency(input),3);
    });
    it('Second Example', () => {
        const input = fs.readFileSync('./../example2.txt', 'utf8');
        assert.equal(day1.calculateFrequency(input),0);
    });
    it('Third Example', () => {
        const input = fs.readFileSync('./../example3.txt', 'utf8');
        assert.equal(day1.calculateFrequency(input),-6);
    });
  });
  it('Day1 Puzzle', () => {
    const input = fs.readFileSync('./../day1.txt', 'utf8');
    const result = day1.calculateFrequency(input);
    assert.notEqual(Number(result),NaN);
    console.log('Result of Day 1: ' + result)
  });
});