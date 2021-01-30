class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    PushFirst(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    Pop() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = this.tail = null;
            return;
        }
        let beforeLast = this.head;
        while (beforeLast.next !== this.tail) {
            beforeLast = beforeLast.next;
        }
        beforeLast.next = null;
        this.tail = beforeLast;
        this.length--;
    }

    Display() {
        let newNode = this.head;
        while (newNode !== null) {
            console.log(newNode.val);
            newNode = newNode.next;
        }
    }

    PopFirst() {
        if (!this.head) return;
        this.head = this.head.next;
        this.length--;
        return this;
    }

    Get(i) {
        if (i < 0 || i >= this.length) return null;
        let counter = 0;
        let newNode = this.head;
        while (counter !== i) {
            counter++
            newNode = newNode.next;
        }
        return newNode;
    }

    Set(val, i) {
        let found = this.Get(i);
        if (found) {
            found.val = val;
        }
    }

    InsertAt(val, i) {
        if (i < 0 || i >= this.length) return null;
        if (i === 0) {
            this.PushFirst(val);
            return;
        } else if (i === this.length - 1) {
            this.Push(val);
            return;
        }
        let newNode = new Node(val);
        let cur = this.head;
        let counter = 0;
        while (counter !== i - 1) {
            cur = cur.next;
            counter++;
        }
        newNode.next = cur.next;
        cur.next = newNode;
        this.length++;
    }

    RemoveAt(i) {
        if (i < 0 || i >= this.length) return undefined;
        let counter = 0;
        let cur = this.head;
        while (counter !== i - 1) {
            cur = cur.next;
            counter++;
        }
        cur.next = cur.next.next;
        this.length--;
    }

    ReverseList() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next, prev = null;
        while (node !== null) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

const reverseLinkedList = (head) => {
    let reversed = null, tmp;
    while (head) {
        tmp = head;
        head = head.next;
        tmp.next = reversed;
        reversed = tmp;
    }
    return reversed;
};

let x = new SinglyLinkedList();
let y = new SinglyLinkedList();
x.Push(1);
x.Push(9);
x.Push(1);
x.Push(2);
x.Push(4);

y.Push(3);
y.Push(2);
y.Push(4);

console.log(getIntersectionNode(x.head, y.head))
