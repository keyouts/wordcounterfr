let currentCount = 0;
let goal = 0;

window.onload = () => {
  updateDisplay();
  updateProgress();
};

function setGoal() {
  const input = document.getElementById('goal');
  goal = parseInt(input.value) || 0;
  updateProgress();
}

function addWords(amount) {
  currentCount += amount;
  updateDisplay();
  updateProgress();
}

function resetCount() {
  currentCount = 0;
  updateDisplay();
  updateProgress();
}

function updateDisplay() {
  const wordCount = document.getElementById('wordCount');
  wordCount.innerText = `${currentCount} mots`;
}

function updateProgress() {
  const fill = document.getElementById('progressFill');
  const percent = goal > 0 ? Math.min((currentCount / goal) * 100, 100) : 0;
  fill.style.width = `${percent}%`;
}

