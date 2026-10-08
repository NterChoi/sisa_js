import {
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
} from "./function.js";
import { elements } from "./query";

const DIGIMON_API_URL = "https://digimon-api.vercel.app/api/digimon";

export const sound = new Audio("./sounds/brave heart-디지몬테마송.mp3");

export const digimonSet = new Set();

calCurrent();
calTotal().catch((e) => console.log(e));

elements.btn.addEventListener("click", async () => {
  initDigivice();
  playMusic(0.2);
  elements.stage.classList.add("is-drawing");
  try {
    const [digimon] = await Promise.all([draw(), sleep(5000)]);
    const isDuplicate = addDigimon(digimon.name);
    showDrawMessage(isDuplicate);
    renderingDigimon(digimon);
  } catch (e) {
    showError(e);
  } finally {
    elements.stage.classList.remove("is-drawing");
    elements.btn.disabled = false;
  }

  calCurrent();
});
