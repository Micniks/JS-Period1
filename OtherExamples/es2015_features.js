// let
console.log("\n\nLet:\n");
let x = 1; // Exist in the outer block
if (x === 1) {
  let x = 2; // Exist in the inner block
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1

//Arrow functions
console.log("\n\nArrow Functions:\n");

function aFunction(param) {
  return "Uppercased: " + String(param).toUpperCase();
}
const arrowFunction = (param) => "Uppercased: " + String(param).toUpperCase();
const longArrowFunction = (param) => {
    console.log("Here we can do some more stuff")
    param = String(param).toUpperCase();
    let result = "Uppercased: " + param;
    return result;
}

console.log(aFunction("test_a"))
console.log(arrowFunction("test_arrow"))
console.log(longArrowFunction("test_long_arrow"))

//This
console.log("\n\nThis:\n");
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

//Rest parameters
console.log("\n\nRest Parameters:\n");
function withoutRest(a,b){
    return a+b
}
const withRest = (...inputs) => {
    return inputs.reduce((acc, input) => acc+input)
}
console.log(withoutRest(1,2))  // Return 3
console.log(withoutRest(1,2, 3, 4)) // Return 3
console.log(withRest(1,2)) // Return 3
console.log(withRest(1,2,3, 4)) // Return 10

//Destructuring objects and arrays
console.log("\n\nDestructuring Objects and Arrays:\n");
//For Arrays
let introduction = ["Hello", "I" , "am", "Sarah"];
let [greeting, pronoun] = introduction;

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

//For Objects
let person = {
    name: "Jack",
    age: 24,
    occupation: "Smith"
}
let {name, occupation} = person;
console.log(name);
console.log(occupation);

//Maps & sets
//Map
console.log("\n\nMaps/Sets:\n");
let value = 25
let map = new Map()
map.set('key', value)
console.log(map.has('key'))
console.log(map.get('key'))
console.log(map.has('other'))
console.log(map.get('other'))

//Set
let set = new Set()
set.add(1)
set.add(2)
set.add(2)
set.add(3)
console.log(set)