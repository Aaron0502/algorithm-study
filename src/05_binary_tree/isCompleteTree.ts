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

function isCompleteTree(root: TreeNode | null): boolean {
  if (root) {
    const queue = [root];
    let isLeafNode = false;
    while (queue.length) {
      const firstNode = queue.pop()!;
      if (!firstNode.left && firstNode.right) {
        return false;
      }
      if (firstNode.left && firstNode.right) {
        if (isLeafNode) {
          return false;
        }
      } else {
        if (isLeafNode && firstNode.left) {
          return false;
        }
        isLeafNode = true;
      }
      if (firstNode.left) {
        queue.unshift(firstNode.left);
      }
      if (firstNode.right) {
        queue.unshift(firstNode.right);
      }
    }

    return true;
  } else {
    return true;
  }
}
