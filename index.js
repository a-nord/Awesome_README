// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// An array of questions for user input
const questions = [{
    type: "input",
    message: "What is the TITLE of the project?",
    name: "title",
  },

  {
    type: "input",
    message: "What is the DESCRIPTION of the project? (Include the motivation, reasoning, what it solves, and what you learned.)",
    name: "description",
  },

  {
    type: "input",
    message: "What are INSTALLATION steps?",
    name: "install",
  },

  {
    type: "input",
    message: "How is this app USED?",
    name: "usage",
  },

  {
    type: "input",
    message: "Who helped create this code (seperate with commas)?",
    name: "credits",
  },

  {
    type: "list",
    message: "What kind of LICENSE do you want?",
    name: "license",
    choices: ["APACHE 2","Mozilla","MIT","Boost", "None"],
  },

  {
    type: "list",
    message: "How do you want coders to CONTRIBUTE?",
    name: "contribute",
    choices: ["Fork","No Contributing"],
  },

  {
    type: "input",
    message: "Write any tests (if any).",
    name: "test",
  },

  {
    type: "input",
    message: "What is your github USERNAME?",
    name: "username",
  },

  {
    type: "input",
    message: "What is your github link?",
    name: "github",
  },

  {
    type: "input",
    message: "What is the github REPO link?",
    name: "repoLink",
  },

  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },];

// Function to write README file (put data back)
function writeToFile(fileName, data) {    
    fs.writeFile(fileName, generateMarkdown(data), (err)=>{
        err? new Error("Write file does not like you!!"): console.log("YOU DID IT!!");
    });
}

// Function to initialize app
async function init() {
   const answers = await inquirer.prompt(questions);
   writeToFile('./dist/README.md', answers)
}

// Function call to initialize app
init();