import {useLocation, Link} from "react-router-dom";

export default function Exercise() {
    const location = useLocation();
    const selectedMuscle = location.state?.muscle || "No muscle selected";
    return (
        <div>
            <h1>Exercise Page</h1>  
            <p>Selected Muscle: {selectedMuscle}</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}