class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
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

    Pop(){
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            let cur = this.tail;
            cur = cur.prev;
            cur.next = null;
            this.tail = cur;
        }
        this.length--;
    }

    Shift(){
        if(!this.head) return undefined;
        let cur = this.head;
        cur = cur.next;
        cur.prev = null;
        this.head = cur;
        this.length--;
    }

    Unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    Display(){
        let cur = this.head;
        while(cur !== null){
            console.log(cur.val);
            cur = cur.next;
        }
    }

    Get(i){
        if(i < 0 || i >= this.length) return null;
        let counter = 0;
        let newNode = this.head;
        while(counter !== i){
            counter++
            newNode = newNode.next;
        }
        return newNode;
    }

    Set(val, i){
        let found = this.Get(i);
        if(found){
            found.val = val;
        }
    }

    InsertAt(val, i){
        if(i < 0 || i >= this.length) return undefined;
        let newNode = new Node(val);
        let cur = this.head;
        let counter = 0;
        while(counter !== i-1){
            counter++;
            cur = cur.next;
        }
        let temp = cur.next;
        cur.next = newNode;
        newNode.prev = cur;
        newNode.next = temp;
        temp.prev = newNode;
        this.length++;
    }

    RemoveAt(i){
        if(i < 0 || i >= this.length) return undefined;
        if(i === 0){
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }else{
            let cur = this.head;
            let counter = 0;
            while(counter !== i-1){
                counter++;
                cur = cur.next;
            }
            let temp = cur.next.next;
            cur.next = temp;
            if(temp){
                temp.prev = cur;
            }
        }
        this.length--;
    }

    Found(val){
        let first = this.head;
        let last = this.tail;
        for(let i = 0; i < this.length / 2;i++){
            if(first.val === val || last.val === val){
                return true;
            }
            first = first.next;
            last = last.prev;
        }
        return false;
    }
}

let x = new DoublyLinkedList();
x.Unshift(10);
x.Unshift(20);
x.Unshift(30);
x.Unshift(40);
x.Unshift(50);
x.Display();