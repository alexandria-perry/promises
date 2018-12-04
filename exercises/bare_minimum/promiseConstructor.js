/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) { 
  return new Promise(function (resolve, reject){
    fs.readFile(filePath, (err, content) => {
      if (err) {
        reject(err);
      } else {
        content = content.toString('utf8');
        var index = content.indexOf('\n');
        content = content.slice(0, index);
        resolve(content);
      }
    });
  });
  
  promise.then(function(value) {
    return value;
  });
  promise.catch(function(error) {
    return error;
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      }
    });
  });
  
  promise.then((value) => {
    return value;
  });
  promise.catch((error) => {
    return error;
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
