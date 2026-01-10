import React from 'react';
import Product from './Product';

const Button({ onClick, muscle }) {
    return (
        <button type='submit' onClick={onClick}>
            {muscle.label}
        </button>
    );
}

export default Button;