let currentPlayer = "X";
let player1Score = 0;
let player2Score = 0;
let drawScore = 0;

const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleBoxClick);
}

function handleBoxClick(event) {
  const selectedBox = event.target;

  if (selectedBox.textContent !== "") {
    return;
  }

  selectedBox.textContent = currentPlayer;

  if (checkWinCondition() === currentPlayer) {
    setTimeout(() => {
      alert(`Player: ${currentPlayer} Win!!!`);
      reset();
    }, 0);
    currentPlayer === 'X' ? player1Score++ : player2Score++;
    document.querySelector(".player1 .score").textContent = player1Score;
    document.querySelector(".player2 .score").textContent = player2Score;
  } else if (checkDrawCondition()) {
    drawScore++;
    document.querySelector(".ties .score").textContent = drawScore;
    setTimeout(() => {
      alert("DRAW game!!!")
      reset();
    }, 0)
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

}

// Win Condition 
function checkWinCondition() {
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  for (let i = 0; i < winningPatterns.length; i++) {
    const eachWinningPattern = winningPatterns[i];
    const [a, b, c] = eachWinningPattern;

    if (boxes[a].textContent === currentPlayer &&
      boxes[b].textContent === currentPlayer &&
      boxes[c].textContent === currentPlayer &&
      boxes[a] !== "") {
      return currentPlayer;
    }
  }

  return false;
}

// Draw Condition 
function checkDrawCondition() {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function reset() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
  }
}