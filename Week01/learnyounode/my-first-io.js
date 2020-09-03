const fs = require('fs');
const str = fs.readFileSync(process.argv[2]).toString();
const strArray = str.split('\n');
const amountOfLineShifts = strArray.length-1;
console.log(amountOfLineShifts);