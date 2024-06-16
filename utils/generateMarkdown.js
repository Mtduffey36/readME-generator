function renderLicenseBadge(license) {

  return license === false ? 'No License' :  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

}

function renderLicenseLink(license) {
  return license === false ? 'No License' : `MIT: ` + `https://opensource.org/license/MIT`

}

function generateMarkdown(data) {

  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  # Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contributing)
  4. [License](#license)

  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contribution}

  ## License 

  ${renderLicenseLink(data.license)}
  
  `;  
  
}

module.exports = generateMarkdown;