const core = require('@actions/core');
const github = require('@actions/github');

try {

 const commit = core.getInput('commit');
 console.log(commit); 

 const directory = core.getInput('directory');
 console.log(directory); 

 console.log("params completed"); 

 const fs = require('fs');

 fs.readdir(directory, (err, files) => {
   files.forEach(file => {
     console.log(file);
   });
 });

} catch (error) {
  core.setFailed(error.message);
}
