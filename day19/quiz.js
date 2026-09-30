// 피자 만들기
// 도우 -> 소스 -> 토핑 -> 치즈 -> 굽기 -> 완성

const makeDou = (dough, step) => {
  setTimeout(() => {
    console.log(`${dough} 도우 만들기`);
    step();
  }, 3000);
};

const putSauce = (sauce, step) => {
  setTimeout(() => {
    console.log(`${sauce} 소스 뿌리기`);
    step();
  }, 2000);
};

const putTopping = (topping, step) => {
  setTimeout(() => {
    console.log(`${topping} 토핑 올리기`);
    step();
  }, 1000);
};

const putcheeze = (cheese, step) => {
  setTimeout(() => {
    console.log(`${cheese} 올리기`);
    step();
  }, 1000);
};

const bakePizza = (step) => {
  setTimeout(() => {
    console.log(`bakePizza done`);
    step();
  }, 5000);
};

const done = () => {
  setTimeout(() => {
    console.log(`makePizza done`);
  }, 1000);
};

makeDou("씬", () => {
  putSauce("굴", () => {
    putTopping("페퍼로니", () => {
      putcheeze("파마산", () => {
        bakePizza(() => {
          done();
        });
      });
    });
  });
});
