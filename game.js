$(document).ready(function(){
    
    function north(board, position, color){
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
    
    function northeast(board, position, color){
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
    
    function east(board, position, color){
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
    
    function southeast(board, position, color){
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
    
    function south(board, position, color){
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
    
    function southwest(board, position, color){
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
    
    function west(board, position, color){
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
    
    function northwest(board, position, color){
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
    
    function getMoves(board, color){
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
    
    function changeColor(board, iter, color){
        board[iter] = color;
        if (color == 1){
            $(imgs[iter]).removeClass("white");
            $(imgs[iter]).addClass("black");
        } else {
            $(imgs[iter]).removeClass("black");
            $(imgs[iter]).addClass("white");
        }
        return;
    }
    
    function makeMove(board, move, color){
        if (color == 1){
            for (var q=0; q<64; q++){
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
    
    function AImakeMove(board, move, color){
        
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
    }
    
    function getScore(board){
        var black=0;
        var white=0;
        for (var i=0; i<64; i++){
            if (board[i] == 1){
                black++;
            } else if (board[i] == -1) {
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
    
    function NegaMax(board, depth, color, alpha, beta){
        if (depth == 0){
            return (getScore(board) * -color);
        }
        var moves = getMoves(board, color);
        var moveslength = moves.length;
        if (moveslength == 0){
            moves = getMoves(board, -color);
            moveslength = moves.length;
            if (moveslength == 0){
                return (getScore(board) * -color);
            }
            var value = -NegaMax(board, depth-1, -color, -alpha, -beta);
            if (value >= beta){
                return value;
            }
            if (value > alpha){
                alpha = value;
            }
        } else {
            for (var i=0; i<moveslength; i++){
                var tempboard = board;
                AImakeMove(board, moves[i], color);
                var value = -NegaMax(board, depth-1, -color, -alpha, -beta);
                board = [];
                board = tempboard;
                if (value >= beta){
                    return value;
                }
                if (value > alpha){
                    alpha = value;
                }
            }
        }
        return alpha;
    }
    
    function getBestMove(board){
        var depth = 4;
        var alpha = -100;
        var beta = 100;
        var color = -1;
        var AImoves = getMoves(board, color);
        var AImoveslength = AImoves.length;
        var move = AImoves[0];
        for (int i=0; i<AImoveslength; i++){
            var tempboard = board;
            AImakeMove(board, AImoves[i], color);
            var value = -NegaMax(board, depth-1, -color, -alpha, -beta);
            board = [];
            board = tempboard;
            if (value >= beta){
                return AImoves[i];
            }
            if (value > alpha){
                move = AImoves[i];
            }
        }
        return move;
    }
    
    function finish(){
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
    
    function validCSS(board){
        
        var validmovesCSS = getMoves(board, 1);
        var x;
        for (x in validmovesCSS){
            $(imgs[validmovesCSS[x]]).removeClass("empty");
            $(imgs[validmovesCSS[x]]).addClass("valid");
        }
        return;
    }
    
    function play(){
        
        move = -1;
        var moves = getMoves(board, -1);
        
        if (moves.length == 0){
            moves = [];
            moves = getMoves(board, 1);
            
            if (moves.length == 0){
                finish();
            } else {
                validCSS(board);
                return;
            }
            
        } else {
            move = getBestMove(board);
            makeMove(board, moves[move], -1);
            moves = [];
            moves = getMoves(board, 1);
            if (moves.length == 0) {
                play();
            } else {
                validCSS(board);
            }
        }
        return;
    }
    
    var board=[];
    var imgs = document.getElementsByTagName("img");
    
    for (var i=0; i<19; i++){
        $(imgs[i]).addClass("empty");
        board.push(0);
    };
    $(imgs[19]).addClass("valid");
    board.push(0);
    for (var i=20; i<26; i++){
        $(imgs[i]).addClass("empty");
        board.push(0);
    };
    $(imgs[26]).addClass("valid");
    board.push(0);
    $(imgs[27]).addClass("white");
    board.push(-1);
    $(imgs[28]).addClass("black");
    board.push(1);
    for (var i=29; i<35; i++){
        $(imgs[i]).addClass("empty");
        board.push(0);
    };
    $(imgs[35]).addClass("black");
    board.push(1);
    $(imgs[36]).addClass("white");
    board.push(-1);
    $(imgs[37]).addClass("valid");
    board.push(0);
    for (var i=38; i<44; i++){
        $(imgs[i]).addClass("empty");
        board.push(0);
    };
    $(imgs[44]).addClass("valid");
    board.push(0);
    for (var i=45; i<64; i++){
        $(imgs[i]).addClass("empty");
        board.push(0);
    };
    
    var move = -1;
    
    $("img").click(function(){
        if ($(this).attr("class") == "valid"){
            move = Number($(this).attr("alt"));
            makeMove(board, move, 1);
            play();
        }
    });
    
    $("#newgame").click(function(){
       location.reload(); 
    });
    
});
