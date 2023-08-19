class Teacher {
  constructor(
    private name: string,
    private subject: string,
    private salary: number
  ) {}

  about = () => {
    console.log(
      `${this.name} is ${this.subject} Teacher, her salary is ${this.salary} TK`
    );
  };
}

export default Teacher;
