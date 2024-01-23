// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "APACHE 2":
      return `[![License](https://img.shields.io/badge/License-APACHE_2-pink)]`;

    case "Mozilla":
      return `[![License](https://img.shields.io/badge/License-Mozilla-pink)]`;
      

    case "MIT":
      return `[![License: GPL v3](https://img.shields.io/badge/License-MIT-pink)]`;
      

    case "Boost":
        return `[![License: MIT](https://img.shields.io/badge/License-Boost-pink)]`;
        

    case "None":
      return "";
      
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "APACHE 2":
      return `(https://www.apache.org/licenses/)`;
      

    case "Mozilla":
      return `(https://choosealicense.com/licenses/mpl-2.0/)`;
      

    case "MIT":
      return `(https://choosealicense.com/licenses/mit/)`;
      

    case "Boost":
        return `(https://choosealicense.com/licenses/bsl-1.0/)`;
        

    case "None":
      return "";
      
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
    
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
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
  ### What is the GITHUB link?
  [${data.username}](${data.github})
  ### What is the APPLICATION link?
  [${data.title}](${data.repoLink})
  ### How to contact me if you have any questions?
  [Contact Me 📧](mailto:${data.email})`;
}

module.exports = generateMarkdown;
