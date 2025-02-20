class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}

// Membangun linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reversedHead = reverseList(head);

let current = reversedHead;
while (current !== null) {
    console.log(current.val); // Output: 5, 4, 3, 2, 1
    current = current.next;
}
