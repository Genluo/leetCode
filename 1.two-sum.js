/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  nums.map((item, index) => {
    const start = index;
    const remainArr = nums.slice(start + 1);
    const remainEnd = remainArr.findIndex(remainItem => remainItem === target - item);
    if (remainEnd !== -1) {
      result = [start, remainEnd + start + 1];
    };
  })
  return result;
};

