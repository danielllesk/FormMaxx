import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { exerciseMap, getExerciseByName } from './exerciseMap.jsx'; 

export default function Instructions() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const exercisename = location.state?.total?.ex || "No exercise selected";
    const exerciseDetails = getExerciseByName(exercisename);
    return (
        
        <div>
            <div className="instructions-header">
            <Link to="/exercise" className="back-button" onClick={() => navigate(-1)}>← Go Back</Link>
            <h1>Instructions for {exercisename}</h1>
            </div>
            <img src={exerciseDetails.image} alt={exercisename} />
            <p>{exerciseDetails.instructions}</p>
            <label htmlFor="video-input">Input Your Video</label>
            <input id="video-input" type="file" accept="video/*" />
        </div>
    )
}