// PACKAGES
const osLicenses = require("./osLicenses");

// VALIDATION FUNCTIONS
const validateStringContent = (input) => {
  if (input.trim() === "") return console.log("\nEntry can not be blank");
  return true;
};

/**
 * Basis of validateEmail function taken from 'email-validator' package
 * Modified to return string message instead of boolean false
 */
const validateEmail = (email) => {
  const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  const errMsg = () => console.log("\nEnter a valid email");

  if (!email) return errMsg();
  if (email.length > 254) return errMsg();
  if (!tester.test(email)) return errMsg();

  // Further checking of some things regex can't handle
  const parts = email.split("@");
  if (parts[0].length > 64) return errMsg();
  if (parts[1].split(".").some((part) => part.length > 63)) return errMsg();

  return true;
};

// FILTER FUNCTIONS
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
    message:
      "Provide an application link if available (otherwise accept default 'n/a').",
    default: "n/a",
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
    type: "input",
    message: "Provide data on tests used to validate application for release",
    name: "tests",
  },
  {
    type: "input",
    message: "Provide development contributing instructions",
    name: "contributing",
  },
  {
    type: "list",
    message: "Choose a software license for the application.",
    choices: Object.keys(osLicenses),
    name: "license",
  },
  {
    type: "input",
    message: "Provide your GitHub username for the README contact section.",
    name: "gitHubUser",
  },
  {
    type: "input",
    message: "Provide a contact email as an alternate means of contact.",
    validate: validateEmail,
    name: "email",
  },
];

module.exports = questions;
