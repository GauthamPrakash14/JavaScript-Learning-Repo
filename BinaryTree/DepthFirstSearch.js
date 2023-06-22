
// Depth first search using itetration

class Node {
    constructor (val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstSearch = (root) => {

    if (root === null) return [];
    
    const val = [];
    const stack = [root];
    while (stack.length > 0){
        const current = stack.pop();
        val.push(current.val);

        if(current.left) stack.push(current.right);
        if(current.right) stack.push(current.left);
    }
    return val;
     
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(depthFirstSearch(a));

