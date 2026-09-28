// 임의의 색상이 나오도록 해주는 함수 만들기 =

const randomColor = () => {
  console.log(
    `#${random16()}${random16()}${random16()}${random16()}${random16()}${random16()}`,
  );
};

const random16 = () => {
  return Math.floor(Math.random() * 16).toString(16);
};

randomColor();
