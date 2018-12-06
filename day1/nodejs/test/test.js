var assert = require('assert');
var fs = require('fs');
var day1 = require('../day1');
describe('Day 1: Chronal Calibration', () => {
  describe('Part 1', () => {
    describe('Examples', () => {
      it('First Example', () => {
          const input = fs.readFileSync('./../examplep1-1.txt', 'utf8');
          assert.equal(day1.calculateFrequency(input),3);
      });
      it('Second Example', () => {
          const input = fs.readFileSync('./../examplep1-2.txt', 'utf8');
          assert.equal(day1.calculateFrequency(input),0);
      });
      it('Third Example', () => {
          const input = fs.readFileSync('./../examplep1-3.txt', 'utf8');
          assert.equal(day1.calculateFrequency(input),-6);
      });
      it('Puzzle Input', () => {
        const input = fs.readFileSync('./../day1.txt', 'utf8');
        const result = day1.calculateFrequency(input);
        assert.notEqual(Number(result),NaN);
        console.log('Result of Day 1 Part 1: ' + result)
      });
    });
  });
  describe('Part 2', () => {
    it('First Example', () => {
        const input = fs.readFileSync('./../examplep2-1.txt', 'utf8');
        assert.equal(day1.findRepeatingFrequency(input),0);
    });
    it('Second Example', () => {
        const input = fs.readFileSync('./../examplep2-2.txt', 'utf8');
        assert.equal(day1.findRepeatingFrequency(input),10);
    });
    it('Third Example', () => {
        const input = fs.readFileSync('./../examplep2-3.txt', 'utf8');
        assert.equal(day1.findRepeatingFrequency(input),5);
    });
    it('Fourth Example', () => {
      const input = fs.readFileSync('./../examplep2-4.txt', 'utf8');
      assert.equal(day1.findRepeatingFrequency(input),14);
  });
    it('Puzzle Input', () => {
      const input = fs.readFileSync('./../day1.txt', 'utf8');
      const result = day1.findRepeatingFrequency(input);
      assert.notEqual(Number(result),NaN);
      console.log('Result of Day 1 Part 2: ' + result)
    });
  });
});