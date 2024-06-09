const fs = require("fs");
const inquirer = require("inquirer");


const questions = [
    {
      type: "input",
      message: "What is the name of your application",
      name: "appName",
    },
    {
      type: "input",
      message: "What does your application do?",
      name: "description",
    },
    {
      type: "input",
      message: "How does a user install your app?",
      name: "installation",
    },
    {
      type: "input",
      message: "Can you explain how to use the app?",
      name: "usage",
    },
    {
      type: "input",
      message: "Anything in the app you'd like to give credit for?",
      name: "credits",
    },
    {
      type: "confirm",
      message: "Would you like to include an MIT license?",
      name: "license",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();