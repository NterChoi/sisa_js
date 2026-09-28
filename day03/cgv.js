const selectSeat = window.prompt(
  "좌석을 선택해주세요 (일반, 라이트, 프리미엄)",
);
const selectPopcorn = window.prompt("팝콘을 선택해주세요 (일반, 캬라멜, 치즈)");
const selectBeverage = window.prompt(
  "음료를 선택해주세요 (탄산, 아이스티, 커피)",
);
const selectMembership = window.prompt(
  "멤버쉽을 선택해주세여 (브론즈, 실버, 골드)",
);

const seat = {
  일반: 15000,
  라이트: 13000,
  프리미엄: 18000,
};

const popcorn = {
  일반: 8000,
  캬라멜: 9000,
  치즈: 9000,
};

const beverage = {
  탄산: 3000,
  아이스티: 2000,
  커피: 4500,
};

const membership = {
  브론즈: 1,
  실버: 0.9,
  골드: 0.8,
};

const totalPrice =
  (seat[selectSeat] + popcorn[selectPopcorn] + beverage[selectBeverage]) *
  membership[selectMembership];

if (Number.isNaN(totalPrice)) {
  console.log(`잘못된 선택입니다`);
} else {
  console.log(
    `고르신 좌석 : ${selectSeat}, 팝콘 : ${selectPopcorn}, 음료: ${selectBeverage}, 총금액 ${totalPrice}`,
  );
}
