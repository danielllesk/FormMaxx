import React from 'react'; 
import { Navigate } from 'react-router-dom';
import Muscle from './button.js'

export default function HumanBody() {
    const Navigate  = useNavigate(); 
    function handleClick() {
        Navigate('/somepath');
    }
    const humanMuscles = [ { label: 'Biceps', onClick: handleClick },
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
    return (
        <div> 
            <img src="/path/to/human-body.png" alt="Human Body" />
        </div>
    );
}