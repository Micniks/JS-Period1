class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  getName() {
    return this._name;
  }
  setName(newName) {
    this._name = newName;
  }
  getAge() {
    return this._age;
  }
  setAge(newAge) {
    this._age = newAge;
  }
  sayHello(){
      return this._name + " said hello"
  }
}

class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this._studentID = studentID;
  }
  getStudentID() {
    return this._studentID;
  }
}

class Tutor extends Student {
  constructor(name, age, studentID, pay) {
    super(name, age, studentID);
    this._pay = pay;
  }
  getPay() {
    return this._pay;
  }
}

class Teacher extends Person {
  constructor(name, age, teacherID, pay) {
    super(name, age);
    this._teacherID = teacherID;
    this._pay = pay;
  }
  getTeacherID() {
    return this._teacherID;
  }
  getPay() {
    return this._pay;
  }
}

let person = new Person("Peter", 24)
let student = new Student("Jack", 32, "cph-J101")
let tutor = new Tutor("William", 23, "cph-W104", 125)
let teacher = new Teacher("Sam", 43, "cph-SB", 250)

console.log(person.sayHello())
console.log(student.sayHello())
console.log(tutor.sayHello())
console.log(teacher.sayHello())
