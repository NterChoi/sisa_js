const input = document.querySelector("#input");
input.addEventListener("input", () => {
  const length = document.querySelector("#length");
  length.innerHTML = `${input.value.length} / 100`;
});

const btn = document.querySelector(".visible");
btn.addEventListener("click", () => {
  const password = document.querySelector("#password");
  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
});
