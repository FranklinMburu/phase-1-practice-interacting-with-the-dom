let counter = 0;
let counterDisplay = document.getElementById('counter');
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let likeButton = document.getElementById('like');
let pauseButton = document.getElementById('pause');
let resumeButton = document.getElementById('resume');
let commentInput = document.getElementById('comment');
let commentDisplay = document.getElementById('comment-display');
let likeCountDisplay = document.getElementById('like-count');

let likes = {};
let intervalId;
let isPaused = false;

function startTimer() {
  intervalId = setInterval(() => {
    if (!isPaused) {
      counter++;
      counterDisplay.textContent = counter;
    }
  }, 1000);
}

plusButton.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;
});

minusButton.addEventListener('click', () => {
  counter--;
  counterDisplay.textContent = counter;
});

likeButton.addEventListener('click', () => {
  if (!likes[counter]) {
    likes[counter] = 0;
  }
  likes[counter]++;
  likeCountDisplay.textContent = `${likes[counter]} like(s) for ${counter}`;
});

pauseButton.addEventListener('click', () => {
  if (isPaused) {
    isPaused = false;
    startTimer();
    pauseButton.textContent = 'Pause';
    enableButtons();
  } else {
    isPaused = true;
    clearInterval(intervalId);
    pauseButton.textContent = 'Resume';
    disableButtons();
  }
});

function disableButtons() {
  plusButton.disabled = true;
  minusButton.disabled = true;
  likeButton.disabled = true;
}

function enableButtons() {
  plusButton.disabled = false;
  minusButton.disabled = false;
  likeButton.disabled = false;
}

commentInput.addEventListener('submit', (event) => {
  event.preventDefault();
  let newComment = commentInput.value;
  commentDisplay.textContent += newComment + "\n";
  commentInput.value = '';
});

window.onload = startTimer;
