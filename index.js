// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
    // Promt user for input
    inquirer    
        .prompt ([
            {
                type: 'input',
                message: 'Enter the title of your project: ',
                name: 'title',
            },
        ])

        // Then 'generateMarkdown' & 'writeToFile'
        .then((answers) => {
            console.log(answers);
        })
}

// Function call to initialize app
init();
