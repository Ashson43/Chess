class Piece {

    constructor(color, type, enpassent, moves_done) {
        this.color = color;
        this.type = type;
        this.enpassent = enpassent;
        this.moves_done = moves_done;
    }


    displayText() {

        console.log("inside displayText");

        // text_icon_map = {
        //     "white-King": "♔"

        // }

        // text_icon_map.get(this.color + "-" + this.type)

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