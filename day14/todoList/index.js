import { renderComponent } from "./render.js";

// [추가] 브라우저에 저장할 키와 현재 필터를 관리합니다.
const STORAGE_KEY = "day14-todo-list";
let currentFilter = "all";
const list = document.querySelector(".list");
const form = document.querySelector(".input__wrapper");
const addBtn = document.querySelector(".add__btn");
const addInput = document.querySelector(".add__input");
const footclear = document.querySelector(".foot__clear");
const filters = document.querySelector(".filters");
const progressText = document.querySelector(".head__progress");
const progressBar = document.querySelector(".bar");
const status = document.querySelector(".status");

// [추가] 저장 데이터가 손상되거나 저장소 사용이 제한되어도 앱은 실행됩니다.
const loadTodos = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) throw new Error("잘못된 저장 데이터");
    const ids = new Set();
    return saved.filter((todo) => {
      if (!todo || !Number.isSafeInteger(todo.id) || todo.id < 1 ||
          typeof todo.content !== "string" || !todo.content.trim() ||
          typeof todo.done !== "boolean" || ids.has(todo.id)) return false;
      ids.add(todo.id);
      return true;
    });
  } catch {
    status.textContent = "저장한 목록을 불러올 수 없어 빈 목록으로 시작합니다.";
    return [];
  }
};
let todos = loadTodos();
// [수정] 화면의 순번 대신 고유 ID를 사용해 필터에서도 정확한 항목을 찾습니다.
let nextId = todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
const saveTodos = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    status.textContent = "";
  } catch {
    status.textContent = "브라우저에 저장하지 못했습니다. 새로고침하면 변경 내용이 사라질 수 있어요.";
  }
};


// [수정] 렌더링을 한곳으로 통합하여 추가·체크·삭제 후에도 선택한 필터를 유지합니다.
const render = () => {
  const visibleTodos = todos.filter((todo) =>
    currentFilter === "all" || (currentFilter === "done" ? todo.done : !todo.done));
  list.innerHTML = visibleTodos.length
    ? visibleTodos.map((todo) => renderComponent.todo(todo)).join("")
    : renderComponent.empty(currentFilter);
  filters.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === currentFilter));
  });
  // [추가] 진행률과 일괄 삭제 버튼은 필터와 관계없이 전체 목록을 기준으로 계산합니다.
  const doneCount = todos.filter((todo) => todo.done).length;
  progressText.textContent = todos.length
    ? `${todos.length}개 중 ${doneCount}개 완료 · ${todos.length - doneCount}개 남음`
    : "적어둔 일이 없어요";
  progressBar.max = todos.length || 1;
  progressBar.value = doneCount;
  footclear.disabled = doneCount === 0;
  addBtn.disabled = !addInput.value.trim();
};
const commit = () => {
  saveTodos();
  render();
};

// [수정] form의 submit으로 버튼과 Enter 입력을 함께 처리합니다.
// trim()으로 공백뿐인 입력을 막고, preventDefault()로 새로고침을 방지합니다.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (composing) return;
  const content = addInput.value.trim();
  if (!content) return;
  todos.push({ id: nextId++, content, done: false });
  addInput.value = "";
  commit();
  addInput.focus();
});
addInput.addEventListener("input", () => {
  addBtn.disabled = !addInput.value.trim();
});
// [추가] 한글 조합을 확정하는 Enter가 할 일 제출로 이어지지 않도록 합니다.
let composing = false;
addInput.addEventListener("compositionstart", () => { composing = true; });
addInput.addEventListener("compositionend", () => { composing = false; });
addInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.isComposing || composing || event.keyCode === 229)) {
    event.preventDefault();
  }
});

// [수정] 필터 상태를 저장하고 공통 render()를 호출합니다.
filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  currentFilter = button.dataset.filter;
  render();
});

// [추가] 목록을 다시 그린 뒤 키보드 포커스를 가까운 항목 또는 입력창으로 돌립니다.
const commitWithFocus = (item, selector) => {
  const index = [...list.querySelectorAll(".item")].indexOf(item);
  const id = item.dataset.id;
  commit();
  const items = [...list.querySelectorAll(".item")];
  const next = items.find((row) => row.dataset.id === id) || items[Math.min(index, items.length - 1)];
  (next?.querySelector(selector) || addInput).focus();
};

// [수정] 원본 배열의 ID로 항목을 찾아 체크 상태·진행률·필터를 함께 갱신합니다.
list.addEventListener("change", (event) => {
  if (!event.target.matches(".item__check")) return;
  const item = event.target.closest(".item");
  const todo = todos.find((todo) => todo.id === Number(item.dataset.id));
  if (!todo) return;
  todo.done = event.target.checked;
  commitWithFocus(item, ".item__check");
});
list.addEventListener("click", (event) => {
  const button = event.target.closest(".item__del");
  if (!button) return;
  const item = button.closest(".item");
  todos = todos.filter((todo) => todo.id !== Number(item.dataset.id));
  commitWithFocus(item, ".item__del");
});

// [추가] 완료 항목만 제거하고 남은 항목은 보존합니다.
footclear.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.done);
  commit();
  addInput.focus();
});
// [추가] 사용자의 로컬 날짜를 표시하고 초기 저장 목록을 렌더링합니다.
const updateDate = () => {
  document.querySelector(".head__date").textContent = new Intl.DateTimeFormat("ko-KR", {
    month: "long", day: "numeric", weekday: "long",
  }).format(new Date());
};
updateDate();
setInterval(updateDate, 60_000);
render();
