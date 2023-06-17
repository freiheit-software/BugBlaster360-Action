const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');

const readFile = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  });

const readDir = (path) =>
  new Promise((resolve, reject) => {
    fs.readDir(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

const run = async () => {

 const commit = core.getInput('commit');
 console.log(commit); 

 const directory = core.getInput('directory');
 console.log(directory); 

 const formData = new FormData();
 formData.append("commit", commit);

 const readdir = util.promisify(fs.readdir);
 const readfile = util.promisify(fs.readfile);

 let files = await readDir(directory); 
 files.forEach(file => {

   const ext = file.split('.');
   if(ext[ext.length - 1] == 'trx') {

    let data = await readFile(directory + '/' + file);
    formData.append("file", data);
    console.log("file included: " + directory + '/' + file);

   }

 });

 console.log(formData);

 var config = {
  method: 'post',
  url: 'https://app.facilioo.de/jaromarcrebekka.php',
  headers: { 
    ...formData.getHeaders()
  },
  data : formData
 };

 axios(config).then(function (response) {
  console.log("request successful!");
  console.log(JSON.stringify(response.data));
 }).catch(function (error) {
  console.log("request failed!");
  console.log(error);
 });

}

run();

