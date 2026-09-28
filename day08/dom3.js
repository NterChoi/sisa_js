// 유저에게 div 갯수를 입력 받고
// div 안의 내용은 hello로 하고
// backgroundColor : red Orange yellow green blue navy indigo
// 화면에 출력하기

const color = ["red", "orange", "yellow", "green", "blue", "navy", "indigo"];
const userCount = +prompt("div의 갯수는?");
Array(userCount)
  .fill(0)
  .forEach((v, i) => {
    const div = document.createElement("div");
    div.innerHTML = "hello";
    div.style.backgroundColor = color[i % 7];
    document.body.append(div);
  });
