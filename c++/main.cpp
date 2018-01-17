#include<iostream>
#include<math.h>
#include<algorithm>
using namespace std;

void makeBoard(int (&board)[64]){
    for (int i=0; i<64; i++){
            board[i] = 0;
    }
    board[27] = board[36] = -1;
    board[35] = board[28] = 1;
}

int north(int board[], int position, int color){
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

int northeast(int board[], int position, int color){
    int limit = min((floor(position/8)+1),(((floor(position/8)+1)*8)-position));
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

int east(int board[], int position, int color){
    int limit = ((floor(position / 8) + 1) * 8);
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

int southeast(int board, int position, int color){
    int limit = min((floor(63-position)+1),(((floor(position/8)+1)*8)-position));
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

int south(int board, int position, int color){
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

int southwest(int board[], int position, int color){
    int limit = min((floor((63-position)/8)+1),((position%8)+1));
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

int west(int board[], int position, int color){
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

int northwest(int board[], int position, int color){
    int limit = min((floor(position/8)+1),((position%8)+1));
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

int main(){

    int board[64];
    makeBoard(board);

    return 0;
}
