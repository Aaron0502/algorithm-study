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

function isValidBST(root: TreeNode | null): boolean {
  let prevValue = -Infinity;
  function dfs(tree: TreeNode | null): boolean {
    if (tree) {
      const leftIsValid = dfs(tree.left);
      if (leftIsValid) {
        if (tree.val > prevValue) {
          prevValue = tree.val;
        } else {
          return false;
        }
      } else {
        return false;
      }
      return dfs(tree.right);
    } else {
      return true;
    }
  }
  return dfs(root);
}
