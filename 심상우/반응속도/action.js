let startText = document.querySelector("body");
let speedDisplay = document.getElementById("speedDisplay");
let clickTime = 0;
startText.addEventListener("click", nextAction);

function nextAction() {
  startText.style.backgroundColor = "red";
  startText.style.textAlign = "center";
  startText.textContent = "초록색이 되면 클릭하세요";
  clickTime = Date.now();

  changeColor();
}

function changeColor() {
  const n = Math.floor(Math.random() * 10) + 1;

  setTimeout(() => {
    startText.textContent = "클릭하세요";
    startText.style.backgroundColor = "rgb(0, 254, 255)";
    const elapsed = (Date.now() - clickTime) / 1000;
    speedDisplay.textContent = `클릭 속도: ${elapsed.toFixed(2)}초`;
  }, n * 1000);

  setTimeout(() => {
    startText.style.backgroundColor = "red";
  }, 1000);
}
