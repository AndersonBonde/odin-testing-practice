function capitalize(word) {
  const copy = word.trim();
  let str = '';

  str = copy.charAt(0).toUpperCase() + copy.slice(1).toLowerCase();

  return str;
}

export default capitalize;
