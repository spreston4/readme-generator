// Declare packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseLookup = require('./utils/licenseLookup');

// Declare array 'questions' of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the Title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a Description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter Installation Instructions for your project: ',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter Usage Instructions for your project: ',
        name:'usage',
    },
    {
        type: 'list',
        message: 'Select a license: ',
        name: 'license',
        choices: licenseLookup,
    },
    {
        type: 'input',
        message: 'Enter any Contribution Guidelines for your project: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter any Test Instructions for your project: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your e-mail address: ',
        name: 'email'
    },
];

// Function 'writeToFile' to write 'generateMarkdown' to a README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// Function 'init' to ask for user input to initialize app
function init() {
    
    // Promt user for input - pull prompts from 'questions' array
    inquirer    
        .prompt(questions)

        // Then 'generateMarkdown' & 'writeToFile'
        .then((answers) => {

            // Write to file
            writeToFile('./example/gen-README.md', answers);

        })
}

// Function call to initialize app
init();
