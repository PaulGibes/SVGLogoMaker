const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
const fs = require("fs");
const path = require("path");
const desiredPath = path.join(process.cwd(), "Output", "logo.svg");
const shapes = require("./lib/shapes");

const questions = [
  {
    type: "maxlength-input",
    name: "text",
    message: "Enter the logo text:",
    maxLength: 3,
    default: "SVG",
  },
  {
    type: "input",
    name: "textColor",
    message: "What is the text color? (default is black)",
  },
  {
    type: "list",
    name: "shape",
    message: "What kind of shape would you like?",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What is the shape color? (default is black)",
  },
];
