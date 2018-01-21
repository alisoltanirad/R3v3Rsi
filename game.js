$(document).ready(function(){
    
    // array copy functions copy contents of an array into another array.
    
    function boardArrayCopy(array1, array2){
        for (var i=0; i<64; i++){
            array1[i] = array2[i];
        }
        return array1;
    }
    
    /* direction functions check if it is possible to make move to
    a particular direction for a player. each function returns 1
    if path is valid to make move, otherwise returns 0. */
    
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
    
    /* getMoves function gets all the possible moves of the players
    when it is their turn. returns an array containing possible moves. */
    
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
    
    // changeColor function changes color of a particular block.
    
    function changeColor(board, iter, color){
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
    
    /* makeMove function makes moves in possible directions.
        also changes CSS classes using changeColor function.*/
    
    function makeMove(board, move, color){
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
        return;
    }
    
    /* get Summation function evaluates the board for a particular node
    of the NegaMax's tree data structure.
    it assigns different values for different blocks of the board. */
    
    function getSum(tempboardsum){
        var sum = 0;
        // corners are very valuable. (value = 24)
        var corners = [0,7,56,63];
        // buffers are harmful. (value = -4)
        var buffers = [1,6,8,9,14,15,
                       48,49,54,55,57,62];
        // edges are important. (value = 4)
        var edges = [2,3,4,5,16,23,24,31,
                     32,39,40,47,58,59,60,61];
        for (var i=0; i<64; i++){
            if (corners.includes(i)){
                sum += (tempboardsum[i] * 24);
            } else if (buffers.includes(i)){
                sum += (tempboardsum[i] * -4);
            } else if (edges.includes(i)){
                sum += (tempboardsum[i] * 4);
            } else {
                // other blocks (value = 1)
                sum += tempboardsum[i];
            }
        }
        return sum;
    }
    
    /* NegaMax function implements the NegaMax algorithm plus
    alpha-beta pruning for decision making of the AI.
    NegaMax is the optimized form of MiniMax algorithm. */
    
    function NegaMax(tempboard, depth, color, alpha, beta){
        if (depth == 0){ 
            // when reaches to the last node of a branch
            return (getSum(tempboard) * color);
        }
        var moves = getMoves(tempboard, color);
        var moveslength = moves.length;
        if (moveslength == 0){ 
            // when there's no possible move to make
            moves = getMoves(tempboard, -color);
            moveslength = moves.length;
            if (moveslength == 0){
                // when game ends in the branch
                return (getSum(tempboard) * color);
            }
            var value = -NegaMax(tempboard, depth-1, -color, -alpha, -beta);
            if (value >= beta){
                return value;
            }
            if (value > alpha){
                alpha = value;
            }
        } else {
            for (var i=0; i<moveslength; i++){
                var tempboard2 = [];
                tempboard2 = boardArrayCopy(tempboard2, tempboard);
                AImakeMove(tempboard2, moves[i], color);
                var value = -NegaMax(tempboard2, depth-1, -color, -alpha, -beta);
                tempboard2 = boardArrayCopy(tempboard2, tempboard);
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
    
    /* getBestMove function finds the best move to make for AI in
    each round from possible moves. it implements
    the first stage of the NegaMax algorithm. */
    
    function getBestMove(board, moves){
        var depth = 1;
        var alpha = -225;
        var beta = 225;
        var color = 1;
        var bestmoves = [];
        var AImoves = moves;
        var AImoveslength = AImoves.length;
        /* determining search depth considering the number of the possible
        moves, to reduce time of the search. */
        if (AImoveslength < 4){
            depth = 14;
        } else if (AImoveslength >= 4 && AImoveslength < 7){
            depth = 12;
        } else if (AImoveslength >= 7 && AImoveslength < 12) {
            depth = 10;
        } else {
            depth = 8;
        }
        for (var i=0; i<AImoveslength; i++){
            var tempboard = [];
            tempboard = boardArrayCopy(tempboard, board);
            AImakeMove(tempboard, AImoves[i], color);
            var value = -NegaMax(tempboard, depth-1, -color, -alpha, -beta);
            tempboard = boardArrayCopy(tempboard, board);
            if (value >= beta){
                return AImoves[i];
            }
            if (value > alpha){
                alpha = value;
                bestmoves = [];
                bestmoves.push(AImoves[i]);
            } else if (value == alpha){
                bestmoves.push(AImoves[i]);
            }
        }
        // choosing a move randomly from best moves to be unpredictable.
        var move = Math.floor(Math.random() * bestmoves.length);
        return bestmoves[move];
    }
    
    /* getScore function calculates scores of the players 
    when game ends. return an array containing the code
    of the winner and scores of player and AI. */
    
    function getScore(board){
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
    
    // validCSS function reveals possible moves for the player.
    
    function validCSS(board){
        
        var validmovesCSS = getMoves(board, -1);
        var x;
        for (x in validmovesCSS){
            $(imgs[validmovesCSS[x]]).removeClass("empty");
            $(imgs[validmovesCSS[x]]).addClass("valid");
        }
        return;
    }
    
    /* Play is the main function of the game.
        AI make moves in this function. */
    
    function play(){
        
        move = -1;
        var moves = getMoves(board, 1);
        
        if (moves.length == 0){
            moves = [];
            moves = getMoves(board, -1);
            
            if (moves.length == 0){
                // when game ends
                finish();
            } else {
                validCSS(board);
                return;
            }
            
        } else {
            move = getBestMove(board, moves);
            makeMove(board, move, 1);
            moves = [];
            moves = getMoves(board, -1);
            if (moves.length == 0) {
                // if player doesn't have valid moves
                play();
            } else {
                // preparing the board for player to make a move
                validCSS(board);
            }
        }
        return;
    }
    
    // Initializing the board in the beginning.
    
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
    board.push(1);
    $(imgs[28]).addClass("black");
    board.push(-1);
    for (var i=29; i<35; i++){
        $(imgs[i]).addClass("empty");
        board.push(0);
    };
    $(imgs[35]).addClass("black");
    board.push(-1);
    $(imgs[36]).addClass("white");
    board.push(1);
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
    
    // jQuery function to get player's move.
    
    $("img").click(function(){
        if ($(this).attr("class") == "valid"){
            move = Number($(this).attr("alt"));
            makeMove(board, move, -1);
            play();
        }
    });
    
    // jQuery function to start over the game.
    
    $("#newgame").click(function(){
       location.reload(); 
    });
    
});
