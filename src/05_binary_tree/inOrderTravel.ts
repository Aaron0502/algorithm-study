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
export function inOrderTravel(tree: TreeNode | null) {
  if (tree) {
    inOrderTravel(tree.left);
    log(tree.val);
    inOrderTravel(tree.right);
  } else {
    return null;
  }
}

/**
 * 非递归实现
 */
export function inOrderTravelIterator(tree: TreeNode | null) {
  const stack: TreeNode[] = [];
  let head = tree;
  while (stack.length || head) {
    if (head) {
      stack.push(head);
      head = head.left;
    } else {
      head = stack.pop()!;
      logIterator(head.val);
      head = head.right;
    }
  }
}

export function inOrderTreeTest() {
  inOrderTravel(TREE);
  inOrderTravelIterator(TREE);
  const isPass = isEqual(records, recordsIterator);
  console.log(
    "中序遍历",
    records.join(","),
    `测试${isPass ? "通过" : "不通过"}`
  );
}
