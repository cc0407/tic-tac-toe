import React from 'react';
import { Box } from '../../components/Box';

const board = [null, null, null, null, null, null, null, null, null];

export const Landing = () => {
    return (
        <div className="window">
            <div className="viewport">
                <div className="title">Welcome!</div>
                <div className="gameBoard">
                    {board.map((id, index) => (
                        <Box id={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
