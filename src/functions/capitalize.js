function capitalize(word) {
  let str = '';

  word.trim().split('').forEach((cur, index) => {
    if (index === 0) { str += cur.toUpperCase(); } else { str += cur.toLowerCase(); }
  });

  return str;
}

export default capitalize;
