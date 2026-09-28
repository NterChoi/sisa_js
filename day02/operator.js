const age = Number(window.prompt("나이는?"));
age > 19 ? console.log("성인") : console.log("미성년자");

const num = Number(window.prompt("숫자는?"));

num > 0
  ? console.log("양의 정수")
  : num > -1
    ? console.log("0")
    : console.log("음의 정수");

const num1 = window.prompt("숫자는?");

num1 % 2 === 0 ? console.log("짝수") : console.log("홀수");
