import { useNavigate } from 'react-router-dom';
import { exerciseMap, getMuscleGroupByExerciseName } from './exerciseMap';
import './exersize-card.css';

const ExersizeCard = ({exercise, description, exerciseImage}) => {
    const navigate = useNavigate();
    const muscleex = {
        muscle: getMuscleGroupByExerciseName(exerciseMap, exercise),
        ex: exercise
    }
    return (
        <div className="exersize-card">
            <h3 className="exersize-title">{exercise}</h3>
            <div className="exersize-image-placeholder">
                <img src={exerciseImage} alt={exercise} />
            </div>
            <p className="exersize-description">{description}</p>
            <button className="exersize-button" onClick={() => navigate("/instructions", {state: {total: muscleex}})}>This Exercise</button>
        </div>
    );
};

export default ExersizeCard;