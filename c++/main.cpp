#include<iostream>
#include<cmath>
#include<algorithm>
using namespace std;

void littlearraycopy(int (&array1)[3], int (&array2)[3]){
    for (int c=0; c<3; c++){
        array1[c] = array2[c];
    }
}

void arraycopy(int (&array1)[64], int (&array2)[64]){
    for (int c=0; c<64; c++){
        array1[c] = array2[c];
    }
}

void delarray(int (&array)[64]){
    for (int d=0; d<64; d++){
        array[d] = 0;
    }
}

int moveslength(int (&array)[64]){
    int moveslength = 0;
    while (array[moveslength] != -1){
        moveslength++;
    }
    return moveslength;
}

void makeBoard(int (&board)[64]){
    for (int i=0; i<64; i++){
            board[i] = 0;
    }
    board[27] = board[36] = -1;
    board[35] = board[28] = 1;
}

void printboard(int (&board)[64]){

    cout << "" << endl;
    cout << "  " << "0 1 2 3 4 5 6 7" << endl;

    cout << "0 ";
    for (int i=0; i<8; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "1 ";
    for (int i=8; i<16; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "2 ";
    for (int i=16; i<24; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "3 ";
    for (int i=24; i<32; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "4 ";
    for (int i=32; i<40; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "5 ";
    for (int i=40; i<48; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "6 ";
    for (int i=48; i<56; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;

    cout << "7 ";
    for (int i=56; i<64; i++){
        if (board[i] == 0){
            cout << "- ";
        } else if (board[i] == 1){
            cout << "X ";
        } else {
            cout << "O ";
        }
    }
    cout << "" << endl;
}

int north(int (&board)[64], int position, int color){
    if ((position > 15) && (board[position - 8] == (-color))){
        for (int j=(position - 16); j>=0; j=(j-8)){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

int northeast(int (&board)[64], int position, int color){
    int limit = min((int(floor(position/8))+1),(((int(floor(position/8))+1)*8)-position));
    if ((limit > 2) && (board[position - 7] == (-color))){
        int j = (position - 7);
        for (int k=2; k<limit; k++){
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

int east(int (&board)[64], int position, int color){
    int limit = ((int(floor(position / 8)) + 1) * 8);
    if (((limit - position) > 2) && (board[position + 1] == (-color))){
        for (int j=(position + 2); j<limit; j++){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

int southeast(int (&board)[64], int position, int color){
    int limit = min((int(floor(63-position))+1),(((int(floor(position/8))+1)*8)-position));
    if ((limit > 2) && (board[position + 9] == (-color))){
        int j = (position + 9);
        for (int k=2; k<limit; k++){
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

int south(int (&board)[64], int position, int color){
    if ((position < 48) && (board[position + 8] == (-color))){
        for (int j=(position + 16); j<64; j=(j+8)){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

int southwest(int (&board)[64], int position, int color){
    int limit = min((int(floor((63-position)/8))+1),((position%8)+1));
    if ((limit > 2) && (board[position + 7] == (-color))){
        int j = (position + 7);
        for (int k=2; k<limit; k++){
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

int west(int (&board)[64], int position, int color){
    int limit = (position - (position % 8));
    if (((position - limit) >= 2) && (board[position - 1] == (-color))){
        for (int j=(position - 2); j>=limit; j--){
            if (board[j] == 0){
                return 0;
            } else if (board[j] == color){
                return 1;
            }
        }
    }
    return 0;
}

int northwest(int (&board)[64], int position, int color){
    int limit = min((int(floor(position/8))+1),((position%8)+1));
    if ((limit > 2) && (board[position - 9] == (-color))){
        int j = (position - 9);
        for (int k=2; k<limit; k++){
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

int (&getMoves(int (&board)[64], int color))[64]{
    int validmoves[64];
    int iter = 0;
    for (int p=0; p<64; p++){
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

void changeColor(int (&board)[64], int iter, int color){
    board[iter] = color;
}

void makeMove(int (&board)[64], int move, int color){

    board[move] = color;

    int iter = 0;
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

int (&getScore(int (&board)[64]))[3]{
    int black=0;
    int white=0;
    for (int i=0; i<64; i++){
        if (board[i] == 1){
            black++;
        } else if (board[i] == -1) {
            white++;
        }
    }
    int winner = 0;
    if (black > white){
        winner = 1;
    } else if (white > black){
        winner = -1;
    }
    int scorearray[3] = {winner, black, white};
    return scorearray;
}

void finish(int (&board)[64]){
    int score[3];
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

void play(){

    int board[64];
    makeBoard(board);

    int move = -1;
    int turn = 1;
    int moves[64];

    while (true){

        arraycopy(moves, getMoves(board, turn));

        if (moveslength(moves) == 0){
            turn = -turn;
            delarray(moves);
            arraycopy(moves, getMoves(board, turn));
                if (moveslength(moves) == 0){
                    finish(board);
                }
        } else {
            printboard(board);
            if (turn == 1){
                int a, b;
                cin >> a >> b;
                move = ((b * 8) + a);
                int iter = 0;
                while (moves[iter] != -1){
                    if (move == moves[iter]){
                        makeMove(board, move, turn);
                        turn = -turn;
                        break;
                    }
                    iter++;
                }
            } else {
                move = moves[0];
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
