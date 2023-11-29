function analyzeArray(arr) {
  function average() {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);

    return sum / arr.length;
  }

  return {
    average: average(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export default analyzeArray;
