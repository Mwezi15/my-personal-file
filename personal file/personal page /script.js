function changeColor() {
  const colors = ["#f4f1ee", "#ffe5ec", "#cdb4db", "#a2d2ff", "#bde0fe"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function sayHello() {
  alert("Hey there! 💖");
}
