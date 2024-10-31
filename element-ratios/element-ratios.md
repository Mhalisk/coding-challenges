# Calculate Element Ratios with Precision in an Integer Array

## Problem Statement

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

### Example

Input:

```plaintext
arr = [1, 1, 0, -1, -1]
```

There are 5 elements: two positive, two negative, and one zero. Their ratios are calculated as follows:

- Positive: (2/5 = 0.400000)
- Negative: (2/5 = 0.400000)
- Zero: (1/5 = 0.200000)

Output:

```plaintext
0.400000
0.400000
0.200000
```

### Input

- **arr**: An array of integers representing the input elements.

### Output

Print the ratios of positive, negative, and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

## Input Format

- The first line contains an integer, **n**, the size of the array.
- The second line contains **n** space-separated integers that describe `arr[n]`.

## Output Format

Print the following 3 lines, each to 6 decimal places:

1. Proportion of positive values
2. Proportion of negative values
3. Proportion of zeros

## Sample Input

```plaintext
-4 3 -9 0 4 1
```

## Sample Output

```plaintext
0.500000
0.333333
0.166667
```

### Explanation

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array. The proportions of occurrence are:

- Positive: (3/6 = 0.500000)
- Negative: (2/6 = 0.333333)
- Zero: (1/6 = 0.166667)

---

This solution calculates the ratios of positive, negative, and zero values in an array of integers. It iterates through the array, counts each type of element, and prints the resulting ratios to six decimal places, as required by the challenge.

1. **Counting Positives, Negatives, and Zeros**:

   - The `plusMinus` function initializes a `counts` object to track the number of positive, negative, and zero values.
   - It iterates over each element in `arr`. For each element, it uses the `checkNumber` helper function to classify the number as `"positive"`, `"negative"`, or `"zero"`.
   - Depending on the classification, the corresponding property in the `counts` object is incremented.

2. **Calculating and Printing Ratios**:
   - After counting, we calculate the ratio of each category by dividing the count by `arr.length`.
   - Each ratio is formatted to six decimal places using `.toFixed(6)`.
   - Finally, the ratios are printed to the console, each on a new line.

## Complexity Analysis

- **Time Complexity**:
  - The solution has a **time complexity of O(n)**, where `n` is the length of the input array, `arr`.
  - This is because we iterate over `arr` once to count the values, and all other operations (checking conditions, incrementing counts, calculating ratios) are constant-time operations **O(1)**.
- **Space Complexity**:
  - The space complexity is **O(1)**, as we use a fixed amount of extra space regardless of the size of `arr`.
  - The `counts` object only holds three properties (`positive`, `negative`, and `zero`), and no additional memory is allocated based on `n`.

## Summary

This solution efficiently counts the positive, negative, and zero values in an array and calculates their ratios in **O(n)** time. It’s optimal for this problem, as every element in the array needs to be checked to determine the counts.
