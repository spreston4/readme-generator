// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
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

  ## Contribution Guidelines

  ${data.contribution}

  ## Test Instructions

  ${data.test}

  ## Questions

  Please contact me via GitHub or e-mail with any questions, comments, or concerns about this project. Thanks!

  GitHub: [${data.username}](https://github.com/${data.username})

  E-mail: [${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
