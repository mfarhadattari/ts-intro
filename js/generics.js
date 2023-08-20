"use strict";
const createPair = (S, T) => {
    return [S, T];
};
// console.log(createPair<string, number>("hello", 42));
class UserName {
    constructor(name) {
        this.name = name;
        this.displayName = () => {
            console.log(this.name);
        };
    }
}
const farhadName = new UserName("Mohammad Farhad");
let farhad2;
farhad2 = {
    name: "Mohammad Farhad",
};
const fullName = (first, last) => {
    return [first, last];
};
console.log(fullName("Mohammad", "Farhad"));
