import {useLocation, Link} from "react-router-dom";
import ExersizeCard from './exersize-card.jsx';
import BarbellCurlsImage from '../assets/BarbellCurls.png';
import './exercise.css';

export default function Exercise() {
    const location = useLocation();
    const selectedMuscle = location.state?.muscle || "No muscle selected";
    return (
        <div>
            <div className="exercise-header">
                <Link to="/" className="back-button">← Go Back</Link>
                <h1>Exercises for {selectedMuscle}</h1>
            </div>
            <div className="exercise-cards-container">
                <ExersizeCard exercise="Barbell Curl" description="A classic biceps isolation exercise focusing on elbow flexion." exerciseImage={BarbellCurlsImage} />
                <ExersizeCard exercise="Hammer Curl" description="Targets the brachialis and brachioradialis for overall arm development." exerciseImage={BarbellCurlsImage} />
                <ExersizeCard exercise="Preacher Curl" description="Isolates the biceps with strict form and reduced momentum." exerciseImage={BarbellCurlsImage} />
            </div>
        </div>
    );
}