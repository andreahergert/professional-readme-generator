// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information for your project?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines for your project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What are the test instructions for your project?',
    },
    {
        type: 'list',
        name: 'licensing',
        message: 'What license would you like to use for your project?',
        choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "None"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
      {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub repository url for your project?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ])
  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);

// function to write README file
    fs.writeFile('READMEdemo.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created READMEdemo.md!')
    );
  });
