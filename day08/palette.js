const container = document.createElement("div");
container.style.cssText =
  "display : flex; flex-direction : column; width: 100vw; height : 100vh;";
const color0 = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e"];
const color1 = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50"];
const color2 = ["#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6"];
const color3 = ["#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

const wrapperArr = Array(4)
  .fill(0)
  .forEach((x) => {
    const colorWrapper = document.createElement("div");
    colorWrapper.style.cssText = "display : flex; width : 100%; height: 100%;";

    const colorArr = Array(5)
      .fill(0)
      .forEach((x, i) => {
        const colorBox = document.createElement("div");
        colorBox.style.cssText = `background-color:${color0[i]}; width: 100%; height: 100%`;
        colorWrapper.append(colorBox);
      });
    container.append(colorWrapper);
  });

document.body.append(container);
