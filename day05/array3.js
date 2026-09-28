const banapresso = [
  { name: "아메리카노", price: 2000, shot: 2, kcal: 1 },
  { name: "크리미라떼", price: 3500, shot: 2, kcal: 1 },
  { name: "소금빵", price: 2000, kcal: 1 },
  { name: "피스타치오라떼", price: 4000, kcal: 300 },
];

// 1. 가을 이벤트 각 가격 10% 할인된 데이터로 출력하기

const price = banapresso.map((x) => {
  x.price *= 0.9;
  return x;
});

console.log(price);

// 2. 우유 이슈로 인해서 라떼 품목들은 각 20% 금액 인상된 데이터로 출력

console.log(
  banapresso.map((x) => {
    x.name.includes("라떼") ? (x.price *= 1.2) : x.price;
    return x;
  }),
);

// 3. 밀가루 이슈로 인해 빵 품목들은 가격 절반으로 깍이고, 칼로리 100 추가하기
console.log(
  banapresso.map((x) => {
    x.includes("빵") ? (x.price /= 2) : x.price;
  }),
);

// 4. 신메뉴 "쩡으니라떼" 가격 5000 샷 2 칼로리 200 추가된 데이터로 출력하기
