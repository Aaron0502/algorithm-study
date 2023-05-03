export function mockNums(length = 10) {
  return Array.from({ length }, () => {
    return Math.floor(Math.random() * 1000);
  });
}

export function mockNum(maxNum = 50) {
  return Math.floor(Math.random() * maxNum);
}
