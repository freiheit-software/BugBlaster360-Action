const core = require('@actions/core');
const github = require('@actions/github');

try {

 const commit = core.getInput('commit');
 console.log(commit); 

 const file = core.getInput('file');
 console.log(file); 


} catch (error) {
  core.setFailed(error.message);
}
