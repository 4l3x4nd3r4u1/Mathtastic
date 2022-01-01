const  romanToInt = (s) => {
  let lastRomanNumber = 'I';
  let natural = 0;

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (let i = s.length - 1; i >= 0; i--) {
    if (map[s.charAt(i)] >= map[lastRomanNumber]) {
      natural += map[s.charAt(i)];
    } else {
      natural -= map[s.charAt(i)];
    }
    lastRomanNumber = s.charAt(i);
  }

  return natural;
}

export default romanToInt;
