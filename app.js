let boxes = document.querySelectorAll(".box");
let winMsg = document.querySelector(".winMsg");
let msgContainer = document.querySelector(".msgContainer");
let playAgainBtn = document.querySelector(".play-again-button");
let resetBtn = document.querySelector(".reset-button");

let playerX = prompt("Enter PlayerX Name");
let playerO = prompt("Enter PlayerO Name");
turnO = true;
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    console.log(pattern);
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        if (pos1 == "O") {
          pos1 = playerO;
        } else {
          pos1 = playerX;
        }
        showWinner(pos1);
        disableBox();
      }
    }
  }
};

const showWinner = (winner) => {
  winMsg.innerText = `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
  playerX = prompt("Enter PlayerX Name");
  playerO = prompt("Enter PlayerO Name");
};
const playGame = () => {
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
};

playAgainBtn.addEventListener("click", playGame);
resetBtn.addEventListener("click", resetGame);
