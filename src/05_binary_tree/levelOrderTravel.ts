import { getBinaryTree, isEqual } from "../utils";

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

function logInit() {
  const records: number[] = [];
  return {
    records,
    log(val: number) {
      records.push(val);
    },
  };
}

const TREE_DEPTH = 4;
const TREE: TreeNode = getBinaryTree(TREE_DEPTH);

const { records, log } = logInit();

export function levelOrderTravel(tree: TreeNode | null) {
  if (tree) {
    const queue = [tree];
    while (queue.length) {
      const rightNode = queue.shift()!;
      log(rightNode.val);
      if (rightNode.left) {
        queue.push(rightNode.left);
      }
      if (rightNode.right) {
        queue.push(rightNode.right);
      }
    }
  } else {
    return null;
  }
}

export function levelOrderTreeTest() {
  levelOrderTravel(TREE);
  const isPass = isEqual(
    records,
    Array.from({ length: Math.pow(2, TREE_DEPTH) - 1 }, (_, index) => index + 1)
  );
  console.log(
    "层序遍历",
    records.join(","),
    `测试${isPass ? "通过" : "不通过"}`
  );
}
