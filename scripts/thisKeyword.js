//Arrow function this keyword does not change the scope of what "this" refers to
var employee1 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log("this keyword in the arrow function: " + _this.id); }, 1000);
    }
};
employee1.greet();
//Old ES5 JavaScript function does the change the scope of what "this" refers to
var employee2 = {
    id: 1,
    greet: function () {
        setTimeout(function () { console.log("this keyword in the old JavaScript function: " + this.id); }, 1000);
    }
};
employee2.greet();
//# sourceMappingURL=thisKeyword.js.map