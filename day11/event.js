// HTML 점메추 버튼을 만들고
// 버튼을 누르면 오늘 점심은 돈치킨입니다! 라는 alert 나오게 하기

const btn = document.createElement("button");
btn.classList.add("btn");
btn.innerHTML = "아이디아";

btn.addEventListener("click", () => {
  window.alert("오늘 점심은 돈치킨입니다.");
});

document.body.append(btn);

// const btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.style.cssText = "width : 100px; height: 100px; background-color : red;";

//   document.body.append(box);
// });

const heart = document.querySelector(".heart");
heart.addEventListener("click", () => {
  //   heart.innerHTML = "♥";
  heart.innerHTML === "♥" ? (heart.innerHTML = "♡") : (heart.innerHTML = "♥");
});

// - 0 +
const num = document.querySelector(".num");
const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  num.innerHTML -= 1;
});
const plus = document.querySelector(".plus").addEventListener("click", () => {
  num.innerHTML = +num.textContent + 1;
});

const bright = document.querySelector(".bright");
const body = document.querySelector("body");

bright.addEventListener("click", () => {
  //   body.style.cssText = "background-color : black;";
  body.style.backgroundColor =
    body.style.backgroundColor == "black" ? "white" : "black";
});
