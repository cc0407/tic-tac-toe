import React from 'react';

export const Box = ({onClick, id}) => {
    return(
        <div className="box" onClick={onClick}>
            {id}
        </div>
    );
};