const arr = [1,2,4,5,6, 'What the hell', [1,2,4]];

console.log(arr[5]);
console.log(arr.length);
console.log(arr[6]);

// Stack

// Stack using an array

const myStack = [];
myStack.push('a');
myStack.push('b');

console.log(myStack[0], myStack[1]);
myStack.pop()
console.log(myStack);


// Queue

const queue = [1,5,8,3];
queue.push(34);
queue.push(3e4);
queue.push(34445);
queue.push(344545);
queue.push(344545);
queue.push(34343467657);

console.log(queue);

queue.shift();
queue.shift();
queue.shift();
queue.shift();

console.log(queue);

