const cgv = {
  movie: ["The Odyssey", "Conan", "SpiderMan", "DemonSlayer"],
  seat: [
    { id: 1, name: "standard", price: 15000 },
    { id: 2, name: "recliner", price: 18000 },
    { id: 3, name: "IMAX", price: 20000 },
    { id: 4, name: "light", price: 10000 },
  ],
  popcorn: [
    { id: 1, name: "salt", price: 8000 },
    { id: 2, name: "caramel", price: 8500 },
    { id: 3, name: "cheese", price: 9000 },
  ],
  snack: [
    { id: 1, name: "nacho", price: 4000 },
    { id: 2, name: "squid", price: 7000 },
    { id: 3, name: "hotdog", price: 5000 },
  ],

  drink: [
    { id: 1, name: "soda", price: 2500 },
    { id: 2, name: "coffee", price: 4000 },
    { id: 3, name: "ade", price: 5000 },
    { id: 4, name: "beverage", price: 7000 },
  ],
};
const userAge = +window.prompt("나이를 입력해주세요");
const userMovie = +window.prompt("영화를 선택해주세요 (숫자로)");
const userSeat = +window.prompt("자리를 선택해주세요 (숫자로)");
const userPopcorn = +window.prompt("팝콘을 선택해주세요 (숫자로)");
const userSnack = +window.prompt("스낵을 선택해주세요 (숫자로) ");
const userDrink = +window.prompt("음료를 선택해주세요 (숫자로)");

const saleRate = userAge < 20 || userAge >= 65 ? 0.8 : 1;

const sum =
  cgv.seat[userSeat - 1]?.price * saleRate +
  (cgv.popcorn[userPopcorn - 1]?.price || 0) +
  (cgv.snack[userSnack - 1]?.price || 0) +
  (cgv.drink[userDrink - 1]?.price || 0);

console.log(
  `영화 : ${cgv.movie[userMovie - 1]}, 좌석 : ${cgv.seat[userSeat - 1].name}, 팝콘 : ${cgv.popcorn[userPopcorn - 1]?.name || "없음"}, 스낵 : ${cgv.snack[userSnack - 1]?.name || "없음"}, 음료 : ${cgv.drink[userDrink - 1]?.name || "없음"}`,
);

console.log(`총금액 : ${sum}`);
