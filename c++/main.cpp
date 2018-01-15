#include<iostream>
using namespace std;

void makeBoard(int (&board)[64]){
    for (int i=0; i<64; i++){
            board[i] = 0;
    }
    board[27] = board[36] = -1;
    board[35] = board[28] = 1;
}

int main(){

    int board[64];
    makeBoard(board);

    return 0;
}
