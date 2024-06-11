const fs = require("fs");
const inquirer = require('inquirer');



const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the Title of this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the purpose of this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Would you like to assign any credit to anyone for this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this application?'
    },
    {
        type: 'confirm',
        name: 'license',
        message: 'Would you like to assign an MIT license?'
    },
];

inquirer.prompt(questions).then((answers => {
    console.log(`Title: ${answers.title}`);
    console.log(`Description: ${answers.description}`);
    console.log(`Installation: ${answers.installation}`);
    console.log(`Usage: ${answers.usage}`);
    console.log(`Contribution: ${answers.contribution}`);
    console.log(`Testing: ${answers.test}`);
    console.log(`License: ${answers.license}`)
}));




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
