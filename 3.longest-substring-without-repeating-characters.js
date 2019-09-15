/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // use slide window
  const map = new Set();
  const len = s.length;
  let i = 0;
  let j = 0;
  let result = 0;
  while (j < len) {
    const currentChar = s[j];
    if (!map.has(currentChar)) {
      map.add(currentChar);
    } else {
      result = Math.max(result, map.size);
      // find the equal position
      while(s[i] !== s[j]) {
        map.delete(s[i]);
        i+=1;
      };
      i++;
    }
    j++;
  }

  return Math.max(result, map.size
    );
};

