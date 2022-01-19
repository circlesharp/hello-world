class Person {
  constructor(public name: string) { }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  public grade: number;

  constructor(name: string, grade: number) {
    super(name);
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}