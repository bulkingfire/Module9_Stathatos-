// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Content

- [Description](#description)

- [Requirements](#requirements)

- [Testing](#testing)

- [Usage](#usage)

- [License](#license)

- [Contributors](#contributors)

- [Github](#github)

- [Email](#email)


### Description
${data.Description}


### Requirements
Installation Requirements ${data.Requirements}


### Testing
${data.Testing}



### Usage
${data.Usage}



### License
${licenseInfo(data.License)}




### Contributors
${data.Contributors}



### Github
[Github Profle](https://github.com/${data.Github})


### Email
If you have any questions here is my email: ${data.Email}
`;
}

function licenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  
} 

function licenseInfo(license) {
  return `${licenseBadge(license)}
  [License Info](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)`
}

module.exports = generateMarkdown;
