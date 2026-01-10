import React from 'react';

const MuscleSelectButton = ({label, onClick}) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default MuscleSelectButton;

