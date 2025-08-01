# Chess


## Data Model

### Chess Board

 - 8X8 2D array of Pieces
 - Blanks are represented by null Piece

## Moves

 1. turns: White and Black
 1. actions: pick and place 

The following sequence is followed

1. White-pick
1. White-place
1. Black-pick
1. Balck-place

## Logic

### Pick
  - find validCells
    - calls validateMove(analyzeMove) on all cells
    - whichever is valid, add to validCells[] array
    - if it can kill, add to killables[] array


### Place  
 
  - validateMove 
  - if valid, do the move and update the board
  - reset validCells, killables


### AnalyzeMove

  - Check if the piece can move from source to destination
  - Will this result in a kill?
  - Special Cases:
    - King side castle
    - Queen side castle
    - Enpassent - left , right
  - return following object
  ```
  {
    isValid: true,
    isKill: false,
    type:"Castle"
    subType: "King"

   }
  ```

### Draw Board

 - Draw table
 - For each position 
    - Put the Unicode text for the piece
    - Highlight the cell based on if it is in killables or validCells Array
    - Special Case: Highlight if the king has check

    