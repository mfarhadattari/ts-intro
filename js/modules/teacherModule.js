class Teacher {
    constructor(name, subject, salary) {
        this.name = name;
        this.subject = subject;
        this.salary = salary;
        this.about = () => {
            console.log(`${this.name} is ${this.subject} Teacher, her salary is ${this.salary} TK`);
        };
    }
}
export default Teacher;
