class Move {

    constructor(cellRow, cellCol, destinationRow, destinationCol) {
        this.cellRow = cellRow;
        this.cellCol = cellCol;
        this.destinationRow = destinationRow;
        this.destinationCol = destinationCol;
        this.rowdiff = Math.abs(cellRow - destinationRow);
        this.coldiff = Math.abs(cellCol - destinationCol);
        this.rowdifference = cellRow - destinationRow;
        this.coldifference = cellCol - destinationCol;
    }




    
}