const cells = document.querySelectorAll(".cell");
const btn = document.getElementById("reset-button");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function cellClick(e){
    const clickCell = e.target;
    const cellIndex = cellClick.getAttribute("data-index");

    if (board[cellIndex] !== "" || !gameActive){
        return;
    }
    board[cellIndex] = currentPlayer;
    clickCell.textContent = currentPlayer;

    checkWin();
}

function checkWin () {
    let roundWon = false;
    for (let i = 0; i < winCondition.length; i++){
        const [a, b, c] = winCondition[i];

        if (board[a] === "" || board[b] === "" || board[c] === ""){
            continue;
        }
        if (board[a] === board[b] && board[b] === board[c]){
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        alert(`Player ${currentPlayer}!`);
        gameActive = false;
        return;
    }

    if (!board.includes("")){
        alert("equal");
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === "x" ? "0" : "X";
}