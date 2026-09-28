// const arr = [1, 3, 5, 7, 9];

// console.log(arr.filter((x) => x >= 3 && x <= 10));

// console.log(arr.filter((x) => x % 3 === 0));

// console.log(arr.filter((x, i) => i < 3));

const fruits = ["apple", "pineapple", "banana", "kiwi", "melon", "mango"];

console.log(fruits.filter((x) => x.length >= 6));

console.log(fruits.filter((x) => x.includes("e")).map((x) => x.toUpperCase()));

const students = [
  { name: "윤정은", age: 29, mbti: "ENFP" },
  { name: "오찬식", age: 29, mbti: "ESTJ" },
  { name: "이민욱", age: 26, mbti: "ISFJ" },
  { name: "오재희", age: 27, mbti: "iSTP" },
];

console.log(
  students
    .filter((x) => x.age >= 29)
    .map((x) => {
      return {
        ...x,
        year: `${2027 - x.age}년생`,
      };
    }),
);

console.log(
  students
    .filter((x) => x.mbti.includes("I") || x.mbti.includes("i"))
    .map((x) => {
      return {
        ...x,
        tendency: "내향적",
      };
    }),
);
