class Game {

    validCells = [];


    constructor() {

        this.resetGame();
    }


    resetGame() {

        this.turn = "white";
        this.action = "pick"
        this.killables = [];
        this.currentSelection = -1;
        this.chessboard = resetChessBoard();

    }


    reset() {

    }

    resetKillables() {
        this.killables = [];
    }

    resetValidCells() {
        this.validCells = [];
    }












}