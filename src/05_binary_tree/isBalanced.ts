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

function isBalanced(root: TreeNode | null): boolean {
  function dfs(
    root: TreeNode | null,
    depth: number
  ): {
    depth: number;
    isValid: boolean;
  } {
    if (root) {
      const leftDepth = dfs(root.left, depth + 1);
      const rightDepth = dfs(root.right, depth + 1);
      const newDepth = Math.max(leftDepth.depth, rightDepth.depth);
      if (leftDepth.isValid && rightDepth.isValid) {
        return {
          depth: newDepth,
          isValid: Math.abs(leftDepth.depth - rightDepth.depth) <= 1,
        };
      } else {
        return { depth: newDepth, isValid: false };
      }
    } else {
      return { depth, isValid: true };
    }
  }
  return dfs(root, 0).isValid;
}
