//Example 1:
assignmentHeader("Example 1");

show();

e1 ? e1() : console.log("e1 is not a function");
e2 ? e2() : console.log("e2 is not a function");

function e1() {
  console.log("This is function 1");
}

var e2 = () => {
  console.log("This is function 2");
};

//Example 2
assignmentHeader("Example 2");

show("Above the function, it reads", f1);
show("Above the var, it reads", f2);

function f1() {
  return "Hello";
}

var f2 = () => {
  "Hello";
};

show("Below the function, it reads", f1);
show("Below the var, it reads", f2);

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
