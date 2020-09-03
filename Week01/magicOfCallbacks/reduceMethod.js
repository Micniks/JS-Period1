var all = ["Lars", "Peter", "Jan", "Bo"];

//Assignment A:
assignmentHeader("A");

allComma = all.join(",");
allSpace = all.join(" ");
allHashtag = all.join("#");
allBinder = all.join("-");

show("Join by Comma", allComma);
show("Join by Space", allSpace);
show("Join by Hashtag", allHashtag);
show("Join by Binder", allBinder);

//Assignment B:
assignmentHeader("B");

var numbers = [2, 3, 67, 33];
show("Number Array", numbers);

let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
show("Sum of Numbers", sum);

//Assignment C:
assignmentHeader("C");

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

function ageReducer(accumulator, member, index, arr) {
  if (index == 1) {
    accumulator = accumulator.age;
  }
  if (index == arr.length - 1) {
    return (accumulator + member.age) / arr.length;
  } else {
    return accumulator + member.age;
  }
}

let avarage = members.reduce(ageReducer);

show("All Members Info", members);
show("Avarage Age", avarage);

//Assignment D:
assignmentHeader("D");

var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

function countVotes(votes, vote, index) {
  if (index == 1) {
    let voteCounter = [];
    voteCounter[votes] = 1;
    votes = voteCounter;
  }
  if (!votes[vote]) {
    votes[vote] = 1;
  } else {
    votes[vote] += 1;
  }
  return votes;
}

show("Votes", votes.reduce(countVotes));

// functions for nicer console when program run

function show(message, element) {
  console.log(message + ":");
  console.log(element);
  console.log();
}

function assignmentHeader(assignmentLetter) {
  console.log("\n\n\n-----------" + "Assignment " + assignmentLetter + "-----------\n");
}
