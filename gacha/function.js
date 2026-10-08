import { digimonSet, sound } from "./gacha.js";
import { elements } from "./query.js";

// 에러 화면 렌더링 함수
const showError = (e) => {
  console.log(e);
  elements.gachaMessage.textContent = "진화에 실패했다";
  elements.digivice.hidden = true;
  elements.getDigimon.setAttribute("src", "./images/image.png");
  elements.getDigimon.hidden = false;
};

// 뽑은 디지몬 렌더링 함수
const renderingDigimon = (digimon) => {
  const { name, level, img } = digimon;
  elements.gachaLevel.textContent = level;
  elements.gachaLevel.hidden = false;
  elements.gachaName.textContent = name;
  elements.gachaName.hidden = false;
  elements.getDigimon.setAttribute("src", img);
  elements.getDigimon.removeAttribute("hidden");
  elements.digivice.hidden = true;
};

// 1.5초 대기 함수
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// 음악 재생 함수
const playMusic = (volume) => {
  sound.volume = volume;
  sound.currentTime = 0;
  sound.play().catch((e) => {
    console.error("음악 재생 실패", e);
  });
};

// 디지바이스 초기화 함수
const initDigivice = () => {
  elements.gachaMessage.textContent = "디지몬 진화!";
  elements.btn.disabled = true;
  elements.digivice.hidden = false;
  elements.getDigimon.hidden = true;
  elements.gachaName.hidden = true;
  elements.gachaLevel.hidden = true;
};

// fetch 함수
const fetchApi = async (url) => {
  const response = await fetch(`${url}`);
  if (!response.ok) throw new Error(`요청 실패 : ${response.status}`);
  const result = await response.json();
  return result;
};

// 디지몬을 set에 추가하는 함수
// 근데 리턴값이 true, false인게 맞는건가?
const addDigimon = (name) => {
  const isDuplicate = digimonSet.has(name);
  digimonSet.add(name);
  return isDuplicate;
};

// 뽑기 메세지 설정 함수
const showDrawMessage = (isDuplicate) => {
  elements.gachaMessage.textContent = isDuplicate
    ? "또 나왔다 이미 있는 애임"
    : "새 디지몬 획득";
};

// 현재 뽑은 디지몬 개수 카운팅 함수
const calCurrent = () => {
  elements.collectionCount.textContent = digimonSet.size ?? 0;
};

// 전체 디지몬 수 함수
const calTotal = async () => {
  const digimons = await fetchApi(DIGIMON_API_URL);
  elements.collectionTotal.textContent = digimons.length;
};

// 랜덤 디지몬 하나 뽑기 함수
const draw = async () => {
  const digimons = await fetchApi(DIGIMON_API_URL);
  const digimon = digimons[getRandomIndex(digimons)];
  return digimon;
};

// 랜덤 숫자 뽑기 함수
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

export {
  addDigimon,
  calCurrent,
  calTotal,
  draw,
  initDigivice,
  playMusic,
  renderingDigimon,
  showDrawMessage,
  showError,
  sleep,
};
