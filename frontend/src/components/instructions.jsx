import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { exerciseMap, getExerciseByName } from './exerciseMap.jsx'; 

export default function Instructions() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const exercisename = location.state?.total?.ex || "No exercise selected";
    const exerciseDetails = getExerciseByName(exercisename);
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    async function handleClick() {
        const input = document.getElementById("video-input");
        const file = input?.files?.[0];

        if (!file) {
            setError("Please select a video file");
            return;
        }

        setLoading(true);
        setError(null);
        
        try {
            const exercise = {
                name: exercisename,
                description: exerciseDetails.description,
                instructions: exerciseDetails.instructions,
                target_muscles: exerciseDetails.TargetMuscles,
                plane_of_movement: exerciseDetails.PlaneOfMovement,
                alternatives: exerciseDetails.Alternatives,
                limiting_factors: exerciseDetails.LimitingFactors,
            };  
            const form = new FormData();
            form.append("exercise", JSON.stringify(exercise));
            form.append("video", file);

            const res = await fetch("https://formmaxx.onrender.com/analyze", {
                method: "POST",
                body: form,
            });

            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }

            const responseData = await res.json();
            setData(responseData);
        } catch (err) {
            setError(err.message || "Failed to analyze video");
            console.error("Error analyzing video:", err);
        } finally {
            setLoading(false);
        }
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
            <button onClick={() => handleClick()} disabled={loading}>
                {loading ? "Analyzing..." : "Submit Video"}
            </button>
            
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            
            {data && (
                <div>
                    <h3>Analysis Results</h3>
                    <p><strong>Rating:</strong> {data.rating}/10</p>
                    <p><strong>Summary:</strong> {data.summary}</p>
                    <div>
                        <strong>Feedback:</strong>
                        <ul>
                            {data.feedback?.map((fb, idx) => (
                                <li key={idx}>{fb}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <strong>Muscle Analysis:</strong>
                        <p>Correct: {data.muscle_analysis?.correct?.join(', ') || 'None'}</p>
                        <p>Underactive: {data.muscle_analysis?.underactive?.join(', ') || 'None'}</p>
                        <p>Overactive: {data.muscle_analysis?.overactive?.join(', ') || 'None'}</p>
                    </div>
                </div>
            )}
        </div>
    )
}