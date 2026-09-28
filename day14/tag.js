const inputDate = document.querySelector("input");
const span = document.querySelector("span");

inputDate.addEventListener("input", () => {
  span.innerText = inputDate.value;
});
