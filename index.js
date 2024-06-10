const fs = require("fs");
const inquirer = require('inquirer');


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
        type: 'confirm',
        name: 'license',
        message: 'Would you like to include a license?'
    }
];


function writeToFile(data) {
    fs.writeFile('gReadMe.md', data, (err) => {
        err ? console.log(err) : console.log('ReadMe Generated!')
    })
}

function init() {
    inquirer.prompt(questions).then((response) => {
      if (response.license === true) {
        response.license =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      }
      const createMarkdown = `# ${response.appName}
        
  # Description
  ${response.description}
  # Table of Contents
  1. [Installation](#install)
  2. [Usage](#howTo)
  3. [Credits](#collab)
  4. [License](#license)
  
  ## Installation <a name="intall"></a>
  ${response.install}
  ## Usage <a name="howTo"></a>        
  ${response.howTo}
  ## Credits <a name="collab"></a>
  ${response.collab}
  ## License <a name="license"></a>
  ${response.license}`;
  
      fs.writeFile("generatedREADME.md", createMarkdown, (err) => {
        (err) ? console.log(err) : console.log('The Readme has been Created')
      });
    });
  }

  init();

