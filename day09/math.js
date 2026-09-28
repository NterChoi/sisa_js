console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.floor(3.14));
console.log(Math.random());
console.log(Math.random());

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
