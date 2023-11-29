import analyzeArray from '../functions/analyzeArray';

test('Analyze simple array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyze array with negative numbers', () => {
  expect(analyzeArray([1, 3, -2, 4, -3])).toEqual({
    average: 0.6,
    min: -3,
    max: 4,
    length: 5,
  });
});
