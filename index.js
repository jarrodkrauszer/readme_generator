// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// let resourceLinks = [];
// let screenshotPaths = [];

let answers = {
  title: '',
  description: '',
  instructions: '',
  guidelines: '',
  tests: '',
  license: '',
  github: '',
  email: ''
  screenshots: [],
  resourceLinks: []
}


// TODO: Create an array of questions for user input
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if(err) throw err;
  
    console.log('File created successfully!');
  });
}

function addScreenshotLink() {
  inquirer
  .prompt({
    name: 'link',
    message: 'Please enter the path to your screenshot file.'
  }).then(response => {
    answers.screenshots.push(response.link);
    showScreenshotMenu();
  })
}

function showScreenshotMenu() {
  inquirer
  .prompt({
    name: 'choice',
    type: 'list',
    choices: ['Add a screenshot', 'Move on'],
    message: 'Please select an option'
  }).then(response => {
    if (response.choice === 'Add a screenshot') {
      return addScreenshotLink();
    }
  })
}

function addResourceLink() {
  inquirer
  .prompt({
    name: 'link',
    message: 'Please type your resource link.'
  }).then(response => {
    answers.resourceLinks.push(response.link);
    showResourceMenu();
  })
}

function showResourceMenu() {
  inquirer
  .prompt({
    name: 'choice',
    type: 'list',
    choices: ['Add a resource', 'Move on'],
    message: 'Please select an option'
  }).then(response => {
    if (response.choice === 'Add a resource') {
      return addResourceLink();
    }
    
    showScreenshotMenu();
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) =>{
    answers.title =  response.title;
    answers.description = response.description;
    answers.instructions = response.instructions;
    answers.guidelines = response.guidelines;
    answers.tests = response.tests;
    answers.license = response.license;
    answers.github = response.github;
    answers.email = response.email;
    
    showResourceMenu();
    console.log('Initial: ' + response);
    // writeToFile('./README.md', generateMarkdown(response));
  });

}

// Function call to initialize app
init();
