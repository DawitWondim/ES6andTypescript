// Create a function that will greet a person
function greetPersonAgain(name){
    let greet; // Hoisting is NOT allowed with the let keyword
    if(name == "Chandler"){
        greet = "Hello Chandler";  // The let keyword is block scope NOT function scope
    } else {
        greet = "Hi there";
    }
    console.log(greet);
}


//Invoke the greetPerson function
greetPersonAgain("Chandler");


// Comparing let and var
var a = 1;
var b = 2;
if(a == 1){
    var a = 10;
    let b = 20;
    console.log("The var a in the if block is " + a); // 10
    console.log("The let b in the if block is " + b); // 20
}
console.log("The global var a is " + a); // 10
console.log("The global b is " + b); // 2    The let value became out of scope

// Another Example of let vs var
for(var a = 1; a < 6; a++){
    setTimeout(function(){console.log("Using var in the loop a is now: " + a );}, 2000);
}
for(let a = 1; a < 6; a++){
    setTimeout(function(){console.log("Using let in the loop a is now: " + a );}, 2000);
}
// Additional Notes about let keyword
// You cannot redeclare the same variable using the let keyword in the same scope