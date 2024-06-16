// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicensesBadge(data.license)
  const link = renderLicenseLink(data.license)
  
  return `
  ${badge}
  # ${data.title}
  
  ## Description
  ${response.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [License](#license)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation 
  ${data.install}
  
  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## License 
  ${licenseSection}
  ${link}

  ## Test
  ${data.test}

  ## Questions
  
  My GitHub is [${data.username}](https://github.com/${data.username}).
  If you have any further questions, you can email me at ${data.email}.
  
  `;  
  
}

module.exports = generateMarkdown;