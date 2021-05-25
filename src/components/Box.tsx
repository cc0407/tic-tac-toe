import React from "react";

interface Box {
    onClick: Function;
    id: string;
    gameWon: number;
}
export const Box = ({ onClick, id, gameWon }) => {
    return (
        <div
            className={
                `box ` + (id == null && gameWon == 0 ? `empty` : `filled`)
            }
            onClick={onClick}
        >
            {id}
        </div>
    );
};
