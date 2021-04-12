// PACKAGES
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");

// QUESTIONS and VALIDATION FUNCTIONS
const validateStringContent = (input) => {
  if (input.trim() === "")
    return console.log("\nMust provide a development project title");
  return true;
};

const stringTrim = (string) => string.trim();

const questions = [
  {
    type: "input",
    message: "What is the title of the development project?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "title",
  },
  {
    type: "editor",
    message: "Enter a project description",
    filter: stringTrim,
    name: "description",
  },
  // {},
];

// FUNCTIONS
const getDevProjData = () => inquirer.prompt(questions);

const writeFileAsync = util.promisify(fs.writeFile);

const init = () => {
  getDevProjData()
    .then((response) => writeFileAsync("README_test.md", genMarkdown(response)))
    .then(() => console.log("README file created"))
    .catch((err) => console.err(err));
};

// SCRIPT EXECUTION
init();
