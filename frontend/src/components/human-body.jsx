import React from 'react'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import humanAnatomy from '../assets/human_anatomy.png';
import MuscleSelectButton from './muscle-select-button.jsx'
import './human-body.css';

export default function HumanBody() {
    const navigate  = useNavigate(); 
    const [setLabel, setLabelName] = useState('');
    const humanMuscles = [ { label: 'Biceps', onClick: handleClick, className:'Biceps', onMouseEnter: () => setLabelName('Biceps'), onMouseLeave: () => setLabelName('') },
                            { label: 'Triceps', onClick: handleClick, className:'Triceps', onMouseEnter: () => setLabelName('Triceps'), onMouseLeave: () => setLabelName('') },
                            { label: 'Shoulders', onClick: handleClick, className:'Shoulders', onMouseEnter: () => setLabelName('Shoulders'), onMouseLeave: () => setLabelName('') },
                            { label: 'Chest', onClick: handleClick, className:'Chest', onMouseEnter: () => setLabelName('Chest'), onMouseLeave: () => setLabelName('') },
                            {label: 'Abdomen', onClick: handleClick, className:'Abdomen', onMouseEnter: () => setLabelName('Abdomen'), onMouseLeave: () => setLabelName('') },
                            {label: 'Quadriceps', onClick: handleClick, className:'Quadriceps', onMouseEnter: () => setLabelName('Quadriceps'), onMouseLeave: () => setLabelName('') },
                            {label: 'Hamstrings', onClick: handleClick, className:'Hamstrings', onMouseEnter: () => setLabelName('Hamstrings'), onMouseLeave: () => setLabelName('') },
                            { label: 'Calves', onClick: handleClick, className:'Calves', onMouseEnter: () => setLabelName('Calves'), onMouseLeave: () => setLabelName('') },
                            {label: 'Glutes', onClick: handleClick, className:'Glutes', onMouseEnter: () => setLabelName('Glutes'), onMouseLeave: () => setLabelName('') },
                            { label: 'Forearms', onClick: handleClick, className:'Forearms', onMouseEnter: () => setLabelName('Forearms'), onMouseLeave: () => setLabelName('') },
                            { label: 'Lats', onClick: handleClick, className:'Lats', onMouseEnter: () => setLabelName('Lats'), onMouseLeave: () => setLabelName('') },
                            { label: 'Traps', onClick: handleClick, className:'Traps', onMouseEnter: () => setLabelName('Traps'), onMouseLeave: () => setLabelName('') },
                            { label: 'Upper Back', onClick: handleClick, className:'UpperBack', onMouseEnter: () => setLabelName('Upper Back'), onMouseLeave: () => setLabelName('') },
    ]
    function handleClick(muscle) {
        navigate("/exercise", { state: { muscle: muscle.label } })
    }
    return (
        <div className="human-body-page">
        <h1 className="welcome-title">Welcome to FormMaxx</h1>
        <h2>Select a Muscle to Target: {setLabel}</h2>
            <div className="human-body-container"> 
                <img className="Human-img" src={humanAnatomy} alt="Human Body" />
                    {humanMuscles.map((muscle, index) => (
                    <MuscleSelectButton key={index} label={muscle.label} onClick={() => handleClick(muscle)} className={muscle.className}
                    onMouseEnter={() => setLabelName(muscle.label)}
                    onMouseLeave={() => setLabelName('')}
                    />
                ))}
                </div>
            </div>
    );
}