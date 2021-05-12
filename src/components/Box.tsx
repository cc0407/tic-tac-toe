import React from 'react';

export const Box = ({onClick, id, gameWon}) => {
    return(
        <div className={`box ` + ((id == null && gameWon == 0) ? `empty` : `filled`)} onClick={onClick}>
            {id}
        </div>
    );
};