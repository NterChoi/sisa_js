// const fruits = ["strawberry", "mandarin", "apple", "kiwi", "banana"];

// // 1. 각 과일의 글자 갯수로 바꾸기
// const newfruits = fruits.map((x) => x.length);
// console.log(newfruits);

// // 2. 글자 갯수가 6개 이상이면 오이시! 나오고 아니면 스미마셍
// const newArray1 = newfruits.map((x) => (x >= 6 ? "오이시!" : "스미마셍"));
// console.log(newArray1);

// // 3. 영문 철자 i가 있으면 "😀" 없으면 "😂" 나타내기
// console.log(fruits.map((x) => (x.includes("i") ? "😀" : "😂")));

const cafe = ["americano", "latte", "tea", "furappuccino", "ade"];

// 1. i or o를 포함하면 글자수로 바꾸고 대문자화 하기!
console.log(
  cafe.map((x) =>
    x.includes("i") || x.includes("o") ? x.length : x.toUpperCase(),
  ),
);

// 2. 글자수가 6글자 이상이면 6글자로 나타내고 아니면 그대로 나타내기
console.log(cafe.map((x) => (x.length >= 6 ? x.slice(0, 6) : x)));

// 3. T를 포함하면 true 이고 아니면 false 나타내기!
console.log(cafe.map((x) => x.includes("t")));
