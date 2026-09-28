const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const menu_li = document.createElement("li");
  const isexist = document.querySelector("li");
  const menu_ul = document.createElement("ul");
  const menu_ul1 = document.createElement("ul");
  menu_ul.innerHTML = "프로필";
  menu_ul1.innerHTML = "결제내역";
  menu_li.append(menu_ul);
  menu_li.append(menu_ul1);
  document.body.append(menu_li);

  if (isexist) {
  }
});
