const a = JSON.stringify({
  name: "kim",
  age: 30,
  skills: ["java", "javascript"],
});

console.log(a);

// 해석하기
const b = JSON.parse(
  '{ "name": "kim", "age": 30, "skills": ["java", "javascript"] }',
);

console.log(b);
