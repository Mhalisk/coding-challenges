# Linked List Recursive Swapping Challenge

## Problem Description

Given a singly linked list where each node contains a `text` value and a reference to the `next` node, the goal is to recursively swap every two adjacent nodes in the linked list. The swapping should be done by modifying node references, not by creating a new list or altering the text data within each node.

### Example

#### Input

A linked list with the structure:  
`c -> o -> d -> i -> e -> null`

#### Expected Output

A modified linked list with adjacent nodes swapped:  
`o -> c -> i -> d -> e -> null`

## Implementation

The code provides an implementation of the `ListNode` class, which is used to create nodes in the linked list. Additionally, it includes the following functions:

1. **`swapRecursive`**: A recursive function that performs the node swapping.
2. **`printList`**: A utility function to print out the linked list from a given starting node.

### Class Definition

The `ListNode` class defines each node in the linked list with two properties:

- `next`: a pointer to the next node in the list or `null` if it's the end of the list.
- `text`: a string value that each node holds.

### Recursive Swapping Logic

The recursive function `swapRecursive` performs the following steps:

1. **Base Case**: If there is only one node or no node left to swap, return the node.
2. **Swapping Nodes**:
   - Keep a reference to the first node (`first`), the second node (`second`), and the third node (`third`).
   - Recursively call `swapRecursive` on the third node, continuing the swapping down the list.
   - Adjust pointers so that `second` points to `first`, and `first` now points to the swapped result from the recursive call.

### Solution Walkthrough

Here’s the code execution order for the input linked list `c -> o -> d -> i -> e -> null`:

- **Step 1**: Swap `c` and `o`, resulting in `o -> c -> d -> i -> e`.
- **Step 2**: Recursively proceed to `d` and `i`, resulting in `o -> c -> i -> d -> e`.

The function returns the modified linked list with adjacent nodes swapped.

## Usage

To test the solution, uncomment the `printList(swappedList)` call. This will print the values of each node in the newly swapped list.
