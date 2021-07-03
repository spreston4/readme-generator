// Declare packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Declare array 'questions' of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project: ',
        name: 'install',
    },
];

// Function 'writeToFile' to write 'generateMarkdown' to a README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// Function 'init' to ask for user input to initialize app
function init() {
    
    // Promt user for input - pull prompts from 'questions' array
    inquirer    
        .prompt(questions)

        // Then 'generateMarkdown' & 'writeToFile'
        .then((answers) => {
        
            writeToFile('gen-README.md', answers);

        })
}

// Function call to initialize app
init();
