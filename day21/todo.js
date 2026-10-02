const [add, remove] = document.querySelectorAll("button");
const input = document.querySelector("input");
const items = document.querySelector(".items");

add.addEventListener("click", () => {
  localStorage.setItem(localStorage.length, input.value);
  render();
});

remove.addEventListener("click", () => {
  localStorage.clear();
  render();
});

const render = () => {
  items.innerHTML = "";
  Object.keys(localStorage).forEach((key) => {
    const value = localStorage.getItem(key);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = value;
    items.append(newDiv);
  });
};

render();
