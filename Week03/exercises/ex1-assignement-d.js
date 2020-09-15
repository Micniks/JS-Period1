// Assignement D
const getSecureRandoms = require("./ex1-crypto-module");

function callModule() {
    getSecureRandoms([48, 40, 32, 24, 16, 8]).then((randoms) =>
      console.log(randoms)
    );
  }

async function callModuleAsync() {
  let randoms = await getSecureRandoms([48, 40, 32, 24, 16, 8, 4, 2]);
  console.log(randoms);
}

//callModule()
//callModuleAsync()