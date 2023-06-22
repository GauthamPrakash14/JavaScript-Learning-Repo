let user = {
    name: "Sruthy",
    age: 25,
    "Like Dogs": false,
    "Did he/she wear shaddi": true
};

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log(user.name);
console.log(user["Like Dogs"]);
console.log(user.age);
console.log(typeof user.name);
console.log(typeof user.age);
console.log(rabbit.eats);

// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);


// let user = {
//     name: "John",
//     age: 30
//   };

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")