"use strict";
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing!"));
    };
    return Player;
}());
var farhad = new Player("Mohammad Farhad", 19, "Bangladesh");
var irfan = new Player("Mohammad Irfan", 15, "Bangladesh");
// farhad.play();
// use class as data type
var players = [];
players.push(irfan);
players.push(farhad);
//-------------- access modifier --------------
var Student = /** @class */ (function () {
    function Student(id, name, age) {
        var _this = this;
        this.message = function () {
            console.log("ID ".concat(_this.id, " is for ").concat(_this.name, " who is ").concat(_this.age, " years old "));
        };
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var farhadStudent = new Student(101, "Mohammad Farhad", 19);
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
var Programmer = /** @class */ (function () {
    function Programmer(name, tech, salary, skills) {
        var _this = this;
        this.name = name;
        this.tech = tech;
        this.salary = salary;
        this.skills = skills;
        this.about = function () {
            console.log("".concat(_this.name, " is ").concat(_this.tech, " with skills ").concat(_this.skills.join(", "), ". Expected salary is ").concat(_this.salary));
        };
    }
    return Programmer;
}());
var proFarhad = new Programmer("Mohammad Farhad", "Web Developer", 15000, [
    "JS",
    "TS",
    "React",
]);
// proFarhad.about();
