import reverseString from '../functions/reverseString';

test('abc to equal cba', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('word to equal drow', () => {
  expect(reverseString('word')).toBe('drow');
});

test('Hello, I"m under the water. to equal .retaw eht rednu m"I ,olleH', () => {
  expect(reverseString('Hello, I"m under the water.')).toBe('.retaw eht rednu m"I ,olleH');
});
