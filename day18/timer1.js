const [hi, time] = document.querySelectorAll("button");
const today = new Date();

hi.addEventListener("click", () => {
  setTimeout(() => {
    alert(`하이!`);
  }, 3000);
});

time.addEventListener("click", () => {
  setTimeout(() => {
    alert(
      `${today.getHours()}시 ${today.getMinutes()}분 ${today.getSeconds()}`,
    );
  }, 5000);
});
