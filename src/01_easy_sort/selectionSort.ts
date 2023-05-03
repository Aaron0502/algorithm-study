/**
 * 选择排序
 */
import { swap, mockNums, sortTest } from "../utils";

export function selectionSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }
  for (let i = 0; i < arrLen; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

export function selectionSortTest() {
  const nums = mockNums();
  console.log("selectionSortTest", selectionSort(nums));
  sortTest(selectionSort);
}
