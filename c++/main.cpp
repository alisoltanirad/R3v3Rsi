#include <iostream> // cin, cout, ...
#include <cmath> // floor
#include <algorithm> // min
#include <stdlib.h> // rand
using namespace std;

// array copy functions copy contents of an array into another array.

void littlearraycopy(short (&array1)[3], short (&array2)[3]){
    for (short c=0; c<3; c++){
        array1[c] = array2[c];
    }
}

void arraycopy(short (&array1)[64], short (&array2)[64]){
    for (short c=0; c<64; c++){
        array1[c] = array2[c];
    }
}

// array delete function set all the values of an array to -1.

void delarray(short (&array)[64]){
    for (short d=0; d<64; d++){
        array[d] = -1;
    }
}

// moveslength function calculate number of possible moves.

short moveslength(short (&array)[64]){
    short moveslength = 0;
    while (array[moveslength] != -1){
        moveslength++;
    }
    return moveslength;
}

// makeBoard function initializes the game board.

void makeBoard(short (&board)[64]){
    for (short i=0; i<64; i++){
            board[i] = 0;
    }
    board[27] = board[36] = 1; // 1 for AI
    board[35] = board[28] = -1; // -1 for player
}

/* printBoard function prints a scheme of the board
    in each round of the game. */

void printBoard(short (&board)[64]){

    /* printBoard function prints X for player's blocks,
        O for AI's blocks, and - if block is empty. */
    cout << "" << endl;
    cout << "  " << "0 1 2 3 4 5 6 7" << endl;

    cout << "0 ";
    for (short i=0; i<8; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "1 ";
    for (short i=8; i<16; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "2 ";
    for (short i=16; i<24; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "3 ";
    for (short i=24; i<32; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "4 ";
    for (short i=32; i<40; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "5 ";
    for (short i=40; i<48; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "6 ";
    for (short i=48; i<56; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "7 ";
    for (short i=56; i<64; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == -1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;
    cout << "\n";
}

/* shoeValidMoves function prints valid moves of the players
    when it is their turn. */

void showValidMoves(short (&moves)[64]){
    short movesiter = 0;
    cout << "Valid Moves : ";
    while(moves[movesiter] != -1){
        /* prints each moves column and row,
            in form of (column, row) */
        cout << "(" << short(moves[movesiter] % 8)
             << ", " << short(moves[movesiter] / 8) << ") ";
        movesiter++;
    }
    cout << "." << endl;
    cout << "\n";
}

/* direction functions check if it is possible to make move to
    a particular direction for a player. each function returns 1
    if path is valid to make move, otherwise returns 0. */

short north(short (&board)[64], short position, short color){
    if ((position > 15) && (board[position - 8] == (-color))){
        for (short j=(position - 16); j>=0; j=(j-8)){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

short northeast(short (&board)[64], short position, short color){
    short limit = min((short(floor(position/8))+1),(((short(floor(position/8))+1)*8)-position));
    if ((limit > 2) && (board[position - 7] == (-color))){
        short j = (position - 7);
        for (short k=2; k<limit; k++){
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

short east(short (&board)[64], short position, short color){
    short limit = ((short(floor(position / 8)) + 1) * 8);
    if (((limit - position) > 2) && (board[position + 1] == (-color))){
        for (short j=(position + 2); j<limit; j++){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

short southeast(short (&board)[64], short position, short color){
    short limit = min((short(floor(63-position))+1),(((short(floor(position/8))+1)*8)-position));
    if ((limit > 2) && (board[position + 9] == (-color))){
        short j = (position + 9);
        for (short k=2; k<limit; k++){
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

short south(short (&board)[64], short position, short color){
    if ((position < 48) && (board[position + 8] == (-color))){
        for (short j=(position + 16); j<64; j=(j+8)){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

short southwest(short (&board)[64], short position, short color){
    short limit = min((short(floor((63-position)/8))+1),((position%8)+1));
    if ((limit > 2) && (board[position + 7] == (-color))){
        short j = (position + 7);
        for (short k=2; k<limit; k++){
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

short west(short (&board)[64], short position, short color){
    short limit = (position - (position % 8));
    if (((position - limit) >= 2) && (board[position - 1] == (-color))){
        for (short j=(position - 2); j>=limit; j--){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

short northwest(short (&board)[64], short position, short color){
    short limit = min((short(floor(position/8))+1),((position%8)+1));
    if ((limit > 2) && (board[position - 9] == (-color))){
        short j = (position - 9);
        for (short k=2; k<limit; k++){
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

short (&getMoves(short (&board)[64], short color))[64]{
    short validmoves[64];
    short iter = 0;
    for (short p=0; p<64; p++){
        if (board[p] == 0){
            if (north(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            } else if (northeast(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            } else if (east(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            } else if (southeast(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            } else if (south(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            } else if (southwest(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            } else if (west(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            } else if (northwest(board, p, color) == 1){
                validmoves[iter] = p;
                iter++;
                continue;
            }
        }
    }
    while (iter < 64){
        validmoves[iter] = -1;
        iter++;
    }
    return validmoves;
}

// changeColor function changes color of a particular block.

void changeColor(short (&board)[64], short iter, short color){
    board[iter] = color;
}

// makeMove function makes moves in possible directions.

void makeMove(short (&board)[64], short move, short color){

    board[move] = color;

    short iter = 0;
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
}

/* get Summation function evaluates the board for a particular node
    of the NegaMax's tree data structure.
    it assigns different values for different blocks of the board. */

short getSum(short (&tempboardsum)[64]){
    short sum=0;
    for (short i=0; i<64; i++){
        // corners are very valuable. (value = 24)
        // buffers are harmful. (value = -4)
        // edges are important. (value = 4)
        // other blocks have normal value. (value = 1)
        switch (i) {
            case 0: sum += (tempboardsum[i] * 24);
                    break;
            case 1: sum += (tempboardsum[i] * -4);
                    break;
            case 2: sum += (tempboardsum[i] * 4);
                    break;
            case 3: sum += (tempboardsum[i] * 4);
                    break;
            case 4: sum += (tempboardsum[i] * 4);
                    break;
            case 5: sum += (tempboardsum[i] * 4);
                    break;
            case 6: sum += (tempboardsum[i] * -4);
                    break;
            case 7: sum += (tempboardsum[i] * 24);
                    break;
            case 8: sum += (tempboardsum[i] * -4);
                    break;
            case 9: sum += (tempboardsum[i] * -4);
                    break;
            case 14: sum += (tempboardsum[i] * -4);
                     break;
            case 15: sum += (tempboardsum[i] * -4);
                     break;
            case 16: sum += (tempboardsum[i] * 4);
                     break;
            case 23: sum += (tempboardsum[i] * 4);
                     break;
            case 24: sum += (tempboardsum[i] * 4);
                     break;
            case 31: sum += (tempboardsum[i] * 4);
                     break;
            case 32: sum += (tempboardsum[i] * 4);
                     break;
            case 39: sum += (tempboardsum[i] * 4);
                     break;
            case 40: sum += (tempboardsum[i] * 4);
                     break;
            case 47: sum += (tempboardsum[i] * 4);
                     break;
            case 48: sum += (tempboardsum[i] * -4);
                     break;
            case 49: sum += (tempboardsum[i] * -4);
                     break;
            case 54: sum += (tempboardsum[i] * -4);
                     break;
            case 55: sum += (tempboardsum[i] * -4);
                     break;
            case 56: sum += (tempboardsum[i] * 24);
                     break;
            case 57: sum += (tempboardsum[i] * -4);
                     break;
            case 58: sum += (tempboardsum[i] * 4);
                     break;
            case 59: sum += (tempboardsum[i] * 4);
                     break;
            case 60: sum += (tempboardsum[i] * 4);
                     break;
            case 61: sum += (tempboardsum[i] * 4);
                     break;
            case 62: sum += (tempboardsum[i] * -4);
                     break;
            case 63: sum += (tempboardsum[i] * 24);
                     break;
            default: sum += tempboardsum[i];
                     break;
        }
    }
    return sum;
}

/* NegaMax function implements the NegaMax algorithm plus
    alpha-beta pruning for decision making of the AI.
    NegaMax is the optimized form of MiniMax algorithm. */

short NegaMax(short (&tempboard)[64], short depth, short color, short alpha, short beta){
    if (depth == 0){
        // when reaches to the last node of a branch
        return (getSum(tempboard) * color);
    }
    short negamaxmoves[64];
    arraycopy(negamaxmoves, getMoves(tempboard, color));
    short negamaxmoveslen = moveslength(negamaxmoves);
    if (negamaxmoveslen == 0){
        // when there's no possible move to make
        arraycopy(negamaxmoves, getMoves(tempboard, -color));
        negamaxmoveslen = moveslength(negamaxmoves);
        if (negamaxmoveslen == 0){
            // when game ends in a branch
            return (getSum(tempboard) * color);
        }
        short value = -NegaMax(tempboard, depth-1, -color, -alpha, -beta);
        if (value >= beta){
            return value;
        }
        if (value > alpha){
            alpha = value;
        }
    } else {
        for (short i=0; i<negamaxmoveslen; i++){
            short tempboard2[64];
            arraycopy(tempboard2, tempboard);
            makeMove(tempboard2, negamaxmoves[i], color);
            short value = -NegaMax(tempboard2, depth-1, -color, -alpha, -beta);
            arraycopy(tempboard2, tempboard);
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

short getBestMove(short (&board)[64], short (&moves)[64]){
    short depth = 1;
    short alpha = -225;
    short beta = 225;
    short color = 1;
    short bestmoves[64];
    delarray(bestmoves);
    short movesiter = 0;
    short moveslen = moveslength(moves);
    /* determining search depth considering the number of the possible
        moves, to reduce time of the search. */
    if (moveslen < 4){
        depth = 8;
    } else {
        depth = 6;
    }
    for (short i=0; i<moveslen; i++){
        short tempboard[64];
        arraycopy(tempboard, board);
        makeMove(tempboard, moves[i], color);
        short value = -NegaMax(tempboard, depth-1, -color, -alpha, -beta);
        arraycopy(tempboard, board);
        if (value >= beta){
            return moves[i];
        }
        if (value > alpha){
            alpha = value;
            delarray(bestmoves);
            movesiter = 0;
            bestmoves[movesiter] = moves[i];
            movesiter++;
        } else if (value == alpha){
            bestmoves[movesiter] = moves[i];
            movesiter++;
        }
    }
    // choosing a move randomly from best moves to be unpredictable.
    short bestmove = short(rand() % moveslength(bestmoves));
    return bestmoves[bestmove];
}

/* getScore function calculates scores of the players
    when game ends. return an array containing the code
    of the winner and scores of player and AI. */

short (&getScore(short (&board)[64]))[3]{
    short black=0;
    short white=0;
    for (short i=0; i<64; i++){
        if (board[i] == -1){
            black++;
        } else if (board[i] == 1) {
            white++;
        }
    }
    short winner = 0;
    if (black > white){
        winner = 1;
    } else if (white > black){
        winner = -1;
    }
    short scorearray[3] = {winner, black, white};
    return scorearray;
}

/* finish function is called when game ends. prints
    details and final scores. */

void finish(short (&board)[64]){
    short score[3];
    littlearraycopy(score, getScore(board));
    if (score[0] == 1){
        cout << "You Win! :)\n" <<
                    "You got " << score[1] << " scores," <<
                    "The opponent got " << score[2] << " scores." << endl;
    } else if (score[0] == -1){
        cout << "You lose! :(\n" <<
                    "You got " << score[1] << " scores," <<
                    "The opponent got " << score[2] << " scores." << endl;
    } else {
        cout << "Both players got " << score[1] << " scores." << endl;
    }
    exit(0);
}

/* Play is the main function of the game. it works till
    the end of the game. */

void play(){

    // initializing the board
    short board[64];
    makeBoard(board);

    short move = -1;
    short turn = -1;
    short moves[64];

    // loops till the game ends.
    while (true){

        arraycopy(moves, getMoves(board, turn));

        if (moveslength(moves) == 0){
            turn = -turn;
            delarray(moves);
            arraycopy(moves, getMoves(board, turn));
                if (moveslength(moves) == 0){
                    // when game ends
                    finish(board);
                }
        } else {
            printBoard(board);
            if (turn == -1){
                // when it is player's turn to make move
                showValidMoves(moves);
                short a, b;
                cin >> a >> b; // get players move
                move = ((b * 8) + a);
                short iter = 0;
                while (moves[iter] != -1){
                    if (move == moves[iter]){
                        makeMove(board, move, turn);
                        turn = -turn;
                        break;
                    }
                    iter++;
                }
            } else {
                // when it is AI's turn to make move
                move = getBestMove(board, moves);
                makeMove(board, move, turn);
                turn = -turn;
            }
        }

    }
}

int main(){

    play();

    return 0;
}
