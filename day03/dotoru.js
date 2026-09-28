const order = +window.prompt("고주문오네가이시마스");
const membership = window.prompt("멤버쉽이 있는지");
const size = window.prompt("크기는 뭘로?");

const menu = {
  name: "블렌드커피",
  price: 280,
};
if (order === 2) {
  menu.name = "아이스코히";
  menu.price = 380;
} else if (order === 3) {
  menu.price = 600;
  menu.name = "산도위치";
}

if (membership === "yes") {
  menu.price = menu.price * 0.9;
}

if (size === "m") {
  menu.price = menu.price * 1.1;
} else if (size === "l") {
  menu.price = menu.price * 1.2;
}

console.log(`주문하신 메뉴는 ${menu.name}, 가격은 ${menu.price}`);
