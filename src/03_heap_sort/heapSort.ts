import { mockNums, sortTest, swap } from "../utils";
/**
 * 大根堆
 */
function heapInsert(arr: number[], index: number) {
  while (arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1);
    index = (index - 1) >> 1;
  }
}

function heapify(arr: number[], index: number, heapSize: number) {
  let left = index * 2 + 1;
  while (left < heapSize) {
    // 孩子节点中哪一个更大
    let largestIndex =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    largestIndex = arr[largestIndex] > arr[index] ? largestIndex : index;
    if (largestIndex === index) {
      break;
    }
    swap(arr, index, largestIndex);
    index = largestIndex;
    left = index * 2 + 1;
  }
}

export function heapSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }
  //   arr.forEach((_, index) => heapInsert(arr, index));

  // 优化算法
  for (let i = arrLen - 1; i >= 0; i--) {
    heapify(arr, i, arrLen);
  }

  for (let i = 0; i < arrLen; i++) {
    swap(arr, 0, arrLen - i - 1);
    heapify(arr, 0, arrLen - i - 1);
  }
  return arr;
}

export function heapSortTest() {
  const nums = mockNums();
  console.log("heapSortTest", heapSort(nums));
  sortTest(heapSort);
}
