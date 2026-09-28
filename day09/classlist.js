const section = document.createElement("section");
section.className = "container";

const day = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

Array(14)
  .fill(0)
  .forEach((x, i) => {
    if (i % 2 === 0) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = day[i / 2];
      newDiv.className = "day";
      section.append(newDiv);
    } else {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = i === 13 ? "정기휴무" : "11:30 ~ 22:00";
      newDiv.className = "day";
      section.append(newDiv);
    }
  });

document.body.append(section);
