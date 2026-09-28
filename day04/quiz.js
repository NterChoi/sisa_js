const email = window.prompt("이메일을 입력해주세요!");

if (!email.includes(`@`)) {
  console.log("@를 포함해야합니다!");
}
if (
  !email.endsWith(`.net`) &&
  !email.endsWith(`.com`) &&
  !email.endsWith(`.co.kr`)
) {
  console.log(`.net/.com/.co.kr로 끝나야합니다!`);
}
if (email !== email.toLowerCase()) {
  console.log(`이메일은 소문자여야합니다`);
}
if (
  !email.includes(1) &&
  !email.includes(2) &&
  !email.includes(3) &&
  !email.includes(4) &&
  !email.includes(5) &&
  !email.includes(6) &&
  !email.includes(7) &&
  !email.includes(8) &&
  !email.includes(9) &&
  !email.includes(0)
) {
  console.log("숫자를 반드시 포함해야합니다!");
}
{
  console.log(`이메일 완성`);
}
