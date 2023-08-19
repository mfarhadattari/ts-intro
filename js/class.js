"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const farhad = new Player("Mohammad Farhad", 19, "Bangladesh");
const irfan = new Player("Mohammad Irfan", 15, "Bangladesh");
// farhad.play();
// use class as data type
let players = [];
players.push(irfan);
players.push(farhad);
//-------------- access modifier --------------
class Student {
    constructor(id, name, age) {
        this.message = () => {
            console.log(`ID ${this.id} is for ${this.name} who is ${this.age} years old `);
        };
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
const farhadStudent = new Student(101, "Mohammad Farhad", 19);
// public: readable and re-assignable
// console.log(farhadStudent.id);
farhadStudent.id = 50;
// readonly: readable but not re-assignable
// console.log(farhadStudent.name);
// farhadStudent.name = 'Mohammad Farhad Attari'
// private: cannot readable and assignable
// console.log(farhadStudent.age);
// farhadStudent.age = 17;
// ------------------ class in easy way ----------
class Programmer {
    constructor(name, tech, salary, skills) {
        this.name = name;
        this.tech = tech;
        this.salary = salary;
        this.skills = skills;
        this.about = () => {
            console.log(`${this.name} is ${this.tech} with skills ${this.skills.join(", ")}. Expected salary is ${this.salary}`);
        };
    }
}
const proFarhad = new Programmer("Mohammad Farhad", "Web Developer", 15000, [
    "JS",
    "TS",
    "React",
]);
// proFarhad.about();
