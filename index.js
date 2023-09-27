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
    choices: ['license 1', 'license 2', 'license 3', 'license 4', 'license 5']
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
  console.log(fileName, data);
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
  }
    
  );
}

// Function call to initialize app
init();
