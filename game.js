$(document).ready(function(){
    
    function getMoves(board, color){
        return 0;
    }
    
    function makeMove(board, move, color){
        return 0;
    }
    
    function score(board, color){
        return 0;
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
    
    

});

