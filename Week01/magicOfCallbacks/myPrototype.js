function myFilter(callback) {
  let newArray = [];
  this.forEach((element) => {
    callback(element) && newArray.push(element);
  });
  return newArray;
}

function myMap(callback) {
  let newArray = [];
  this.forEach((element) => {
    newArray.push(callback(element));
  });
  return newArray;
}

Array.prototype.myFilter = myFilter;
Array.prototype.myMap = myMap;

//Testing with Strings
let nameArray = ["Jack", "Peter", "Niels", "Christian", "Henrik"];
let checkNameForA = (name) => {
  return name.toUpperCase().includes("A");
};
let doubleString = (name) => {
  return name + name;
};

console.log("Original array:");
console.log(nameArray);
console.log();
console.log("With map array:");
console.log(nameArray.myMap(doubleString));
console.log();
console.log("With filter array:");
console.log(nameArray.myFilter(checkNameForA));
console.log();
