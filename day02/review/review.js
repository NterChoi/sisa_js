const squreLength = Number(window.prompt("정사각형의 한변의 길이는?"));

const PI = 3.14;

console.log(
  `정사각형의 넓이 : ${squreLength ** 2} 정사각형의 둘레: ${squreLength * 4}`,
);

const radius = Number(window.prompt("원의 반지름의 길이는?"));
console.log(
  `원의 넓이 : ${radius * radius * PI} 원의 둘레: ${2 * radius * PI}`,
);

const triangleLength = Number(window.prompt("정삼각형 밑변의 길이는?"));

const triangleHeight = Number(window.prompt("정삼각형의 높이는?"));

console.log(
  `정삼각형의 넓이 : ${(triangleHeight * triangleLength) / 2} 정삼각형의 둘레 : ${triangleLength * 3}`,
);

const min = Number(window.prompt("몇분임?"));

console.log(`그럼 ${min * 60}초네`);
