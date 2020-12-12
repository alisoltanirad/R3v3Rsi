/* getMoves function gets all the possible moves of the players
when it is their turn. returns an array containing possible moves. */

export function getMoves(board, color){
    var validmoves = [];
    for (var p=0; p<64; p++){
        if (board[p] == 0){
            if (north(board, p, color) == 1){
                validmoves.push(p);
                continue;
            } else if (northeast(board, p, color) == 1){
                validmoves.push(p);
                continue;
            } else if (east(board, p, color) == 1){
                validmoves.push(p);
                continue;
            } else if (southeast(board, p, color) == 1){
                validmoves.push(p);
                continue;
            } else if (south(board, p, color) == 1){
                validmoves.push(p);
                continue;
            } else if (southwest(board, p, color) == 1){
                validmoves.push(p);
                continue;
            } else if (west(board, p, color) == 1){
                validmoves.push(p);
                continue;
            } else if (northwest(board, p, color) == 1){
                validmoves.push(p);
                continue;
            }
        }
    }
    return validmoves;
}

/* makeMove function makes moves in possible directions.
also changes CSS classes using changeColor function.*/
    
export function makeMove(board, move, color){
    if (color == -1){
        for (var q=0; q<64; q++){ // clears valid moves from the board
            if ($(imgs[q]).attr("class") == "valid"){
                $(imgs[q]).removeClass("valid");
                $(imgs[q]).addClass("empty");
            }
        }
        $(imgs[move]).addClass("black");
    } else {
        $(imgs[move]).addClass("white");
    }
    board[move] = color;
        
    var iter = 0;
    if (north(board, move, color) == 1){
        iter = (move - 8);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter -= 8;
        }
    }
    if (northeast(board, move, color) == 1){
        iter = (move - 7);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter -= 7;
        }
    }
    if (east(board, move, color) == 1){
        iter = (move + 1);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter += 1;
        }
    }
    if (southeast(board, move, color) == 1){
        iter = (move + 9);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter += 9;
        }
    }
    if (south(board, move, color) == 1){
        iter = (move + 8);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter += 8;
        }
    }
    if (southwest(board, move, color) == 1){
        iter = (move + 7);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter += 7;
        }
    }
    if (west(board, move, color) == 1){
        iter = (move - 1);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter -= 1;
        }
    }
    if (northwest(board, move, color) == 1){
        iter = (move - 9);
        while (board[iter] == -color){
            changeColor(board, iter, color);
            iter -= 9;
        }
    }
    return;
}
    
/* AImakeMove makes move just in NegaMax nodes.
unlike the makeMove function, doesn't change
CSS classes. */
    
export function AImakeMove(board, move, color){
    var iter = 0;
    if (north(board, move, color) == 1){
        iter = (move - 8);
        while (board[iter] == -color){
            board[iter] = color;
            iter -= 8;
        }
    }
    if (northeast(board, move, color) == 1){
        iter = (move - 7);
        while (board[iter] == -color){
            board[iter] = color;
            iter -= 7;
        }
    }
    if (east(board, move, color) == 1){
        iter = (move + 1);
        while (board[iter] == -color){
            board[iter] = color;
            iter += 1;
        }
    }
    if (southeast(board, move, color) == 1){
        iter = (move + 9);
        while (board[iter] == -color){
            board[iter] = color;
            iter += 9;
        }
    }
    if (south(board, move, color) == 1){
        iter = (move + 8);
        while (board[iter] == -color){
            board[iter] = color;
            iter += 8;
        }
    }
    if (southwest(board, move, color) == 1){
        iter = (move + 7);
        while (board[iter] == -color){
            board[iter] = color;
            iter += 7;
        }
    }
    if (west(board, move, color) == 1){
        iter = (move - 1);
        while (board[iter] == -color){
            board[iter] = color;
            iter -= 1;
        }
    }
    if (northwest(board, move, color) == 1){
        iter = (move - 9);
        while (board[iter] == -color){
            board[iter] = color;
            iter -= 9;
        }
    }
    return;
}