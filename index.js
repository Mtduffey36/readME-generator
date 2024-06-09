const fs = require("fs");
const inquirer = require("inquirer");


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does this application do?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How is this application installed?'
    },
    {
        type: 'input',
        name: 'howTo',
        message: 'How is this application used?'
    },
    {
        type: 'input',
        name: 'collab',
        message: 'Where there any collaborators or credit to be assigned?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Would you like to include a license?'
    }
];


function writeToFile(data) {
    fs.writeFile('gReadMe.md', data, (err) => {
        err ? console.log(err) : console.log('ReadMe Generated!')
    })
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();