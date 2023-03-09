function shapes(answers) {
  if (answers.shape === "Circle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`;
  } else if (answers.shape === "Triangle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="200,10 300,190 100,190" fill="${answers.shapeColor}"/>
        <text x="200" y="160" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`;
  } else if (answers.shape === "Square") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="25" width="225" height="150" fill="${answers.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`;
  }
}

module.exports = shapes;
