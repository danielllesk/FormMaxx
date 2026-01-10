import React from 'react';

const MuscleSelectButton = ({label, onClick, className}) => {
    return (
        <button onClick={onClick} className={className}>
            {label}
        </button>
    );
};

export default MuscleSelectButton;

