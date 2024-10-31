# MiniMax Sum

## Problem Statement

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

### Example

```plaintext
arr = [1, 3, 5, 7, 9]
```

The minimum sum is calculated by summing the smallest four integers: \(1 + 3 + 5 + 7 = 16\).  
The maximum sum is calculated by summing the largest four integers: \(3 + 5 + 7 + 9 = 24\).  
The function prints:

```plaintext
16 24
```

### Parameters

- **arr**: an array of 5 integers.

### Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 out of 5 elements.

## Input Format

A single line of five space-separated integers.

## Output Format

Print two space-separated long integers denoting the minimum and maximum sums of exactly four out of five elements. (The output can be greater than a 32-bit integer.)

## Sample Input

```plaintext
1 2 3 4 5
```

## Sample Output

```plaintext
10 14
```

### Explanation

The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

1. Sum everything except 1: \(2 + 3 + 4 + 5 = 14\)
2. Sum everything except 2: \(1 + 3 + 4 + 5 = 13\)
3. Sum everything except 3: \(1 + 2 + 4 + 5 = 12\)
4. Sum everything except 4: \(1 + 2 + 3 + 5 = 11\)
5. Sum everything except 5: \(1 + 2 + 3 + 4 = 10\)

The minimum sum is 10 and the maximum sum is 14.

# Solution Walkthrough for MiniMax Sum

This solution finds the minimum and maximum sums of four out of five integers in an array. The approach involves sorting the array, selecting subarrays, and calculating the sums.

## Step-by-Step Explanation

1. **Sorting the Array**:

   - The first step is to sort the array using `arr.sort()`. Sorting arranges the integers in ascending order, making it easy to find the minimum and maximum sets of four numbers.
   - **Result**: After sorting, the smallest elements are at the beginning of the array, and the largest elements are at the end.

2. **Selecting Subarrays for Minimum and Maximum Sums**:

   - **Minimum Sum Array** (`minArr`): We create a new array by copying `sortedArr` and using `splice` to remove the last element. This array, `minArr`, consists of the four smallest numbers.
   - **Maximum Sum Array** (`maxArr`): Similarly, we create another copy of `sortedArr` and use `splice` to remove the first element. This array, `maxArr`, consists of the four largest numbers.

3. **Calculating the Sums**:

   - Using `reduce`, we calculate the sum of `minArr` to get the minimum sum.
   - We also use `reduce` to sum `maxArr`, giving us the maximum sum.

4. **Output**:
   - Finally, we print `min` and `max`, which represent the minimum and maximum sums.

## Complexity Analysis

1. **Time Complexity**:

   - **Sorting**: Sorting the array has a time complexity of **O(n log n)**, where `n` is the length of `arr`. This step is the most computationally expensive part of the code and dominates the overall complexity.
   - **Splicing**: Each call to `splice` is **O(n)**, but since we're only creating two subarrays of constant size (4 elements), this remains effectively **O(n)**.
   - **Reducing**: Each call to `reduce` for summing elements is **O(n)**, but again, this operation is limited to a constant number of elements.

   **Overall Time Complexity**: **O(n log n)** due to the sorting step.

2. **Space Complexity**:
   - Creating `sortedArr`, `minArr`, and `maxArr` requires additional space. However, since we are only working with small arrays of constant length, the space complexity is **O(n)**.

## Summary

This solution effectively calculates the minimum and maximum sums by sorting the array and using slicing techniques. The main time complexity bottleneck is the sorting step, making the overall complexity **O(n log n)**.
