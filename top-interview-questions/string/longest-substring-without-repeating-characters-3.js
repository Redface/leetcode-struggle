/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const hashMap = new Map();
  let max = 0;
  let start = 0;
  let end = 0;

  while (end < s.length) {
    if (!hashMap.has(s[end])) {
      max = Math.max(max, (end - start) + 1);
      hashMap.set(s[end]);
      end++;
    } else {
      hashMap.delete(s[start]);
      start++;
    }
    console.log(start, end,hashMap);
  }
  return max;
};
// Input: "abcabcbb"
// Output: 3
