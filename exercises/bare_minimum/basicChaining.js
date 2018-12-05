/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var db = Promise.promisifyAll(require('../bare_minimum/promiseConstructor.js'));
var cb = Promise.promisifyAll(require('../bare_minimum/promisification.js'))


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  
    return db.pluckFirstLineFromFileAsync(readFilePath) 
      .then(function(username) {
      return cb.getGitHubProfileAsync(username)
       })
      .then(function(body) {
        body = JSON.stringify(body);
        fs.writeFile(writeFilePath, body, (err) => {
          if (err) {
            console.log(err);
            return;
          }
        });
      })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
