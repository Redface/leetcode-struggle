/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root || !root.left) return root;
  const connectNode = (node1, node2) => {
    if (node1.next === null) {
      node1.next = node2;
    }
    if (node1.left) {
      connectNode(node1.left, node1.right);
      connectNode(node1.right, node2.left);
      connectNode(node2.left, node2.right);
    }
  }
  connectNode(root.left, root.right);
  return root;
};
