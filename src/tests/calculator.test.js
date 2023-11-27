import calculator from '../functions/calculator';

test('Adding two positive numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('Adding two negative numbers', () => {
  expect(calculator.add(-2, -4)).toBe(-6);
});

test('Adding positive with negative', () => {
  expect(calculator.add(4, -3)).toBe(1);
});
