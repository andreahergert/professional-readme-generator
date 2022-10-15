// function to generate markdown for READMEdemo and display license badge
function generateMarkdown(data) {
  return `# ${data.title}

## Licensing:
[![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.licensing}

## Contributing:
${data.contribution}

## Tests:
${data.testing}

## Questions:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} `;
}

module.exports = generateMarkdown;
