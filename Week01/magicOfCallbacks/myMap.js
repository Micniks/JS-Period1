//assignment 2.b function for myMap
function myMap(array, callback){
    let newArray = [];
    array.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray;
}

// function for testing
function testingDifference(array, callback) {
    console.log("Normal Map:");
    console.log(array.map(callback));
    console.log();
    console.log("My Map");
    console.log(myMap(array, callback));
  }
  
  //Testing with Strings
  let nameArray = ["Jack", "Peter", "Niels", "Christian", "Henrik"];
  let doubleString = (name) => {
    return name + name;
  };
  testingDifference(nameArray, doubleString);
  
  //Testing with Numbers
  let numberArray = [100, 200, -10, 33, 0, -999999];
  let plusOne = (number) => {
    return number+1;
  };
  
  testingDifference(numberArray, plusOne);