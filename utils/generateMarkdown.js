// PACKAGES
const osLicenses = require("./osLicenses");

// Create license badge with attached link
function renderLicenseBadge(license) {
  if (license === "n/a") return "";

  const licenseData = osLicenses[license];
  const licenseBdgCode = licenseData.code
    .replace(" ", "%20")
    .replace("-", "--");
  return `[![License](https://img.shields.io/badge/License-${licenseBdgCode}-blue.svg)](${licenseData.link})`;
}

// Create live application link
function renderApplicationLink(link) {
  if (link === "n/a") return "";
  return `[Live Application](${link})`;
}

// Create license declaration section
function renderLicenseSection(license) {
  if (license === "n/a") return "No license currently selected";

  const licenseData = osLicenses[license];
  return `This application is licensed under the ${license.code} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderApplicationLink(data.link)}

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributing
${data.contributing}

## License
${renderLicenseSection(data.license)}

## Contact/Questions
Reach out with feedback (questions, ideas, or concerns) on GitHub or via email 
- GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
- Email: ${data.email}

`.trim();
}

module.exports = generateMarkdown;
