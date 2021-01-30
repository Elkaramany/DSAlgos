class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get Y() { return 42 };

    Push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    Shift() {
        if (this.length === 0) return undefined;
        let cur = this.head;
        let item = cur.val;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            cur = cur.next;
            cur.prev = null;
            this.head = cur;
        }
        this.length--;
        return item;
    }

    Display() {
        let cur = this.head;
        while (cur !== null) {
            console.log(cur.val);
            cur = cur.next;
        }
    }

}

let Q = new Queue();
Q.Push(10);
Q.Push(20);
Q.Push(30);
Q.Push(40);
Q.Push(60);
Q.Push(50);
Q.Display();