var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue', 'Green');
var fruitArray = ['strawberry', 'banana', 'apple', 'watermelon', 'orange'];
var spreadOperatorMessage = "Spread Operator";
displayColors.apply(void 0, __spreadArrays([spreadOperatorMessage], fruitArray));
// Rest Operator allows you to add an indefinite amount of arguments as an array
// Rest Operator must be the last argument passed into a function and there can 
// only be one Rest Operator per function
// Spread Operator does the opposite of the rest operator. It takes an array and breaks
// it up into individual elements. Spread operator is used when a function is being 
// invoked, whereas the rest operator is used when the function is declared. 
//# sourceMappingURL=restAndSpreadOperator.js.map