import React from 'react';

const ExersizeCard = ({exercise, description, exerciseImage}) => {
    return (
        <div className="exersize-card">
            <h3 className="exersize-title">{exercise}</h3>
            <div className="exersize-image-placeholder">
                <img src={exerciseImage} alt={exercise} />
            </div>
            <p className="exersize-description">{description}</p>
            <button className="exersize-button">This Exercise</button>
        </div>
    );
};

export default ExersizeCard;