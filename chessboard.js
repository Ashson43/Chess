var nullPiece = new Piece("", "", 0, -1);

function resetChessBoard() {

    var BR1 = new Piece("Black", "Rook", 0, 0),
        BN1 = new Piece("Black", "Knight", 0, 0),
        BB1 = new Piece("Black", "Bishop", 0, 0),
        BQ = new Piece("Black", "Queen", 0, 0),
        BK = new Piece("Black", "King", 0, 0),
        BB2 = new Piece("Black", "Bishop", 0, 0),
        BN2 = new Piece("Black", "Knight", 0, 0),
        BR2 = new Piece("Black", "Rook", 0, 0),
        BP1 = new Piece("Black", "Pawn", 0, 0),
        BP2 = new Piece("Black", "Pawn", 0, 0),
        BP3 = new Piece("Black", "Pawn", 0, 0),
        BP4 = new Piece("Black", "Pawn", 0, 0),
        BP5 = new Piece("Black", "Pawn", 0, 0),
        BP6 = new Piece("Black", "Pawn", 0, 0),
        BP7 = new Piece("Black", "Pawn", 0, 0),
        BP8 = new Piece("Black", "Pawn", 0, 0),
        WR1 = new Piece("White", "Rook", 0, 0),
        WN1 = new Piece("White", "Knight", 0, 0),
        WB1 = new Piece("White", "Bishop", 0, 0),
        WQ = new Piece("White", "Queen", 0, 0),
        WK = new Piece("White", "King", 0, 0),
        WB2 = new Piece("White", "Bishop", 0, 0),
        WN2 = new Piece("White", "Knight", 0, 0),
        WR2 = new Piece("White", "Rook", 0, 0),
        WP1 = new Piece("White", "Pawn", 0, 0),
        WP2 = new Piece("White", "Pawn", 0, 0),
        WP3 = new Piece("White", "Pawn", 0, 0),
        WP4 = new Piece("White", "Pawn", 0, 0),
        WP5 = new Piece("White", "Pawn", 0, 0),
        WP6 = new Piece("White", "Pawn", 0, 0),
        WP7 = new Piece("White", "Pawn", 0, 0),
        WP8 = new Piece("White", "Pawn", 0, 0);
        

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