const desc_btn = document.querySelector(".desc_btn");
const review_btn = document.querySelector(".review_btn");
const inquiry_btn = document.querySelector(".inquiry_btn");
const desc = document.querySelector(".desc");
const review = document.querySelector(".review");
const inquiry = document.querySelector(".inquiry");

const buttons = [desc_btn, review_btn, inquiry_btn];
const contents = [desc, review, inquiry];

const activateTab = (index) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("show");
  });

  buttons[index].classList.add("active");
  contents[index].classList.add("show");
};

desc_btn.addEventListener("click", () => {
  activateTab(0);
});

review_btn.addEventListener("click", () => {
  activateTab(1);
});

inquiry_btn.addEventListener("click", () => {
  activateTab(2);
});
