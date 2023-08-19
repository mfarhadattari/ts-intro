interface personal {
  name: string;
  work: string;
  age: number;
  married: boolean;
}

const aboutMe = (details: personal) => {
  console.log(
    `My name is ${details.name}. I am a/an ${details.work}. I am ${
      details.age
    } year old. I am ${details.married ? "Married" : "Unmarried"}.`
  );
};

/* aboutMe({
  name: "Mohammad Farhad",
  work: "Web Developer",
  age: 19,
  married: false,
}); */

let user1: personal;
user1 = {
  name: "Mohammad Farhad",
  age: 19,
  work: "Web Developer",
  married: false,
};
// console.log(user1);

let arrayOfPersons: personal[] = [];
arrayOfPersons.push(user1);
// console.log(arrayOfPersons);
