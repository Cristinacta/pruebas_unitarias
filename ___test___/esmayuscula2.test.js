const isUpperCase = require('../utils/esmayuscula');
describe('esmayuscula', () => {
    test.each`
      firstValue  | expectedResult    
      ${"CASA"}   | ${true}     
      ${"casa"}   | ${false}      
      ${"M"}      | ${true}        
    `('comprobar si $firstValue está en mayuscula, el resultado en $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });