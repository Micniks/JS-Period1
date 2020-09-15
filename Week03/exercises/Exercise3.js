const fetch = require("node-fetch");
const URL = "https://swapi.dev/api/people/";
const now = require("performance-now");

function fetchPerson(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

async function printNames() {
  let start = now();
  
  console.log("Before");
  const person1 = await fetchPerson(URL + "1");
  const person2 = await fetchPerson(URL + "2");
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");

  return start;
}

async function printNamesParallel() {
  let start = now();

  console.log("Before");
  let fetched = await Promise.all([
    fetchPerson(URL + "1"),
    fetchPerson(URL + "2"),
  ]);
  const person1 = fetched[0];
  const person2 = fetched[1];
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");

  return start;
}

// printNames()
// printNamesParallel()

printNames().then((start) => {
  let stop = now();
  console.log();
  console.log("Sequentially:");
  console.log((stop - start).toFixed(3));
  console.log();
  console.log();
});

printNamesParallel().then((start) => {
  let stop = now();
  console.log();
  console.log("Parallel:");
  console.log((stop - start).toFixed(3));
  console.log();
  console.log();
});
