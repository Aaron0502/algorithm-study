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

const TREE: TreeNode = getBinaryTree();

const { records, log } = logInit();
const { records: recordsIterator, log: logIterator } = logInit();

/**
 * 递归实现
 */
export function preOrderTravel(tree: TreeNode | null) {
  if (tree) {
    log(tree.val);
    preOrderTravel(tree.left);
    preOrderTravel(tree.right);
  } else {
    return null;
  }
}

/**
 * 非递归实现
 */
export function preOrderTravelIterator(tree: TreeNode | null) {
  if (tree) {
    const stack: TreeNode[] = [tree];
    while (stack.length) {
      const topNode = stack.pop()!;
      logIterator(topNode.val);
      if (topNode.right) {
        stack.push(topNode.right);
      }
      if (topNode.left) {
        stack.push(topNode.left);
      }
    }
  } else {
    return null;
  }
}

export function prevOrderTreeTest() {
  preOrderTravel(TREE);
  preOrderTravelIterator(TREE);
  const isPass = isEqual(records, recordsIterator);
  console.log(
    "前序遍历",
    records.join(","),
    `测试${isPass ? "通过" : "不通过"}`
  );
}
