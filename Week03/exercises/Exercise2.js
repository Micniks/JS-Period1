const fetch = require("node-fetch");
const link = "https://swapi.dev/api/people/";

const myPromise = (id) =>
  new Promise(function (resolve, reject) {
    fetch(id)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

const printValues = (result) => {
  console.log("Name: " + result.name);
  console.log("First film: " + result.title);
  console.log("First species: " + result.species);
  console.log("Homeworld for Specie: " + result.planet);
};

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  let result = {};
  myPromise("https://swapi.dev/api/people/" + id)
    .then((data) => {
      result.name = data.name;
      return myPromise(data.films[0]);
    })
    .then((data) => {
      result.title = data.title;
      return myPromise(data.species[0]);
    })
    .then((data) => {
      result.species = data.name;
      return myPromise(data.homeworld);
    })
    .then((data) => {
      result.planet = data.name;
      printValues(result);
    });
}

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  let name = await myPromise("https://swapi.dev/api/people/" + id);
  let film = await myPromise(name.films[0]);
  let species = await myPromise(film.species[0]);
  let planet = await myPromise(species.homeworld);
  await printValues({
    name: name.name,
    film: film.title,
    species: species.name,
    planet: planet.name,
  });
}

//getPlanetforFirstSpeciesInFirstMovieForPerson("1");
getPlanetforFirstSpeciesInFirstMovieForPersonAsync("1");
