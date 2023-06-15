let currentPlayer = "X";
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
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  if (checkWinCondition() === "X") {
    alert("win")
  }
}

// Win Condition 
function checkWinCondition() {
  const winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 7], [2, 4, 6]
  ]
}