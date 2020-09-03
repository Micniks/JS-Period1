const fs = require("fs");

module.exports = function (path, type, callback) {
  return fs.readdir(path, (err, data) => {
      if (err){
          return callback(err, data);
      }
      var filteredData = [];
      data.forEach((element) => {
        if(element.includes(".")){
          let fileName = element.split(".");
          let fileType = fileName[fileName.length - 1];
          if (fileType == type) {
            filteredData.push(element);
          }
        }
      });
      return callback(null, filteredData);
  });
};
