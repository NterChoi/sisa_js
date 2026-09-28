export const theater = {
  grade: ["normal", "sweetbox", "widbox", "accessible"],
  price: [18000, 20000, 22000, 15000],
  column: [..."ABCDEFGHIJK"],
  row: Array(19)
    .fill()
    .map((_, index) => index + 1),
};
