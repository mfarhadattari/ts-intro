let myFunc: Function;
myFunc = () => {
  console.log("Hello World!");
};
// myFunc();

// optional parameter
const func2 = (name: string, age: number, isMarried?: boolean) => {
  console.log(`${name} is ${age} years old.`);
};

// func2("Mohammad Farhad", 19);
// func2("Mohammad Hasan", 19, true);

// default parameter
const func3 = (name: string, age: number, isMarried: boolean = false) => {
  console.log(`${name} is ${age} years old. Is Marred ${isMarried}`);
};

// func3("Mohammad Farhad", 19);
// func3("Mohammad Farhad", 19, true);

// return statement
const addNumber = (num1: number, num2: number) => {
  return num1 + num2;
};

// console.log(addNumber(10, 20));

const powNumber = (number: number, pow: number): number => {
  return Math.pow(number, pow);
};

// console.log(powNumber(10, 2));

// function signature
let calculate: (num1: number, num2: number, operation: string) => number;
calculate = (num1, num2, operation) => {
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

console.log(calculate(10, 5, "plus"));
