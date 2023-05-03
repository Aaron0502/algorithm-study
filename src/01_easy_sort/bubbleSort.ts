/**
 * 冒泡排序
 */
import { swap, mockNums, sortTest } from "../utils";

export function bubbleSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }
  for (let i = arrLen - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

export function bubbleSortTest() {
  const nums = mockNums();
  console.log("bubbleSortTest", bubbleSort(nums));
  sortTest(bubbleSort);
}
