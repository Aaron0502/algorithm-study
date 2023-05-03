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

export function getBinaryTree(depth = 4): TreeNode {
  const tree = {
    val: 1,
    left: null,
    right: null,
  };
  let level = 1;
  let curLevelTree: TreeNode[] = [tree];
  while (level < depth) {
    level++;
    const newLevelTree: TreeNode[] = [];
    curLevelTree.forEach((item) => {
      item.left = {
        val: item.val * 2,
        left: null,
        right: null,
      };
      item.right = {
        val: item.val * 2 + 1,
        left: null,
        right: null,
      };
      newLevelTree.push(item.left, item.right);
    });
    curLevelTree = newLevelTree;
  }
  return tree;
}
