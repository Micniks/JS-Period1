//Example 1

console.log("Example 1: Apply & Call");
var person1 = {
  name: "John",
  age: 22,
  info: function () {
    return this.name;
  },
};

var person2 = { name: "Jeff" };

function whatsThis() {
  return this.name;
}

console.log(person1.info());
console.log(person1.info.call(person2));
console.log(person1.info.apply(person2));
console.log(whatsThis());
console.log(whatsThis.call(person1));
console.log(whatsThis.apply(person1));

console.log("\n");
//Example 2
console.log("Example 2: Bind");

var whatsThisWithName = whatsThis.bind({ name: "Peter" });
console.log(whatsThisWithName());

console.log("\n");
//Example 3
console.log("Example 3:");
function strict() {
  "use strict";
  console.log("Simple function call with strict");
  console.log(this === globalThis);
}

function notStrict() {
  console.log("Simple function call");
  console.log(this === globalThis);
}

strict();
notStrict();
