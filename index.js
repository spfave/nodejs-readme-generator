// PACKAGES
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const readmeQuestions = require("./utils/readmeQuestions");
const genMarkdown = require("./utils/generateMarkdown");

// FUNCTIONS
const getDevProjData = () => inquirer.prompt(readmeQuestions);

const writeFileAsync = util.promisify(fs.writeFile);

const init = () => {
  getDevProjData()
    .then((response) => writeFileAsync("README_test.md", genMarkdown(response)))
    .then(() => console.log("README file created"))
    .catch((err) => console.err(err));
};

// SCRIPT EXECUTION
init();
