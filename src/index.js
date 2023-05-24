var r = document.querySelector(":root");

const colors = [
  0, 23, 38, 75, 112, 150, 165, 190, 200, 210, 220, 235, 255, 280, 300, 345,
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

r.style.setProperty("--hue-color", colors[getRndInteger(0, 15)]);
