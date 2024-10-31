function miniMaxSum(arr: number[]): void {
  // order the array
  const sortedArr = arr.sort();

  // remove the last number, immutably
  const minArr = [...sortedArr].splice(0, sortedArr.length - 1);
  // remove the first number, immutably
  const maxArr = [...sortedArr].splice(1);

  // add the remaining elements in each array to give us the MIN & MAX
  const min = minArr.reduce((accum, val) => (accum += val));
  const max = maxArr.reduce((accum, val) => (accum += val));

  console.log(min, max);
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
