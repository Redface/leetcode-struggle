/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;
  const isValidB = (node, min, max)  => {
    if (!node) return true;
    if (node.val >= max || node.val <= min) return false;
    return isValidB(node.left, min, node.val) && isValidB(node.right, node.val, max);
  }
  return isValidB(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
