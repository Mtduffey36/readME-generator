const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");



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


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        err ? console.log(err) : console.log('ReadMe Generated!')
    })
}

const init = () => {
    inquirer.prompt(questions).then((response) => {
        const markdown = generateMarkdown(response)
        writeToFile('generatedReadMe.md', markdown)
        console.log('ReadMe has been generated!');
    });
}
init();
