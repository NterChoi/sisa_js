const img = document.querySelector("img");
const atom = document.querySelector(".atom-spinner");

// const a = () => {
//   return new Promise((sucess, fail) => {
//     setTimeout(() => {
//       atom.classList("none");
//       img.classList.remove("none");
//       sucess(true);
//     }, 2000);
//   });
// };

// a();

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

delay(2000).then(() => {
  atom.classList.add("none");
  img.classList.remove("none");
});
