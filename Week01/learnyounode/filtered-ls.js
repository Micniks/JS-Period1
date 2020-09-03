const fs = require("fs");
var path = process.argv[2];
var type = process.argv[3];

fs.readdir(path, callback);

async function callback(err, list) {
  if (!err) {
    list.forEach((element) => {
      if(element.includes(".")){
        let fileName = element.split(".");
        let fileType = fileName[fileName.length - 1];
        if (fileType == type) {
          console.log(element);
        }
      }
    });
  }
}
