import _ from "lodash";
import "core-js/proposals/promise-any";
import fetch from "node-fetch";

const starWarsUrl = "https://swapi.dev/api/people/";

//Node Fetch
const myPromise = (id) =>
  new Promise(function (resolve, reject) {
    fetch(starWarsUrl + id)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

  console.log();

Promise.all([myPromise(1), myPromise(2)]).then((res) => {
  console.log("Promise.all:");
  res.map((result) => {
    console.log(result.name);
  });
  console.log();
});

console.log();

Promise.any([myPromise(3), myPromise(4)]).then((res) => {
  console.log("Promise.any:");
  console.log(res.name);
  console.log();
});
