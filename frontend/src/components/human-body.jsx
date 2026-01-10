import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import humanAnatomy from '../assets/human_anatomy.png';
import MuscleSelectButton from './muscle-select-button.jsx'
import './human-body.css';

export default function HumanBody() {
    const navigate  = useNavigate(); 
    const humanMuscles = [ { label: 'Biceps', onClick: handleClick, className:'Biceps' },
                            { label: 'Triceps', onClick: handleClick, className:'Triceps' },
                            { label: 'Shoulders', onClick: handleClick, className:'Shoulders' },
                            { label: 'Chest', onClick: handleClick, className:'Chest'  },
                            {label: 'Abdomen', onClick: handleClick, className:'Abdomen'},
                            {label: 'Quadriceps', onClick: handleClick, className:'Quadriceps'},
                            {label: 'Hamstrings', onClick: handleClick, className:'Hamstrings'},
                            { label: 'Calves', onClick: handleClick, className:'Calves'},
                            {label: 'Glutes', onClick: handleClick, className:'Glutes'},
                            { label: 'Forearms', onClick: handleClick, className:'Forearms' },
                            { label: 'Lats', onClick: handleClick, className:'Lats' },
                            { label: 'Traps', onClick: handleClick, className:'Traps' },
                            { label: 'Upper Back', onClick: handleClick, className:'UpperBack' },
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