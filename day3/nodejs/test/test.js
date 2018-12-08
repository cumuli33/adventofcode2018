var assert = require('assert');
var fs = require('fs');
var day = require('../day3');
describe('Day 3: No Matter How You Slice It', () => {
  describe('Part 1', () => {
    it('Examples', () => {
      const input = "#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2";
      const regex = /#(\d*) @ (\d*),(\d*): (\d*)x(\d*)/;
      const claims = input.split('\n')
                      .map(value => regex.exec(value))
                      .map(value => ({
                        id: Number(value[1]),
                        coordinates: { 
                          x: Number(value[2]), 
                          y: Number(value[3])
                        }, 
                        width: Number(value[4]),
                        height: Number(value[5])
                      }));
      let fabric = day.constructFabric(claims);
      assert.equal(day.countOverlappingClaims(fabric),4);
    });

    it('Puzzle Input', () => {
      const regex = /#(\d*) @ (\d*),(\d*): (\d*)x(\d*)/;
      const claims = fs.readFileSync('./../day3.txt', 'utf8')
                    .split('\n')
                    .map(value => regex.exec(value))
                    .map(value => ({
                                    id: Number(value[1]),
                                    coordinates: { 
                                      x: Number(value[2]), 
                                      y: Number(value[3])
                                    }, 
                                    width: Number(value[4]),
                                    height: Number(value[5])
                                  }));
      const fabric = day.constructFabric(claims);
      const result = day.countOverlappingClaims(fabric);
      assert.notEqual(Number(result),NaN); 
      console.log('Result of Day 3 Part 1: ' + result);
  });  
  describe('Part 2', () => {
    it('Examples', () => {
      const input = "#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2";
      const regex = /#(\d*) @ (\d*),(\d*): (\d*)x(\d*)/;
      const claims = input.split('\n')
                      .map(value => regex.exec(value))
                      .map(value => ({
                        id: Number(value[1]),
                        coordinates: { 
                          x: Number(value[2]), 
                          y: Number(value[3])
                        }, 
                        width: Number(value[4]),
                        height: Number(value[5])
                      }));
      
      let fabric = day.constructFabric(claims,(fields => {
        console.log(fields);
      }));
    });
    });

    
    it('Puzzle Input', () => {
      const regex = /#(\d*) @ (\d*),(\d*): (\d*)x(\d*)/;
      const claims = fs.readFileSync('./../day3.txt', 'utf8')
                    .split('\n')
                    .map(value => regex.exec(value))
                    .map(value => ({
                                    id: Number(value[1]),
                                    coordinates: { 
                                      x: Number(value[2]), 
                                      y: Number(value[3])
                                    }, 
                                    width: Number(value[4]),
                                    height: Number(value[5])
                                  }));
      let fabric = day.constructFabric(claims,(fields => {
        console.log('Result of Day 3 Part 1: ' + fields);
      }));
    });
  });
});