import { todoList } from "./data.js";
import { Todo } from "./proto.js";

const [content, deadline] = document.querySelectorAll("input");
const [add, confirm] = document.querySelectorAll("button");

add.addEventListener("click", (e) => {
  todoList.push(new Todo(content.value, deadline.value));
});

confirm.addEventListener("click", () => {
  todoList.forEach((x) => {
    console.log(`컨텐츠 : ${x.getContent()}, 데드라인 : ${x.getDeadline()}`);
  });
});
