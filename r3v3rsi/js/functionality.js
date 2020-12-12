// array copy functions copy contents of an array into another array.
    
export function boardArrayCopy(array1, array2){
    for (var i=0; i<64; i++){
        array1[i] = array2[i];
    }
    return array1;
}

/* getScore function calculates scores of the players 
when game ends. return an array containing the code
of the winner and scores of player and AI. */
    
export function getScore(board){
    var black=0;
    var white=0;
    for (var i=0; i<64; i++){
        if (board[i] == -1){
            black++;
        } else if (board[i] == 1) {
            white++;
        }
    }
    var winner = 0;
    if (black > white){
        winner = 1;
    } else if (white > black){
        winner = -1;
    }
    return [winner, black, white];
}
    
/* finish function is called when game ends. shows 
details and final scores. */
    
export function finish(){
    var score = getScore(board);
    if (score[0] == 1){
        window.alert("You Win! :)\n\n" + 
                    "You got " + score[1] + " scores," +
                    "The opponent got " + score[2] + " scores.");
    } else if (score[0] == -1){
        window.alert("You lose! :(\n\n" + 
                    "You got " + score[1] + " scores," +
                    "The opponent got " + score[2] + " scores.");
    } else {
        window.alert("Both players got " + score[1] + " scores.");
    }
    location.reload();
}