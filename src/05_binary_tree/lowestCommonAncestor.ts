//Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }
  const leftParentNode = lowestCommonAncestor(root.left, p, q);
  const rightParentNode = lowestCommonAncestor(root.right, p, q);
  if (leftParentNode && rightParentNode) {
    return root;
  }
  return leftParentNode || rightParentNode;
}
