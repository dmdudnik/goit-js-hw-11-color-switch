const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let isActive = false;
let intervalId = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomIndex() {
  return randomIntegerFromInterval(0, colors.length - 1);
}

function randomColor() {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors.indexOf(colors[i]) === randomIndex()) {
      return colors[i];
    }
  }
}

function changeBackground() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    document.querySelector('body').style.background = randomColor();
  }, 1000);
}

function stopChange() {
  isActive = false;
  clearInterval(intervalId);
}

refs.startBtn.addEventListener('click', changeBackground);
refs.stopBtn.addEventListener('click', stopChange);
