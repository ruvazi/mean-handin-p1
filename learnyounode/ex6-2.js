module.exports = function(dir, filter, callback) {
    var fs = require('fs');
    var path = require('path');
    var files = [];

    fs.readdir(dir, function(err, list) {
        if(err) {
            return callback(err);
        }
        list.forEach(function(file) {
            if(path.extname(file) === "." + filter) {
                files.push(file);
            }
        });
        return callback(null, files);
    });
}