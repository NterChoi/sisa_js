const reviewData = [
  {
    id: 1,
    nickname: "민수",
    rating: 5,
    content: "원단이 부드럽고 생각보다 핏이 좋아요.",
    date: "2026-09-12",
  },
  {
    id: 2,
    nickname: "지훈",
    rating: 4,
    content: "배송도 빠르고 전체적으로 만족합니다.",
    date: "2026-09-13",
  },
  {
    id: 3,
    nickname: "서연",
    rating: 5,
    content: "색상이 사진이랑 거의 똑같아요. 재구매하고 싶어요.",
    date: "2026-09-14",
  },
  {
    id: 4,
    nickname: "현우",
    rating: 3,
    content: "디자인은 예쁜데 생각했던 것보다 조금 얇아요.",
    date: "2026-09-15",
  },
];

const buttons = document.querySelectorAll(".btn");
const descBtn = buttons[0];
const reviewBtn = buttons[1];
const inquiryBtn = buttons[2];

const contents = document.querySelectorAll(".content");
const reviewContent = contents[1];

const doActive = (index) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("show");
  });

  buttons[index].classList.add("active");
  contents[index].classList.add("show");
};

descBtn.addEventListener("click", () => {
  doActive(0);
});

const renderReviews = () => {
  reviewBtn.textContent = `리뷰(${reviewData.length})`;

  reviewData.forEach((reviewItme) => {
    const reviewDiv = document.createElement("div");

    const starSpan = document.createElement("span");

    starSpan.textContent =
      "★".repeat(reviewItme.rating) + "✩".repeat(5 - reviewItme.rating);
    const reviewSpan = document.createElement("span");
    reviewSpan.textContent = reviewItme.content;
    reviewDiv.append(starSpan);
    reviewDiv.append(reviewSpan);
    reviewContent.append(reviewDiv);
  });
};

renderReviews();

reviewBtn.addEventListener("click", () => {
  doActive(1);
});

inquiryBtn.addEventListener("click", () => {
  doActive(2);
});
