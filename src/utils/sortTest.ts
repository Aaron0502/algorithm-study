import { mockNums, mockNum } from "./mockNums";

export const innerSort = (arr: number[]) => arr.sort((a, b) => a - b);

export const isEqual = (arr1: number[], arr2: number[]) =>
  arr1.every((item, index) => item === arr2[index]);

export function sortTest(sort: (arr: number[]) => number[]) {
  // 测试50次
  const isPass = Array.from({ length: 50 }, () => 1).every(() => {
    const arrLen = mockNum();
    const arr1 = mockNums(arrLen);
    const arr2 = [...arr1];
    innerSort(arr1);
    sort(arr2);
    return isEqual(arr1, arr2);
  });
  if (isPass) {
    console.log("测试通过！");
  } else {
    console.warn("测试不通过！");
  }
}
