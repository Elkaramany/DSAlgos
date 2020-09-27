class BinaryHeap{
    constructor(){
        this.values = [];
    }

    Insert(val){
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(){
        let max = this.values[0]; 
        let end = this.values.pop();
        this.values[0] = end;
        this.bubbleDown();
    }

    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    Display(){
        console.log(this.values);
    }
}

let heap = new BinaryHeap();
heap.Insert(41);
heap.Insert(39);
heap.Insert(45);
heap.Insert(24);
heap.Insert(19);
heap.Insert(55);
heap.Insert(7);
heap.Insert(69);
heap.extractMax();
heap.Display();