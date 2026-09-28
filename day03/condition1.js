const score = +window.prompt("일본어 점수 입력");

if (score >= 90 && score <= 100) {
  console.log(`A`);
} else if (score >= 80) {
  console.log(`B`);
} else if (score > 70) {
  console.log(`C`);
} else if (score > 60) {
  console.log(`D`);
} else {
  console.log(`스미마셍`);
}

const age = window.prompt("몇살임?");

if (age < 7) {
  console.log(`무료`);
} else if (age <= 12) {
  console.log(5000);
} else if (age <= 19) {
  console.log(10000);
} else {
  console.log(15000);
}
