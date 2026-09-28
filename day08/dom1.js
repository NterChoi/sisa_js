// 유저한테 만들고 싶은 태그 묻고 내용 묻고 화면에 나타내기
// window, document, element[tag]

// const tag = window.prompt("만들고 싶은 태그는?");
// const content = window.prompt("만들고 싶은 내용은?");

// const users = document.createElement(tag);
// users.innerHTML = content;
// document.body.append(users);

const newTag = document.createElement(prompt("만들고 싶은 태그"));
newTag.innerHTML = prompt("만들고 싶은 내용");
newTag.style.backgroundColor = "pink";

document.body.append(newTag);
