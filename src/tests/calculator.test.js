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

test('Subtract two positive numbers', () => {
  expect(calculator.subtract(7, 3)).toBe(4);
});

test('Subtract two negative numbers', () => {
  expect(calculator.subtract(-5, -2)).toBe(-3);
});

test('Subtract a positive number from a negative number', () => {
  expect(calculator.subtract(-6, 8)).toBe(-14);
});

test('Subtract a negative number from a positive number', () => {
  expect(calculator.subtract(7, -2)).toBe(9);
});
