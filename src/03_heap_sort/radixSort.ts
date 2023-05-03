import { mockNums, sortTest } from "../utils";

function getMaxBit(num: number) {
  let maxbit = 1;
  while (num) {
    maxbit++;
    num = Math.floor(num / 10);
  }
  return maxbit;
}

function getDigit(num: number, bit: number) {
  return Math.floor(num / Math.pow(10, bit - 1)) % 10;
}

/**
 * 更通用，可以排指定区间的数
 */
function process(arr: number[], l: number, r: number, maxBit: number) {
  const radix = 10;
  const bucket: number[] = [];

  for (let i = 0; i < maxBit; i++) {
    // 10 位count数组
    const countArr: number[] = new Array(radix).fill(0);
    /**
     * count数组计数
     */
    for (let j = l; j <= r; j++) {
      const itemNum = getDigit(arr[j], i + 1);
      countArr[itemNum] += 1;
    }
    for (let q = 1; q < radix; q++) {
      countArr[q] += countArr[q - 1];
    }

    for (let k = r; k >= l; k--) {
      const itemNum = getDigit(arr[k], i + 1);
      const count = countArr[itemNum];
      bucket[count - 1] = arr[k];
      countArr[itemNum]--;
    }
    for (let o = 0, p = l; p <= r; o++, p++) {
      arr[p] = bucket[o];
    }
  }
}

export function radixSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }
  let maxNum = arr[0];
  for (let i = 0; i < arrLen; i++) {
    maxNum = Math.max(maxNum, arr[i]);
  }
  const maxBit = getMaxBit(maxNum);
  process(arr, 0, arrLen - 1, maxBit);
  return arr;
}

export function radixSortTest() {
  const nums = mockNums();
  console.log("radixSortTest", radixSort(nums));
  sortTest(radixSort);
}
