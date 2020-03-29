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
var isSymmetric = function(root) {
  if (!root) return true;
  const checkSymm = (r1, r2) => {
    if (!r1 && !r2) return true;
    if (!r1 || !r2 || r1.val !== r2.val) return false;
    return checkSymm(r1.left, r2.right) && checkSymm(r1.right, r2.left);
  }
  return checkSymm(root.left, root.right);
};
