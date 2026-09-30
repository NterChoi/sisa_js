// 🥚🐣🐥🐓🍗
// 버튼 - 치킨 만들기

const btnChicken = document.querySelector("button");
const consoleEgg = (step) => {
  setTimeout(
    () => {
      console.log("🥚");
      step();
    },
    (Math.floor(Math.random() * 3) + 1) * 1000,
  );
};

const consoleHatch = (step) => {
  setTimeout(
    () => {
      console.log("🐣");
      step();
    },
    (Math.floor(Math.random() * 3) + 2) * 1000,
  );
};

const consoleChick = (step) => {
  setTimeout(
    () => {
      console.log("🐥");
      step();
    },
    (Math.floor(Math.random() * 3) + 2) * 1000,
  );
};

const consoleHen = (step) => {
  setTimeout(
    () => {
      console.log("🐓");
      step();
    },
    (Math.floor(Math.random() * 3) + 3) * 1000,
  );
};

const consoleChicken = () => {
  setTimeout(
    () => {
      console.log("🍗");
    },
    (Math.floor(Math.random() * 3) + 1) * 1000,
  );
};

btnChicken.addEventListener("click", () => {
  consoleEgg(() => {
    consoleHatch(() => {
      consoleChick(() => {
        consoleHen(() => {
          consoleChicken();
        });
      });
    });
  });
});
