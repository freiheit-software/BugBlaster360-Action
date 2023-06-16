const core = require('@actions/core');
const github = require('@actions/github');

try {

 const commit = core.getInput('commit');
 console.log(commit); 

 const directory = core.getInput('directory');
 console.log(directory); 

} catch (error) {
  core.setFailed(error.message);
}
