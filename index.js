const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
const fs = require("fs");
const path = require("path");
const desiredPath = path.join(process.cwd(), "Output", "logo.svg");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
let userShape;

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
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What is the shape color? (default is black)",
  },
];

function createLogo(answers) {
  // console.log(answers);

  switch (answers.shape) {
    case "Circle":
      userShape = new Circle(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
      break;
    case "Triangle":
      userShape = new Triangle(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
      break;
    case "Square":
      userShape = new Square(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
      break;
  }

  fs.writeFile(desiredPath, userShape.render(), (err) =>
    err
      ? console.error(err)
      : console.log("Generated logo.svg in the Output folder!")
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => createLogo(answers));
}

init();
