// Assignement C 

const c = require("crypto");

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

async function assignment_B_Refactored(lst) {
  var amt = lst.length;
  var promises = lst.map((length) => {
    return makeSecureRandom(length);
  });
  var final_result = await Promise.all(promises).then((results) => {
    let result = { title: "" + amt + " Secure Randoms", randoms: [] };
    results.forEach((secureNumber) => {
      result.randoms.push(secureNumber);
    });
    return result;
  });
  return final_result;
}

module.exports = assignment_B_Refactored;
