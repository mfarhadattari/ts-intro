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
var sakib = new Player("Mohammad Sakib", 20, "Bangladesh");
var irfan = new Player("Mohammad Irfan", 15, "Bangladesh");
// farhad.play();
// use class as data type
var players = [];
players.push(sakib);
players.push(farhad);
