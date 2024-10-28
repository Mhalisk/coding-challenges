class ListNode {
  next: ListNode | null;
  text: string;

  constructor(next: ListNode | null, text: string) {
    this.next = next;
    this.text = text;
  }
}

// Build the linked list
const eNode = new ListNode(null, "e");
const iNode = new ListNode(eNode, "i");
const dNode = new ListNode(iNode, "d");
const oNode = new ListNode(dNode, "o");
const cNode = new ListNode(oNode, "c");

// Solution
function swapRecursive(startingNode: ListNode | null): ListNode | null {
  // INPUT:  c -> o -> d -> i -> e

  if (!startingNode || !startingNode.next) {
    return startingNode;
  }

  let first = startingNode;
  let second = first.next;

  first.next = swapRecursive(second.next);
  second.next = first;

  // OUTPUT: o -> c -> i -> d -> e
  return second;
}

// Utility function to print the linked list
function printList(head: ListNode) {
  let currentNode: ListNode | null = { ...head };
  while (currentNode != null) {
    console.log(currentNode.text);
    currentNode = currentNode.next;
  }
}

// Run the solution and print the result
const swappedList = swapRecursive(cNode);
printList(swappedList);
