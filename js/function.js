"use strict";
var myFunc;
myFunc = function () {
    console.log("Hello World!");
};
// myFunc();
// optional parameter
var func2 = function (name, age, isMarried) {
    console.log("".concat(name, " is ").concat(age, " years old."));
};
// func2("Mohammad Farhad", 19);
// func2("Mohammad Hasan", 19, true);
// default parameter
var func3 = function (name, age, isMarried) {
    if (isMarried === void 0) { isMarried = false; }
    console.log("".concat(name, " is ").concat(age, " years old. Is Marred ").concat(isMarried));
};
// func3("Mohammad Farhad", 19);
// func3("Mohammad Farhad", 19, true);
// return statement
var addNumber = function (num1, num2) {
    return num1 + num2;
};
// console.log(addNumber(10, 20));
var powNumber = function (number, pow) {
    return Math.pow(number, pow);
};
// console.log(powNumber(10, 2));
// function signature
var calculate;
calculate = function (num1, num2, operation) {
    switch (operation) {
        case "plus":
            return num1 + num2;
        case "minus":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "dived":
            return num1 / num2;
        default:
            return 0;
    }
};
// console.log(calculate(10, 5, "plus"));
