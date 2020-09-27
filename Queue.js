class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    Shift(){
        if(this.length === 0) return undefined;
        let cur = this.head;
        let item = cur.val;
        if(this.length === 1){
            this.head = this.tail = null;
        }else{
            cur = cur.next;
            cur.prev = null;
            this.head = cur;
        }
        this.length--;
        return item;
    }

    Display(){
        let cur = this.head;
        while(cur !== null){
            console.log(cur.val);
            cur = cur.next;
        }
    }

}

let x = new Queue();
x.Push(10);
x.Push(20);
x.Push(30);
x.Push(40);
x.Push(50);
x.Shift();
x.Display();