#!/usr/bin/env node

const { Command } = require("commander");
const git = require("simple-git")();
const shell = require("shelljs");
const chalk = require("chalk");
const program = new Command();

// Helper function to clone the GitHub template
const cloneTemplate = async (repoUrl, destination) => {
  try {
    console.log(chalk.blue("Cloning template..."));
    await git.clone(repoUrl, destination);
    console.log(chalk.green("Template cloned successfully!"));
  } catch (error) {
    console.log(chalk.red("Error cloning template:", error));
  }
};

// Command for setting up the project
program
  .command("setup <project-name>")
  .description("Set up a new Node-Express-TypeScript project")
  .option("-c, --clone", "Clone from GitHub template")
  .action((projectName, options) => {
    if (options.clone) {
      const repoUrl =
        "https://github.com/Abhishek765/ultimate-node-backend-setup.git"; // replace with your repo URL
      const destination = `${process.cwd()}/${projectName}`;
      cloneTemplate(repoUrl, destination);
    } else {
      console.log(chalk.yellow("Setting up project from scratch..."));
      shell.mkdir(projectName);
      shell.cd(projectName);
      shell.exec("npm init -y");
      shell.exec(
        "npm install express typescript ts-node @types/express @types/node"
      );
      shell.exec("npx tsc --init");
      console.log(chalk.green("Node-Express-TypeScript project set up!"));
    }
  });

program.parse(process.argv);
