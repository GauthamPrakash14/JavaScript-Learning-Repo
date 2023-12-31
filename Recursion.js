const factorial = (n) => {
    if(n === 1) return 1;

    return n * factorial (n-1);
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(125));

// Time complexity :  O(n)
// Space complexity = O(n)