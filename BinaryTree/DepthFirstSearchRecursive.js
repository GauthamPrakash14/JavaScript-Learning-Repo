class Node {
    constructor (val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstSearch = (root) => {
    if (root === null) return [];
    const leftNodes = depthFirstSearch(root.left);
    const rightNodes = depthFirstSearch(root.right);

    return [root.val, ...leftNodes, ...rightNodes];
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