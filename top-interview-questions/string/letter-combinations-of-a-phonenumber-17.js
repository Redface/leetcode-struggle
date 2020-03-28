/**
 * @param {string} digits
 * @return {string[]}
 */
const dict = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' };
var letterCombinations = function(digits) {
  const res = [];
  const subArr = [];
  const backtrack = idx => {
    if (idx === digits.length) {
      return res.push(subArr.join(''));
    }
    const str = dict[digits[idx]];
    for (let i = 0; i < str.length; i++) {
      subArr.push(str[i]);
      backtrack(idx + 1);
      subArr.pop();
    }
  };

  if (digits.length) {
    backtrack(0);
  }
  return res;
};
