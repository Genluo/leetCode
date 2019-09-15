/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, isNode) {

  let result = null;
  let node = null;
  const getValue  = (list) => (list && list.val || 0);
  const getNext = (list) => (list && list.next || null);
  while (l1 || l2) {
    if (!result) {
      result = new ListNode(getValue(l1) + getValue(l2));
      node = result;
      l1 = getNext(l1);
      l2 = getNext(l2);
    } else {
      let currentValue = node.val > 9 ? 1 : 0;
      if (currentValue) {
        node.val = node.val % 10;
      }
      currentValue += getValue(l1) + getValue(l2);
      node.next = new ListNode(currentValue);
      node = node.next;
      l1 = getNext(l1);
      l2 = getNext(l2);
    }
  }

  if (node && node.val > 9) {
    node.next = new ListNode(1);
    node.val = node.val % 10;
  }

  return result;
};
