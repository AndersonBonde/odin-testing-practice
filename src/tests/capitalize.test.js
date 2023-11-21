import capitalize from '../functions/capitalize';

test('test to equal Test', () => {
  expect(capitalize('test')).toBe('Test');
});

test('TEST to equal Test', () => {
  expect(capitalize('TEST')).toBe('Test');
});

test('Remove initial whitespaces', () => {
  expect(capitalize(' wORD')).toBe('Word');
});

test('Remove final whitespaces', () => {
  expect(capitalize('word   ')).toBe('Word');
});

test('Remove whitespaces from both sides', () => {
  expect(capitalize('  word    ')).toBe('Word');
});