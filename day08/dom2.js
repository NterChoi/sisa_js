// 유저에게 만들고 싶은 버튼 갯수 물어보고
// 버튼 안의 내용은 안녕! 해주고
// 버튼 갯수만큼 화면에 출력하기

const btnNum = +window.prompt("버튼 갯수는?");

Array(btnNum)
  .fill(0)
  .forEach((v) => {
    const button = document.createElement("button");

    button.innerHTML = "안녕!";

    return document.body.append(button);
  });
