var
  fs = require('fs'),
  files = fs.readdirSync(__dirname);

files.forEach(addToExports);

function addToExports(fileName) {
  exports[fileName.split('.')[0]] = require('./' + fileName);
}