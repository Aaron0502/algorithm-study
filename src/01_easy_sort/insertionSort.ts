import { swap, mockNums, sortTest } from "../utils";

/**
 * 插入排序
 */
export function insertionSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }
  for (let i = 1; i < arrLen; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}

export function insertionSortTest() {
  const nums = mockNums();
  console.log("insertionSortTest", insertionSort(nums));
  sortTest(insertionSort);
}
