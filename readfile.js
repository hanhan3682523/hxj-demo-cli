let fs = require('fs');
let path = require('path');

let _src = path.join(__dirname, 'templates');
fs.readdir(_src, function(err, files) {
    if (err) {}
    console.log(files);
});