const upperCase_Promise = (string) =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!string.toUpperCase) {
        reject("Not a String");
      } else {
        resolve(string.toUpperCase());
      }
    }, 1000);
  });

// Error handling with promises
upperCase_Promise("Hello")
  .then((r) => console.log("Success: " + r))
  .catch((err) => console.log("ERROR: " + err));

// Error handling with async/await
async function errorTestAsync() {
  try {
    console.log("Async Success: " + (await upperCase_Promise("Hello")));
  } catch (err) {
    console.log("Async Error caught: " + err);
  }
}

errorTestAsync();
