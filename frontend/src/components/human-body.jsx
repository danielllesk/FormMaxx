import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import humanAnatomy from '../assets/human_anatomy.png';
import MuscleSelectButton from './muscle-select-button.jsx'
import './human-body.css';

export default function HumanBody() {
    const navigate  = useNavigate(); 
    const humanMuscles = [ { label: 'Biceps', onClick: handleClick, description: 'A classic biceps isolation exercise focusing on elbow flexion.', exerciseImage: 'barbell-curl.png'},
                            { label: 'Triceps', onClick: handleClick },
                            { label: 'Shoulders', onClick: handleClick },
                            { label: 'Chest', onClick: handleClick  },
                            {label: 'Abdomen', onClick: handleClick},
                            {label: 'Quandriceps', onClick: handleClick},
                            {label: 'Hamstrings', onClick: handleClick},
                            { label: 'Calves', onClick: handleClick},
                            {label: 'Glutes', onClick: handleClick},
                            { label: 'Forearms', onClick: handleClick },
                            { label: 'Lats', onClick: handleClick },
                            { label: 'Traps', onClick: handleClick },
                            { label: 'Upper Back', onClick: handleClick },
                            ]
    function handleClick(muscle) {
        navigate("/exercise", { state: { muscle: muscle.label } })
    }
    return (
        <div className="human-body-container"> 
            <img className="Human-img" src={humanAnatomy} alt="Human Body" />
            {humanMuscles.map((muscle, index) => (
                <MuscleSelectButton key={index} label={muscle.label} onClick={() => handleClick(muscle)} className={muscle.className}/>
            ))}
        </div>
    );
}