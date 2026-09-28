// [추가] 사용자 입력을 HTML로 해석하지 않도록 특수 문자를 변환합니다.
// 예: <img>를 입력해도 이미지 태그가 아니라 입력한 글자로 표시됩니다.
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

export const renderComponent = {
  // [수정] ul의 자식은 li로 만들고 필터별 빈 목록 안내를 표시합니다.
  empty: (filter = "all") => {
    const messages = {
      all: ["할 일이 없어요", "위 칸에 적고 Enter를 누르면 여기에 쌓여요"],
      active: ["남은 일이 없어요", "새 할 일을 추가하거나 끝낸 일을 확인해 보세요"],
      done: ["끝낸 일이 없어요", "완료한 할 일에 체크해 보세요"],
    };
    const [title, sub] = messages[filter] || messages.all;
    return `<li class="empty" id="empty">
      <p class="empty__title">${title}</p><p class="empty__sub">${sub}</p>
    </li>`;
  },
  // [수정] 필터링된 순번 대신 고유 ID를 사용하고 삭제 버튼에 항목 이름을 제공합니다.
  todo: (todo) => `<li class="item" data-id="${todo.id}">
    <label class="item__label">
      <input class="item__check" type="checkbox" ${todo.done ? "checked" : ""}>
      <span class="item__text">${escapeHtml(todo.content)}</span>
    </label>
    <button class="item__del" type="button" aria-label="${escapeHtml(todo.content)} 삭제">✕</button>
  </li>`,
};
