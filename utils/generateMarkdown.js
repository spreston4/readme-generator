// Declare packages
const fetch = require('node-fetch');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// Could not get this function to return anything other than 'undefined' when trying to call it from 'generateMarkdown'
function renderLicenseSection(license) {

  // Declare fetch URL
  let fetchURL = 'https://api.github.com/licenses/' + license;

  // Fetch data
  fetch
  fetch(fetchURL)
    .then(function (response) {

      // Validate there is a lisence selected
      if (response.status != 200){
        console.log('No license selected');
        return 'No license selected';
      }

      return response.json();
    })
    .then(function (data) {

      renderLicenseLink(data);

    })
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let markdownRender =  `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [License Information](#license-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Installation
  To install the necessary dependencies for this project, run the following command:

  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage Information

  ${data.usage}

  ## License Information
  This section is not currently functioning.

  ## Contribution Guidelines

  ${data.contribution}

  ## Test Instructions

  ${data.test}

  ## Questions

  Please contact me via GitHub or e-mail with any questions, comments, or concerns about this project. Thanks!

  GitHub: [${data.username}](https://github.com/${data.username})

  E-mail: [${data.email}](mailto:${data.email})

`;
return markdownRender;
}

module.exports = {
  generateMarkdown
};

