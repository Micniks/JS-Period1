const fs = require('fs');
var path = process.argv[2];

function readLines(err, data){
    if(!err){
        const strArray = data.split('\n');
        let amountOfLineShifts = strArray.length-1;
        console.log(amountOfLineShifts);
    }
};

fs.readFile(path, 'utf8', readLines);


