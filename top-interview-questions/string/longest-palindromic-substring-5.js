/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 0 || s.length === 1) return s;
  let start = 0;
  let end = 0;
  const expandFromMiddle = (s, left, right) => {
    if (s === null || left > right) return 0;
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    console.log(left, right)
    return right - left - 1;
  };
  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromMiddle(s, i, i);
    const len2 = expandFromMiddle(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - parseInt((len - 1) / 2);
      end = i + parseInt(len / 2);
    }
  }
  return s.substr(start, end - start + 1);
};

var longestPalindrome = function (s) {
  if (s.length === 0) return '';
  if (s.length === 1) return s;
  const matrix = [...new Array(s.length)].map(_ => new Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) {
    matrix[i][i] = 1;
  }

  for (let i = 1; i < s.length; i++) {
    let row = 0;
    let col = i;
    while (col < s.length) {
      if (s[row] !== s[col]) {
        matrix[row][col] = Math.max(matrix[row + 1][col], matrix[row][col - 1]);
      } else if (s[row] === s[col]) {
        matrix[row][col] = matrix[row + 1][col - 1] + 2;
      }
      row++;
      col++;
    }
  }
  const max = matrix[0][s.length - 1];

  let row = 0;
  let col = s.length - 1;
  let str = '';
  // need to figure out how to traverse down to last
  while (row >= 0 &&  col >= 0) {
    if (s[row] === s[col] && matrix[row][col] === max) {
      console.log(row, col, s.substr(row, col))
      str = s.substring(row, max);
      break;
    } else if (s[row] !== s[col]) {
      if (matrix[row][col - 1] > matrix[row + 1][col]) {
        col--;
      } else {
        row++;
      }
    }
  }
  return str;
};
