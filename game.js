$(document).ready(function(){
    
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

