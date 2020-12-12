import {boardArrayCopy, getScore, finish} from './functionality.js';
import {north, northeast, east, southeast, 
        south, southwest, west, northwest} from './directions.js';
import {getMoves, makeMove, AImakeMove} from './movements.js';
import {getSum, NegaMax, getBestMove} from './ai.js';
import {changeColor, validCSS} from './display.js';

$(document).ready(function(){
    alert("Ready!");

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
