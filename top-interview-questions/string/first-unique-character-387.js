/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    if (!dict[s[i]]) {
      dict[s[i]] = {
        count: 1,
        index: i,
      };
    } else {
      dict[s[i]].count++;
    }
  }
  s.split('').forEach((char, i) => {
    !dict[char] ? dict[char] = { count: 1, index: i } : dict[char].count++;
  });
  let result = -1;
  Object.values(dict).forEach(({ count, index }) => {
    if (count === 1) {
      if (result === -1 || index < result) {
        result = index;
      }
    }
  });
  return result;
};
