const ceasar = (() => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  function cipher(str, shift) {
    let copy = [...str];

    copy = copy.map((value) => {
      let newIndex = alphabet.indexOf(value.toLowerCase()) + shift;
      if (newIndex >= 26) newIndex -= 26;
      if (newIndex < 0) newIndex += 26;

      if (/[a-z]/.test(value)) {
        return alphabet[newIndex];
      }
      if (/[A-Z]/.test(value)) {
        return alphabet[newIndex].toUpperCase();
      }

      return value;
    });

    return copy.join('');
  }

  return {
    cipher,
  };
})();

export default ceasar;
