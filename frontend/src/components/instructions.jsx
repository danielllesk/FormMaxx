import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { exerciseMap } from './exerciseMap.jsx'; 

export default function Instructions() {
    const location = useLocation();
    const exercisename = location.state?.exercise || "No exercise selected";
    return (
        
        <div>
            <div className="instructions-header">
            <Link to="/exercise" className="back-button">← Go Back</Link>
            <h1>Instructions for {exercisename}</h1>
            </div>
            <img src={exerciseMap[exercisename]?.image} alt={exercisename} />
            <p>{exerciseMap[exercisename]?.instructions}</p>
            <label htmlFor="video-input">Input Your Form Video</label>
            <input id="video-input" type="file" accept="video/*" />
        </div>
    )
}