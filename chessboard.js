var nullPiece = new Piece("", "");


var INVALID_MOVE = {
    isValid: false,
    willKill: false,
    type: ""
}


function resetChessBoard() {

    var BR1 = new Piece("Black", "Rook"),
        BN1 = new Piece("Black", "Knight"),
        BB1 = new Piece("Black", "Bishop"),
        BQ = new Piece("Black", "Queen"),
        BK = new Piece("Black", "King"),
        BB2 = new Piece("Black", "Bishop"),
        BN2 = new Piece("Black", "Knight"),
        BR2 = new Piece("Black", "Rook"),
        BP1 = new Piece("Black", "Pawn"),
        BP2 = new Piece("Black", "Pawn"),
        BP3 = new Piece("Black", "Pawn"),
        BP4 = new Piece("Black", "Pawn"),
        BP5 = new Piece("Black", "Pawn"),
        BP6 = new Piece("Black", "Pawn"),
        BP7 = new Piece("Black", "Pawn"),
        BP8 = new Piece("Black", "Pawn"),
        WR1 = new Piece("White", "Rook"),
        WN1 = new Piece("White", "Knight"),
        WB1 = new Piece("White", "Bishop"),
        WQ = new Piece("White", "Queen"),
        WK = new Piece("White", "King"),
        WB2 = new Piece("White", "Bishop"),
        WN2 = new Piece("White", "Knight"),
        WR2 = new Piece("White", "Rook"),
        WP1 = new Piece("White", "Pawn"),
        WP2 = new Piece("White", "Pawn"),
        WP3 = new Piece("White", "Pawn"),
        WP4 = new Piece("White", "Pawn"),
        WP5 = new Piece("White", "Pawn"),
        WP6 = new Piece("White", "Pawn"),
        WP7 = new Piece("White", "Pawn"),
        WP8 = new Piece("White", "Pawn");


    var chessboard = [
        [BR1, BN1, BB1, BQ, BK, BB2, BN2, BR2],
        [BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8],
        [nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece],
        [nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece],
        [nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece],
        [nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece, nullPiece],
        [WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8],
        [WR1, WN1, WB1, WQ, WK, WB2, WN2, WR2],
    ];

    return chessboard;
}

function checkMove(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn) {

    switch (chessboard[sourceRow][sourceColumn].type) {

        case "Bishop":
            return checkMoveForBishop(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);

        case "Rook":
            return checkMoveForRook(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);

        case "Queen":
            return checkMoveForQueen(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);
        case "Knight":
            return checkMoveForKnight(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);
        case "King":
            return checkMoveForKing(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);


        default:

            return INVALID_MOVE;

    }



}




function checkMoveForBishop(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn) {

    var destination = chessboard[destinationRow][destinationColumn];
    var rowDifference = sourceRow - destinationRow;
    var colDifference = sourceColumn - destinationColumn;
    var colDiff = Math.abs(colDifference);
    var rowDiff = Math.abs(rowDifference);
    var colDir = colDifference / colDiff;
    var rowDir = rowDifference / rowDiff;


    if (colDiff != rowDiff)
        return INVALID_MOVE;


    for (var x = 1; x < colDiff; x++) {
        if (chessboard[sourceRow - rowDir * x][sourceColumn - colDir * x] != nullPiece) {
            return INVALID_MOVE;
        }
    }

    willKill = destination != nullPiece ? true : false;

    return {
        isValid: true,
        willKill: willKill,
        type: "simple"
    }


}
function checkMoveForRook(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn) {

    var destination = chessboard[destinationRow][destinationColumn];
    var rowDifference = sourceRow - destinationRow;
    var colDifference = sourceColumn - destinationColumn;
    var colDiff = Math.abs(colDifference);
    var rowDiff = Math.abs(rowDifference);
    var colDir = colDifference / colDiff;
    var rowDir = rowDifference / rowDiff;


    if ((colDiff != 0 && rowDiff != 0) || (colDiff == 0 && rowDiff == 0))
        return INVALID_MOVE;


    if (colDiff == 0) {
        for (var y = 1; y < rowDiff; y++) {
            if (chessboard[sourceRow - y * rowDir][sourceColumn] != nullPiece) {
                return INVALID_MOVE;
            }
        }

    } else {
        for (var y = 1; y < colDiff; y++) {
            if (chessboard[sourceRow][sourceColumn - y * colDir] != nullPiece) {
                return INVALID_MOVE;
            }
        }
    }
    willKill = destination != nullPiece ? true : false;

    return {
        isValid: true,
        willKill: willKill,
        type: "simple"
    }

}

function checkMoveForQueen(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn) {

    var result = checkMoveForRook(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);

    if (result.isValid)
        return result;

    return checkMoveForBishop(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);

}
function checkMoveForKnight(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn) {
    var destination = chessboard[destinationRow][destinationColumn];
    var rowDifference = sourceRow - destinationRow;
    var colDifference = sourceColumn - destinationColumn;
    var colDiff = Math.abs(colDifference);
    var rowDiff = Math.abs(rowDifference);


    if ((colDiff == 2 && rowDiff == 1) || (colDiff == 1 && rowDiff == 2)) {

        var willKill = destination != nullPiece ? true : false
        return {
            isValid: true,
            willKill: willKill,
            type: "simple"
        }
    }

    return INVALID_MOVE;
}

function checkMoveForKing(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn) {

    var destination = chessboard[destinationRow][destinationColumn];
    var rowDifference = sourceRow - destinationRow;
    var colDifference = sourceColumn - destinationColumn;
    var colDiff = Math.abs(colDifference);
    var rowDiff = Math.abs(rowDifference);


    if (rowDiff <= 1 && colDiff <= 1) {
        willKill = destination != nullPiece ? true : false;
        return {
            isValid: true,
            willKill: willKill,
            type: "simple"
        }
    }



    if (colDiff == 2 && rowDiff == 0) {

        //Check for castling

        type = checkCastle(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn);

        if (type == "none")

            return INVALID_MOVE;

        return {
            isValid: true,
            willKill: false,
            type: type
        }

    }
    else {
        return INVALID_MOVE;
    }
}
function checkCastle(chessboard, sourceRow, sourceColumn, destinationRow, destinationColumn) {
    var cell = chessboard[sourceRow][sourceColumn];
    if (sourceColumn > destinationColumn && chessboard[sourceRow][0].moves_done == 0 && cell.moves_done == 0) {
        for (var count = 1; count < 4; count++) {
            if (chessboard[sourceRow][sourceColumn - count] != nullPiece) {
                return ("none");
            }
        }
        return ("queen_castle");
    }
    if (sourceColumn < destinationColumn && chessboard[sourceRow][7].moves_done == 0 && cell.moves_done == 0) {
        for (var count = 1; count < 3; count++) {
            if (chessboard[sourceRow][sourceColumn + count] != nullPiece) {
                return ("none");
            }
        }
        return ("king_castle");
    }
}


