// let vs const
var num1; // let keyword does not need to initialize variable
var num2 = 22; // const keyword MUST initialize variable
var dog = {
    age: 3
};
dog = {
    age: 4
};
var cat = {
    age: 10
};
cat.age = 6; // You can change the individual properties 
// of a const object 
console.log("The dog age is " + dog.age + " and the cat age is " + cat.age);
// const keyword notes
// Does not have hoisting
// It has a block scope like let
//# sourceMappingURL=constKeyword.js.map