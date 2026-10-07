const btn = document.querySelector(".gacha__button");
const getDigimon = document.querySelector(".gacha__result");
const digivice = document.querySelector(".digivice");
const stage = document.querySelector(".gacha__stage");
const gachaName = document.querySelector(".gacha__name");
const gachaMessage = document.querySelector(".gacha__message");
const gachaLevel = document.querySelector(".gacha__level");
const collectionCount = document.querySelector("#collection-count");
const collectionTotal = document.querySelector("#collection-total");

const sound = new Audio("./sounds/brave heart-디지몬테마송.mp3");
sound.volume = 0.2;
sound.currentTime = 0;

const digimonSet = new Set();

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const addDigimon = (digimon) => {
  digimonSet.has(digimon)
    ? (gachaMessage.innerHTML = "또 나왔다 이미 있는 애임")
    : (gachaMessage.innerHTML = "");
  digimonSet.add(digimon);
};

const calCurrent = () => {
  collectionCount.innerHTML = digimonSet.size ?? 0;
};

const calTotal = async () => {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  if (!response.ok) throw new Error(`요청 실패 : ${response.status}`);
  const digimons = await response.json();
  collectionTotal.innerHTML = digimons.length;
};

const draw = async () => {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  if (!response.ok) throw new Error(`요청 실패 : ${response.status}`);
  const digimons = await response.json();
  const digimon = digimons[getRandomIndex(digimons)];
  return digimon;
};

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

calCurrent();
calTotal().catch((e) => console.log(e));

btn.addEventListener("click", async () => {
  gachaMessage.innerHTML = "디지몬 진화!";
  btn.disabled = true;
  digivice.hidden = false;
  getDigimon.hidden = true;
  gachaName.hidden = true;
  gachaLevel.hidden = true;

  sound.play().catch((error) => {
    console.error("음악 재생 실패", error);
  });

  stage.classList.add("is-drawing");
  try {
    const [digimon] = await Promise.all([draw(), sleep(5000)]);
    const { name, level, img } = digimon;
    addDigimon(name);
    gachaLevel.innerHTML = level;
    gachaLevel.hidden = false;
    gachaName.innerHTML = name;
    gachaName.hidden = false;
    getDigimon.setAttribute("src", img);
    getDigimon.removeAttribute("hidden");
    digivice.hidden = true;
  } catch (e) {
    console.log(e);
    gachaMessage.innerHTML = "진화에 실패했다";
    digivice.hidden = true;
    getDigimon.setAttribute("src", "./images/image.png");
    getDigimon.hidden = false;
  } finally {
    stage.classList.remove("is-drawing");
    btn.disabled = false;
  }

  calCurrent();
});
