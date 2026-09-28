const car = {
  name: "포르쉐",
  model: "잘몰라요",
  speed: 0,
  speedUp() {
    this.speed = this.speed + 10;
  },
  speedDown() {
    this.speed = this.speed < 10 ? 0 : this.speed - 10;
  },
  break() {
    this.speed = 0;
  },
  show() {
    console.log(`${this.name}의 속도 : ${this.speed}`);
  },
};

const calc = {
  first: 0,
  second: 0,

  getNumber() {
    this.first = +window.prompt("숫자를 입력해주세요");
    this.second = +window.prompt("숫자를 입력해주세요");
  },

  plus() {
    console.log(this.first + this.second);
  },

  minus() {
    console.log(this.first - this.second);
  },

  multiply() {
    console.log(this.first * this.second);
  },

  square() {
    console.log(this.first ** this.second);
  },

  divide() {
    console.log(
      this.second === 0 ? "0으로 나눌 수 없음" : this.first / this.second,
    );
  },
};
