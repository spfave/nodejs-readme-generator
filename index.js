// PACKAGES
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const readmeQuestions = require("./utils/readmeQuestions");
const genMarkdown = require("./utils/generateMarkdown");

// FUNCTIONS
const getApplicationReadmeData = () => inquirer.prompt(readmeQuestions);

const writeFileAsync = util.promisify(fs.writeFile);

const init = () => {
  getApplicationReadmeData()
    .then((response) =>
      writeFileAsync("README-application.md", genMarkdown(response))
    )
    .then(() => console.log("README file created"))
    .catch((err) => console.error(err));
};

// SCRIPT EXECUTION
init();
