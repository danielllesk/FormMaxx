import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { exerciseMap, getExerciseByName } from './exerciseMap.jsx'; 
import './instructions.css';

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
        <div className="instructions-page">
            <div className="instructions-header">
                <Link to="/exercise" className="back-button" onClick={() => navigate(-1)}>
                    ← Go Back
                </Link>
                <h1>Instructions for {exercisename}</h1>
            </div>
            
            <div className="instructions-content">
                <img src={exerciseDetails.image} alt={exercisename} />
                <p>{exerciseDetails.instructions}</p>
            </div>
            
            <div className="video-upload-section">
                <label htmlFor="video-input">Upload Your Exercise Video</label>
                <input id="video-input" type="file" accept="video/*" />
                <button onClick={() => handleClick()} disabled={loading}>
                    {loading ? "Analyzing..." : "Submit Video for Analysis"}
                </button>
            </div>
            
            {error && <p className="error-message">Error: {error}</p>}
            
            {data && (
                <div className="analysis-results">
                    <h3>Analysis Results</h3>
                    <p>
                        <strong>Rating:</strong> 
                        <span className="rating-display">{data.rating}/10</span>
                    </p>
                    <p><strong>Summary:</strong> {data.summary}</p>
                    
                    <div>
                        <strong>Feedback:</strong>
                        <ul>
                            {data.feedback?.map((fb, idx) => (
                                <li key={idx}>{fb}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="muscle-analysis-section">
                        <strong>Muscle Analysis:</strong>
                        <p><strong>Correct:</strong> {data.muscle_analysis?.correct?.join(', ') || 'None'}</p>
                        <p><strong>Underactive:</strong> {data.muscle_analysis?.underactive?.join(', ') || 'None'}</p>
                        <p><strong>Overactive:</strong> {data.muscle_analysis?.overactive?.join(', ') || 'None'}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
