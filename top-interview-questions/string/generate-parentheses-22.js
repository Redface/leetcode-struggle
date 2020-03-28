/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n <= 0) return[];
  const res= [];
  const subArr = [];
  const trav = (open, close, str) => {
    if (open > close) return;
    //if (open === 0 && close === 0) return res.push(subArr.join(''));
    if (open === 0 && close === 0) return res.push(str);

    if (open > 0) {
      subArr.push('(');
      trav(open - 1, close, str + '(');
    }
    if (close > 0) {
      subArr.push(')');
      trav(open, close - 1, str + ')');
    }
  }

  trav(n, n, '');

  return res;
};
