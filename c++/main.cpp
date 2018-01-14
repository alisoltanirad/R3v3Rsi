#include<iostream>
using namespace std;

void makeBoard(int (&board)[8][8]){
    for (int i=0; i<8; i++){
        for (int j=0; j<8; j++){
            board[i][j] = 0;
        }
    }
    board[3][3] = board[4][4] = 1;
    board[3][4] = board[4][3] = -1;
}

int main(){

    int board[8][8];
    makeBoard(board);

    return 0;
}
