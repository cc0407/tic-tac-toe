import React, { useState } from 'react';
import { Box } from '../../components/Box';

export const Landing = () => {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const letter = 'X';
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
                                const boardCopy = [...board];
                                boardCopy[index] = letter;
                                setBoard(boardCopy);
                            }
                        }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}