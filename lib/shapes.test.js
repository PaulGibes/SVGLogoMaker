const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
  it("should match a string for an svg circle logo", () => {
    const shape = new Circle("SVG", "yellow", "circle", "black");

    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="black" />
        <text x="150" y="112.5" font-size="60" text-anchor="middle" fill="yellow">SVG</text>
        </svg>`
    );
  });
});

describe("Triangle", () => {
  it("should match a string for an svg triangle logo", () => {
    const shape = new Triangle("SVG", "green", "circle", "red");

    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="200,10 300,190 100,190" fill="red"/>
        <text x="200" y="160" font-size="60" text-anchor="middle" fill="green">SVG</text>
        </svg>`
    );
  });
});

describe("Square", () => {
  it("should match a string for an svg square logo", () => {
    const shape = new Square("SVG", "orange", "circle", "blue");

    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="175" height="175" fill="blue" />
        <text x="112.5" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text>
        </svg>`
    );
  });
});
