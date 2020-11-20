let displayColors =function(message, ...colors){
    console.log(message);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors) {
        console.log(colors[i]);
    }
}

let message = "List of colors"

displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue', 'Green');

let fruitArray = ['strawberry', 'banana', 'apple', 'watermelon', 'orange'];

let spreadOperatorMessage = "Spread Operator"
displayColors(spreadOperatorMessage, ...fruitArray);

// Rest Operator allows you to add an indefinite amount of arguments as an array
// Rest Operator must be the last argument passed into a function and there can 
// only be one Rest Operator per function

// Spread Operator does the opposite of the rest operator. It takes an array and breaks
// it up into individual elements. Spread operator is used when a function is being 
// invoked, whereas the rest operator is used when the function is declared. 