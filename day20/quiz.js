const makeDough = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("도우 만들기 완료");
    }, 3000);
  });
};

const makeSauce = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("소스 만들기 완료");
    }, 2000);
  });
};

const makeTopping = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("토핑 만들기 완료");
    }, 2000);
  });
};

const makeCheese = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("치즈 만들기 완료");
    }, 1000);
  });
};

const makeBake = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("굽기 만들기 완료");
    }, 3000);
  });
};

const makeDone = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("피자 만들기 완료");
    }, 2000);
  });
};

makeDough()
  .then((x) => {
    console.log(x);
    return makeSauce();
  })
  .then((x) => {
    console.log(x);
    return makeTopping();
  })
  .then((x) => {
    console.log(x);
    return makeCheese();
  }).then;
