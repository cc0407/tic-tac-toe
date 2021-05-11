import React, { useState } from 'react';
import { Box } from '../../components/Box';

export const Landing = () => {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    return (
        <div className="window">
            <div className="viewport">
                <div className="title">Welcome!</div>
                <div className="gameBoard">
                    {board.map((id, index) => (
                        <Box 
                        id={index} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}