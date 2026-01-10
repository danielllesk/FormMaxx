import React from 'react';

const MuscleSelectButton = ({label, onClick, className, onMouseEnter, onMouseLeave}) => {
    return (
        <button onClick={onClick} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {label}
        </button>
    );
};

export default MuscleSelectButton;

