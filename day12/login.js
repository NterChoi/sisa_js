const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checked = document.querySelector("#checked");
const login = document.querySelector("#login");
const gol = document.querySelector("#gol");
const length = document.querySelector("#length");
const select = document.querySelector("#select");

login.addEventListener("click", () => {
  const emailError = !email.value.includes("@");
  const passwordError = password.value.length < 9;
  const checkError = !checked.checked;

  gol.classList.toggle("show", emailError);
  length.classList.toggle("show", passwordError);
  select.classList.toggle("show", checkError);
});
