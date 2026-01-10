import { useNavigate } from 'react-router-dom';
import './exersize-card.css';

const ExersizeCard = ({exercise, description, exerciseImage}) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/instructions", {state: exercise})
    }
    return (
        <div className="exersize-card">
            <h3 className="exersize-title">{exercise}</h3>
            <div className="exersize-image-placeholder">
                <img src={exerciseImage} alt={exercise} />
            </div>
            <p className="exersize-description">{description}</p>
            <button className="exersize-button" onClick={() => navigate("/instructions", {state: {exercise: exercise}})}>This Exercise</button>
        </div>
    );
};

export default ExersizeCard;