import { mockNums, sortTest } from "../utils";

export function countSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }

  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arrLen; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  const helpLen = max - min + 1;
  const helpArr = new Array(helpLen).fill(0);
  for (let i = 0; i < arrLen; i++) {
    helpArr[arr[i] - min] += 1;
  }
  let i = 0;
  for (let j = 0; j < helpLen; j++) {
    if (helpArr[j] !== 0) {
      for (let k = 0; k < helpArr[j]; k++) {
        arr[i++] = j + min;
      }
    }
  }
  return arr;
}

export function countSortTest() {
  const nums = mockNums();
  console.log("countSortTest", countSort(nums));
  sortTest(countSort);
}
