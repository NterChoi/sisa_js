const btn = document.querySelector(".gacha__button");
const getDigimon = document.querySelector(".gacha__result");
const digivice = document.querySelector(".digivice");
const gachaName = document.querySelector(".gacha__name");
const gachaMessage = document.querySelector(".gacha__message");
const collectionTotal = document.querySelector("#collection-total");

const sound = new Audio("./sounds/brave heart-디지몬테마송.mp3");

const digimonSet = new Set();

const addDigimon = (digimon) => {
  if (digimonSet.has(digimon)) throw new Error("또 나왔다 이미 있는 애임");
  digimonSet.add(digimon);
};

const calTotal = async () => {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  const digimons = await response.json();
  collectionTotal.innerHTML = digimons.length;
};

const draw = async () => {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  const digimons = await response.json();
  const digimon = digimons[getRandomIndex(digimons)];

  return digimon;
};

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

calTotal();

btn.addEventListener("click", async () => {
  sound.volume = 0.2;
  sound.currentTime = 0;
  sound.play();
  const { name, level, img } = await draw();
  gachaName.innerHTML = name;
  gachaName.hidden = false;
  getDigimon.setAttribute("src", img);
  getDigimon.removeAttribute("hidden");
  digivice.hidden = true;
  gachaMessage.hidden = true;
});
