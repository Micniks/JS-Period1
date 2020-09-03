//Assignment 1:
assignmentHeader("1");

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1

//Assignment 2:
assignmentHeader("2");

function makePerson(initial_age, initial_name) {
  var age = "No Age Given";
  var name = "No Name Given";
  initial_age && (age = initial_age);
  initial_name && (name = initial_name);

  return {
    setAge: function (newAge) {
      age = newAge;
    },
    setName: function (newName) {
      name = newName;
    },
    getInfo: function () {
      return name + ", " + age;
    },
  };
}

var person1 = makePerson();
var person2 = makePerson(32, "Peter");
var person3 = makePerson(24, "Julie");

show("Person 1", person1.getInfo());
show("Person 2", person2.getInfo());
show("Person 3", person3.getInfo());

person1.setName("Viktor");
person2.setAge(38);

show("After name change to Person 1", person1.getInfo());
show("After age change to Person 2", person2.getInfo());
show("After no change to Person 3", person3.getInfo());

//Assignment 3:
assignmentHeader("3");

class Person {
  constructor(name, age) {
    this.name = name ? name : "No Name Given";
    this.age = age ? age : "No Age Given";
  }

  getInfo() {
    return this.name + ", " + this.age;
  }
}

let personA = new Person();
let personB = new Person("Jack", 12);

show("Person A", personA.getInfo());
show("Person B", personB.getInfo());

personA.name = "Michael";
personB.age = 13;

show("Person A with changed name", personA.getInfo());
show("Person B with changed age", personB.getInfo());

// functions for nicer console when program run

function show(message, element) {
  console.log(message + ":");
  console.log(element);
  console.log();
}

function assignmentHeader(assignmentLetter) {
  console.log(
    "\n\n\n-----------" + "Assignment " + assignmentLetter + "-----------\n"
  );
}
