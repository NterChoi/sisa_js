setInterval(() => {
  const time = document.createElement("div");
  time.innerHTML = new Date().toISOString();
  document.body.append(time);
}, 1000);
