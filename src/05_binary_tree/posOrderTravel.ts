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
export function posOrderTravel(tree: TreeNode | null) {
  if (tree) {
    posOrderTravel(tree.left);
    posOrderTravel(tree.right);
    log(tree.val);
  } else {
    return null;
  }
}

/**
 * 非递归实现
 */
export function posOrderTravelIterator(tree: TreeNode | null) {
  if (tree) {
    const stack1 = [tree];
    const stack2: TreeNode[] = [];
    while (stack1.length) {
      const topNode = stack1.pop()!;
      stack2.push(topNode);
      if (topNode.left) {
        stack1.push(topNode.left);
      }
      if (topNode.right) {
        stack1.push(topNode.right);
      }
    }
    let top = stack2.pop()!;
    while (top) {
      logIterator(top.val);
      top = stack2.pop()!;
    }
  } else {
    return null;
  }
}

export function posOrderTreeTest() {
  posOrderTravel(TREE);
  posOrderTravelIterator(TREE);
  const isPass = isEqual(records, recordsIterator);
  console.log(
    "后序遍历",
    records.join(","),
    `测试${isPass ? "通过" : "不通过"}`
  );
}
