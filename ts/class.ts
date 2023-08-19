class Player {
  name: string;
  age: number;
  country: string;

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const farhad = new Player("Mohammad Farhad", 19, "Bangladesh");
const sakib = new Player("Mohammad Sakib", 20, "Bangladesh");
const irfan = new Player("Mohammad Irfan", 15, "Bangladesh");
// farhad.play();

// use class as data type
let players: Player[] = [];
players.push(sakib);
players.push(farhad);
