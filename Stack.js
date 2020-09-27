class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Pop(){
        if(!this.head) return undefined;
        let cur = this.tail;
        let item = cur.val;
        if(this.length === 1){
            this.head = this.tail = null;
        }else{
            cur = cur.prev;
            cur.next = null;
            this.tail = cur;
        }
        this.length--;
        return item;
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
    
    Display(){
        let cur = this.head;
        while(cur !== null){
            console.log(cur.val);
            cur = cur.next;
        }
    }
}

let x = new Stack();
x.Push(10);
x.Push(20);
x.Push(30);
x.Push(40);
x.Push(50);
console.log(x.Pop() + ' removed')
x.Display();