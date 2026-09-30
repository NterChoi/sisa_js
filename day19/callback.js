const orderCoffee = (menu, step) => {
  setTimeout(() => {
    console.log(`${menu} 주문 완료 `);
    step();
  }, 2000);
};

const payCoffee = (menu, step) => {
  setTimeout(() => {
    console.log(`${menu} 결제 완료 `);
    step();
  }, 1000);
};

const makeCoffee = (menu, step) => {
  setTimeout(() => {
    console.log(`${menu} 제조 완료 `);
    step();
  }, 5000);
};

const takeOutCoffee = (menu) => {
  setTimeout(() => {
    console.log(`${menu} 수령 완료 `);
  }, 2000);
};

orderCoffee("americano", () => {
  payCoffee("americano", () => {
    makeCoffee("americano", () => {
      takeOutCoffee("americano");
    });
  });
});
