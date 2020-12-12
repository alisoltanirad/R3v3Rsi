/* direction functions check if it is possible to make move to
a particular direction for a player. each function returns 1
if path is valid to make move, otherwise returns 0. */

export function north(board, position, color){
    if ((position > 15) && (board[position - 8] == (-color))){
        for (var j=(position - 16); j>=0; j=(j-8)){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}
    
export function northeast(board, position, color){
    var limit = Math.min((Math.floor(position/8)+1),(((Math.floor(position/8)+1)*8)-position));
    if ((limit > 2) && (board[position - 7] == (-color))){
        var j = (position - 7);
        for (var k=2; k<limit; k++){
            j -= 7;
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}
    
export function east(board, position, color){
    var limit = ((Math.floor(position / 8) + 1) * 8);
    if (((limit - position) > 2) && (board[position + 1] == (-color))){
        for (var j=(position + 2); j<limit; j++){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}
    
export function southeast(board, position, color){
    var limit = Math.min((Math.floor(63-position)+1),(((Math.floor(position/8)+1)*8)-position));
    if ((limit > 2) && (board[position + 9] == (-color))){
        var j = (position + 9);
        for (var k=2; k<limit; k++){
            j += 9;
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}
    
export function south(board, position, color){
    if ((position < 48) && (board[position + 8] == (-color))){
        for (var j=(position + 16); j<64; j=(j+8)){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}
    
export function southwest(board, position, color){
    var limit = Math.min((Math.floor((63-position)/8)+1),((position%8)+1));
    if ((limit > 2) && (board[position + 7] == (-color))){
        var j = (position + 7);
        for (var k=2; k<limit; k++){
            j += 7;
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}
    
export function west(board, position, color){
    var limit = (position - (position % 8));
    if (((position - limit) >= 2) && (board[position - 1] == (-color))){
        for (var j=(position - 2); j>=limit; j--){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}
    
export function northwest(board, position, color){
    var limit = Math.min((Math.floor(position/8)+1),((position%8)+1));
    if ((limit > 2) && (board[position - 9] == (-color))){
        var j = (position - 9);
        for (var k=2; k<limit; k++){
            j -= 9;
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}