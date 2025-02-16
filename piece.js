class Piece {

    constructor(color, type) {
        this.color = color;
        this.type = type;
        this.moves_done = 0;
    }


    displayText() {

        switch (this.color) {
            case "White":
                switch (this.type) {
                    case "King":
                        return "\u2654"; //"♔"
                    
                    case "Queen":
                        return "\u2655";
                        // return "♕";
                    case "Rook":
                        return "\u2656";
                        // return "♖";
                    case "Bishop":
                        return "\u2657";
                        // return "♗";
                    case "Knight":
                        return "\u2658";
                        // return "♘";
                    case "Pawn":
                        return "\u2659"
                        // return "♙";
                }
            case "Black":
                switch (this.type) {
                    case "King":
                        return "\u265A"; //"♔"
                    
                    case "Queen":
                        return "\u265B";
                        // return "♕";
                    case "Rook":
                        return "\u265C";
                        // return "♖";
                    case "Bishop":
                        return "\u265D";
                        // return "♗";
                    case "Knight":
                        return "\u265E";
                        // return "♘";
                    case "Pawn":
                        return "\u265F"
                        // return "♙";
                }
            default: return "";
        }
    }
}