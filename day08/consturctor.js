// 타입 캐스팅 & 생성자 함수
// 기본 타입 생성자 함수
const a = String(10); // "10"
const b = Boolean(1); // true
const c = Number("100"); // 100

// Object() - 구분법

const d = Object();
const e = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

e.forEach((v) => {}); // 훑기/스키밍
