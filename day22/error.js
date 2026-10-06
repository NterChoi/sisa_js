try {
  console.log(1);
  console.log(1);
  throw new Error("에러");
  console.log(2);
} catch (e) {
  console.log(e);
}

console.log(1);
throw new Error("에러");
console.log(2);
