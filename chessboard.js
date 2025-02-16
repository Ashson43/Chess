var nullPiece = new Piece("", "", 0, -1);

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