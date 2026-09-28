const donchicken = {
  name: "돈치킨",
  location: "역삼역 어딘가",
  capacity: 30,
  isHoliday: false,
  menu: {
    main: "수육",
    sub: "막국수",
    side: "미역국",
  },
};

console.log(donchicken.location);
console.log(donchicken["location"]);
console.log(donchicken.menu.side);
console.log(donchicken.vip);

donchicken.vip = "최강현";

delete donchicken.menu.side;
console.log(donchicken.menu.side);
