// queue implementation with O(1) complexity

class QueueNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;    
        this.size = 0;
    }

    enqueue(val){
        const newNode = new QueueNode(val);
        if (this.size === 0){
            this.front = newNode;
            this.back = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode; 
        }

        this.size++;
    }

    dequeue(){
        if(this.size === 0){
            return null;
        }else{
            const poppedNode = this.front;
            this.front = this.front.next;
            this.size--;
            return poppedNode;
        }
    }
}

const myQueue = new Queue();
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');

console.log(myQueue.size);
console.log(myQueue.front.val);
console.log(myQueue.back.val);

console.log("///////////////// Dequeue //////////")

myQueue.dequeue();
console.log(myQueue.size);
myQueue.dequeue();
console.log(myQueue.size);
myQueue.dequeue();
console.log(myQueue.size);
console.log(myQueue.dequeue());
console.log(myQueue.size);

//console.log(myQueue.size);
//console.log(myQueue.front);
//console.log(myQueue.back);