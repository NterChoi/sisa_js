// div 안에 버튼 만들기

const newDiv = document.createElement("div");
newDiv.style.cssText = "width: 100px; height: 100px; border: 1px solid red;";
// newDiv.style.width = "100px";
// newDiv.style.height = "100px";
// newDiv.style.border = "1px solid red";
// newDiv.style.display = "flex";
// newDiv.style.justifyContent = "center";
// newDiv.style.alignItems = "center";

const newBtn = document.createElement("button");
newBtn.innerHTML = "안녕";
newDiv.append(newBtn);
document.body.append(newDiv);
