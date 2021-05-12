import React from 'react';

export const Box = ({onClick, id}) => {
    return(
        <div className={`box ` + (id == null ? `empty` : `filled`)} onClick={onClick}>
            {id}
        </div>
    );
};