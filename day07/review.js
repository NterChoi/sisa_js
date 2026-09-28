const macdonaldo = [
  {
    name: "빅맥",
    price: 5500,
    kcal: 600,
    ingredients: ["bread", "lettuce", "tomato", "meat"],
  },
  {
    name: "콜라",
    price: 2000,
    kcal: 100,
    ingredients: ["soda"],
  },
  {
    name: "프렌치프라이",
    price: 3000,
    kcal: 300,
    ingredients: ["potato", "oil"],
  },
  {
    name: "상하이버거",
    price: 4500,
    kcal: 400,
    ingredients: ["bread", "lettuce", "chicken"],
  },
];

// 1. 전체 총 칼로리 구하기
const sumKcal = macdonaldo
  .map((x) => {
    return x.kcal;
  })
  .reduce((a, c) => a + c, 0);

console.log(sumKcal);

// 2. 칼로리 500 이하 제품 중에서 가격 총 합 구하기

const under500 = macdonaldo
  .map((x) => x.kcal)
  .filter((x) => {
    return x <= 500;
  })
  .reduce((x, y) => x + y, 0);

console.log(under500);
