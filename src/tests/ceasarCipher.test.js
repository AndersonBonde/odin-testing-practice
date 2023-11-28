import ceasar from '../functions/ceasarCipher';

test('Cipher upshift 2', () => {
  expect(ceasar.cipher('abc', 2)).toBe('cde');
});

test('Cipher downshift 3', () => {
  expect(ceasar.cipher('def', -3)).toBe('abc');
});

test('Cipher upshift 4', () => {
  expect(ceasar.cipher('wxyz', 4)).toBe('abcd');
});

test('Cipher upshift 13', () => {
  expect(ceasar.cipher('rstuv', 13)).toBe('efghi');
});

test('Cipher downshift 9', () => {
  expect(ceasar.cipher('abcd', -9)).toBe('rstu');
});

test('Cipher upshift 8', () => {
  expect(ceasar.cipher('Hello', 8)).toBe('Pmttw');
});

test('Don"t cipher non alphabet characters', () => {
  expect(ceasar.cipher('!Hello!', 8)).toBe('!Pmttw!');
});

test('Cipher a long frase upshifting 11', () => {
  expect(ceasar.cipher('!Hello, how are you? I"m under the water, please help!', 11)).toBe('!Spwwz, szh lcp jzf? T"x fyopc esp hlepc, awpldp spwa!');
});
