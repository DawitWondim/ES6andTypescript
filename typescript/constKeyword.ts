// let vs const
let num1; // let keyword does not need to initialize variable
const num2 = 22; // const keyword MUST initialize variable

let dog = {
    age: 3
};

dog = {         // With let you can reassign the variable (object)
    age: 4
}

const cat = {  //Cannot recreate the object.
    age: 10
}

cat.age = 6;  // You can change the individual properties 
// of a const object 

console.log("The dog age is " + dog.age + " and the cat age is " + cat.age);

// const keyword notes
// Does not have hoisting
// It has a block scope like let



