const createPair = <S, T>(S: S, T: T): [S, T] => {
  return [S, T];
};
// console.log(createPair<string, number>("hello", 42));

class UserName<T> {
  constructor(private name: T) {}

  displayName = () => {
    console.log(this.name);
  };
}

const farhadName = new UserName<string>("Mohammad Farhad");
// farhadName.displayName();

type nameObj<T> = { name: T };

let farhad2: nameObj<string>;
farhad2 = {
  name: "Mohammad Farhad",
};

const fullName = <F = string, L = string>(first: F, last: L): [F, L] => {
  return [first, last];
};

console.log(fullName("Mohammad", "Farhad"));
