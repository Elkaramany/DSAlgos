class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
        this.length = 0;
    }

    Insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
        }else{
            let cur = this.root;
            while(true){
                if(val <= cur.val){
                    if(cur.left === null){
                        cur.left = newNode;
                        break;
                    }else{
                        cur = cur.left;
                        continue;
                    }
                }else{
                    if(cur.right === null){
                        cur.right = newNode;
                        break;
                    }else{
                        cur = cur.right;
                        continue;
                    }
                }
            }
        }
        this.length++;
    }

    Find(item){
        if(!this.root) return false;
        let cur = this.root;
        while(cur){
            if(cur.val === item) return true;
            if(item <= cur.val){
                cur = cur.left;
            }else{
                cur = cur.right;
            }
        }
        return false;
    }

    BFS(){
        let data = [], q = [], node = this.root, avg = 0, size;
        q.push(node);
        while(q.length){
            avg = 0;
            size = q.length;
            for(let i = 0; i < size;i++){
                node = q.shift();
                avg += node.val;
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            data.push(avg / size);
        } 
        return data;
    }

    Inorder(){
        this.Inordercall(this.root); 
    }

    Inordercall(root){
        if(!root) return;
        this.Inordercall(root.left);
        console.log(root.val);
        this.Inordercall(root.right); 
    }

    Preorder(){
        this.Preordercall(this.root); 
    }

    Preordercall(root){
        if(!root) return;
        console.log(root.val);
        this.Preordercall(root.left);
        this.Preordercall(root.right); 
    }

    Postorder(){
        this.Postordercall(this.root); 
    }

    Postordercall(root){
        if(!root) return;
        this.Postordercall(root.left);
        this.Postordercall(root.right);
        console.log(root.val); 
    }
}

let x = new BST();
x.Insert(10);
x.Insert(20);
x.Insert(50);
x.Insert(5);
x.Insert(6);
x.Insert(15);
console.log(x.BFS());