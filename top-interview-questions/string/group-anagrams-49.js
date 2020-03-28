/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) return [];

  const dict = {};
  strs.forEach(str => {
    const sortedStr = str.split('').sort().join('');
    dict[sortedStr] ? dict[sortedStr].push(str) : dict[sortedStr] = [str];
  });
  return Object.values(dict).map(val => val);
}

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
