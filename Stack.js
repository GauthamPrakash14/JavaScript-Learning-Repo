class StackNode {

    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {

    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val){
        if(this.size === 0){
            this.top = new StackNode(val);
        }else{
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        this.size++;
    }

    pop(){
        if(this.size === 0){
            return null;
        }else{
            const poppedNode = this.top;
            this.top = this.top.next;
            this.size--;
            return poppedNode.val;
        }
    }

    getNode(){
        return this.top.val;
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(78);

console.log(myStack.getNode());

console.log('////////////')
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.size);