const input = document.querySelector("input");
const btn = document.querySelector("button");

const c = (x) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(x);
    }, 2000);
  });
};

c("뜨아거").then((x) => console.log(`${x} 졸귀`));

// 내가 한거 프로미스를 먼저 선언해서 새로고침을 안하면 한번 밖에 못함
const a = new Promise((success, fail) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      success(input.value);
    }, 2000);
  });
});

a.then((x) => {
  alert(`${x} 졸귀!`);
});

// 선생님 예제 클릭마다 프로미스 생성
btn.addEventListener("click", () => {
  const test = new Promise((success, fail) => {
    setTimeout(() => {
      success(input.value);
    }, 2000);
  });
  test.then((x) => console.log(`${x} 꿀맛`));
});
