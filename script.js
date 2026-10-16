const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setCell = (index, marker) => {
        if (board[index] === ""){
            board[index] = marker;
            return true;
        }
        return false;
    }
})