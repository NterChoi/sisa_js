const age = window.prompt("나이는?");
const charge = window.prompt("금액");
age >= 65
  ? console.log(`요금은 ${charge * 0.7} 입니다.`)
  : age >= 20
    ? console.log(`요금은 ${charge} 입니다.`)
    : age >= 8
      ? console.log(`요금은 ${charge * 0.7} 입니다.`)
      : console.log(`요금은 무료입니다.`);
