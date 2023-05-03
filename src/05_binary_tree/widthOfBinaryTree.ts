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

// 层序遍历，注意数字超出边界问题
// function widthOfBinaryTree(root: TreeNode | null): number {
//   if (root) {
//     let arr = [{ node: root, index: 1n }];
//     let res = 1n;
//     while (arr.length) {
//       arr = arr.reduce<Array<{ node: TreeNode; index: bigint }>>(
//         (prev, cur) => {
//           const { node, index } = cur;
//           if (node.left) {
//             prev.push({ node: node.left, index: index * 2n });
//           }
//           if (node.right) {
//             prev.push({ node: node.right, index: index * 2n + 1n });
//           }
//           return prev;
//         },
//         []
//       );
//       const len = arr.length;
//       if (len > 1) {
//         const curNum = arr[len - 1].index - arr[0].index + 1n;
//         res = curNum > res ? curNum : res;
//       }
//     }
//     return Number(res);
//   } else {
//     return 0;
//   }
// }

// 递归求解
function widthOfBinaryTree(root: TreeNode | null): number {
  const levelMap: Record<number, bigint> = {};
  function dfs(tree: TreeNode | null, depth: number, index: bigint): bigint {
    if (tree) {
      if (!levelMap[depth]) {
        levelMap[depth] = index;
      }
      const leftCount = dfs(tree.left, depth + 1, index * 2n);
      const rightCount = dfs(tree.right, depth + 1, index * 2n + 1n);
      const largeChild = leftCount > rightCount ? leftCount : rightCount;
      const curCount = index - levelMap[depth] + 1n;
      return curCount > largeChild ? curCount : largeChild;
    } else {
      return 0n;
    }
  }
  return Number(dfs(root, 1, 1n));
}
