const randomColor = () => {
  return `#${random16()}${random16()}${random16()}${random16()}${random16()}${random16()}`;
};

const random16 = () => {
  return Math.floor(Math.random() * 16).toString(16);
};

const container = document.createElement("div");
container.style.cssText =
  "display : grid; grid-template-columns: repeat(5, 1fr); width: 100vw; height: 100vh";

const userInput = +prompt("박스는 몇개?");

Array(userInput)
  .fill(0)
  .forEach(() => {});

document.body.append(container);
