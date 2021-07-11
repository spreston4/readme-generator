// Declare packages
const fetch = require('node-fetch');


// Function 'generateMarkdown' creates the mardown language that is written to the README file
function generateMarkdown(data) {

  let markdownRender =  `
  # ${data.title}

  ![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license.split(' ').join('-')}&color=success)

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

  This application is licensed under ${data.license}.

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

