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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

`.trim();
}

module.exports = generateMarkdown;
