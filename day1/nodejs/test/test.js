var assert = require('assert');
var fs = require('fs');
var day1 = require('../day1');
describe('Day 1: Chronal Calibration', () => {
  describe('Examples', () => {
    it('First Example', () => {
        const input = fs.readFileSync('./test/example1.txt', 'utf8');
        assert.equal(day1.calculateFrequency(input),3);
    });
    it('Second Example', () => {
        const input = fs.readFileSync('./test/example2.txt', 'utf8');
        assert.equal(day1.calculateFrequency(input),0);
    });
    it('Third Example', () => {
        const input = fs.readFileSync('./test/example3.txt', 'utf8');
        assert.equal(day1.calculateFrequency(input),-6);
    });
  });
});