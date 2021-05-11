import React, { useState } from 'react';
import { Box } from '../../components/Box';

export const Landing = () => {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const [letter, setLetter] = useState('X');
    const [gameWon, setGameWon] = useState(false);
    return (
        <div className="window">
            <div className="viewport">
                <div className="title">Welcome!</div>
                <div>Active player: {letter}</div>
                <div className="gameBoard">
                    {board.map((id, index) => (
                        <Box 
                        key={index}
                        id={id} 
                        onClick={()=>{
                            if(id == null) {
                                //update board
                                const boardCopy = [...board];
                                boardCopy[index] = letter;
                                setBoard(boardCopy);

                                //check if theres a winner


                                //swap letter
                                if (letter == 'X') {
                                    setLetter('O');
                                }
                                else {
                                    setLetter('X');
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
                        setGameWon(false);
                    }}
                >
                    New Game
                </div>
            </div>
        </div>
    )
}