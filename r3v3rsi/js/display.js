// changeColor function changes color of a particular block.
    
export function changeColor(board, iter, color){
    board[iter] = color; // changes the board
    // then changes CSS classes
    if (color == -1){
        $(imgs[iter]).removeClass("white");
        $(imgs[iter]).addClass("black");
    } else {
        $(imgs[iter]).removeClass("black");
        $(imgs[iter]).addClass("white");
    }
    return;
}

// validCSS function reveals possible moves for the player.
    
export function validCSS(board){
        
    var validmovesCSS = getMoves(board, -1);
    var x;
    for (x in validmovesCSS){
        $(imgs[validmovesCSS[x]]).removeClass("empty");
        $(imgs[validmovesCSS[x]]).addClass("valid");
    }
    return;
}