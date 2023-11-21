test('test to equal Test', () => {
  expect(capitalize('test').toBe('Test'));
});

test('TEST to equal Test', () => {
  expect(capitalize('TEST').toBe('Test'));
});