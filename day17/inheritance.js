class Character {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, maxHp, power) {
    this.#name = name;
    this.#hp = maxHp;
    this.#maxHp = maxHp;
    this.#power = power;
  }

  get name() {
    return this.#name;
  }
  get power() {
    return this.#power;
  }
  get hp() {
    return this.#hp;
  }
  set hp(v) {
    this.#hp = Math.max(0, Math.min(v, this.#maxHp));
  }

  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격!`);
    console.log(`${this.#power} 데미지`);
    console.log(`남은 HP : ${target.hp}`);
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name, 150, 20);
  }

  powerstrike(target) {
    const hp = this.hp;
    target.hp /= 2;
    super.hp(hp - 10);
  }
}

class Monster {
  #name;
  #hp;
  #maxHp;
  #power;
  #dropItem;

  constructor(name, hp, power, dropItem) {
    this.#name = name;
    this.#maxHp = hp;
    this.#hp = hp;
    this.#power = power;
    this.#dropItem = dropItem;
  }

  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격!`);
    console.log(`${this.#power} 데미지`);
    console.log(`남은 HP : ${target.hp}`);
  }
}

class RedSnail extends Monster {
  constructor() {
    super("빨간달팽이", 20, 5, ["100메소", "빨간달팽이 껍질", "후르츠 대거"]);
  }
}
const nter = new Warrior("Nter");
const snail1 = new RedSnail();

nter.attack(snail1);

console.log(nter, snail1);
