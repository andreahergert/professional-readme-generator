// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// const generateReadme = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is project title?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What are your installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is the usage information for your project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What are the contribution guidelines for your project?',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'What are the test instructions for your project?',
    },
    // Fix list
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for your project?',
        options: 'None, Apache License 2.0, GNU General Public License v3.0, MIT License'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your github username?',
    },
      {
        type: 'input',
        name: 'questions',
        message: 'What is the GitHub repository url for your project?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'What is your email address?',
      },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
