function plusMinus(arr: number[]): void {
  const counts = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  // Iterate over the array
  for (const num of arr) {
    // Determine if the number is positive, negative, or zero
    const indicator = checkNumber(num);
    // Increment the appropriate count
    counts[indicator]++;
  }

  // Calculate ratios and format to 6 decimal places
  const positiveRatio = (counts.positive / arr.length).toFixed(6);
  const negativeRatio = (counts.negative / arr.length).toFixed(6);
  const zeroRatio = (counts.zero / arr.length).toFixed(6);

  // Print each ratio
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

function checkNumber(num: number): "positive" | "negative" | "zero" {
  if (num < 0) return "negative";
  if (num > 0) return "positive";
  return "zero";
}

// run the solution
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
