const mymodule = require('./mymodule.js')
var path = process.argv[2];
var type = process.argv[3];

function callback(err, data){
    if(err){
        return [err, data];
    }
    data.forEach((file) => {
        console.log(file);
    });

}

mymodule(path, type, callback);