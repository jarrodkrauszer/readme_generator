// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Please enter the project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter installation instructions:',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'Please enter usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please enter the name of the screenshot file in the ./assets/images folder:',
    name: 'screenshot',
  },
  {
    type: 'input',
    message: 'Please enter contribution guidelines:',
    name: 'guidelines',
  },
  {
    type: 'input',
    message: 'Please enter test instructions:',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Please choose the appropriate license:',
    name: 'license',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
     'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New or "Revised" License',
     'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
     'GUN Affero General Public License v3.0', 'GUN Lesser General Public License v2.1',
     'Mozilla Public License 2.0', 'The Unlicense']
  },
  {
    type: 'input',
    message: 'Please enter your GitHub username:',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Please enter your email address:',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // console.log(fileName, data);
  fs.writeFile(fileName, data, (err) => {
    if(err) throw err;
  
    console.log('File created successfully!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) =>{
    writeToFile('./README.md', generateMarkdown(response));
  });
}

// Function call to initialize app
init();
