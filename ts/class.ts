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
const irfan = new Player("Mohammad Irfan", 15, "Bangladesh");
// farhad.play();

// use class as data type
let players: Player[] = [];
players.push(irfan);
players.push(farhad);

//-------------- access modifier --------------
class Student {
  public id: number | string;
  readonly name: string;
  private age: number;
  constructor(id: string | number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  message = () => {
    console.log(
      `ID ${this.id} is for ${this.name} who is ${this.age} years old `
    );
  };
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
  constructor(
    readonly name: string,
    readonly tech: string,
    private salary: number,
    public skills: string[]
  ) {}

  about = () => {
    console.log(
      `${this.name} is ${this.tech} with skills ${this.skills.join(
        ", "
      )}. Expected salary is ${this.salary}`
    );
  };
}

const proFarhad = new Programmer("Mohammad Farhad", "Web Developer", 15000, [
  "JS",
  "TS",
  "React",
]);

// proFarhad.about();
