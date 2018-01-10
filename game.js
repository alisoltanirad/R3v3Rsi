$(document).ready(function(){
    
    function north(board, position, color){
        if ((board[position] > 15) && ((board[position] - 8) == (-color))){
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
        return 0;
    }
    
    function east(board, position, color){
        var limit = ((Math.floor(position / 8) + 1) * 8);
        if (((limit - (board[position])) > 2) && ((board[position] + 1) == (-color))){
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
        return 0;
    }
    
    function south(board, position, color){
        if ((board[position] < 48) && ((board[position] + 8) == (-color))){
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
        return 0;
    }
    
    function west(board, position, color){
        var limit = (position - (position % 8));
        if (((board[position] - limit) >= 2) && ((board[position] - 1) == (-color))){
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
        return 0;
    }
    
    function getMoves(board, color){
        return;
    }
    
    function makeMove(board, move, color){
        return;
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
    
    function play(){
        
        move = -1;
        var moves = getMoves(board, -1);
        
        if (moves.length == 0){
            
            moves = getMoves(board, 1);
            
            if (moves.length == 0){
                finish();
            } else {
                return;
            }
            
        } else {
            move = Math.floor(Math.random() * moves.length);
            makeMove(board, move, -1);
            
            moves = getMoves(board, 1);
            if (moves.length == 0) {
                play();
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
    
});

