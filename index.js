// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the TITLE of the project?",
    name: "title",
  },

  {
    type: "input",
    message: "What is the DESCRIPTION of the project? (Include the motivation, reasoning, what it solves, and what you learned.')",
    name: "description",
  },

  {
    type: "input",
    message: "What is your github USERNAME?",
    name: "username",
  },

  {
    type: "input",
    message: "What is the github REPO NAME?",
    name: "repoName",
  },

  {
    type: "input",
    message: "What is your LINKEDIN (username)?",
    name: "linkedin",
  },

  {
    type: "list",
    message: "What kind of LICENSE do you want?",
    name: "license",
    choices: ["APACHE 2.0","Mozilla","MIT","BSD 2", "BSD 3","Boost", "none"],
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const contents = generateMarkdown(data);
    fs.writeToFile(fileName, contents,(err)=>{
        err? new Error("Write file does not like you!!"): console.log("It's you, not the write file!");
    })
}

// TODO: Create a function to initialize app
async function init() {
   const answers = await inquirer.promt(questions);
   writeToFile('README.md', answers)
}

// Function call to initialize app
init();
 
