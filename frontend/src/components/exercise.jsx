import {useLocation, Link} from "react-router-dom";
import ExersizeCard from './exersize-card.jsx';
import { getExercisesForMuscle } from './exerciseMap.jsx';
import './exercise.css';

export default function Exercise() {
    const location = useLocation();
    const selectedMuscle = location.state?.muscle || "No muscle selected";

    const exercises = getExercisesForMuscle(selectedMuscle);
    return (
        <div className="exercise-page">
            <div className="exercise-header">
                <Link to="/" className="back-button">Go Back</Link>
                <h1>Exercises for {selectedMuscle}</h1>
            </div>
            <div className="exercise-cards-container">
                {exercises.length > 0 ? (exercises.map((exercise, index) => (
                        <ExersizeCard 
                            key={index}
                            exercise={exercise.name}
                            description={exercise.description}
                            exerciseImage={exercise.image}
                        />
                    ))
                ) : (
                    <p style={{color: 'white', textAlign: 'center', width: '100%'}}>
                        No exercises found for {selectedMuscle}
                    </p>
                )}
            </div>
        </div>
    );
}