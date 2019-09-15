/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sortArr = Array.prototype.concat([], nums1, nums2).sort((a,b) => a - b);
  const sortArrLen = sortArr.length;
  let medianLeft = 0;
  let medianRight = 0;
  if (sortArrLen && sortArrLen % 2 === 0) {
    medianLeft = sortArr[sortArrLen / 2 - 1];
    medianRight = sortArr[sortArrLen / 2];
  } else if (sortArrLen && sortArrLen % 2 !== 0) {
    medianLeft = sortArr[Math.floor(sortArrLen / 2)];
    medianRight = medianLeft;
  };

  return (medianLeft + medianRight) / 2;
};


