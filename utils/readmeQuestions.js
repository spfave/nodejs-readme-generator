// PACKAGES
const osLicenses = require("./osLicenses");

// VALIDATION FUNCTIONS
const validateStringContent = (input) => {
  if (input.trim() === "")
    return console.log("\nMust provide a development project title");
  return true;
};

const stringTrim = (string) => string.trim();

// QUESTIONS ARRAY
const questions = [
  {
    type: "input",
    message: "What is the title of the development application?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "title",
  },
  {
    type: "input",
    message: "Provide an application link if available.",
    name: "link",
  },
  {
    type: "editor",
    message:
      "Provide an application description (should cover application purpose and implementation).",
    filter: stringTrim,
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide usage instructions and/or examples.",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a software license for the application.",
    choices: Object.keys(osLicenses),
    name: "license",
  },
];

module.exports = questions;
