// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  switch (answers.license) {
    case "APACHE 2":
      response = `[![License](https://img.shields.io/badge/License-APACHE_2-pink)]`;
      return response;

    case "Mozilla":
      response = `[![License](https://img.shields.io/badge/License-Mozilla-pink)]`;
      return response;

    case "MIT":
      response = `[![License: GPL v3](https://img.shields.io/badge/License-MIT-pink)]`;
      return response;

    case "Boost":
        response = `[![License: MIT](https://img.shields.io/badge/License-Boost-pink)]`;
        return response;

    case "None":
      response = "";
      return response;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  switch (answers.license) {
    case "APACHE 2":
      response = `(https://www.apache.org/licenses/)`;
      return response;

    case "Mozilla":
      response = `(https://choosealicense.com/licenses/mpl-2.0/)`;
      return response;

    case "MIT":
      response = `(https://choosealicense.com/licenses/mit/)`;
      return response;

    case "Boost":
        response = `(https://choosealicense.com/licenses/bsl-1.0/)`;
        return response;

    case "None":
      response = "";
      return response;
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  return `##License
  ${renderLicenseBadge(answers)}${renderLicenseLink(answers)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}

  ## Description
  ${data.description}
    
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribut)
  - [Tests](#test)
  - [Contact](#questions)

  ## Installation  
  ${data.install}
  
  ## Usage  
  ${data.usage}

  ## Credits
  This code was created by ${data.credits}.
    
  ${renderLicenseSection(data.license)}

  ## Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}

  ## Questions:
  ###What is the GITHUB link?
  ![${data.username}](${data.github})
  ###What is the APPLICATION link?
  ![${data.title}](${data.repoLink})
  ###How to contact me if you have any questions?
  ![Contact Me 📧](${data.email})`;
}

module.exports = generateMarkdown;
