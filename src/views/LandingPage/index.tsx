import React, { useState } from 'react';
import { Box } from '../../components/Box';

export const Landing = () => {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const [letter, setLetter] = useState('X');
    const [gameWon, setGameWon] = useState(0);
    return (
        <div className="window">
            <div className="viewport">
                <div className="title">Welcome!</div>
                
                <div className="subtitle">{findAppropriateSentence(gameWon, letter)}</div>

                <div className="gameBoard">
                    {board.map((id, index) => (
                        <Box 
                        key={index}
                        id={id} 
                        onClick={()=>{
                            if(id == null && gameWon == 0) {
                                //update board
                                const boardCopy = [...board];
                                boardCopy[index] = letter;
                                setBoard(boardCopy);

                                //check if theres a winner
                                var won = checkForWinner(boardCopy,letter);
                                if (won != 0) {
                                    setGameWon(won);
                                    return;
                                }
                                else {
                                    //swap letter
                                    if (letter === 'X') {
                                        setLetter('O');
                                    }
                                    else {
                                        setLetter('X');
                                    }
                                } 
                            }
                        }}
                        />
                    ))}
                </div>
                <div className="confirmButton" 
                    onClick={() => {
                        setBoard([null, null, null, null, null, null, null, null, null]);
                        setLetter('X');
                        setGameWon(0);
                    }}
                >
                    New Game
                </div>
            </div>
        </div>
    )
}

function checkForWinner(board, letter) {
    var won = 0;
    //col
    for (var i = 0; i < 3; i++) {
        if(board[i] === letter && board[i+3] === letter && board[i+6] === letter) {
            won = 1;
        }
    }
    //row
    for (var i = 0; i <= 6; i += 3) {
        if(board[i] === letter && board[i+1] === letter && board[i+2] === letter) {
            won = 1;
        }
    }
    //diag
    if(board[0] === letter && board[4] === letter && board[8] === letter) {
        won = 1;
    }
    else if(board[2] === letter && board[4] === letter && board[6] === letter) {
        won = 1;
    }

    if(!board.includes(null) && won == 0) {
        won = 2;
    }
    return won;
}

function findAppropriateSentence (gameWon, letter) {
    switch (gameWon){
        case 0:
            return `Active Player: ` + letter;
        case 1:
            return `Winner: ` + letter;
        default:
            return `Draw!`
    }
}