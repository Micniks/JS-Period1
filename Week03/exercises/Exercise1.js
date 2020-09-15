const c = require("crypto");
//Assignment A

function assignment_A() {
  var result = { title: "6 Secure Randoms", randoms: [] };
  var length = 48;

  c.randomBytes(length, function (err, buffer) {
    let secureHex = buffer.toString("hex");
    result.randoms.push({ length: length, random: secureHex });
    length += -8;

    c.randomBytes(length, function (err, buffer) {
      let secureHex = buffer.toString("hex");
      result.randoms.push({ length: length, random: secureHex });
      length += -8;

      c.randomBytes(length, function (err, buffer) {
        let secureHex = buffer.toString("hex");
        result.randoms.push({ length: length, random: secureHex });
        length += -8;

        c.randomBytes(length, function (err, buffer) {
          let secureHex = buffer.toString("hex");
          result.randoms.push({ length: length, random: secureHex });
          length += -8;

          c.randomBytes(length, function (err, buffer) {
            let secureHex = buffer.toString("hex");
            result.randoms.push({ length: length, random: secureHex });
            length += -8;

            c.randomBytes(length, function (err, buffer) {
              let secureHex = buffer.toString("hex");
              result.randoms.push({ length: length, random: secureHex });
              length += -8;

              console.log(result);
            });
          });
        });
      });
    });
  });
}

//assignment_A();

// Assignment B

const makeSecureRandom = (length) =>
  new Promise(function (resolve, reject) {
    c.randomBytes(length, function (err, buffer) {
      if (err) {
        reject(err);
      }
      let secureHex = buffer.toString("hex");
      resolve({ length: length, random: secureHex });
    });
  });

function assignment_B() {
  var result = { title: "6 Secure Randoms", randoms: [] };
  var lengths = [48, 40, 32, 24, 16, 8];
  var promises = lengths.map((length) => {
    return makeSecureRandom(length);
  });
  Promise.all(promises).then((results) => {
    results.forEach((secureNumber) => {
      result.randoms.push(secureNumber);
    });
    console.log(result);
  });
}

//assignment_B();

