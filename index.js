// PACKAGES
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");

// VARIABLES
const questions = [];

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
