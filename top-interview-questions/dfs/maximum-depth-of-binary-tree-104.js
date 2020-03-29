/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  const itr = (depth, node) => {
    if (node === null) return depth;
    return Math.max(itr(depth + 1, node.left), itr(depth + 1, node.right));
  }
  return itr(0, root);
};
