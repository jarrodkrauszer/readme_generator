// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const screenshotQuestions = [
  {
    message: 'Please enter path to screenshot:',
    name: 'screenshot',
  },
  {
    type: 'confirm',
    message: 'Would you like to add another screenshot?',
    name: 'confirm',
  },
];

const questions = [
  {
    message: 'Please enter the project title:',
    name: 'title',
  },
  {
    message: 'Please enter a description:',
    name: 'description',
  },
  {
    message: 'Please enter installation instructions:',
    name: 'instructions',
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
  {
    type: 'list',
    message: 'Please select an option:',
    choices: ['Add a screenshot', 'Move On'],
    name: 'screenshot'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if(err) throw err;
  
    console.log('File created successfully!');
  });
}

function addScreenshot() {
  inquirer
  .prompt(screenshotQuestions)
  .then((response) =>{
    console.log(response);
  });
}

function startQuestions() {
  inquirer
  .prompt(questions)
  .then((response) =>{
    console.log(response);
    if(response.screenshot === 'Add a screenshot') {
      addScreenshot();
    }
  }).then(response => {
    return response;
  });
}

// TODO: Create a function to initialize app
function init() {
  startQuestions();
  console.log('Done!');
  // writeToFile('./README.md', generateMarkdown(response));

}

// Function call to initialize app
init();
