// map()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addTen = (x) => {
  return x + 10;
};

// 1. 홀수면 2배 짝수면 3배
const oddEven = (x) => {
  return x % 2 ? x * 2 : x * 3;
};

const newArr = arr.map(oddEven);

// 2. 각각 숫자 제곱하기
const newArr1 = arr.map((x) => x ** 2);

// 3. 5의 배수만 "금요일"로 바꾸기
const newArr2 = arr.map((x) => (x % 5 ? "금요일" : x));

console.log(newArr);
console.log(newArr1);
console.log(newArr2);
