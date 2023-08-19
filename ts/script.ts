console.log("Welcome to TypeScript!");

// inference: auto set data type from my declaration
// Explicit: Define data type

let userName = "Mohammad Farhad";
userName = "Mohammad Farhad Attari";
// userName = 50; Only Can possible to assign string
// console.log(userName);

let old = 15;
old = 19;
// old = "19" ; Only can possible to assign number
// console.log(old);

const add = (a: number, b: number) => {
  return a + b;
};

// console.log(add(2, 4));

const numbers = [1, 2, 3, 4];
numbers.push(5);
// numbers.push("hello") Only possible to add number
// console.log(numbers);

const mixedArray = ["Hello", 4, true];
mixedArray.push(5);
mixedArray.push("World");
mixedArray.push(false);
// mixedArray.push(null); only can possible to add string, number and boolean
// console.log(mixedArray);

const user = {
  name: "Mohammad Farhad",
  old: 19,
  isProgrammer: true,
  skills: ["JavaScript", "TypeScript", "Python"],
};

user.name = "Mohammad Farhad Attari";
// user.name = 10; Only can assign string
// user.education = "SSC" cannot add new properties
// console.log(user);

let num1: number;
num1 = 5;
// num1 = "5"; Only possible to assign number
// console.log(num1);

let fname: string;
fname = "Mohammad";
// fname = 10; Only can possible to assign string
// console.log(fname);

let isAdult: boolean;
isAdult = true;
// isAdult = "true"; only possible to assign boolean
// console.log(isAdult);

let friends: string[];
// let friends: string[] = [];
friends = ["Rakib", "Hasan", "Sami", "Morshed"];
// friends = 5; Only assignable array of string
// friends = ["Rakib", 4, 6, 7]; Only assignable array of string
// console.log(friends);

let friendsAge: number[];
// let friendsAge: number[] = [];
friendsAge = [12, 14, 16, 17];
// friendsAge = 4; Only assignable array of number
// friendsAge = [4, "hello"]; Only assignable array of number
// console.log(friendsAge);

let mixedArray2: (number | string | boolean)[];
// let mixedArray2: (number | string | boolean)[] = [];
mixedArray2 = ["hello", 19, true];
// mixedArray2 = "hello"];  only can assignable array of number, string and boolean
// mixedArray2 = ["hello", 19, true, null];  only can assignable array of number, string and boolean
// console.log(mixedArray2);

let user2: { name: string; age: number; isMarried: boolean };
user2 = {
  name: "Mohammad Farhad",
  age: 19,
  isMarried: false,
};
// user2 = []; only can assignable object with defined properties
// console.log(user2);
