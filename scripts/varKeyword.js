// Create a function that will greet a person
function greetPerson(name) {
    if (name == "Chandler") {
        greet = "Hello Chandler"; // The var keyword does NOT have a block scope,
        // ONLY a function and global scope
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
    var greet; // Hoisting will allow you to declare the variable below 
    // the line that you call the variable.
}
//Invoke the greetPerson function
greetPerson("Chandler");
//# sourceMappingURL=varKeyword.js.map