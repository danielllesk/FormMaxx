import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { exerciseMap, getExerciseByName } from './exerciseMap.jsx'; 

export default function Instructions() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const exercisename = location.state?.total?.ex || "No exercise selected";
    const exerciseDetails = getExerciseByName(exercisename);
    async function handleClick() {
        const input = document.getElementById("video-input");
        const file = input?.files?.[0];

        const metadata = {
            name: exercisename,
            descriptions: exerciseDetails.description,
            instructions: exerciseDetails.instructions,
            target_muscles: exerciseDetails.TargetMuscles,
            plane_of_movement: exerciseDetails.PlaneOfMovement,
            alternatives: exerciseDetails.Alternatives,
            limiting_factors: exerciseDetails.LimitingFactors,
        };  
        const form = new FormData();
        form.append("metadata", JSON.stringify(metadata));
        if (file) form.append("video", file);

        const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: form,
    });

    const data = await res.json();
}
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
            <button onClick= {() => handleClick()}>Submit Video</button>
            <p> Feedback: {data?.feedback || "No feedback yet."}</p>
        </div>
    )
}