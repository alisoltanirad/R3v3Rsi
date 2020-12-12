/* get Summation function evaluates the board for a particular node
of the NegaMax's tree data structure.
it assigns different values for different blocks of the board. */
    
export function getSum(tempboardsum){
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
    
export function NegaMax(tempboard, depth, color, alpha, beta){
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
    
export function getBestMove(board, moves){
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