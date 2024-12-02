const palindromo = require('../utils/palindromo');
describe('palindromo', () => {
    test.each`
      firstValue | expectedResult    
      ${"CASA"}  | ${"ASAC"} 
      ${"AMOR"}  | ${"ROMA"} 
      ${"C"}     | ${"C"}       
    `('comprobar el palindromo de $firstValue, el resultado en $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });