//assignment 2.a function for myFilter
function myFilter(array, callback) {
  let newArray = [];
  array.forEach((element) => {
    callback(element) && newArray.push(element);
  });
  return newArray;
}

// function for testing
function testingDifference(array, callback) {
  console.log("Normal Filter:");
  console.log(array.filter(callback));
  console.log();
  console.log("My Filter");
  console.log(myFilter(array, callback));
}

//Testing with Strings
let nameArray = ["Jack", "Peter", "Niels", "Christian", "Henrik"];
let checkNameForA = (name) => {
  return name.toUpperCase().includes("A");
};

testingDifference(nameArray, checkNameForA);

//Testing with Numbers
let numberArray = [100, 200, -10, 33, 0, -999999];
let checkNumberEndingOnZero = (number) => {
  return number % 10 == 0;
};

testingDifference(numberArray, checkNumberEndingOnZero);
